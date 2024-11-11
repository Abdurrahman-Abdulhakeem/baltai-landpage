const Button = ({ children, classNames, ...rest }) => {
  return (
    <button
      className={` px-3 py-3 md:px-6 rounded-sm hover:brightness-75 transition duration-300 text-base md:text-lg cursor-pointer ${
        classNames || ""
      }`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
