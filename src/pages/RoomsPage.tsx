import { useEffect, useCallback, useState, useContext  } from 'react';
import styled from "styled-components";
import { useQuery} from 'react-query';
import { AdminLayout, 
    SubHeader,
    UncoverModal,
    RoomsForm,
    TableLoaders
 } from "../components";
import CategoryService from "../services/CategoryService";
import makeRequest from "../utils/fetch-request";
import DataTable from "../utils/table"
import CustomModalPane, { GenericDeleteModal } from '../utils/_modal';
import { Context } from "../context";
import HotelMenu from '../components/settings/HotelMenu';


const RoomsPage = (user: any) => {

    const [showModal, setShowModal] = useState(false); // showModal variable that's set to false.
    const [rooms, setRooms] = useState([]);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState();
    const [classname, setClassname] = useState('success');
    const [page, setPage] = useState(0);
    const [state, dispatch ] =  useContext(Context);
    const[selectedRecord, setSelectedRecord] = useState(null);
    const[modalTitle, setModalTitle] = useState("Create Room");
    const[submitTitle, setSubmitTitle] = useState("Create Room");
  
    useEffect(() => {
        dispatch({type:"SET", key:'context', payload:'roomspage'});
    }, [])
  
    useEffect(() => {
      if(state?.context){
        let status = state[state.context].status;
        let message = state[state.context].message;
        let data = state[state.context]?.data || {};
  
        console.log("state context ", state.context, "has data", state[state.context])
  
        if(status === true){
            setClassname('alert alert-success');     
          } else {
            setClassname('alert alert-danger');
          }
        setMessage(message);
      }
  
    }, [state?.roomspage])
  
  
    const showModalForm = (show: boolean, 
      title='Create Page', 
      submitTitle='Create Record') =>{
      setModalTitle(title);
      setSubmitTitle(submitTitle);
      setShowModal(show);
    }
  
    useEffect(()=> {
      if(!showModal) {
        setSelectedRecord(null);
      }
  
    }, [showModal])
  
    const fetchRooms = useCallback(() => {
      let _url = "/rooms/get";
  
      makeRequest({ url: _url, method: "get", data: null }).then(
        ([status, result]) => {
          if (status !== 200) {
            setError(result?.message || "Error, could not fetch records");
          } else {
            setRooms(result?.data || []);
          }
        }
      );
      
    }, [state?.page]);
  
  
    useEffect(() => {
      
      if(state?.updaterecord){
          let id = state.updaterecord.id;
          let model = state.updaterecord.model;
          let data_url = '/'+model+'/get?id=' + id;
          makeRequest({url:data_url, method:'get', data:null}).then(([status, response])=> {
              if(status !== 200){
                  dispatch({type:'SET', key:'server_error', payload:response.message})
  
              } else {
                  console.log("Get Data ", response);
                  setSelectedRecord(response.data.shift());
              }
              setModalTitle('Update Room Details');
              setShowModal(true);
          })
      }
  },[state?.updaterecord])
  
    useEffect(() => {
    fetchRooms();
    }, [fetchRooms]);
  

    return(
        <AdminLayout showSideMenu={true}>
        <Home>
            <SubHeader
             pageTitle="Rooms "
             pageSubTitle="200 hotel on Uncovers"
             btnTxt = "Create new Room"
             onPress = {()=>showModalForm(!showModal)}
             showCreateButton = {true}
            />
            <div className="container-fluid">

                <div className="row px-3">
                    <div className="col-lg-12">
                        <div className="stats-wrapper">
                            <div className="row">
                                
                                <div className="col-lg-3">
                                    <div className="home-stat-wrapper">
                                        <div className="stat-icon">
                                            <i className="fa fa-bed"></i>
                                        </div>
                                        <div className="stat-top-wrapper">
                                                <p className="stat-title">Total Hotels</p>
                                                <p className="stat-total">300</p>
                                        </div>
                                        <div className="stat-bottom-wrapper">
                                            <p><span className="text-success fw-bold">+5% </span>increase since last month</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="home-stat-wrapper">
                                        <div className="stat-icon">
                                        <i className="fa fa-bed"></i>
                                        </div>
                                        <div className="stat-top-wrapper">
                                            <p className="stat-title">Rooms Available</p>
                                            <p className="stat-total">3000</p>
                                    </div>
                                    <div className="stat-bottom-wrapper">
                                        <p><span className="text-danger fw-bold">-5% </span>decrease since last month</p>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="home-stat-wrapper">
                                        <div className="stat-icon">
                                        <i className="fa fa-users"></i>
                                    </div>
                                        <div className="stat-top-wrapper">
                                            <p className="stat-title">Rooms Booked</p>
                                            <p className="stat-total">300</p>
                                        </div>
                                        <div className="stat-bottom-wrapper">
                                        <p><span className="text-success fw-bold">+5% </span>increase since last month</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="home-stat-wrapper">
                                        <div className="stat-icon">
                                        <i className="fa fa-calendar"></i>
                                    </div> 
                                        <div className="stat-top-wrapper">
                                            <p className="stat-title">Fully Booked Hotels</p>
                                            <p className="stat-total">300</p>
                                        </div>
                                        <div className="stat-bottom-wrapper">
                                        <p><span className="text-danger fw-bold">-5% </span>decrease since last month</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                
                    </div>
                    </div>
                    <div className="row px-3" >
                    <div className="col-lg-12">
                        <HotelMenu/>
                        <div className="booking-details bg-c">
                            <div className="booking-wrapper bg-c">
                            <DataTable data={rooms} 
                            showActions = {{
                                model: "rooms",
                                actions : {
                                    edit: "#update-rooms",
                                    delete: "#generic-delete-modal",
                                }

                            }

                            } />
                        </div>
                        <p className="text-end mt-3 pagination-text">Showing page 1 of 1</p>
                        </div>
                    </div>
                </div>
            </div>
            <GenericDeleteModal />
            <CustomModalPane show={showModal}
           title = {modalTitle}
           target = "create-rooms"
           hideThisModal={() => setShowModal(false)}
           >
            { message && <div className={classname}>{message}</div> }
            <RoomsForm 
                setShowModal={setShowModal}
                selectedRecord={selectedRecord}
                submitTitle={submitTitle}
                />
        </CustomModalPane>
        </Home>
        </AdminLayout>
    )
}

const Home = styled.div`
  width: 100%;
  height: auto;
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
      background-color: #fff;
      padding: 30px 20px;
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
    .stats-wrapper {
        width:100%;
        margin-bottom:5px;
    }
  }
  .booking-container {
    margin: 20px 0px 100px 0px;
  }
`;
export default RoomsPage;
