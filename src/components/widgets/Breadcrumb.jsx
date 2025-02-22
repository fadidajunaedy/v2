import { MdArrowBack } from "react-icons/md";
import { TbArrowBackUp } from "react-icons/tb";
import { useLocation, Link } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const pathBefore = pathnames.slice(0, -1);

  return (
    <div className="breadcrumb mb-2">
      <div className="flex items-center gap-2">
        <Link
          to={`${
            pathBefore.length > 0 ? pathBefore.map((path) => "/" + path) : "/"
          }`}
          className="bg-dark-2 hover:text-white flex items-center gap-2 py-1 px-2 rounded-xl"
        >
          <TbArrowBackUp size={24} />
          {pathBefore.map((path) =>
            path
              .split("-")
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join(" ")
          )}
        </Link>
      </div>
    </div>
  );
};

export default Breadcrumb;
