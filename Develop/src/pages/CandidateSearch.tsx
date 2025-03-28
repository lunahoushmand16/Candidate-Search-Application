import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate  from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch and build candidate list
  useEffect(() => {
    const fetchCandidates = async () => {
      const users = await searchGithub();
      const detailedCandidates: Candidate[] = [];

      for (const user of users) {
        try {
          const details = await searchGithubUser(user.login);
          detailedCandidates.push(details);
        } catch (error) {
          // The GitHub API returned a list of users using endpoint which Some of those user objects no longer exist
          // and this function help with that
          if (error instanceof Error) {
            console.error(`Skipping user ${user.login}:`, error.message);
          } else {
            console.error(`Skipping user ${user.login}:`, error);
          }
        }
      }      

      setCandidates(detailedCandidates);
    };

    fetchCandidates();
  }, []);
  // * Accept current candidate and save to localStorage
  const handleAccept = () => {
    const accepted = JSON.parse(localStorage.getItem('acceptedCandidates') || '[]');
    accepted.push(candidates[currentIndex]);
    localStorage.setItem('acceptedCandidates', JSON.stringify(accepted));
    setCurrentIndex((prev) => prev + 1);
  };
  // * Skip current candidate
  const handleReject = () => {
    setCurrentIndex((prev) => prev + 1);
  };
  // * Loading or empty state
  if (candidates.length === 0) {
    return <h2>Loading candidates...</h2>;
  }

  if (currentIndex >= candidates.length) {
    return <h2>No more candidates to review!</h2>;
  }

  const candidate = candidates[currentIndex];

  return (
    <section style={{ textAlign: 'center', color: '#E0E1DD' }}>
      <h1>Candidate Search</h1>
      <div style={{ background: '#000', padding: '1rem', borderRadius: '1rem', display: 'inline-block' }}>
        <img src={candidate.avatar_url} alt={candidate.login} width="150" style={{ borderRadius: '1rem' }} />
        <h2>
          {candidate.name} (<em>{candidate.login}</em>)
        </h2>
        <p>Location: {candidate.location || 'N/A'}</p>
        <p>Email: {candidate.email || 'N/A'}</p>
        <p>Company: {candidate.company || 'N/A'}</p>
        <p>
          Profile: <a href={candidate.html_url} target="_blank" rel="noreferrer">{candidate.html_url}</a>
        </p>
      </div>
      <div style={{ marginTop: '1rem' }}>
       <button onClick={handleReject} className="reject-btn">➖</button>
       <button onClick={handleAccept} className="save-btn">➕</button>
      </div>
    </section>
  );
};

export default CandidateSearch;
