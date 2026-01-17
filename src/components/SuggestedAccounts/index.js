import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./SuggestedAccounts.module.scss";
import AccountItem from "./AccountItem";

function SuggestedAccounts({ label, data, showPreview = false }) {
    return (
        <div className={clsx(styles.wrapper)}>
            <p className={clsx(styles.label)}>{label}</p>

            {data.map((dataItem) => {
                return (
                    <AccountItem
                        key={dataItem.id}
                        item={dataItem}
                        showPreview={showPreview}
                    />
                );
            })}

            <p className={clsx(styles["more-btn"])}>See all</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
