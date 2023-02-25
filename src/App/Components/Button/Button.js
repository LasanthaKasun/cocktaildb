const Button = ({ title, icon, onPress }) => {
  return (
    <button
      class="bg-blue-300 hover:bg-blue-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center gap-2"
      onClick={onPress}
    >
      <img src={icon} alt="refresh" width="25" />
      <span>{title}</span>
    </button>
  );
};

export default Button;
