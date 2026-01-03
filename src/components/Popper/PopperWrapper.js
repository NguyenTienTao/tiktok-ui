import clsx from "clsx";
import styles from "./Popper.module.scss";

function PopperWrapper({ children, className }) {
    return <div className={clsx(styles.wrapper, className)}>{children}</div>;
}

export default PopperWrapper;
