
import React,{useState , useEffect} from 'react'
import axios from "axios"
import RoomCard from '../components/RoomCard'
import Loader from '../components/Loader'
import Error from '../components/Error'
import { DatePicker, Space } from "antd";
import moment from 'moment'
import "antd/dist/antd.css";

const { RangePicker } = DatePicker;

function HomeScreen() {
 const [rooms , setRooms] = useState([])
 const [loading , setLoading] = useState(false)
 const [error , setError] = useState(false)
 const [fromDate , setFromDate]= useState()
 const [toDate , setToDate] = useState()


 const filterByDate=(dates)=>{
   setFromDate(moment(dates[0]).format('DD-MM-YYYY'))
   setToDate(moment(dates[1]).format("DD-MM-YYYY"));
 }

 useEffect(async()=>{
     try {
         setLoading(true)
         const roomData = (await axios.get('/api/rooms/getallrooms')).data
         setRooms(roomData)
         setLoading(false)

     } catch (error) {
         setError(true)
         console.log(error)
         setError(false)
     }
 },[])


    return (
      <>
        <div className='container'>
          <div className='row mt-5'>
               <div className='col-md-3'>
                <RangePicker format='DD-MM-YYYY' onChange={filterByDate} />
               </div>
          </div>
          
          <div className="row justify-content-center mt-5">
            {loading ? (
              <h1><Loader /></h1>
            ) : rooms.length>1 ? (
             rooms.map((room) => {
                return (
                  <div className="col-md-9 mt-2">
                    <RoomCard room={room} fromDate={fromDate} toDate={toDate} />
                  </div>
                );
              })
            ) : (
              <Error />
            )}
          </div>
        </div>
      </>
    );
}

export default HomeScreen
