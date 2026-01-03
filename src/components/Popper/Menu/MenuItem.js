import Button from "../../Button";
import styles from "./Menu.module.scss";

function MenuItem({ data, onNext }) {
    return (
        <Button
            className={styles["menu-item"]}
            to={data.to}
            leftIcon={data.icon}
            onClick={() => onNext(data)}
        >
            {data.title}
        </Button>
    );
}

export default MenuItem;
