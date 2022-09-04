import Layout from '../../components/Layout';
import { useEffect } from "react";
import { useRouter } from "next/router";

function DashboardUsers(){ 
  const router = useRouter();
  useEffect(() => {
      //token get
      const token = localStorage.getItem("token")
      //check token empty 
      if(!token) {
          alert('Harap login terlebih dahulu');
          //redirect login page
          router.push('/login');
      }else{
        
      }
  }, []);
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
        <h4 className="py-3 breadcrumb-wrapper mb-4">Dashboard Users</h4>
        <p>
          Sample page.<br />Ini halaman users<br />
        </p>
        <ColoredLine />
      </div>
    </Layout>
  );
}

export default DashboardUsers