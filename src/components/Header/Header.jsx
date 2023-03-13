import logo from "../../assets/images/LOGO.svg";
 import Navbar from "../Navbar/Nav";

function Header(){
     return(
        <header className="headerWrap">
        <figure className="headerWrap_figure">
            <img className="logo" src= {logo} alt="logo de l'agence kasa" /> 
        </figure>
         <Navbar className="nav-header" />
    </header>
     );
}

export default Header