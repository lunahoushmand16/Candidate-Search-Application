import { Link } from 'react-router-dom';

const Nav = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    
      <nav className="nav">
      <ul className="nav-list">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/savedcandidates" className="nav-link">Potential Candidates</Link></li>
      </ul>
    </nav>
    
  );
};

export default Nav;

