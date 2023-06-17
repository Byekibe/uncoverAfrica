import { useEffect, useCallback, useState } from "react";
import styled from "styled-components";

import makeRequest from "../utils/fetch-request";
import {
  BookingDetails,
  AdminLayout,
  SubHeader,
  CustomerTabs,
  BookingsSideMenu,
  UncoverModal,

} from "../components";
import DataTable from "../utils/table";

const CustomersPage = (props: any) => {
  const [showModal, setShowModal] = useState(false);
  const [customers, setCustomers] = useState([]);
  const [stats, setStats] = useState({});
  const [selectedCustomers, setSelectedCustomers] = useState({});
  const [error, setError] = useState(null);

  const showModalForm = (show: boolean) =>{
    setShowModal(show);
}

  const fetchCustomers = useCallback(() => {
    let _url = "/data/customers";

    makeRequest({ url: _url, method: "get", data: null }).then(
      ([status, result]) => {
        if (status !== 200) {
          setError(result?.message || "Error, could not fetch records");
        } else {
          setCustomers(result?.result || []);
          setStats(result?.stats || {});
        }
      }
    );
  }, []);

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <AdminLayout showSideMenu={true}>
      <Home>
        <SubHeader
          pageTitle="Bookings"
          pageSubTitle="Bookings and payments"
          btnTxt="Create new category"
          onPress = {()=>showModalForm(!showModal)}
          showCreateButton = {true}
        />
        <div className="container-fluid">
          <div className="row px-3">
            <div className="col-lg-12">
              <BookingsSideMenu />
              <div className="booking-details bg-c">
                <CustomerTabs {...stats} />
                <div className="booking-wrapper bg-c">
                  <DataTable data={customers} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Home>
    </AdminLayout>
  );
};

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
export default CustomersPage;
