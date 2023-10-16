import React from 'react'
import { Link} from 'react-router-dom'

const Navbar = ({isAuth, signUserOut}) => {

  return (
    <nav>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/createpost'>Create Post</Link>
        {!isAuth ? <Link to='/login'>Login</Link>: <button id="logOut" onClick={signUserOut}>Log Out</button>}
      </div>
    </nav>
  )
}

export default Navbar