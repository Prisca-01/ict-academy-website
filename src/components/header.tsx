
import { useState } from "react";
import '../styles/header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header-container">
      {/* Desktop Header */}
      <div className="desktop-header">
        <div>
          <a href="#">
            <img src="src/assets/logo.png" alt="logo" className="logo-desktop" />
          </a>
        </div>
        <div className="desktop-nav">
          <nav><a href="#">HOME</a></nav>
          <nav><a href="#">OUR COURSES</a></nav>
          <nav><a href="#">REVIEWS</a></nav>
          <nav><a href="#">BLOG</a></nav>
          <nav><a href="#">ABOUT US</a></nav>
          <nav><a href="#">CONTACT US</a></nav>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="mobile-header">
        <img src="src/assets/logo.png" alt="logo" className="logo-mobile" />
        <button className="menu-btn" onClick={() => setIsOpen(true)} aria-label="Open Menu">
          ☰
        </button>
      </div>

      {/* Mobile Breadcrumb Navigation */}
      {isOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-header">
            <img src="src/assets/logo.png" alt="logo" className="logo-mobile" />
            <button
              className="close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close Menu"
            >
              ✕
            </button>
          </div>
          <nav className="mobile-nav">
            <a href="#" onClick={() => setIsOpen(false)}>HOME</a>
            <a href="#" onClick={() => setIsOpen(false)}>OUR COURSES</a>
            <a href="#" onClick={() => setIsOpen(false)}>REVIEWSS</a>
            <a href="#" onClick={() => setIsOpen(false)}>BLOG</a>
            <a href="#" onClick={() => setIsOpen(false)}>ABOUT US</a>
            <a href="#" onClick={() => setIsOpen(false)}>
              CONTACT US
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;