
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { LoadForm } from '../../utils/form';
import { Context } from "../../context";
import makeRequest from  '../../utils/fetch-request';

interface Props {
    setShowModal: any
    selectedRecord : any
    submitTitle : any
}

const RoomsForm = (props: Props) => {
    const [state, dispatch] = useContext(Context);
    const {setShowModal, selectedRecord, submitTitle } = props;


    const schema = {
        branch_id : {
            type: 'db_select',
            label : ' Branch ',
            model : 'business-branches',
            model_display_col : ['branch'],
            placeholder : 'Choose Branch',
         },
         room_type_id : {
            type: 'db_select',
            label : 'Room Type ',
            model : 'room-types',
            model_display_col : ['title'],
            placeholder : 'Choose Room Type',
         },
         room_no : {
            type: 'text',
            label : 'Room Number ',
            placeholder : 'Enter Room Number',
            required : true
         },


    }

    const [label, setLabel] = useState(submitTitle);
    const [endpoint, setEndpoint] = useState("/rooms/create");
    const [roomsFormSchema, setRoomsSchema] = useState(schema);

    

    useEffect(() => {
        
        if(selectedRecord){
           
            setLabel('Update Record');
            setEndpoint('/rooms/update/' + selectedRecord.id)
           
            let editSchema : any = Object.assign({}, schema);
            Object.entries(selectedRecord).map(([key, value]) => {

                if(editSchema[key]){
                    editSchema[key].value = value;
                } else {
                    console.log('Edit form schema missing key', key);
                }
            })
            setRoomsSchema(editSchema);
        } else {
            setLabel(submitTitle);
        }
    },[selectedRecord])


    return(
        <FormWrapper>
            { LoadForm(roomsFormSchema, label, endpoint) }
        </FormWrapper>
    )
}

const FormWrapper = styled.div`
`
export default RoomsForm;