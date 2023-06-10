import { Link } from "react-router-dom";

function TopNav() {

  return (
    <nav>
      <div className="nav-title">
        <Link to="/" className="nav-logo-container">
          <img src="img/logo_collaberr.png" alt="Collaberr" width={'130px'} height={'auto'}></img>
        </Link>
      </div>
      <ul id="nav-menu">
        <Link to="/campaign">Menu1</Link>
        <Link to="/dashboard">Menu2</Link>
      </ul>
    </nav>
  );
}

export default TopNav;
