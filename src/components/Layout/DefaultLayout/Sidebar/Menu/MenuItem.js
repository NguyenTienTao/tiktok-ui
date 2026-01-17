import clsx from "clsx";
import PropTypes from "prop-types";
import { NavLink } from "react-router";
import styles from "./Menu.module.scss";

function MenuItem({ title, to, icon }) {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => {
                return clsx(styles["menu-item"], {
                    [styles["active"]]: isActive,
                });
            }}
        >
            <span className={clsx(styles.icon)}>{icon}</span>
            <span className={clsx(styles.title)}>{title}</span>
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};

export default MenuItem;
