import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from 'axios';

function Login(){ 

  const router = useRouter();
  const { register, handleSubmit, formState: { errors }, getValues, setValue } = useForm({mode: "onSubmit"});
  const onSubmit = (data) => console.log(data);

  const PostLogin = async () => {
    const formData = new FormData();
    //append data to formData
    formData.append('email', getValues("email"));
    formData.append('password', getValues("password"));

    axios.post("http://localhost:1323/login", formData)
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('firstname', response.data.firstname);
        localStorage.setItem('lastname', response.data.lastname);
        router.push('/');
      })
      .catch(function (error) {
        // handle error
        switch(error.response.data.code){
            case "002":
                alert('user tidak ditemukan')
            break;
            case "004":
                alert('terjadi kesalahan pada sistem')
            break;
            case "001":
                alert('terjadi kesalahan pada sistem')
            break;
            case "005":
                alert('user tidak ditemukan')
            break;
            default:
              alert('Kesalahan Tidak diketahui');
          }
        console.log(error.response.data.error);
      })
      .then(function () {
        // always executed
      });
    };

  useEffect(() => {
      //token get
      const token = localStorage.getItem("token")
      //check token empty 
      if(!token) {
          alert('Harap login terlebih dahulu');
          //redirect login page
          router.push('/login');
      }else{
          alert('Anda telah login');
          router.push('/');
      }
  }, []);
  
  return (
        <div className="container-xxl">
          <div className="authentication-wrapper authentication-basic container-p-y">
            <div className="authentication-inner py-4">
              {/*<!-- Register -->*/}
              <div className="card">
                <div className="card-body">
                  {/*<!-- Logo -->*/}
                  <div className="app-brand justify-content-center">
                    <a href="index.html" className="app-brand-link gap-2" style={{ display: "contents"}}>
                        <img src="static/assets/img/logos/logo2.png" alt="true" width="70%" className="cekpointer" title="Perbesar View"/>
                    </a>
                  </div>
                  {/*<!-- /Logo -->*/}
                  <h4 className="mb-2">Welcome to RumaHewan! 👋</h4>
                  <p className="mb-4">Please sign-in to your account and start the adventure</p>

                  <form onSubmit={handleSubmit(PostLogin)}>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email or Username</label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        {...register("email", {
                          required: "This field is required",
                          pattern: {
                            value: /\S+@\S+\.\S+/,
                            message: "Entered value does not match email format"
                          }
                        })}
                      />
                      {errors.email && <span style={{ color: "#bf1650" }}>{errors.email.required}</span>}
                      {errors.email && <span style={{ color: "#bf1650" }}>{errors.email.message}</span>}
                    </div>
                    
                    <div className="form-password-toggle mb-3">
                      <div className="d-flex justify-content-between">
                        <label className="form-label" htmlFor="password">Password</label>
                      </div>
                        <div className="input-group input-group-merge">
                          <input
                            type="password"
                            id="password"
                            className="form-control"
                            name="password"
                            placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                            aria-describedby="password"
                            aria-invalid={errors.password ? "true" : "false"}
                            {...register("password", { required: true, minLength: 6 })}
                          />
                          <span className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span>
                        </div>
                        {errors.password && errors.password.type === "required" && (
                          <span style={{ color: "#bf1650" }}>This field is required</span>
                        )}
                        {errors.password && errors.password.type === "minLength" && (
                          <span style={{ color: "#bf1650" }}>Minimum 6 characters</span>
                        )}
                    </div>

                    
                    <div className="mb-3">
                      <button className="btn btn-primary d-grid w-100" type="submit">Sign in</button>
                    </div>
                  </form>

                  <div className="divider my-4">
                    <div className="divider-text">or</div>
                  </div>

                  <div className="d-flex justify-content-center">

                    <a href="#" className="btn btn-icon btn-label-google-plus">
                      <i className="tf-icons bx bxl-google"></i>
                    </a>

                  </div>
                </div>
              </div>
              {/*<!-- /Register -->*/}
            </div>
          </div>
        </div>
    );
}

export default Login