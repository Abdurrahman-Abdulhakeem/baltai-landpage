const Button = ({ children, classNames, ...rest }) => {
  return (
    <button
      className={`py-3 px-6 rounded-sm hover:brightness-75 transition duration-300 text-lg cursor-pointer ${
        classNames || ""
      }`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
