import { Link, useLocation, useParams } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="flex justify-between items-center sm:py-6 sm:px-10 p-3 bg-(--c2) ">
      <Link to="/" className="font-medium sm:text-2xl text-lg">
        MediaSearch
      </Link>
      <div className="flex sm:gap-5 gap-3 my-0.5 sm:my-0  items-center">
        {location.pathname == "/collection" ? (
          <Link
            className="text-sm sm:text-base font-medium active:scale-95 bg-(--c4) text-(--c1) rounded px-3 sm:px-4 py-2"
            to="/"
          >
            Search
          </Link>
        ) : (
          <Link
            className="text-sm sm:text-base font-medium active:scale-95 bg-(--c4) text-(--c1) rounded px-2 sm:px-4 py-2"
            to="/collection"
          >
            Collection
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
