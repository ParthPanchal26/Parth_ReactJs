import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul style={{ display: 'flex', justifyContent: 'space-around', listStyle: 'none', gap: '3rem' }}>
        <li>
          <NavLink 
            to="/create" 
            style={({ isActive }) => ({ color: isActive ? 'white' : 'magenta' })}
          >
            Create Name
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/read" 
            style={({ isActive }) => ({ color: isActive ? 'white' : 'magenta' })}
          >
            Read Name
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/update" 
            style={({ isActive }) => ({ color: isActive ? 'white' : 'magenta' })}
          >
            Update Name
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/delete" 
            style={({ isActive }) => ({ color: isActive ? 'white' : 'magenta' })}
          >
            Delete Name
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;