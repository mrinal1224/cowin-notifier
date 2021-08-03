import React , {useState , useEffect} from 'react'
import axios from "axios"
import Loader from '../components/Loader';
import Error from '../components/Error';
import moment from 'moment'



function BookingScreen({match}) {
  const user = JSON.parse(localStorage.getItem("currentUser"));

     const [room, setRoom] = useState({});
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState();
     const [totalamount , setTotalamount]= useState()


     const roomid = match.params.roomid
     const fromDate = moment(match.params.fromDate , 'DD-MM-YYYY')
     const toDate = moment(match.params.toDate , 'DD-MM-YYYY')

     const totalDays = moment.duration(toDate.diff(fromDate)).asDays()


     

     useEffect(async () => {
       try {
         setLoading(true);
        const roomData = (await axios.post('/api/rooms/getroombyid' , {roomid: match.params.roomid})).data;
       
         setTotalamount(totalDays * roomData.rentperday);
         setRoom(roomData);
         
        
      
         setLoading(false);
       } catch (err) {
         setError(true);
         console.log(error);
         setError(false);
       }
     }, []);

     const confirmRoom = async()=>{
          const bookingDetails={
            room ,
            userid : user.id,
            fromDate,
            toDate,
            totalDays,
            totalamount
          }

          try {
            const result = await axios.post('/api/bookings/bookroom' , bookingDetails)
          } catch (error) {
            console.log(error)
          }
     }

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
                      <p>Name :{user.name}</p>
                      <p>From Date:{match.params.fromDate}</p>
                      <p>To Date:{match.params.toDate}</p>
                      <p>Maximum Guests : {room.maxcount}</p>
                    </b>
                  </div>

                  <div style={{ textAlign: "right" }}>
                    <b>
                      <h1>Amount</h1>
                      <hr />
                      <p>Total Days :{totalDays} </p>
                      <p>Rent Per Day : {room.rentperday}</p>
                      <p>Total Amount : {totalamount}</p>
                    </b>
                  </div>

                  <div style={{ float: "right" }}>
                    <button className="btn btn-success" onClick={confirmRoom}>Confirm Booking</button>
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
