
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

const HotelBranchForm = (props: Props) => {
    const [state, dispatch] = useContext(Context);
    const {setShowModal, selectedRecord, submitTitle } = props;


    const schema = {
        business_id : {
            type: 'db_select',
            label : 'Hotel Main Branch ',
            model : 'business',
            model_display_col : ['name'],
            placeholder : 'Choose Hotel\'s Category',
         },
        branch_name : {
            type: 'textarea',
            label : 'Branch Name',
            placeholder : 'Enter Branch\'s Name',
            required : true
         },
         location : {
            type: 'textarea',
            label : 'Hotel Location ',
            placeholder : 'Enter Hotel Descrption',
            required : true
         },

         description : {
            type: 'textarea',
            label : 'Hotel Description ',
            placeholder : 'Enter Hotel Descrption',
            required : true
         },

    }

    const [label, setLabel] = useState(submitTitle);
    const [endpoint, setEndpoint] = useState("/business-branches/create");
    const [hotelBranchFormSchema, setHotelBranchFormSchema] = useState(schema);

    useEffect(() => {
        
        if(selectedRecord){
           
            setLabel('Update Record');
            setEndpoint('/business-branches/update/' + selectedRecord.id)
           
            let editSchema : any = Object.assign({}, schema);
            Object.entries(selectedRecord).map(([key, value]) => {

                if(editSchema[key]){
                    editSchema[key].value = value;
                } else {
                    console.log('Edit form schema missing key', key);
                }
            })
            setHotelBranchFormSchema(editSchema);
        } else {
            setLabel(submitTitle);
        }
    },[selectedRecord])


    return(
        <FormWrapper>
            { LoadForm(hotelBranchFormSchema, label, endpoint) }
        </FormWrapper>
    )
}

const FormWrapper = styled.div`
`
export default HotelBranchForm;