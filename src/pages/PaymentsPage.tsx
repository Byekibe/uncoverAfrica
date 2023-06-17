import {useEffect, useCallback, useState} from 'react';
import styled from "styled-components";
import {  
    AdminLayout, 
    SubHeader, 
    BookingsSideMenu,
 } from "../components";

import PaymentsHeader from '../components/payments/PaymentsHeader';

import makeRequest from "../utils/fetch-request";
import DataTable from "../utils/table"

const PaymentsPage= (props: any) => {

    const [payments, setPayments] = useState([]);
    const [stats, setStats] = useState({});
    const [error, setError] = useState(null);

    const fetchPayments = useCallback(() => {
        let _url = "/payments/get";

       makeRequest({url:_url, method:"get", data:null}).then(([status, result]) => {
           if(status !== 200){
               setError(result?.message || "Error, could not fetch records");
           } else {
               console.log("I have received data from api", result)
                setPayments(result?.data || []);
                setStats(result?.stats || []);
           }
       });
      
    }, []);

    useEffect(() => {
        fetchPayments();
    },  [fetchPayments])

    return (

        <AdminLayout showSideMenu={true}>
        <Home>
            <SubHeader
             pageTitle="Payments"
             pageSubTitle="Uncover payments"
             onPress = {()=>void(null)}
             showCreateButton = {true}
            />
            <div className="container-fluid">
                <div className="row px-3">
                    <div className="col-lg-12">
                        <BookingsSideMenu />
                        <div className="booking-details bg-c">
                            <PaymentsHeader /> 
                            <div className="booking-wrapper bg-c">

                                <DataTable data={payments} /> 

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
  .bg-white {
    background-color: #fff;
    padding: 10px;
  }
  .col-lg-12 {
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding: 0;
    .booking-tab {
      flex: 0.2;
      height: 210px;
      background-color: #fff;
      padding: 40px 20px;
      position: relative;
      p {
        cursor: pointer;
      }
      .fa {
        font-size: 1.1rem;
        padding-right: 20px;
      }
      a {
        text-decoration: none;
        color: #000;
      }
    }
    .booking-details {
      flex: 0.78;
      height: 100%;
      background-color: #f1f1f1;
    }
  }
  .booking-wrapper {
    margin: 20px 0px 100px 0px;
  }
`;
export default PaymentsPage;
