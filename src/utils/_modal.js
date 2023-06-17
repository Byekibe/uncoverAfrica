import React, {useState, useContext, useEffect, useRef} from 'react';
import { Context }  from '../context';
import makeRequest from "./fetch-request";
import { Modal } from 'react-bootstrap';
import styled from "styled-components";


export const GenericDeleteModal = (props) => {
  const [ state, dispatch ] =  useContext(Context);
  const [ model, setModel ] =  useState();
  const [ id, setId ] =  useState();
  const [ errorMessage, setErrorMessage ] =  useState(null);
  const [ message, setMessage ] =  useState(null);
  const modalDeleteButtonRef = useRef();
  const [hideThisModal, setHideThisModal] = useState(true);
  const [showDeleteButton , setShowDeleteButton]  = useState(true);
  const [modal_title, setModalTitle] = useState('Confirm !');
  const [cancelButtonLabel, setCancelButtonLabel] = useState('Cancel');
  const [showCloseButton , setShowCloseButton]  = useState(true);

  const cancelDeleteRecord = () => {
      setCancelButtonLabel('Cancel');
      setErrorMessage(null);
      setMessage(null);
      dispatch({type:"DEL", key:"deleterecord"});
      setHideThisModal(true);
      setShowCloseButton(true);
      setModalTitle('Confirm !');
  }

  const deleteRecordFunction = () => {
      let url = "/" + model + "/delete/"+id;
      setErrorMessage(null);
      setMessage(null);
      makeRequest({url:url, method:"delete", data:null}).then(([status, result]) => {
          if(status > 299) {   
              if(status < 500) { 
                   setErrorMessage(result.message);
               } else {

                   setErrorMessage("Server error - Failed to delete record");
               }
           } else {
               setModalTitle("Good !");
               setCancelButtonLabel('Close');
               setShowDeleteButton(false);
               setShowCloseButton(false);
               setMessage("Record deleted successfully");
               dispatch({type:"SET", key:"page", payload:state?.page === 0 ? 1:0});

           } 
       });
  }

  useEffect(() => {
      console.log("We have reached the useEffect for deleting function");
      if(state?.deleterecord){
         setModel(state?.deleterecord.model);
         setId(state?.deleterecord.id);
         console.log("")
         setShowDeleteButton(true);
         setHideThisModal(!hideThisModal);
      }        

  }, [state?.deleterecord]);
  

  return (
        <Modal show ={!hideThisModal} id="generic-delete-modal" className="modal fade" aria-modal="true">
            <div className="modal-dialog modal-confirm">
                <div className="modal-content">
                     <Modal.Header className="modal-header">
                        <h3 className='mdoal-title'> {modal_title} </h3> <br></br>
                        { showCloseButton && <button type="button" className="btn btn-outline-danger" data-dismiss="modal" aria-hidden="true" onClick={() => setHideThisModal(true)}>
                            <span aria-hidden="true">&times;</span>
                        </button> }
                    </Modal.Header>
                     
                    <Modal.Body className="modal-body">
                        <div className="d-flex justify-content-center">
                            <i className="ni ni-fat-remove text-danger fa-5x"></i>
                        </div>						
                      { message == null && (<p className='alert alert-warning'>Do you really want to delete {model} record? This process cannot be undone.</p>)}
                      { message && (<p className="text-success">{message}</p>)}
                      { errorMessage && (<p className="text-danger">{errorMessage}</p>)}
                    </Modal.Body>
                    <Modal.Footer className="modal-footer justify-content-center">
                        <button type="button" className="btn btn-secondary" onClick={()=>cancelDeleteRecord()} data-dismiss="modal">{cancelButtonLabel}</button>
                        { showDeleteButton && <button type="button" onClick={() => deleteRecordFunction()} className="btn btn-danger">Delete</button> }
                    </Modal.Footer> 
                </div> 
            </div>
        </Modal>
     ) 
};

const CustomModalPane = (props) => {
    return (
        <Modal  show={props.show} className={"modal fade"} id={props?.target} tabIndex="-1" role="dialog" aria-labelledby="default-modal-pane" aria-hidden="true">
          <div className={`modal-dialog-centered ${props.class_name || "" }`}  role="document">
            <div className="modal-content">
              <Modal.Header className="modal-header">
                <h5 className="modal-title" id="default-modal-pane">{props?.title}</h5>
                <button type="button" className="btn btn-outline-danger" data-dismiss="modal" aria-label="Close" onClick={props.hideThisModal}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </Modal.Header>
              <Modal.Body className="">
                 {props?.children}
              </Modal.Body>
            </div>
          </div>
        </Modal>
    )

};
export default CustomModalPane;

