import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./Popper.module.scss";

function PopperWrapper({ children, className }) {
    return <div className={clsx(styles.wrapper, className)}>{children}</div>;
}

PopperWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default PopperWrapper;
