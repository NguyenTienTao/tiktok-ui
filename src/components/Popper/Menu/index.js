import { useState } from "react";
import HeadlessTippy from "@tippyjs/react/headless";
import styles from "./Menu.module.scss";
import { PopperWrapper } from "../../Popper";
import MenuItem from "./MenuItem";
import Header from "./Header";

function Menu({ children, items = [], onChange = () => {} }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    const handleClickMenuItem = (item) => {
        if (item.children) {
            setHistory((prev) => [...prev, item.children]);
        } else {
            onChange(item);
        }
    };

    const handleBackMenu = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };

    const resetToFirstMenu = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

    const renderItems = () => {
        return current.data.map((item, index) => (
            <MenuItem key={index} data={item} onNext={handleClickMenuItem} />
        ));
    };

    return (
        <HeadlessTippy
            interactive={true}
            hideOnClick={false}
            visible
            delay={[0, 600]}
            offset={[12, 8]}
            placement="bottom-end"
            onHide={resetToFirstMenu}
            render={(attrs) => {
                return (
                    <div
                        className={styles["menu-more"]}
                        tabIndex={-1}
                        {...attrs}
                    >
                        <PopperWrapper className={styles["menu-more"]}>
                            {history.length > 1 && (
                                <Header
                                    title={current.title}
                                    onBack={handleBackMenu}
                                />
                            )}
                            <div className={styles["menu-body"]}>
                                {renderItems()}
                            </div>
                        </PopperWrapper>
                    </div>
                );
            }}
        >
            {children}
        </HeadlessTippy>
    );
}

export default Menu;
