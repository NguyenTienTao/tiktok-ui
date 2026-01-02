import clsx from "clsx";
import styles from "./Popper.module.scss";

function PopperWrapper({ children }) {
    return <div className={clsx(styles.wrapper)}>{children}</div>;
}

export default PopperWrapper;
