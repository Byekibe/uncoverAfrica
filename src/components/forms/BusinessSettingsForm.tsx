import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { LoadForm } from '../../utils/form';

interface Props {
    setShowModal: any
}
const BusinessSettingsForm = (props: Props) => {
    const schema = {
        
        branch_id : {
            type: 'db_select',
            label : 'Hotel Branch',
            model:'business-branches',
            placeholder: 'Choose Branch Name',
            model_display_col:['branch_name'],  
            required : true
         },
         setting_id : {
            type: 'db_select',
            label : 'Business Setting ',
            model:'settings',
            placeholder: 'Select setting',
            model_display_col:['name'],  
            required : true
         },

         enabled : {
            type: 'checkbox',
            label : 'Enabled ',
            value : 0,
            checked:false,
         }
    }
    const [label, setLabel] = useState("Create Business Setting");
    const [endpoint, setEndpoint] = useState("/business-settings/create");

    return(
        <FormWrapper>
            { LoadForm(schema, label, endpoint) }
        </FormWrapper>
    )
}

const FormWrapper = styled.div`
`
export default BusinessSettingsForm;