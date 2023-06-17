
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

const HotelsForm = (props: Props) => {
    const [state, dispatch] = useContext(Context);
    const {setShowModal, selectedRecord, submitTitle } = props;


    const schema = {
        category_id : {
            type: 'db_select',
            label : 'Hotel Category ',
            model : 'categories',
            model_display_col : ['name'],
            placeholder : 'Choose Hotel\'s Category',
         },
         name : {
            type: 'textarea',
            label : 'Hotel Name ',
            placeholder : 'Enter Hotel\'s Name',
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
    const [endpoint, setEndpoint] = useState("/business/create");
    const [hotelsFormSchema, setHotelsFormSchema] = useState(schema);

    

    useEffect(() => {
        
        if(selectedRecord){
           
            setLabel('Update Record');
            setEndpoint('/business/update/' + selectedRecord.id)
           
            let editSchema : any = Object.assign({}, schema);
            Object.entries(selectedRecord).map(([key, value]) => {

                if(editSchema[key]){
                    editSchema[key].value = value;
                } else {
                    console.log('Edit form schema missing key', key);
                }
            })
            setHotelsFormSchema(editSchema);
        } else {
            setLabel(submitTitle);
        }
    },[selectedRecord])


    return(
        <FormWrapper>
            { LoadForm(hotelsFormSchema, label, endpoint) }
        </FormWrapper>
    )
}

const FormWrapper = styled.div`
`
export default HotelsForm;