
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

const HouseRulesForm = (props: Props) => {
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
         narration : {
            type: 'textarea',
            label : ' House Rule ',
            placeholder : 'Enter House Rule',
            required : true
         },


    }

    const [label, setLabel] = useState(submitTitle);
    const [endpoint, setEndpoint] = useState("/house-rules/create");
    const [houseRulesFormsSchema, setHouseRulesSchema] = useState(schema);

    

    useEffect(() => {
        
        if(selectedRecord){
           
            setLabel('Update Record');
            setEndpoint('/house-rules/update/' + selectedRecord.id)
           
            let editSchema : any = Object.assign({}, schema);
            Object.entries(selectedRecord).map(([key, value]) => {

                if(editSchema[key]){
                    editSchema[key].value = value;
                } else {
                    console.log('Edit form schema missing key', key);
                }
            })
            setHouseRulesSchema(editSchema);
        } else {
            setLabel(submitTitle);
        }
    },[selectedRecord])


    return(
        <FormWrapper>
            { LoadForm(houseRulesFormsSchema, label, endpoint) }
        </FormWrapper>
    )
}

const FormWrapper = styled.div`
`
export default HouseRulesForm;