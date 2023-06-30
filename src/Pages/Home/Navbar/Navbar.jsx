import "./Navbar.css";
const Navbar = () => {
  const navItems = (
    <>
      <li className="mx-2 btn btn-ghost rounded-3xl li-style">
        <a className="lg:p-2 rounded-3xl" href="#about-me"><button>About Me</button></a>
      </li>
      <li className="mx-2 btn btn-ghost rounded-3xl li-style">
        <a className="lg:p-2 rounded-3xl" href="#skills">Skills</a>
      </li>
      <li className="mx-2 btn btn-ghost rounded-3xl li-style">
        <a className="lg:p-2 rounded-3xl" href="#projects">Projects</a>
      </li>
    </>
  );

  return (
    <div className="flex justify-center">
      <div className="navbar-style navbar bg-white rounded-3xl shadow-2xl  w-4/5 ">
        <div className="navbar-start">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-5 z-[1] p-2 shadow-2xl bg-base-100 rounded-2xl w-36"
            >
              {navItems}
            </ul>
          </div>
          <a href="/" className="mx-5 name-style">Mubasshir</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <a href="#contact"> 
            <button className=" gradient-background mx-5 btn btn-sm rounded-full md:btn md:rounded-full li-style">
              Contact{" "}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
