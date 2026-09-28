function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-box">
          <h2>IPL Booking</h2>
          <p>Experience The Stadium Energy Live!</p>
        </div>

        <div className="footer-box">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#matches">Matches</a>
          <a href="#book">Book Ticket</a>
          <a href="#guidelines">Guidelines</a>
        </div>

        <div className="footer-box">
          <h3>Contact Us</h3>
          <p>Email: support@iplbooking.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 IPL Booking. All Rights Reserved.</p>
      </div>

    </footer>
  );
}

export default Footer;