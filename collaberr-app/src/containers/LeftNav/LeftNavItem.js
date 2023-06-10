import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

function LeftNavItem({targetLink,iconName,label}) {
    return (
        <>
            <Link to={targetLink}>
                <li>
                    <Icon icon={ iconName } width={"24px"} height={"24px"} />
                    <span>{ label }</span>
                </li>
            </Link>
        </>
    );
}

export default LeftNavItem;