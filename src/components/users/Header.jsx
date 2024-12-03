import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 sticky top-0 left-0 h-[70px] w-full bg-white">
      <h3 className="uppercase text-xl font-bold">Logo</h3>

      <ul className="flex items-center gap-x-8">
        <li>
          <NavLink to="/user/">Home page</NavLink>
        </li>
        <li>
          <NavLink to="/user/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/user/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/user/portfolio">Portfolio</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
