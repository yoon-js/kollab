import TopNav from "./TopNav";
import LeftNav from "./LeftNav";
import MainArea from "./MainArea";


function Layout() {
    return (
        <div>
            <TopNav />
            <div className="wrapbox">
                <LeftNav />
                <MainArea />
            </div>
        </div>
    );
}

export default Layout;