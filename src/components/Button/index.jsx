import style from "./button.module.css";
import PropTypes from "prop-types";

const Button = ({ children, type = "default", action }) => {
  const dynamicClassName = style[type] || style.default;

  return (
    <button 
      className={dynamicClassName}
      onClick={action}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  action: PropTypes.func
};

export default Button;