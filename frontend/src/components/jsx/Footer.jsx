import "../css/Footer.css"

export default function Footer() {

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h6>UEstate</h6>
                    <a href="/">About</a>
                    <a href="/">Carrers</a>
                    <a href="/">Contact</a>
                </div>

                <div className="footer-section">
                    <h6>RESOURCES</h6>
                    <a href="/">Blog</a>
                    <a href="/">FAQs</a>
                    <a href="/">Support</a>
                </div>

                <div className="footer-section">
                    <h6>CONNECT</h6>
                    <div className="d-flex gap-3 fs-4">
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-twitter-x"></i>
                        <i className="bi bi-linkedin"></i>
                    </div>
                </div>

                <div className="footer-section">
                    <div className="footer-logo">UEstate<span className="logo-hq">VHQ</span></div>
                    <p>543 UV Estate Ave,
                        <br></br>
                        Uttar Pradesh, Greater Noida 598741
                        </p>
                        <p>☎️ (+91) 4568-4568-12</p>
                </div>
            </div>
        </footer>
    );
}