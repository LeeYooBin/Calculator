import PropTypes from "prop-types";
import style from "./title.module.css";

const Title = ({ children }) => <h1 className={style.content}>{children}</h1>

Title.propTypes = {
    children: PropTypes.node
};
  
export default Title;