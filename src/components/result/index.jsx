import style from "./result.module.css";
import PropTypes from "prop-types";

const Result = ({ children }) => (
  <div className={style.content}>
    <p className={style.text}>{children}</p>;
  </div>
);

Result.propTypes = {
  children: PropTypes.node,
};


export default Result;