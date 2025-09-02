import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useUserContext } from "../../context/user_context";
import { Button } from "../../styles/Button";
import { Formik } from "formik";

const UserProfile = () => {
  const { userData, getUserData, updateUser } = useUserContext();
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    getUserData();
  }, []);

  // console.log(userData);

  return (
    <div className="">
      <div className="heading py-8 px-28 flex flex-row items-center gap-12 ">
        {userData.profile_pic ? (
          <img
            src={userData.profile_pic}
            alt="Avatar"
            className="border-[50%] h-60 w-60 cursor-pointer"
          />
        ) : (
          <img
            src="https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png"
            alt="Avatar"
            className="border-[50%] h-60 w-60 cursor-pointer"
          />
        )}

        <h2>{userData?.fullname?.toUpperCase()} </h2>
      </div>
      <Formik
        initialValues={{ ...userData }}
        enableReinitialize
        onSubmit={(values, { resetForm }) => {
          // console.log(values);
          delete values.email;
          updateUser(values);
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
          <form
            className="signup-react-form py-0 px-24 text-[1.5rem] "
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-2 gap-16">
              <div className="flex flex-col relative mb-3 ">
                <label htmlFor="name" className="mb-2">
                  {" "}
                  Name
                </label>
                <input
                  name="fullname"
                  type="text"
                  onChange={handleChange}
                  value={values?.fullname}
                  disabled={disable}
                  className=" text-gray-500 border-[1px] rounded-xl p-4 pl-8 outline-solid border-zinc-600 focus:border-0 "
                ></input>
              </div>
              <div className="flex flex-col relative mb-3 ">
                <label htmlFor="email" className="mb-2">
                  Email{" "}
                </label>
                <input
                  name="email"
                  type="email"
                  value={values?.email}
                  disabled
                  className=" text-gray-500 border-[1px] rounded-xl p-4 pl-8 outline-solid border-zinc-600 focus:border-0 "
                ></input>
              </div>
              <div className="flex flex-col relative mb-3 ">
                <label htmlFor="phNo" className="mb-2">
                  Contact No{" "}
                </label>
                <input
                  name="contact"
                  type="text"
                  maxlength={10}
                  minLength={10}
                  onChange={handleChange}
                  value={values?.contact}
                  disabled={disable}
                  className=" text-gray-500 border-[1px] rounded-xl p-4 pl-8 outline-solid border-zinc-600 focus:border-0 "
                ></input>
              </div>
              <div className="flex flex-col relative mb-3 ">
                <label htmlFor="gender" className="mb-1">
                  {" "}
                  Gender
                </label>

                <select
                  name="gender"
                  id="gender"
                  onChange={handleChange}
                  disabled={disable}
                  value={values?.gender}
                  className=" text-gray-500  mt-4 rounded-[0.75rem] p-5 pl-8 outline-solid border-zinc-600 focus:border-0 "
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>

            <div className="form-footer py-8 px-12 flex flex-row-reverse">
              {disable ? (
                <Button
                  type="submit"
                  id="update"
                  onClick={() => {
                    setDisable((prev) => !prev);
                  }}
                >
                  {" "}
                  Update{" "}
                </Button>
              ) : (
                <Button
                  type="button"
                  id="save"
                  onClick={() => {
                    setDisable((prev) => !prev);
                  }}
                >
                  {" "}
                  Save Changes{" "}
                </Button>
              )}
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default UserProfile;

const Wrapper = styled.section`
  font-size: 1.5rem;
  // img {
  //   border-radius: 50%;
  //   height: 15rem;
  //   width: 15rem;
  //   cursor: pointer;
  // }

  input {
    background: white;
    padding-left: 2rem;
  }

  form {
    padding: 0rem 6rem;
  }

  .heading {
    padding: 2rem 7rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3rem;
  }

  .form-footer {
    padding: 2rem 3rem;
    display: flex;
    flex-direction: row-reverse;
  }

  select {
    margin-top: 1rem;
    padding-left: 2rem;
    border-radius: 0.75rem;
  }
`;
