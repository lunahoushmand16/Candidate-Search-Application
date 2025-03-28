import { useEffect, useState } from 'react';
import type Candidate from '../interfaces/Candidate.interface';

// TODO: Load, search, sort and display saved GitHub candidates
const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  // Bonus: Filter inputs
  const [locationFilter, setLocationFilter] = useState('');
  const [companyFilter, setCompanyFilter] = useState('');

  // * Load saved candidates from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('acceptedCandidates');
    if (stored) {
      setSavedCandidates(JSON.parse(stored));
    }
  }, []);

  // * Remove candidate from saved list
  const handleRemove = (login: string) => {
    const updated = savedCandidates.filter((candidate) => candidate.login !== login);
    setSavedCandidates(updated);
    localStorage.setItem('acceptedCandidates', JSON.stringify(updated));
  };

  // * Apply search and sort logic
  const filteredAndSorted = savedCandidates
  .filter((candidate) => {
    const nameMatch = candidate.name?.toLowerCase().includes(searchQuery.toLowerCase());
    const loginMatch = candidate.login?.toLowerCase().includes(searchQuery.toLowerCase());
    const locationMatch = candidate.location?.toLowerCase().includes(locationFilter.toLowerCase());
    const companyMatch = candidate.company?.toLowerCase().includes(companyFilter.toLowerCase());

    return (
      (!searchQuery || nameMatch || loginMatch) &&
      (!locationFilter || locationMatch) &&
      (!companyFilter || companyMatch)
    );
    })
    .sort((a, b) => {
      const nameA = a.name || '';
      const nameB = b.name || '';
      return sortOrder === 'asc'
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });

    if (savedCandidates.length === 0) {
      return <h2 style={{ color: 'white' }}>No candidates have been accepted yet.</h2>;
  }

  return (
    <section>
      <h1 style={{ color: 'white' }}>Potential Candidates</h1>

      {/* ✅ Filter + Search + Sort Controls */}
      <div style={{ marginBottom: '1rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {/* 🔍 General name/login search */}
        <input
          type="text"
          placeholder="Search by name or username"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{ padding: '0.5rem' }}
        />

        {/* 🌍 Filter by location */}
        <input
          type="text"
          placeholder="Filter by location"
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          style={{ padding: '0.5rem' }}
        />

        {/* 🏢 Filter by company */}
        <input
          type="text"
          placeholder="Filter by company"
          value={companyFilter}
          onChange={(e) => setCompanyFilter(e.target.value)}
          style={{ padding: '0.5rem' }}
        />

        {/* 🔤 Sort order */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
          style={{ padding: '0.5rem' }}
        >
          <option value="asc">Sort A → Z</option>
          <option value="desc">Sort Z → A</option>
        </select>
      </div>

      {/* ✅ Candidate Table */}
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Location</th>
            <th>Email</th>
            <th>Company</th>
            <th>Bio</th>
            <th>Reject</th>
          </tr>
        </thead>
        <tbody>
          {filteredAndSorted.map((candidate) => (
            <tr key={candidate.login}>
              <td>
                <img src={candidate.avatar_url} alt={candidate.login} width="50" />
              </td>
              <td>
                {candidate.name} (<em>{candidate.login}</em>)
              </td>
              <td>{candidate.location || 'N/A'}</td>
              <td>{candidate.email || 'N/A'}</td>
              <td>{candidate.company || 'N/A'}</td>
              <td>{candidate.bio || 'Bio not available'}</td>
              <td>
                <button onClick={() => handleRemove(candidate.login)} className="reject">
                  ➖
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default SavedCandidates;
