
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

const RoomTypesForm = (props: Props) => {
    const [state, dispatch] = useContext(Context);
    const {setShowModal, selectedRecord, submitTitle } = props;

    
    const schema = {
        business_id : {
            type: 'db_select',
            label : ' Branch ',
            model : 'business-branches',
            model_display_col : ['branch'],
            placeholder : 'Choose Branch',
         },

         title : {
            type: 'text',
            label : ' Room Type',
            placeholder : 'Enter Room Type',
            required : true
         },
         description : {
            type: 'textarea',
            label : ' Description ',
            placeholder : 'Describe the Room Type',
         },

         no_of_guests : {
            type: 'text',
            label : 'Number of Guests',
            placeholder : 'Enter Number of Guests',
            required : true
         },
         cost_per_night : {
            type: 'text',
            label : ' Cost Per Night',
            placeholder : 'Enter Cost Per Night',
            required : true
         },
         children_allowed : {
            type: 'select',
            label : ' Children Allowed',
            options : [
                {value:1, label:'YES'},
                {value:0, label:'NO'}
            ],
            placeholder : 'Are Children Allowed? ',
            required : true
         },
    }

    const [label, setLabel] = useState(submitTitle);
    const [endpoint, setEndpoint] = useState("/room-types/create");
    const [houseRulesFormsSchema, setHouseRulesSchema] = useState(schema);

    

    useEffect(() => {
        
        if(selectedRecord){
           
            setLabel('Update Record');
            setEndpoint('/room-types/update/' + selectedRecord.id)
           
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
export default RoomTypesForm;