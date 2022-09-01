import Link from 'next/link'
import { useRouter } from "next/router";

export default function Side(){

  const router = useRouter();

	return( 
		<aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
          <div className="app-brand demo">
            <Link href="/">
               <img src="static/assets/img/logos/logo2.png" alt="true" width="80%"/>
            </Link>

            <a href="#" className="layout-menu-toggle menu-link text-large ms-auto">
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
                <div data-i18n="Email">Page 1</div>
              </a></Link>
            </li>
            <li className={router.pathname == "/about" ? "menu-item active" : "menu-item"}>
              <Link href="/about"><a href="#" className="menu-link">
                <i className="menu-icon tf-icons bx bx-detail"></i>
                <div data-i18n="Email">Page 2</div>
              </a></Link>
            </li>
          </ul>

        </aside>
        

	);
}