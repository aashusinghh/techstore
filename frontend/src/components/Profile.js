import React from "react";
import styled from "styled-components";
import UserSideBar from "./user/UserSideBar";
import { useParams } from "react-router-dom";
import Orders from "./user/Orders";
import UserProfile from "./user/UserProfile";
import ChangePassword from "./user/ChangePassword";

const Profile = () => {
  const { activeParams } = useParams();
  console.log(activeParams);

  return (
    <Wrapper>
      <div className="main-container ">
        <div className="left-box">
          <UserSideBar />
        </div>
        <div className="right-box ">
          {activeParams === "profile" && <UserProfile />}
          {activeParams === "order" && <Orders />}
          {activeParams === "changepassword" && <ChangePassword />}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding-top: 13rem;

  .main-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    background-color: rgb(246, 248, 250);

    gap: 6rem;
  }

  .left-box {
    height: 55rem;
    width: 18%;
    // flex: 1;
    // background-color: white;
  }
  .right-box {
    height: 55rem;
    width: 60%;
    // flex: 1;
    background-color: rgb(246, 248, 250);
  }

  label {
    font-size: 1.6rem;
  }
  .row : {
    display: flex;
    flex-direction: column;
  }
  .col {
    display: flex;
    flex-direction: column;

    width: auto;
    padding: 0.9rem;
    margin: 7px 0px;
  }
  .col input {
    margin-top: 1rem;
    border-radius: 9px;
  }
`;

export default Profile;
