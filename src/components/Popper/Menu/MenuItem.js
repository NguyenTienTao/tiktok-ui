import clsx from "clsx";
import Button from "../../Button";
import styles from "./Menu.module.scss";

function MenuItem({ data, onNext }) {
    return (
        <Button
            className={clsx(
                styles["menu-item"],
                data.separate && styles["separate"]
            )}
            to={data.to}
            leftIcon={data.icon}
            onClick={() => onNext(data)}
        >
            {data.title}
        </Button>
    );
}

export default MenuItem;
