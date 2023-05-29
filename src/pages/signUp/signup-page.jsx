import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import "../login/login.css";
import { toast } from "react-toastify";

const SignupPage = () => {
  const { signupHandler } = useAuth();
  const viewPasswordRef = useRef({ password: false, confirmPassword: false });
  const formFieldRef = useRef({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTC: false,
  });
  const validateForm = () => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const { password, confirmPassword } = formFieldRef.current;
    return (
      formFieldRef.current.firstName &&
      formFieldRef.current.lastName &&
      regex.test(formFieldRef.current.email) &&
      password === confirmPassword &&
      formFieldRef.current.acceptTC
    );
  };

  const createAccClickHandler = () => {
    if (validateForm()) {
      signupHandler(formFieldRef.current);
    } else {
      toast.warn("Enter correct details");
    }
  };

  const toggleViewPassword = (passwordType) => {
    viewPasswordRef.current[passwordType] =
      !viewPasswordRef.current[passwordType];
  };

  return (
    <section className="signup-section p-x-1">
      <div className="signup br-3 elevated center-x m-y-6 shadow p-y-2 p-x-4">
        <div className="textbox">
          <div className="title">Sign Up</div>
        </div>
        <div className="form-div form-custom m-up-1">
          <p className="form-label">Name</p>
          <i className="fa-solid is-lighter fa-user"></i>
          <input
            onChange={(e) => (formFieldRef.current.firstName = e.target.value)}
            type="text"
            className="form-input input-focused"
            placeholder="Enter your name"
            required=""
          />
          <p className="form-label m-up-2">Last name</p>
          <i className="fa-solid is-lighter fa-user"></i>
          <input
            onChange={(e) => (formFieldRef.current.lastName = e.target.value)}
            type="text"
            className="form-input input-focused"
            placeholder="Enter your last name"
            required=""
          />
          <p className="form-label m-up-2">Email</p>
          <i className="fa-solid is-lighter fa-envelope"></i>
          <input
            onChange={(e) => (formFieldRef.current.email = e.target.value)}
            type="email"
            className="form-input input-focused"
            placeholder="Enter your email"
            required=""
          />
          <p className="form-label m-up-2">Password</p>
          <i
            onClick={() => toggleViewPassword("password")}
            className="view-password is-lighter fas fa-eye"
          />
          <input
            onChange={(e) => (formFieldRef.current.password = e.target.value)}
            type={viewPasswordRef.current.password ? "text" : "password"}
            className="form-input input-focused"
            placeholder="Enter your password"
            required=""
          />
          <p className="form-label m-up-2">Confirm Password</p>
          <i
            onClick={() => toggleViewPassword("confirmPassword")}
            className="view-password is-lighter fas fa-eye"
          />
          <input
            onChange={(e) =>
              (formFieldRef.current.confirmPassword = e.target.value)
            }
            type={viewPasswordRef.current.confirmPassword ? "text" : "password"}
            className="form-input input-focused"
            placeholder="Confirm password"
            required=""
          />
        </div>
        <label className="m-up-3 form-checkbox">
          <input
            onClick={() =>
              (formFieldRef.current.acceptTC = !formFieldRef.current.acceptTC)
            }
            type="checkbox"
            className=""
          />
          Accept all terms and conditions
        </label>
        <div className="btn-vertical m-up-3 center-text">
          <button
            onClick={createAccClickHandler}
            className="btn-primary m-dw-1 btn-small"
          >
            Create new Account
          </button>
          <Link to="/login" className="is-2 link">
            Already have an account
          </Link>
        </div>
      </div>
    </section>
  );
};

export { SignupPage };
