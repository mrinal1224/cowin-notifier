import React, { useEffect , useState } from "react";
import { Tabs } from "antd";
import Swal from "sweetalert2";

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

 const refresh=()=>{
    try {
      Swal.fire("congrats", "Vaccination Notifications has been sent to your mail", "success").then(result=>{
           window.location.reload()
         })
    } catch (error) {
      console.log(error);
      Swal.fire("oops", "Booking cannot be cancelled", "error");
    }
 }






  return (
    <div className="m-3">
      <Tabs defaultActiveKey="1">
        <TabPane tab="Welcome to Cowin Vaccination Slot Notifier" key="1">
          <div className="row justify-content-center">
            <div className="col-md-6 ">
              <div className="bs">
                <h1>
                  <b>My Profile</b>
                </h1>

                <h1>
                  <i class="fas fa-user-tie"></i> Name : {user.name}
                </h1>
                <h1>
                  <i class="fas fa-envelope"></i> Email : {user.email}
                </h1>
                <h1>
                  <i class="fab fa-pagelines"></i> Age: {user.age}
                </h1>

                <div>
                 
                    <button className="btn btn-success" style={{marginLeft : '600px'}} onClick={refresh}>
                      Refresh
                    </button>
                  
                </div>
              </div>
            </div>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};



export default UserProfile;
