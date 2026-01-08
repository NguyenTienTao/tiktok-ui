import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router";
import styles from "./Button.module.scss";

function Button({
    children,
    primary = false,
    outline = false,
    text = false,
    size,
    disabled,
    rounded = false,
    className,
    leftIcon,
    rightIcon,
    to,
    href,
    onClick,
    ...passProps
}) {
    let Comp = "button";

    const props = {
        onClick,
        ...passProps,
    };

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith("on") && typeof props[key] === "function") {
                delete props[key];
            }
        });
    }

    if (href) {
        Comp = "a";
        props.href = href;
    } else if (to) {
        Comp = Link;
        props.to = to;
    }

    const classes = clsx(styles.wrapper, {
        [styles.primary]: primary,
        [styles.outline]: outline,
        [styles.disabled]: disabled,
        [styles.rounded]: rounded,
        [styles.small]: size === "small",
        [styles.large]: size === "large",
        [className]: className,
        [styles.text]: text,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
            <span className={styles.title}>{children}</span>
            {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    size: PropTypes.oneOf(["small", "large"]),
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
