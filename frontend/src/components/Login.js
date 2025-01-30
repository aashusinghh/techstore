import React from "react";
import { NavLink } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import { Formik } from "formik";
import { useUserContext } from "../context/user_context";

export const Login = (props) => {
  const { loginUser } = useUserContext();
  return (
    <div className="bg-light_bg w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-10 w-96 h-auto">
        <div className="flex items-stretch flex-col mb-4">
          <p className="mb-2 text-4xl font-bold">Welcome back!</p>
        </div>

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            loginUser(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            setFieldValue,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form className="" onSubmit={handleSubmit}>
              <div className="flex flex-col relative mb-3 ">
                <EmailIcon className="absolute top-12 left-2 h-5" />
                <label htmlFor="email" className="mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  className=" text-gray-500 border-[1px] rounded-xl p-3 pl-8 outline-solid border-zinc-600 focus:border-0 "
                />
              </div>
              <div className="flex flex-col relative mb-3 ">
                <KeyIcon className="absolute top-12 left-2 h-5" />
                <label htmlFor="password" className="mb-2 ">
                  {" "}
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  className=" text-gray-500 border-[1px] rounded-xl p-3 pl-8 outline-solid border-zinc-600 focus:border-0 "
                />
              </div>
              <div className="pass-input-div"></div>

              <div className="m-4 flex flex-col">
                <button
                  className="bg-slate-950 tracking-widest text-white p-2 rounded-2xl hover:bg-slate-700"
                  type="submit"
                >
                  Log In
                </button>
              </div>
            </form>
          )}
        </Formik>
        <div className="flex items-center flex-col justify-center">
          <p className="">
            Don't have an account? <NavLink to="/signup">Sign Up</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};
