import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en"
                  // light-style layout-navbar-fixed layout-menu-fixed layout-menu-collapsed layout-menu-collapse
          className="light-style layout-navbar-fixed layout-menu-fixed"
          dir="ltr"
          data-theme="theme-default"
          data-assets-path="/static/assets/"
          data-template="vertical-menu-template-no-customizer-starter">
      <Head>
        {/*<!-- Favicon -->*/}
        <link rel="shortcut icon" href="/static/favicon/logo.png" />
       {/*<!-- stylesheet direkomendasikan disini -->*/}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />

        {/*<!-- Icons. Uncomment required icon fonts -->*/}
        <link rel="stylesheet" href="/static/assets/vendor/fonts/boxicons.css" />
        {/*// <!-- Core CSS -->*/}
        <link rel="stylesheet" href="/static/assets/vendor/css/rtl/core.css" />
        <link rel="stylesheet" href="/static/assets/vendor/css/rtl/theme-default.css" />
        {/*<link rel="stylesheet" href="/static/assets/css/demo.css" />assets demo bawaan css template dipindah ke global css*/}
        {/*<!-- Vendors CSS -->*/}
        <link rel="stylesheet" href="/static/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
        {/*<!-- Auth CSS -->*/}
        <link rel="stylesheet" href="/static/assets/vendor/css/pages/page-auth.css" />
        {/*<!-- Helpers -->*/}
        <script src="/static/assets/vendor/js/helpers.js"></script>
        {/*<!--! Template customizer & Theme config files MUST be included after core stylesheets and helpers.js in the <head> section -->
        <!--? Config:  Mandatory theme config file contain global vars & default theme options, Set your preferred theme option in this file.  -->*/}
        <script src="/static/assets/js/config.js"></script>

      </Head>
      <body>
        <Main />
        <NextScript />
          <script src="/static/assets/vendor/libs/popper/popper.js"></script>
          <script src="/static/assets/vendor/js/bootstrap.js"></script>

          {/*<!-- Main JS -->*/}
          <script src="/static/assets/js/main.js"></script>

          <script>
          </script>

      </body>

    
    </Html>
  )
}