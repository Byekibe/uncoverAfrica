import styled from "styled-components";
import { AdminHeader,SideMenu} from "../";

import React, {ReactNode} from "react";

interface Props {
    children?: ReactNode | ReactNode[]
    showSideMenu: boolean
}

const AdminLayout = (props: Props) => {
    return(
        <Wrapper>
        <AdminHeader/>
        <SideMenu/>
        <ContentWrapper>
               {props.children}
        </ContentWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color:#f1f1f1;
`

const ContentWrapper = styled.div`
    margin-left: 120px;
    height:100%;
    padding-top:70px !important;
    overflow-x: scroll;
`

export default AdminLayout;