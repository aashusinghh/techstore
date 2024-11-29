import { Formik } from "formik";
import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../styles/Button";
import { useUserContext } from "../../context/user_context";

const ChangePassword = () => {
  const [disable, setDisable] = useState(true);

  const { changeUserPassword } = useUserContext();
  return (
    <Wrapper>
      <div className="heading">
        <h2>Reset Password</h2>
      </div>
      <Formik
        initialValues={{ oldPassword: "", newPassword: "" }}
        enableReinitialize
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          changeUserPassword(values);
          resetForm();
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
          <form className="signup-react-form" onSubmit={handleSubmit}>
            <div className="grid grid-two-column">
              <div className="col">
                <label htmlFor="name"> Old Password</label>
                <input
                  name="oldPassword"
                  type="text"
                  onChange={handleChange}
                  value={values?.oldPassword}
                  disabled={disable}
                ></input>
              </div>
              <div className="col">
                <label htmlFor="email"> New Password </label>
                <input
                  name="newPassword"
                  type="text"
                  onChange={handleChange}
                  value={values?.newPassword}
                  disabled={disable}
                ></input>
              </div>
            </div>
            <div className="form-footer">
              {disable ? (
                <Button
                  type="submit"
                  id="update"
                  onClick={() => {
                    setDisable((prev) => !prev);
                  }}
                >
                  {" "}
                  Change Password{" "}
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
                  Save Password{" "}
                </Button>
              )}
            </div>
          </form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default ChangePassword;

const Wrapper = styled.section`
  font-size: 1.5rem;
  img {
    border-radius: 50%;
    height: 15rem;
    width: 15rem;
    cursor: pointer;
  }

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
