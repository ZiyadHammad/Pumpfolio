import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="w-full p-4">
      <Link to='/' className='flex items-center gap-2'>
       <FontAwesomeIcon icon={faDumbbell} bounce style={{color: "#23f207",}} />
        <h1 className='text-black font-semibold'>pumpfolio.</h1>
      </Link>
    </nav>
  )
}

export default Navbar