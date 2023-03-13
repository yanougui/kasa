import { Link } from 'react-router-dom';
function Navbar() {
  return (
        <nav className='nav-header'>
          <Link to="/" className='nav-header_link-home'>Acceuil</Link>
          <Link to="/about" className='nav-header_link-about'> A propos</Link>
           
        </nav>
        
  );
} 
 export default Navbar
