import LeftNavItem from "./LeftNav/LeftNavItem";

function LeftNav() {
    return (
        <div id="leftNav">
            <ul id="leftnav-menu">
                <LeftNavItem
                    targetLink={"/login"}
                    iconName={"fluent-emoji-flat:key"}
                    label={"Login"}
                />
                <LeftNavItem
                    targetLink={"/signup"}
                    iconName={"fluent-emoji-flat:bell"}
                    label={"Sign up"}
                />
            </ul>
            <ul id="leftnav-menu">
                <h6 className="text-subtext-1">Account</h6>
                <LeftNavItem
                    targetLink={"/#"}
                    iconName={"fluent-emoji-flat:gear"}
                    label={"Settings"}
                />
            </ul>
            <ul id="leftnav-menu">
                <h6 className="text-subtext-1">Campaign</h6>
                <LeftNavItem
                    targetLink={"/campaign"}
                    iconName={"fluent-emoji-flat:loudspeaker"}
                    label={"Campaign"}
                />
                <LeftNavItem
                    targetLink={"/campaign/create"}
                    iconName={"fluent-emoji-flat:hammer-and-wrench"}
                    label={"New Campaign"}
                />
            </ul>
            <ul id="leftnav-menu">
                <h6 className="text-subtext-1">Business</h6>
                <LeftNavItem
                    targetLink={"/business/dashboard"}
                    iconName={"fluent-emoji-flat:bar-chart"}
                    label={"Dashboard"}
                />
            </ul>
        </div>
    );
}

export default LeftNav;