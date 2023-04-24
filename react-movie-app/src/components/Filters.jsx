import requests from "../utils/requests";
import { useNavigate } from "react-router-dom";

const Filters = () => {
  const navigate = useNavigate();
  return (
    <nav className="relative">
      <div className="flex px-10 text-2xl sm:px-20 space-x-10 sm:space-x-20 whitespace-nowrap overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => {
          return (
            <h2
              className="cursor-pointer hover:scale-125 hover:text-white "
              onClick={() => navigate(`/?genre=${key}`)}
            >
              {title}
            </h2>
          );
        })}
      </div>
    </nav>
  );
};

export default Filters;
