import styled from "styled-components";
import { Header, 
    SubHeader
 } from "../components";

import React, { useContext, useEffect, useState } from "react";
import {Context}  from '../context';

const CategoriesPage = (user: any) => {

    const newCategoryModal = () => {
    }

    return (
        <Home>
            <Header/>
            <SubHeader
             pageTitle="The Social House"
             pageSubTitle="Hotel short description"
             btnTxt="Save Changes"
             onPress = {()=>null}
             showCreateButton = {false}
            />
            <div className="container-fluid">
                <div className="row px-3">
                   
                </div>
            </div>
        </Home>
    )
}

const Home = styled.div`
    width: 100%;
    height: auto;
    .bg-white{
        background-color: #fff;
        padding:10px;
    }
    `

export default CategoriesPage;
