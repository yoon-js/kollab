import { Link } from "react-router-dom";

function Topnav() {

  return (
      <nav>
        <div className="nav-title">
            <Link to="/" className="nav-logo-container">
                <img src="img/logo_collaberr.png" alt="Collaberr" width={'130px'} height={'auto'}></img>
            </Link>
            <ul id="nav-menu">
                <Link to="/campaign">Campaign</Link>
                <Link to="/business/dashboard">Dashboard</Link>
            </ul>
        </div>
        <ul id="nav-tool">
          <li>
            <Link to="#">User</Link>
          </li>
          <li>
            <button>
                <Link to="/" className="button button--dangerFill button--xsmall">Logout</Link>  
            </button>
          </li>
          <li>
            <Link to="account/signup">Sign up</Link>
          </li>
          <li>
            <button>
                <Link to="account/login" className="button button--primaryFill button--xsmall">Login</Link>  
            </button>
          </li>
        </ul>
      </nav>
  );
}

export default Topnav;
