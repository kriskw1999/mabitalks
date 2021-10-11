import '../styles/style.css';
import TextButton from "./TextButton";

const Header = () => {

    return(
        <div className="nav-bar">
            <img src="./mabitalks.png" alt='banner'/>
            <div className="login-container">
                <i className="far fa-bell"/>
                <TextButton buttonText='Logout' buttonIcon='fas fa-sign-out-alt'/>
            </div>
            
        </div>
    );
}

export default Header;