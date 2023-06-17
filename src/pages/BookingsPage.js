import {useEffect, useCallback, useState} from 'react';
import styled from "styled-components";

import makeRequest from "../utils/fetch-request";
import { BookingDetails, AdminLayout, 
    SubHeader,TotalTabs, BookingsSideMenu,
 } from "../components";
    
const BookingsPage= (user) => {
    const [bookings, setBookings] = useState([]);
    const [stats, setStats] = useState({});
    const [selectedBooking, setSelectedBooking] = useState({});
    const [error, setError] = useState(null);

    const fetchBookings = useCallback(() => {
       let _url = "/data/bookings";

       makeRequest({url:_url, method:"get", data:null}).then(([status, result]) => {
           if(status !== 200){
               setError(result?.message || "Error, could not fetch records");
           } else {
               setBookings(result?.result || []);
               setStats(result?.stats || []);
               setSelectedBooking(result?.result[0])
           }
       });
      
    }, []);

    useEffect(() => {
        fetchBookings();
    },  [fetchBookings])

    return (
        <AdminLayout showSideMenu={true}>
        <Home>
            <SubHeader
             pageTitle="Bookings"
             pageSubTitle="Bookings and payments"
             onPress = {()=>void(null)}
            showCreateButton = {false}
            />
            <div className="container-fluid">
                <div className="row px-3">
                    <div className="col-lg-12">
                        <BookingsSideMenu />
                        <div className="booking-details">
                            <TotalTabs { ...stats }/>
                            <div className="booking-wrapper">
                                {
                                    bookings && bookings.map((row, index) => {
                                        let d = row  ||{}
                                        console.log(d);
                                        return <BookingDetails {...d} key={index} />
                                    }
                                 )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Home>
        </AdminLayout>
    )
}

const Home = styled.div`
    width: 100%;
    height: auto;
    overflow: hidden;
    .bg-white{
        background-color: #fff;
        padding:10px;
    }
     .col-lg-12{
         width:100%;
         margin:auto;
         display:flex;
         justify-content:space-between;
         padding:0;
         .booking-tab{
             flex:.2;
             height:210px;
             background-color:#fff;
             padding:40px 20px;
             position:relative;
              p{
                  cursor:pointer;
              }
             .fa {
                font-size:1.1rem;
                padding-right:20px;
             }
             a{
                 text-decoration: none;
                 color:#000;
             }
          
         }
         .booking-details{
            flex:.78;
            height:100%;
            background-color:#f1f1f1;
         }
        
     }
     .booking-wrapper{
        margin: 20px 0px 100px 0px;
      }
    `
export default BookingsPage;
