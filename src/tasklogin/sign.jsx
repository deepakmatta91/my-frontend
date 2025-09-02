import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./sign.css";

function Signup() {
  const [Data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    dob: "",
    password: "",
    // image: "",
  });

  const ImageRef = useRef(null);

  // const handleImage = () => {
  //   ImageRef.current.click();
  // };

  const handleSubmit = () => {
    const EmailRegex = /^[a-zA-Z\d]+@[a-zA-Z]+\.[a-z]{2,}$/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const lowerCaseRegex = /[a-z]/;
    const upperCaseRegex = /[A-Z]/;
    const numberRegex = /[0-9]/;

    if (Data.firstname.trim() === "") {
      toast.error("Enter First Name!", { position: "top-center", autoClose: 2000 });
    } else if (Data.lastname.trim() === "") {
      toast.error("Enter Last Name!", { position: "top-center", autoClose: 2000 });
    } else if (Data.email.trim() === "") {
      toast.error("Enter Email!", { position: "top-center", autoClose: 2000 });
    } else if (!EmailRegex.test(Data.email)) {
      toast.error("Enter Valid Email!", { position: "top-center", autoClose: 2000 });
    } else if (Data.mobile.trim() === "") {
      toast.error("Enter Mobile Number!", { position: "top-center", autoClose: 2000 });
    } else if (!/^\d{10}$/.test(Data.mobile)) {
      toast.error("Enter a Valid 10-Digit Mobile Number!", { position: "top-center", autoClose: 2000 });
    } else if (Data.dob === "") {
      toast.error("Enter Date Of Birth!", { position: "top-center", autoClose: 2000 });
    } else if (Data.password === "") {
      toast.error("Enter Password!", { position: "top-center", autoClose: 2000 });
    } else if (Data.password.length < 8) {
      toast.error("Password Must be 8 Characters Long!", { position: "top-center", autoClose: 2000 });
    } else if (!lowerCaseRegex.test(Data.password)) {
      toast.error("Password Must Contain One Lowercase Letter!", { position: "top-center", autoClose: 2000 });
    } else if (!upperCaseRegex.test(Data.password)) {
      toast.error("Password Must Contain One Uppercase Letter!", { position: "top-center", autoClose: 2000 });
    } else if (!numberRegex.test(Data.password)) {
      toast.error("Password Must Contain One Number!", { position: "top-center", autoClose: 2000 });
    } else if (!specialCharRegex.test(Data.password)) {
      toast.error("Password Must Contain One Special Character!", { position: "top-center", autoClose: 2000 });
    } else {
      toast.success("Form Submitted Successfully!", { position: "top-center", autoClose: 2000 });
      console.log(Data);
      setData({ firstname: "", lastname: "", email: "", mobile: "", dob: "", password: "", image: "" }); // Reset form
    }
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="First Name"
        value={Data.firstname}
        onChange={(e) => setData({ ...Data, firstname: e.target.value })}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={Data.lastname}
        onChange={(e) => setData({ ...Data, lastname: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={Data.email}
        onChange={(e) => setData({ ...Data, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="Mobile"
        value={Data.mobile}
        onChange={(e) => setData({ ...Data, mobile: e.target.value })}
      />
      <input
        type="date"
        placeholder="Date Of Birth"
        value={Data.dob}
        onChange={(e) => setData({ ...Data, dob: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={Data.password}
        onChange={(e) => setData({ ...Data, password: e.target.value })}
      />
      <button className="b1" onClick={handleSubmit}>Submit</button>
      <ToastContainer />
    </div>
  );
}

export default Signup;
