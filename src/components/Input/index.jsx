import PropTypes from "prop-types";
import style from "./input.module.css";

const Input = ({ action, value }) => (
  <input 
    type="text" 
    onChange={action} 
    value={value} 
    className={style.content}
  />
);

Input.propTypes = {
  action: PropTypes.func,
  value: PropTypes.string,
};

export default Input;