import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import { AuthContext } from '../AuthProvider';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, userLogOut } = useContext(AuthContext);

  const HandleLogout = () => {
    userLogOut()
      .then(result => {
        console.log('Successfully logged out', result)
      })
      .catch(error =>
        console.log("ERROR", error)
      )
  }

  const links = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Bus Schedule", path: "/busSchedule" },
    { name: "Faculty Members", path: "/faculty/cse" },
  
  ];

  // Scroll listener to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gradient-to-r from-[#023020] to-[#034830] shadow-md' : 'bg-transparent'
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center">
          <img
            className="w-8 h-8 lg:w-[68px] lg:h-[68px]"
            src="https://www.lus.ac.bd/wp-content/themes/lu-main/img/logo-white.png"
            alt="leading university"
          />
          <img
            className="h-6 lg:h-12"
            src="https://www.lus.ac.bd/wp-content/themes/lu-main/img/label-white.png"
            alt="promise to leave"
          />
        </Link>

        {/* Center Menu - Desktop */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          {links.map(link => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="text-white/90 text-md hover:text-blue-400 transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
          {
            user && user?.email ?
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={user?.photoURL} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                  <Link to={'/studentPortal'}>
                    <li>
                      <a className="justify-between">
                        Student Portal
                        <span className="badge">New</span>
                      </a>
                    </li>
                  </Link>
                  <li><a>Settings</a></li>
                  <li onClick={HandleLogout}><a>Logout</a></li>
                </ul>
              </div>
              :
              <Link to={'/login'}>
                <button className='btn text-[#455A64] px-4 py-2 rounded-2xl bg-white'>Login</button>
              </Link>
          }

        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-white">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 bg-[#455A64] text-white space-y-2">
          <Link to={'/login'}>
            <button className='btn text-[#455A64] md:px-4 md:py-2 md:rounded-2xl bg-white'>Login</button>
          </Link>
          <ul className="space-y-2 font-medium">
            {links.map(link => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className="block hover:text-blue-400"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

        </div>
      )}
    </header>
  );
};

export default Navbar;
