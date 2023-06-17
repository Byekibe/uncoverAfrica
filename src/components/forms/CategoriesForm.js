import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { LoadForm } from '../../utils/form';
import { Context } from "../../context";
import makeRequest from  '../../utils/fetch-request';

const CategoriesPage = (props) => {
    const [state, dispatch] = useContext(Context);
    const {setShowModal, selectedRecord, submitTitle } = props;

    const schema = {
        name : {
            type: 'text',
            label : 'Name',
            placeholder : 'Enter New Category',
            required : false
         },
         category_color : {
            type: 'textarea',
            label : 'Category Color',
            placeholder : 'Choose category theme',
            required : true
         },
         description : {
            type: 'textarea',
            label : 'Category Description ',
            placeholder : 'Enter Category Descrption',
            required : true
         },
    }
    const [label, setLabel] = useState(submitTitle);
    const [endpoint, setEndpoint] = useState("/categories/create");
    const [categoriesFormSchema, setCategoriesFormSchema] = useState(schema);

    

    useEffect(() => {
        
        if(selectedRecord){
           
            setLabel('Update Record');
            setEndpoint('/categories/update/' + selectedRecord.id)
           
            let editSchema = Object.assign({}, schema);
            Object.entries(selectedRecord).map(([key, value]) => {

                if(editSchema[key]){
                    editSchema[key].value = value;
                } else {
                }
            })
            setCategoriesFormSchema(editSchema);
        } else {
            setLabel(submitTitle);
        }
    },[selectedRecord])


    return(
        <FormWrapper>
            { LoadForm(categoriesFormSchema, label, endpoint) }
        </FormWrapper>
    )
}

const FormWrapper = styled.div`
`
export default CategoriesPage;