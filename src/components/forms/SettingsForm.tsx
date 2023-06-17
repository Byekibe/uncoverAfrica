import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { LoadForm } from '../../utils/form';
import { Context } from "../../context";
import makeRequest from  '../../utils/fetch-request';

interface Props {
    setShowModal: any,
    selectedRecord : any,
    submitTitle : any

}

const SettingsForm = (props: Props) => {
    const [state, dispatch] = useContext(Context);
    const {setShowModal, selectedRecord, submitTitle } = props;
    
    const schema = {
        name : {
            type: 'text',
            label : 'Name',
            placeholder : 'Enter Setting Name',
            required : false
         },
         description : {
            type: 'textarea',
            label : 'Setting Description ',
            placeholder : 'Enter Setting Description',
            required : true
         },
         enabled : {
            type: 'checkbox',
            label : 'Enabled ',
            value : 0,
            checked:false,
         }
    }
    const [label, setLabel] = useState(submitTitle);
    const [endpoint, setEndpoint] = useState("/settings/create");
    const [settingsFormSchema, setSettingsFormSchema] = useState(schema);

    

    useEffect(() => {
        
        if(selectedRecord){
           
            setLabel('Update Record');
            setEndpoint('/settings/update/' + selectedRecord.id)
           
            let editSchema : any = Object.assign({}, schema);
            Object.entries(selectedRecord).map(([key, value]) => {

                if(editSchema[key]){
                    editSchema[key].value = value;
                } else {
                    console.log('Edit form schema missing key', key);
                }
            })
            setSettingsFormSchema(editSchema);  
        } else {
            setLabel(submitTitle);
        }
    },[selectedRecord])


    return(
        <FormWrapper>
            { LoadForm(settingsFormSchema, label, endpoint) }
        </FormWrapper>
    )
}

const FormWrapper = styled.div`
`
export default SettingsForm;