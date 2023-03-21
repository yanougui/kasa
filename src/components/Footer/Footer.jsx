import logo from "../../assets/images/logo-footer.svg";
   

  function Footer() {
	return (
		<footer className="footer-container">
			<img src={logo} alt="logo de kasa" />
			<p className="footer-container__text">© 2023 Kasa. All rights reserved</p>
			  
		</footer>
	);
}
export default Footer