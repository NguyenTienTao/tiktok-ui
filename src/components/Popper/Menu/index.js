import Tippy from "@tippyjs/react/headless";
import styles from "./Menu.module.scss";
import { PopperWrapper } from "../../Popper";
import MenuItem from "./MenuItem";

function Menu({ children, items = [] }) {
    const renderItems = () => {
        return items.map((item, index) => <MenuItem key={index} data={item} />);
    };

    return (
        <Tippy
            interactive={true}
            delay={[0, 600]}
            placement="bottom-end"
            render={(attrs) => {
                return (
                    <div
                        className={styles["menu-more"]}
                        tabIndex={-1}
                        {...attrs}
                    >
                        <PopperWrapper className={styles["menu-more"]}>
                            {renderItems()}
                        </PopperWrapper>
                    </div>
                );
            }}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
