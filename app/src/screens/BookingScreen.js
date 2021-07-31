import React , {useState , useEffect} from 'react'
import axios from "axios"
import Loader from '../components/Loader';
import Error from '../components/Error';

function BookingScreen({match}) {

     const [room, setRoom] = useState({});
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState();

     useEffect(async () => {
       try {
         setLoading(true);
         const roomData = (await axios.post('/api/rooms/getroombyid' , {roomid: match.params.roomid})).data;
       
         setRoom(roomData);
        
      
         setLoading(false);
       } catch (err) {
         setError(true);
         console.log(error);
         setError(false);
       }
     }, []);

    return (
      <>
        
          {loading ? (
            <h1><Loader /></h1>
          ) : room ? (
            <div className='m-5'>
              <div className="row justify-content-center mt-5 bs">
                <div className="col-md-6">
                  <h1>{room.name}</h1>
                  <img src={room.imageurls[0]} className='big_img'/>
                </div>

                <div className="col-md-5">
                  <h1>Booking Details</h1>
                  <hr />
                  <div style={{ textAlign: "right" }}>
                    <b>
                      <p>Name :</p>
                      <p>From Date:{match.params.fromDate}</p>
                      <p>To Date:{match.params.toDate}</p>
                      <p>Maximum Guests : {room.maxcount}</p>
                    </b>
                  </div>

                  <div style={{ textAlign: "right" }}>
                    <b>
                      <h1>Amount</h1>
                      <hr />
                      <p>Total Days : </p>
                      <p>Rent Per Day : {room.rentperday}</p>
                      <p>Total Amount :</p>
                    </b>
                  </div>

                  <div style={{ float: "right" }}>
                    <button className="btn btn-success">Confirm Booking</button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Error />
          )}
        
      </>
    );
}

export default BookingScreen
