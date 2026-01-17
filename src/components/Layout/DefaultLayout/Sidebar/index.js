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
        </aside>
    );
}

export default SideBar;
