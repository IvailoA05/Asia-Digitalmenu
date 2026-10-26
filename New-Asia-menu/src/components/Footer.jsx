function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-gold-line"></div>

      <p className="footer-copyright">
        © {year} New Asia. Всички права запазени.
      </p>
    </footer>
  );
}

export default Footer;
