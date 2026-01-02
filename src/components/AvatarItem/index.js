import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./AvatarItem.module.scss";

function AvatarItem() {
    return (
        <div className={styles.wrapper}>
            <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
                className={styles.avatar}
            />
            <div className={styles.info}>
                <p className={styles.name}>
                    <span>User name</span>
                    <FontAwesomeIcon
                        className={styles.check}
                        icon={faCheckCircle}
                    />
                </p>
                <span className={styles.username}>@username</span>
            </div>
        </div>
    );
}

export default AvatarItem;
