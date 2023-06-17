import { useEffect, useCallback, useState, useContext  } from 'react';
import styled from "styled-components";
import { AdminLayout, 
    SubHeader,UsersList
 } from "../components";
import makeRequest from "../utils/fetch-request";
import DataTable from "../utils/table"
import SettingsMenu from "../components/settings/SettingsMenu";
import CustomModalPane from "../utils/_modal";
import { Context } from "../context";
import BusinessSettingsForm from '../components/forms/BusinessSettingsForm';

const BusinessSettings = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [business_settings, setBusinessSettings] = useState([]);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState();
  const [classname, setClassname] = useState('success');
  const [page, setPage] = useState(0);
  const [state, dispatch ] =  useContext(Context);


  useEffect(() => {
    dispatch({type:"SET", key:'context', payload:'business-settingspage'});
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

}, [state?.business_settings])


const showModalForm = (show) =>{
  setShowModal(show);
}

const fetchBusinessSettings = useCallback(() => {
  let _url = "/business-settings/get";

  makeRequest({ url: _url, method: "get", data: null }).then(
    ([status, result]) => {
      if (status !== 200) {
        setError(result?.message || "Error, could not fetch records");
      } else {
        setBusinessSettings(result?.data || []);  
      }
    }
  );
  
}, [state?.page]);

useEffect(() => {
  fetchBusinessSettings();
}, [fetchBusinessSettings]);
    
    
    return (
        <AdminLayout showSideMenu={true}>
        <Home>
            <SubHeader
             pageTitle="Business Settings"
             pageSubTitle="Uncover settings"
             btnTxt="Create new Business Setting"
             onPress = {()=>showModalForm(!showModal)}
             showCreateButton = {true}
            />
            <div className="container-fluid">
              <div className="row px-3">
                <div className="col-lg-12">
                  <SettingsMenu />
                  <div className="booking-details bg-c">
                    <div className="booking-wrapper bg-c">
                        <DataTable data={business_settings} /> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <CustomModalPane show={showModal}
           title = "Create Business Setting"
           target = "create-user"
           hideThisModal={() => setShowModal(false)}
           >
            { message && <div className={classname}>{message}</div> }
            <BusinessSettingsForm setShowModal={setShowModal}/>
        </CustomModalPane>
        </Home>
        </AdminLayout>
    )
}

const Home = styled.div`
    width: 100%;
    height: auto;
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
             background-color:#fff;
             padding:30px 20px;
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
     .booking-container{
        margin: 20px 0px 100px 0px;
      }
    `
export default BusinessSettings;
