import { useEffect, useCallback, useState, useContext  } from 'react';
import styled from "styled-components";
import { useQuery} from 'react-query';
import { AdminLayout, 
    SubHeader,
 } from "../components";
import makeRequest from "../utils/fetch-request";
import DataTable from "../utils/table"
import CustomModalPane from '../utils/_modal';
import UsersForm from '../components/forms/UsersForm';
import { Context } from "../context";
import SettingsMenu from '../components/settings/SettingsMenu';


const UsersPage = (user: any) => {

  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState();
  const [classname, setClassname] = useState('success');
  const [page, setPage] = useState(0);
  const [state, dispatch ] =  useContext(Context);

  useEffect(() => {
      dispatch({type:"SET", key:'context', payload:'userspage'});
  }, [])

  useEffect(() => {
    if(state?.context){
      let status = state[state.context].status;
      let message = state[state.context].message;
      let data = state[state.context]?.data || {};

      console.log("state context ", state.context, "has data", state[state.context])

      if(status === true){
        setClassname('success');     
      } else {
        setClassname('error');
      }
      setMessage(message);
    }

  }, [state?.userspage])


  const showModalForm = (show: boolean) =>{
    setShowModal(show);
  }

  const fetchUsers = useCallback(() => {
    let _url = "/users/get";

    makeRequest({ url: _url, method: "get", data: null }).then(
      ([status, result]) => {
        if (status !== 200) {
          setError(result?.message || "Error, could not fetch records");
        } else {
          setUsers(result?.data || []);
        }
      }
    );
    
  }, [state?.page]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  return (
    <AdminLayout showSideMenu={true}>
      <Home>
        <SubHeader
          pageTitle="Users"
          pageSubTitle="Users Configurations"
          btnTxt="Create New User"
          onPress = {()=>showModalForm(!showModal)}
          showCreateButton = {true}
        />
        <div className="container-fluid">
          <div className="row px-3">
            <div className="col-lg-12">
              <SettingsMenu />
              <div className="booking-details bg-c">
                <div className="booking-wrapper bg-c">
                   <DataTable data={users} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <CustomModalPane show={showModal}
           title = "Create User"
           target = "create-user"
           hideThisModal={() => setShowModal(false)}
           >
            { message && <div className={classname}>{message}</div> }
        <UsersForm setShowModal={setShowModal}/>
        </CustomModalPane>
      </Home>
    </AdminLayout>
  );
};

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
  }
  .booking-container {
    margin: 20px 0px 100px 0px;
  }
`;

export default UsersPage;
