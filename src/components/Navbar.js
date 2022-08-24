import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [click, setClick] = useState(false);
  return (
    <div>
    <nav className='navbar'>
        <div className='navbar-container'>
        <Link to="/" className='bar-logo'>
            TRVL <i className='fab fa-typo3'></i>
        </Link>
        <div className='menu-icon'>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar
