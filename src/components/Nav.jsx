import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();

  return (
    <div
      className={`${
        location.pathname == "/" ? "absolute" : ""
      } z-50 font-josefin-sans w-full flex justify-center border-b border-white/5 py-10`}
    >
      <div className="max-w-7xl px-10 w-full flex justify-between items-center">
        <Link className="text-4xl font-bold" to="/">
          Milpitas TSA
        </Link>
        <div className="flex justify-between gap-10">
          <Link className="text-lg" to="about-us">
            About Us / Competition Results
          </Link>
          <Link className="text-lg" to="resources">
            Resources / Contact
          </Link>
          <a className="text-lg">Join</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
