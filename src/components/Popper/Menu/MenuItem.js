import Button from "../../Button";
import styles from "./Menu.module.scss";

function MenuItem({ data }) {
    return (
        <Button className={styles["menu-item"]} leftIcon={data.icon}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
