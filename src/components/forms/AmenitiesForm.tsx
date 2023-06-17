
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

const AmenitiesForm = (props: Props) => {
    const [state, dispatch] = useContext(Context);
    const {setShowModal, selectedRecord, submitTitle } = props;


    const schema = {
      
         room_type_id : {
            type: 'db_select',
            label : 'Room Type ',
            model : 'room-types',
            model_display_col : ['title'],
            placeholder : 'Choose Room Type',
         },
         name : {
            type: 'text',
            label : 'Amenity Name ',
            placeholder : 'Enter Room Number',
            required : true
         },
         description : {
            type: 'textarea',
            label : 'Amenity Description ',
            placeholder : 'Enter Amenity Description',
            required : true
         },
         extra_cost : {
            type: 'text',
            label : 'Amenity Extra Cost',
            placeholder : 'Enter Extra Cost',
            required : true
         },
         
         

    }

    const [label, setLabel] = useState(submitTitle);
    const [endpoint, setEndpoint] = useState("/room-amenities/create");
    const [amenitiesSchema, setAmenitiesSchema] = useState(schema);

    

    useEffect(() => {
        
        if(selectedRecord){
           
            setLabel('Update Record');
            setEndpoint('/room-amenities/update/' + selectedRecord.id)
           
            let editSchema : any = Object.assign({}, schema);
            Object.entries(selectedRecord).map(([key, value]) => {

                if(editSchema[key]){
                    editSchema[key].value = value;
                } else {
                    console.log('Edit form schema missing key', key);
                }
            })
            setAmenitiesSchema(editSchema);
        } else {
            setLabel(submitTitle);
        }
    },[selectedRecord])


    return(
        <FormWrapper>
            { LoadForm(amenitiesSchema, label, endpoint) }
        </FormWrapper>
    )
}

const FormWrapper = styled.div`
`
export default AmenitiesForm;