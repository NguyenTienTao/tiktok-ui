import clsx from "clsx";
import styles from "./Header.module.scss";
import { ReactComponent as Logo } from "../../../../assets/images/logo.svg";

function Header() {
    return (
        <header className={styles.wrapper}>
            <div className={styles.inner}>
                <div>
                    <Logo />
                </div>
            </div>
        </header>
    );
}

export default Header;
