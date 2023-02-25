import React from "react";
import PropTypes from 'prop-types';

const Button = ({ title, icon, onPress }) => {
  return (
    <button
      data-testid="actionBtn"
      className="bg-blue-300 hover:bg-blue-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center gap-2 justify-center"
      onClick={onPress}
    >
      <img src={icon} alt="refresh" width="25" />
      <span className="sm:hidden md:visible lg:visible">{title}</span>
    </button>
  );
};

Button.defaultProps = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
}

export default Button;
