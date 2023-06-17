import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { LoadForm } from '../../utils/form';

interface Props {
    setShowModal: any
}

const UsersForm = (props: Props) => {

    const schema = {
        first_name : {
            type: 'text',
            label : 'First Name',
            placeholder : 'Enter First Name',
            required : true
         },
         last_name : {
            type: 'text',
            label : 'Last Name ',
            placeholder : 'Enter Last Name',
            required : true
         },
         phone_number : {
            type: 'text',
            label : 'Phone Number',
            placeholder : 'Enter Phone number',
            required : true
         },
         username : {
            type: 'text',
            label : 'Username',
            placeholder : 'Enter Your User Name / Email',
            required : true
         },
         email : {
            type: 'text',
            label : 'Email ',
            placeholder : 'Valid Email address',
            required : true
         },
         password : {
             type : 'password',
             label : 'Password',
             required : true
 
         }


    }
    const [label, setLabel] = useState("Create User");
    const [endpoint, setEndpoint] = useState("/users/create");
 
    return(
        <FormWrapper>
            { LoadForm(schema, label, endpoint) }
        </FormWrapper>
    )
}

const FormWrapper = styled.div`
`
export default UsersForm;