import React, { useState, useEffect } from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;
const user = JSON.parse(localStorage.getItem("currentUser"));
console.log(user)

const UserProfile = () => {
const user = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    if (!user) {
      window.location.href = "/login";
    }
  }, []);
  return (
    <div className="m-3">
      <Tabs defaultActiveKey="1">
        <TabPane tab="My Profile" key="1">
          <div className="row justify-content-center">
            <div className="col-md-6 ">
              <div className="bs">
                <h1>Profile</h1>

                <br />

                <h1>Name : {user.name}</h1>
                <h1>Email : {user.email}</h1>
                <h1>Age: {user.age}</h1>
                <h1>Lat: {user.latitude}</h1>
                <h1>Long: {user.longitude}</h1>
              </div>
            </div>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};



export default UserProfile;
