import styled from "styled-components";

interface Props {
    pageTitle?: string,
    pageSubTitle?: string,
    btnTxt?: string,
    onPress: any,
    showCreateButton: boolean
}

const SubHeader = (props: Props) => {
    
    return(
        <Wrapper>
            <div className="page-title">
                <h3>{props.pageTitle}</h3>
                <p>{props.pageSubTitle}</p>
            </div>
            {props.showCreateButton &&
                <div className="page-buttons mt-5">
                    <button type="button" className="btn btn-primary btn-sm" onClick={()=>props.onPress()}><i className="fa fa-plus"></i> {props.btnTxt}</button>
                </div> 
            } 
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 0.5rem 1rem;
    height:100px;
    display: flex;
    justify-content: space-between;
    h3{
        font-size: 20px;
        margin:30px 0px 0px 0px;
    }
    p{
        color:#ccc,
        margin-top:10px
    }
    `

export default SubHeader;
