import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./SuggestedAccounts.module.scss";

function AccountItem() {
    return (
        <div className={clsx(styles["account-item"])}>
            <img
                className={clsx(styles["account-avatar"])}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/497787296cac60e8b840d094a8ae057d~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=fcaf397e&x-expires=1768816800&x-signature=8cINOfcLfFi6q%2Bax%2F3P4dx9s4VU%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                alt=""
            />
            <div className={clsx(styles["account-info"])}>
                <div className={clsx(styles["account-name"])}>
                    NguyenVanA
                    {true && (
                        <FontAwesomeIcon
                            className={clsx(styles["tick-icon"])}
                            icon={faCheckCircle}
                        />
                    )}
                </div>
                <p className={clsx(styles["account-username"])}>Username</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
