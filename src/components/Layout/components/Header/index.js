import { useState } from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faCircleXmark,
    faSpinner,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";

import styles from "./Header.module.scss";
import { ReactComponent as Logo } from "../../../../assets/images/logo.svg";
import { PopperWrapper } from "../../../Popper";
import AvatarItem from "../../../AvatarItem";
import Button from "../../../Button";
import Menu from "../../../Popper/Menu";

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: "English",
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: "Feedback and help",
        to: "/feedback",
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: "Keyboard shortcuts",
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    return (
        <header className={styles.wrapper}>
            <div className={styles.inner}>
                {/* ------ Logo ------- */}
                <Logo />
                {/* ------ Search ------- */}
                <Tippy
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={(attrs) => {
                        return (
                            <div
                                className={styles["search-result"]}
                                tabIndex={-1}
                                {...attrs}
                            >
                                <PopperWrapper>
                                    <h4
                                        className={clsx(styles["search-title"])}
                                    >
                                        Accounts
                                    </h4>
                                    <ul>
                                        <li>
                                            <AvatarItem />
                                            <AvatarItem />
                                            <AvatarItem />
                                            <AvatarItem />
                                        </li>
                                    </ul>
                                </PopperWrapper>
                            </div>
                        );
                    }}
                >
                    <div className={styles.search}>
                        <input
                            type="text"
                            spellCheck={false}
                            placeholder="Search accounts and videos"
                            className={clsx(styles["search-input"])}
                        />
                        <button className={styles.clear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <button className={styles.loading}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </button>
                        <button className={clsx(styles["search-button"])}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                {/* ------ Action ------- */}
                <div className={styles.actions}>
                    <Button text size="small">
                        Upload
                    </Button>
                    <Button primary>Log in</Button>
                    <Menu items={MENU_ITEMS}>
                        <button className={styles.more}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
