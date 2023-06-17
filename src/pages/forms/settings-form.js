import React, { useState, useEffect, useReducer} from 'react'
import CustomModalPane from '../../utils/_modal';
import { LoadForm } from '../../utils/form';


const SettingsForm = (props)  => {
   
    const schema = {
    name : {
        type: 'text',
        label : 'Setting',
        placeholder : 'Setting name',
        required : true
     },
     description : {
        type: 'textarea',
        label : 'Description ',
        placeholder : 'Settings description',
        required : true
     }
    }


    const [label, setLabel] = useState("Create Setting");
    const [endPoint, setEndPoint] = useState('/api/2.7.1/category/create');  
    return (
        <CustomModalPane show={props?.show}
        title = "Create Settings"
        target = "create-settings">
            {
                LoadForm(schema, label, endPoint)
            }
        </CustomModalPane>
        

    );
}
export default SettingsForm;
