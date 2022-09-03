import Link from 'next/link'
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Side(){

  const router = useRouter();//untuk routing
  
  useEffect(() => { //digunakan untuk reload function saat pemanggilan page
    let menuToggler = document.querySelectorAll('.layout-menu-toggle');
    menuToggler.forEach(item => {
      item.addEventListener('click', event => {
        event.preventDefault();
        window.Helpers.toggleCollapsed();//expand onclick pada logo
        // Enable menu state with local storage support if enableMenuLocalStorage = true from config.js
        if (config.enableMenuLocalStorage && !window.Helpers.isSmallScreen()) {
          try {
            localStorage.setItem(
              'templateCustomizer-' + templateName + '--LayoutCollapsed',
              String(window.Helpers.isCollapsed())
            );
          } catch (e) {}
        }
      });
    });

  }, []);
  function ExpandSideBar() {
    window.Helpers.toggleCollapsed();//expand onclick pada logo
  }

	return( 
		<aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
        <div className="app-brand demo ">
          <img src="static/assets/img/logos/logo2.png" onClick={ExpandSideBar} alt="true" width="80%" className="cekpointer" title="Perbesar View"/>
          <a className="layout-menu-toggle menu-link text-large ms-auto cekpointer">
            <i className="bx menu-toggle-icon d-none d-xl-block fs-4 align-middle"></i>
            <i className="bx bx-x d-block d-xl-none bx-sm align-middle"></i>
          </a>
        </div>

        <div className="menu-divider mt-0"></div>

        <div className="menu-inner-shadow"></div>

        <ul className="menu-inner py-1">
          <li className={router.pathname == "/" ? "menu-item active" : "menu-item"}>
            <Link href="/"><a className="menu-link">
              <i className="menu-icon tf-icons bx bx-home-circle"></i>
              <div>Dashboard</div>
            </a></Link>
          </li>
          <li className={router.pathname == "/users" ? "menu-item active" : "menu-item"}>
            <Link href="/users"><a className="menu-link">
              <i className="menu-icon tf-icons bx bx-user"></i>
              <div>Users</div>
            </a></Link>
          </li>
        </ul>

      </aside>
	);
}