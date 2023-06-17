
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

const PerksForm = (props: Props) => {
    const [state, dispatch] = useContext(Context);
    const {setShowModal, selectedRecord, submitTitle } = props;

    
    const schema = {
        room_type_id : {
            type: 'db_select',
            label : ' Room Type ',
            model : 'room-types',
            model_display_col : ['title'],
            placeholder : 'Choose Room Type',
         },

         name : {
            type: 'text',
            label : ' Perk\'s Name',
            placeholder : 'Enter the Name of Perk',
            required : true
         },
         description : {
            type: 'textarea',
            label : ' Perks Description ',
            placeholder : 'Describe Your Perk',
         },
         start_date : {
            type: 'date',
            label : ' Start Day',
            placeholder : 'Enter a Date',
         },
         end_date : {
            type: 'date',
            label : ' End Date ',
            placeholder : 'Enter a Promotion',
         },

    }

    const [label, setLabel] = useState(submitTitle);
    const [endpoint, setEndpoint] = useState("/room-perks/create");
    const [houseRulesFormsSchema, setHouseRulesSchema] = useState(schema);

    

    useEffect(() => {
        
        if(selectedRecord){
           
            setLabel('Update Record');
            setEndpoint('/room-perks/update/' + selectedRecord.id)
           
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
export default PerksForm;