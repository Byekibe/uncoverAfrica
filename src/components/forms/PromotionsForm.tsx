
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

const PromotionsForm = (props: Props) => {
    const [state, dispatch] = useContext(Context);
    const {setShowModal, selectedRecord, submitTitle } = props;

    
    const schema = {
        room_type_id : {
            type: 'db_select',
            label : ' Branch ',
            model : 'room-types',
            model_display_col : ['title'],
            placeholder : 'Choose Branch',
         },

         title : {
            type: 'text',
            label : ' Promotion Title',
            placeholder : 'Enter Promotion Title',
            required : true
         },
         narration : {
            type: 'textarea',
            label : ' Promotion ',
            placeholder : 'Describe promotion',
         },
         start_date : {
            type: 'date',
            label : ' Start Day',
            placeholder : 'Enter a Date',
         },
         end_date : {
            type: 'date',
            label : ' Promotion ',
            placeholder : 'Enter a Promotion',
         },
         day : {
            type: 'select',
            label : ' Day For Promotion ',
            options : [
                {value:'MONDAY', label:'MONDAY'},
                {value:'TEUSDAY', label:'TEUSDAY'}, 
                {value:'WEDNESDAY', label:'WEDNESDAY'},
                {value:'THURSDAY', label:'THURSDAY'},
                {value:'FRIDAY', label:'FRIDAY'},
                {value:'SATURDAY', label:'SATURDAY'},
                {value:'SUNDAY', label:'SUNDAY'},
            ],
            placeholder : 'Choose Day to Offer Promotion',
         },
         percentage_discount : {
            type: 'text',
            label : ' Percentage Disount ',
            placeholder : 'Enter Promotion Discount : ',
            required : true
         },
         deduct_from_cost : {
            type: 'select',
            label : ' Deduct From Total Cost? ',
            options : [
                {value:1, label:'YES'},
                {value:0, label:'NO'}
            ],
            placeholder : 'Enter amount to deduct $ ',
            required : true
         },


    }

    const [label, setLabel] = useState(submitTitle);
    const [endpoint, setEndpoint] = useState("/promotions/create");
    const [houseRulesFormsSchema, setHouseRulesSchema] = useState(schema);

    

    useEffect(() => {
        
        if(selectedRecord){
           
            setLabel('Update Record');
            setEndpoint('/promotions/update/' + selectedRecord.id)
           
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
export default PromotionsForm;