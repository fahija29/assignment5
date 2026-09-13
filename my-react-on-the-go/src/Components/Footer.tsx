import "./Footer.css";
import logo from "../assets/logo-text.png";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-brand">

          <div className="footer-logo">
            <img src={logo} alt="Dev Stack Logo" />
          </div>

          <p>
            Curated tools, technologies, and resources for developers
            building modern software.
          </p>

          <div className="footer-socials">
            <a href="#">Facebook</a>
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
          </div>

        </div>

        {/* PRODUCT */}
        <div className="footer-column">
          <h3>Product</h3>

          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        {/* COMPANY */}
        <div className="footer-column">
          <h3>Company</h3>

          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>

        {/* LEGAL */}
        <div className="footer-column">
          <h3>Legal</h3>

          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">

        <p>
          © 2026 Dev Stack. All rights reserved.
        </p>

        <div>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;