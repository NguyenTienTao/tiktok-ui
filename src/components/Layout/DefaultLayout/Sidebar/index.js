import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faUserGroup,
    faVideo,
} from "@fortawesome/free-solid-svg-icons";

import config from "../../../../config";
import Menu from "./Menu";
import MenuItem from "./Menu/MenuItem";
import styles from "./Sidebar.module.scss";
import SuggestedAccounts from "../../../SuggestedAccounts";
import clsx from "clsx";

const suggestAccount = [
    {
        id: 1,
        name: "Tientao",
        username: "taotien2k4",
        tick: true,
        followers: "10M",
        likes: "500M",
    },
    {
        id: 2,
        name: "hungkon",
        username: "ngvanhung23",
        tick: false,
        followers: "1M",
        likes: "34.8M",
    },
    {
        id: 3,
        name: "trungson09",
        username: "trungsonnnnn",
        tick: true,
        followers: "2.34M",
        likes: "99.9M",
    },
];

const followAccount = [
    {
        id: 4,
        name: "aaaaaaa",
        username: "ccccc2k4",
        tick: true,
        followers: "10M",
        likes: "500M",
    },
    {
        id: 5,
        name: "phatla",
        username: "goilsosa",
        tick: false,
        followers: "1M",
        likes: "34.8M",
    },
    {
        id: 6,
        name: "hahaha",
        username: "cr4545k4lmlm",
        tick: true,
        followers: "2.34M",
        likes: "99.9M",
    },
];

function SideBar() {
    return (
        <aside className={styles.inner}>
            <Menu>
                <MenuItem
                    title="For you"
                    to={config.routes.home}
                    icon={<FontAwesomeIcon icon={faHouse} />}
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<FontAwesomeIcon icon={faUserGroup} />}
                />
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<FontAwesomeIcon icon={faVideo} />}
                />
            </Menu>

            <div className={clsx(styles.separate)}></div>

            <SuggestedAccounts
                label="Suggested accounts"
                data={suggestAccount}
            />

            <div className={clsx(styles.separate)}></div>

            <SuggestedAccounts
                label="Following accounts"
                data={followAccount}
                showPreview
            />
        </aside>
    );
}

export default SideBar;
