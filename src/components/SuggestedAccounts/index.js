import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./SuggestedAccounts.module.scss";
import AccountItem from "./AccountItem";

function SuggestedAccounts({ label }) {
    return (
        <div className={clsx(styles.wrapper)}>
            <p className={clsx(styles.label)}>{label}</p>

            <AccountItem />
            <AccountItem />
            <AccountItem />

            <p className={clsx(styles["more-btn"])}>See all</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
