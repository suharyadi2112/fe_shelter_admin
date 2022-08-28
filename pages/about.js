import Layout from '../components/Layout';
export default function about(){
	const ColoredLineSecond = ({ color }) => (
	    <hr
	        style={{
	            color: color,
	            backgroundColor: color,
	            height: 5
	        }}
	    />
	);
	return(
		 <Layout>
	        <div className="container-xxl flex-grow-1 container-p-y">
	          <h4 className="py-3 breadcrumb-wrapper mb-4">Page 1</h4>
	          <p>
	            Next.js adalah framework berbasis JavaScript yang kini banyak digunakan untuk membuat website. Nah, kalau Anda sedang mencari framework terbaik untuk mempermudah proses development, Next.js bisa dijadikan pilihan.<br />
	          </p>
	          <ColoredLineSecond />
	          <p>
	            <a
	              href="https://pixinvent.com/demo/frest-clean-bootstrap-admin-dashboard-template/documentation-bs5//layouts.html"
	              target="_blank"
	              className="fw-bold"
	              >Layout docs</a
	            >.
	          </p>
	        </div>
	      </Layout>
	)
}