import React from "react";
import { useNavigate } from "react-router";
import { logo } from "../../Assert/Images";
import PropTypes from "prop-types";

const SlideBar = ({ data, count }) => {
  const navigation = useNavigate();
  return (
    <aside
      className="w-60 -translate-x-48 fixed transition transform ease-in-out duration-1000 z-50 flex h-screen bg-[#1E293B]"
      data-testid="slidebar"
    >
      <div className="-right-6 transition transform ease-in-out duration-500 flex border-4 border-white dark:border-[#0F172A] bg-[#1E293B] dark:hover:bg-blue-500 hover:bg-purple-500 absolute top-2 p-3 rounded-full text-white hover:rotate-45">
        <img className="w-5 object-cover" src={logo} alt="logo" />
      </div>
      <div className="mini mt-20 flex flex-col space-y-2 w-full h-[calc(100vh)]">
        {data.map((menu) => (
          <div
            key={menu.id}
            onClick={() => navigation(menu.path)}
            className="hover:ml-4 justify-end pr-5 w-full bg-[#1E293B] p-4 rounded-full transform ease-in-out duration-300 flex"
          >
            {menu.tag && count > 0 && (
              <div className="bg-red-500 text-white absolute rounded-full h-5 w-5 right-1 top-1 flex justify-center items-center font-bold text-xs">
                {count}
              </div>
            )}
            <img className="mr-[-6px]" src={menu.icon} alt="icon" />
          </div>
        ))}
      </div>
    </aside>
  );
};

SlideBar.defaultProps = {
  data: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
};

export default SlideBar;
