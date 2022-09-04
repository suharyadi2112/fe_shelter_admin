import Side from '../Side';
import Footer from '../Footer';
import Header from '../Header';
import Head from 'next/head'

export default function Layout({ children }){
	return (
		<>
			<Head>
		        <title>RumaHewan</title>
		        <meta charSet="utf-8" />
		        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
		    </Head>

		    {/*<!-- Layout wrapper -->*/}
		    <div className="layout-wrapper layout-content-navbar">
		      <div className="layout-container">
					
					<Side />{/*lokasi sidebar*/}

					<div className="layout-page">

						<Header />{/*lokasi header*/}
							<div className="content-wrapper">
								<div>{children}</div>
								<Footer />{/*lokasi footer*/}
							</div>
					</div>
				</div>
			</div>
		</>
	);
}