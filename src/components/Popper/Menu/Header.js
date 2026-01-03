import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Menu.module.scss";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function Header({ title, onBack }) {
    return (
        <header className={styles["menu-header"]}>
            <button className={styles.back} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={styles["header-title"]}>{title}</h4>
        </header>
    );
}

export default Header;
