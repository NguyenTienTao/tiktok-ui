import { useEffect, useRef, useState } from "react";
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
    faCloudArrowUp,
    faUser,
    faGear,
    faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import HeadlessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";

import styles from "./Header.module.scss";
import * as searchService from "../../../../services/searchService";
import { ReactComponent as Logo } from "../../../../assets/images/logo.svg";
import { PopperWrapper } from "../../../Popper";
import AvatarItem from "../../../AvatarItem";
import Button from "../../../Button";
import Menu from "../../../Popper/Menu";
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router";

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: "English",
        children: {
            title: "Language",
            data: [
                {
                    code: "en",
                    title: "English",
                },
                {
                    code: "vi",
                    title: "Tiếng Việt",
                },
                {
                    code: "en",
                    title: "English",
                },
                {
                    code: "vi",
                    title: "Tiếng Việt",
                },
                {
                    code: "en",
                    title: "English",
                },
                {
                    code: "vi",
                    title: "Tiếng Việt",
                },
                {
                    code: "en",
                    title: "English",
                },
                {
                    code: "vi",
                    title: "Tiếng Việt",
                },
                {
                    code: "en",
                    title: "English",
                },
                {
                    code: "vi",
                    title: "Tiếng Việt",
                },
                {
                    code: "en",
                    title: "English",
                },
                {
                    code: "vi",
                    title: "Tiếng Việt",
                },
                {
                    code: "en",
                    title: "English",
                },
                {
                    code: "vi",
                    title: "Tiếng Việt",
                },
                {
                    code: "en",
                    title: "English",
                },
                {
                    code: "vi",
                    title: "Tiếng Việt",
                },
                {
                    code: "en",
                    title: "English",
                },
                {
                    code: "vi",
                    title: "Tiếng Việt",
                },
                {
                    code: "en",
                    title: "English",
                },
                {
                    code: "vi",
                    title: "Tiếng Việt",
                },
                {
                    code: "en",
                    title: "English",
                },
                {
                    code: "vi",
                    title: "Tiếng Việt",
                },
                {
                    code: "en",
                    title: "English",
                },
                {
                    code: "vi",
                    title: "Tiếng Việt",
                },
            ],
        },
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
    const currentUser = true;

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: "View profile",
            to: "/@username",
        },
        {
            icon: <FontAwesomeIcon icon={faBitcoin} />,
            title: "Get coins",
            to: "/coin",
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: "Settings",
            to: "/settings",
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
            title: "Log out",
            to: "/logout",
            separate: true,
        },
    ];

    return (
        <header className={styles.wrapper}>
            <div className={styles.inner}>
                {/* ------ Logo ------- */}
                <Link to="/" className={styles.logo}>
                    <Logo />
                </Link>
                {/* ------ Search ------- */}
                <Search />

                {/* ------ Action ------- */}
                <div className={styles.actions}>
                    {currentUser ? (
                        <>
                            <Tippy delay={200} content="Upload video">
                                <button className={styles.upload}>
                                    <FontAwesomeIcon icon={faCloudArrowUp} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text size="small">
                                Upload
                            </Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS}>
                        {currentUser ? (
                            <img
                                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
                                alt="User Avatar"
                                className={styles["user-avatar"]}
                            />
                        ) : (
                            <button className={styles.moreButton}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

function Search() {
    const [showResult, setShowResult] = useState(true);
    const [searchLoading, setSearchLoading] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    const input = useRef();

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }

        const debounce = setTimeout(() => {
            const fetchUser = async () => {
                try {
                    const res = await searchService.search(searchValue);
                    setSearchResult(res);
                } catch (error) {
                    console.error(error);
                } finally {
                    setSearchLoading(false);
                }
            };
            fetchUser();
        }, 300);

        return () => clearTimeout(debounce);
    }, [searchValue]);

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <div>
            <HeadlessTippy
                interactive={true}
                visible={searchResult.length > 0 && showResult}
                onClickOutside={handleHideResult}
                render={(attrs) => {
                    return (
                        <div
                            className={styles["search-result"]}
                            tabIndex={-1}
                            {...attrs}
                        >
                            <PopperWrapper>
                                <h4 className={clsx(styles["search-title"])}>
                                    Accounts
                                </h4>
                                {searchResult.map((user) => {
                                    return (
                                        <AvatarItem key={user.id} user={user} />
                                    );
                                })}
                            </PopperWrapper>
                        </div>
                    );
                }}
            >
                <div className={styles.search}>
                    <input
                        ref={input}
                        value={searchValue}
                        type="text"
                        spellCheck={false}
                        placeholder="Search accounts and videos"
                        className={clsx(styles["search-input"])}
                        onChange={(e) => {
                            const value = e.target.value;
                            if (value.startsWith(" ")) {
                                setSearchValue("");
                                return;
                            }
                            setSearchLoading(!!value.trim());
                            setSearchValue(value);
                        }}
                        onFocus={() => setShowResult(true)}
                    />
                    {searchValue && !searchLoading && (
                        <button
                            className={styles.clear}
                            onClick={() => {
                                setSearchValue("");
                                input.current.focus();
                            }}
                        >
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {searchLoading && (
                        <button className={styles.loading}>
                            <FontAwesomeIcon icon={faSpinner} />
                        </button>
                    )}
                    <button className={clsx(styles["search-button"])}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Header;
