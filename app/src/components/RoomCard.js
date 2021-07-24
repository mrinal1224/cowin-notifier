import React from 'react'

function RoomCard({room}) {
    return (
      <>
        <div className="row bs">
          <div className="col-md-4">
            <img src={room.imageurls[0]} className="small_img" />
          </div>
          <div className="col-md-7">
            <h1>{room.name}</h1>
            <b>
              <p>
                Phone Number : <i>{room.phonenumber}</i>
              </p>
              <p>
            
                Maximum Guests : <i>{room.maxcount}</i>
              </p>
              <p>
                
                Room Type : <i>{room.type}</i>
              </p>
            </b>
            <div style={{ float: "right" }}>
              <button className="btn btn-danger">View Details</button>
            </div>
          </div>
        </div>
      </>
    );
}

export default RoomCard
