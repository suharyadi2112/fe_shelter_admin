import Layout from '../components/Layout';

function HomePage(){ 
  const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
);
  return (
      <Layout>
        <div className="container-xxl flex-grow-1 container-p-y">
          <h4 className="py-3 breadcrumb-wrapper mb-4">Page 1</h4>
          <p>
            Sample page.<br />Ini halaman page 1<br />
          </p>
          <ColoredLine />
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
    );
}

export default HomePage