
import React, { useEffect, useState } from 'react';
import{Link, NavLink} from 'react-router-dom'
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle('mobile-nav-active');
  };

  useEffect(() => {
    const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

    const handleNavLinkClick = () => {
      if (menuOpen) {
        toggleMenu();
      }
    };

    document.querySelectorAll('#navmenu a').forEach(navmenu => {
      navmenu.addEventListener('click', handleNavLinkClick);
    });

    return () => {
      document.querySelectorAll('#navmenu a').forEach(navmenu => {
        navmenu.removeEventListener('click', handleNavLinkClick);
      });
    };
  }, [menuOpen]);
  return (
    <>
    <header id="header" class="header d-flex align-items-center sticky-top">
    <div class="container header-main position-relative d-flex align-items-center justify-content-between">

      <NavLink href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
        
            <img className='headerLogo w-8'src="Images/Header/final-mandala-half.png" alt="" />
        
        <h1 class="sitename">CY Cafe</h1>
        
      </NavLink>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li><NavLink to="/" class="active">Home</NavLink></li>
          <li><NavLink to="/aboutus">About</NavLink></li>
          <li><NavLink to="/menu">Menu</NavLink></li>
          {/* <li class="dropdown"><a href="#"><span>Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
            <ul>
              <li><a href="#">Dropdown 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Dropdown</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="#">Deep Dropdown 1</a></li>
                  <li><a href="#">Deep Dropdown 2</a></li>
                  <li><a href="#">Deep Dropdown 3</a></li>
                  <li><a href="#">Deep Dropdown 4</a></li>
                  <li><a href="#">Deep Dropdown 5</a></li>
                </ul>
              </li>
              <li><a href="#">Dropdown 2</a></li>
              <li><a href="#">Dropdown 3</a></li>
              <li><a href="#">Dropdown 4</a></li>
            </ul>
          </li> */}
          <li><NavLink to="/contactus">Contact</NavLink></li>
        </ul>
        <i
              className={`mobile-nav-toggle d-xl-none bi ${menuOpen ? 'bi-x' : 'bi-list'}`}
              onClick={toggleMenu}
            ></i>
      </nav>

      <div class="btn-getstarted"><NavLink to="/bookatable">Book a Table</NavLink></div>

    </div>
  </header>
    </>
  )
}

export default Header
