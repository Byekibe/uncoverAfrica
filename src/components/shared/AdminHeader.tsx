import styled from "styled-components";
import logo from "../../assets/images/logo.jpeg";
import Avatar from 'react-avatar';

const AdminHeader = (props: any) => {

    return(
        <HeaderWrapper>
             <div className="container-fluid">
                 <div className="row">
                     <div className="col-lg-3">
                        <div className="logo">
                           <i className="fa fa-bars"/>
                           <img className="imglogo" src={logo} alt="Uncover Logo"/>
                        </div>
                     </div>
                     <div className="col-lg-6 d-flex justify-content-center text-center">
                        <div className="input-wrapper">
                            <i className="search-icon fa fa-search"/>
                                <input type="text" 
                                    className="form-control px-5" 
                                    id="searchTxt" 
                                    placeholder="Global search"
                                />
                            <i className="setting-icon fa fa-cog" aria-hidden="true"></i>    
                        </div>
                     </div>
                     <div className="col-lg-3 text-right">
                        <div className="right-container">
                            <div className="help-wrapper">
                                <i className="fa fa-question"></i>
                            </div>
                            <div className="user-profile">
                                <Avatar color={'#188754'} round={true} name="Evans Wanyama" size="35" />
                                <div className="nameuser">
                                    <span className="user-name">Evans Wanyama</span>
                                    <span className="company">Uncover Africa</span>
                                </div> 
                                <div className="userinfo">
                                    <p><a href="#">Change password</a></p>
                                    <p><a href="#">Account Details</a></p>
                                    <p><a href="#">Help </a></p>
                                    <hr/>
                                    <p className="loguser">logout</p>
                                </div>
                            </div> 
                        </div>
                     </div>
                 </div>
             </div>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
    padding: 0 1.6rem;
    background-color: #fff;
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #e0e0e0;
    padding:10px 0px;
    position:fixed;
    z-index:10;
    .logo{
        padding: 6px 20px 0px 18px;
        margin-right:20px;
        height:100%;
        display: flex;
        i{
            font-size:15px;
            margin-right:15px;
            margin-top:6px;
            color:#666;
            height: 25px;
            border:1px solid #ccc;
            padding:3px 7px 0px;
        }
        i:hover{
            color:#fff;
            background-color:#188754;
            cursor:pointer;
            border:1px solid #188754;
        }
    }
    .imglogo{
       width: 150px;
       height:30px;
       margin-top:2px;
    }
    .input-wrapper{
        position: relative;
        width:60%;
        align-self: center;
     }
     .search-icon,.setting-icon {
         position: absolute;
         color: #188754;
         font-size:20px;
         top:9px;
     }
     .search-icon{
        left:13px;
     }
     .setting-icon{
        right:12px;
        cursor:pointer;
     }
     .user-profile{
        width:235px;
        background-color: #f1f1f1;
        margin:0 13px 0 0px;
        color: #fff;
        padding:6px 13px;
        text-transform:capitalize;
        position: relative;
        display: flex;
        flex-direction: row;
        border-radius:5px;
        border: 1px solid #ccc;
        .nameuser{
            color:#000;
            margin:3px 0 0 9px;
            span{
                font-size:15px;
                display:block;
                line-height:1;
            }
            span.user-name{
                font-weight:bold;
                margin-bottom:4px;
            }
            span.company{
                font-size:12px;
            }
        }
        .userinfo{
            width:235px;
            background-color:#f1f1f1;
            z-index:1000;
            position:absolute;
            color:#000;
            top:45px;
            right:-1px;
            font-size:.7rem;
            display:none;
            transition:500ms;
            border:1px solid #ccc;
            padding:20px 10px 10px;
            border-bottom-right-radius:5px;
            border-bottom-left-radius:5px;
            .details-wrapper{
                display:flex;
                justify-content:space-between;
                padding:15px 24px;
                .imgdetails{
                    width:40px;
                    height:40px;
                    background-color:#000;
                }
            }
            .firsthr{
                margin-top:-5px;
            }
            p{
               font-size:16px;
               padding:5px 0px;
            }
       }
          .loguser,.userinfo p a {
              text-decoration:none;
              color:#000;
              cursor:pointer;
          }
    }
        .user-profile:hover .userinfo{
            display:block;
        }
    }
    .right-container{
        display:flex;
        flex-direction: flow;
        margin-left:40px;
        .help-wrapper{
            height:42px;
            width:42px;
            border-radius:30px;
            background-color:#f1f1f1;
            text-align:center;
            margin-right:70px;
            margin-top:5px;
        }
        .help-wrapper i{
            padding:7px;
            font-size:25px;
            color:#188754;
        }
    }
    
    `

export default AdminHeader;
