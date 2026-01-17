import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./AccountPreview.module.scss";
import Button from "../../Button";

function AccountPreview({ data }) {
    return (
        <>
            <div className={clsx(styles.top)}>
                <img
                    className={clsx(styles.avatar)}
                    src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/497787296cac60e8b840d094a8ae057d~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=fcaf397e&x-expires=1768816800&x-signature=8cINOfcLfFi6q%2Bax%2F3P4dx9s4VU%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                    alt={data.name}
                />
                <Button primary className={clsx(styles.btn)}>
                    Follow
                </Button>
            </div>
            <div className={clsx(styles.body)}>
                <div className={clsx(styles["account-name"])}>
                    {data.name}
                    {data.tick && (
                        <FontAwesomeIcon
                            className={clsx(styles["tick-icon"])}
                            icon={faCheckCircle}
                        />
                    )}
                </div>
                <p className={clsx(styles["account-username"])}>
                    {data.username}
                </p>
            </div>
            <p className={clsx(styles.bottom)}>
                <strong className={clsx(styles.count)}>
                    {data.followers}{" "}
                </strong>
                <span className={clsx(styles.label)}>Followers</span>
                <strong className={clsx(styles.count)}>{data.likes} </strong>
                <span className={clsx(styles.label)}>Likes</span>
            </p>
        </>
    );
}

AccountPreview.propTypes = {
    data: PropTypes.object.isRequired,
};

export default AccountPreview;
