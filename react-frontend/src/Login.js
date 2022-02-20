import React, { useEffect, useState } from "react";
import "../components/3.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import swal from "sweetalert2";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const regex =
    /^([a-zA-Z0-9_\.\-\ ])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  const handleForm = (e) => {
    e.preventDefault();
    if (email === "") {
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: "please enter valid details!",
      });
    } else if (!regex.test(email)) {
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Enter Valid Email Address",
      });
    } else if (password === "") {
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: "please enter password",
      });
    } else if (password.length < 6 || password.length > 20) {
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password length is min 6 and max length is 20",
      });
    } else {
      checkUser();
    }
  };

  const checkUser = async () => {
    let user = { email: email, password: password };
    const result = await axios.post("http://localhost:8085/logintto", user);
    console.log(result);
    if (result.data.admin.role == "admin") {

      
      alert("Hello Admin");
    }
    // else if (data == "owner") {

    // }
    // else if (data == "user") {
    // }
    // else {
    //   swal.fire({
    //     icon: "error",
    //     title: "Oops...",
    //     text: "Password length is min 6 and max length is 20",
    //     footer: '<a href="/Login">Wanna Go Back? To Login</a>',
    //   });
    // }
  };

  return (
  //   <div>
  //     <div className="row" style={{ height: "90vh" }}>
  //       <div className="col-8 p-0">
  //         <Carousel>
  //           <Carousel.Item>
  //             <img
  //               className="d-block w-100"
  //               style={{ height: "90vh" }}
  //               src={require("./images/image1.jpg")}
  //               alt="First slide"
  //             />
  //             <Carousel.Caption>
  //               <h3>Renting Apartment became Easy</h3>
  //               <p>Login and Check how it is Possible!!</p>
  //             </Carousel.Caption>
  //           </Carousel.Item>
  //           <Carousel.Item>
  //             <img
  //               className="d-block w-100"
  //               style={{ height: "90vh" }}
  //               src={require("./images/image2.jpg")}
  //               alt="Second slide"
  //             />

  //             <Carousel.Caption>
  //               <h3>Can’t Afford To Live Alone</h3>
  //               <p>Looking For A Roommate, Available Shared Appartment</p>
  //             </Carousel.Caption>
  //           </Carousel.Item>
  //           <Carousel.Item>
  //             <img
  //               className="d-block w-100"
  //               style={{ height: "90vh" }}
  //               src={require("./images/image3.jpg")}
  //               alt="Third slide"
  //             />

  //             <Carousel.Caption>
  //               <h3>Safe Places to Stay</h3>
  //               <p>Safety is Important</p>
  //             </Carousel.Caption>
  //           </Carousel.Item>
  //         </Carousel>{" "}
  //       </div>
  //       <div className="col-4 p-0">
  //         <form className="mainform">
  //           <section className="gradient-custom" style={{ height: "90vh" }}>
  //             <div className="container py-5">
  //               <div className="row d-flex justify-content-center align-items-center h-100">
  //                 <div className="">
  //                   <div
  //                     className="card bg-dark text-white"
  //                     style={{ borderRadius: "1rem" }}
  //                   >
  //                     <div className="card-body p-5 text-center">
  //                       <div className="mb-md-2 mt-md-4 pb-5">
  //                         <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
  //                         <p className="text-white-50 mb-4">
  //                           Please enter your login and password!
  //                         </p>
  //                         <div className="form-outline form-white mb-4">
  //                           <input
  //                             type="email"
  //                             id="email"
  //                             class="form-control form-control-lg"
  //                             placeholder="Email"
  //                             onChange={(e) => setEmail(e.target.value)}
  //                           />
  //                         </div>

  //                         <div className="form-outline form-white mb-4">
  //                           <input
  //                             type="password"
  //                             id="password"
  //                             className="form-control form-control-lg"
  //                             placeholder="Password"
  //                             onChange={(e) => setPassword(e.target.value)}
  //                           />
  //                         </div>

  //                         <p className="small mb-3 pb-lg-2">
  //                           <a className="text-white-50" href="#!">
  //                             Forgot password?
  //                           </a>
  //                         </p>

  //                         <button
  //                           className="btn btn-outline-light btn-lg px-5"
  //                           type="button"
  //                           onClick={(checkUser, handleForm)}
  //                         >
  //                           Login
  //                         </button>
  //                       </div>
  //                       <div>
  //                         <p className="mb-0">
  //                           Don't have an account?{" "}
  //                           <Link to="/resgister">Register here</Link>
  //                         </p>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           </section>
  //         </form>
  //       </div>{" "}
  //     </div>
  //   </div>
  <div>
  <div className="container">
    <div className="row">
      <div className="card col-md-6 offset-md-3 offset-md-3 mt-3">
        <div className="text-center mt-2">
          <h3>Log In</h3>
        </div>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label>Enter Your Username</label>
              <input placeholder="User Name" className="form-control " />
              <span className="text-danger" id="username"></span>
            </div>
            <div className="form-group">
              <label>Enter Your Password</label>
              <input placeholder="Password" className="form-control " />
              <span className="text-danger" id="password"></span>
            </div>
            <div className="text-center ">
              <button
                className="btn btn-primary  "
                onClick={this.login.bind(this)}
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
   );
}

export default Login;
