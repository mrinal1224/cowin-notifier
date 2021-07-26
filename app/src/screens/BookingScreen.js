import React , {useState , useEffect} from 'react'
import axios from "axios"

function BookingScreen({match}) {

     const [room, setRoom] = useState([]);
     const [loading, setLoading] = useState(false);
     const [error, setError] = useState(false);

     useEffect(async () => {
       try {
         setLoading(true);
         const roomData = (await axios.post('/api/rooms/getroombyid' , {roomid: match.params.roomid})).data;
       
         setRoom(roomData);
         console.log(room)
      
         setLoading(false);
       } catch (error) {
         setError(true);
         console.log(error);
         setError(false);
       }
     }, []);

    return (
        <>
         <h1>{match.params.roomid}</h1>
        </>
    )
}

export default BookingScreen
