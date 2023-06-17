import styled from "styled-components";
import logo from "../../assets/images/logo.jpeg";
import user from "../../assets/images/user.jpeg";
import Avatar from 'react-avatar';
import { useLocation } from "react-router-dom"
import React, { useEffect, useState } from "react";


const Header = () => {

    const location = useLocation();
    const [currentRoute, setCurrentRoute] = useState((location.pathname.substring(1)));

    useEffect(()=>{
        console.log(currentRoute);
    }, [location])

    return(
        <HeaderWrapper>
           <div className="top-menu-wrapper">
                <div className="logo">
                    <img className="imglogo" src={logo} alt="Uncover Logo"/>
                </div>
                <div className="search-wrapper"> 
                    <div className="input-wrapper">
                        <input type="text" 
                            className="form-control py-2" 
                            id="searchTxt" 
                            placeholder="Search bookings"
                        />
                        <i className="search-icon fa fa-search"/>
                    </div>
                    <div className="user-profile">
                            <Avatar color={'#188754'} round={true} name="Evans Wanyama" size="25" />
                            <div className="nameuser"><p>Evans ...</p></div> 
                                <div className="userinfo">
                                    <div className="details-wrapper">
                                        <div>
                                            <img className="imguser imgdetails" src={user} alt="Uncover Logo"/>
                                        </div> 
                                        <div className="user-wrapper">
                                                <p className="staffname">Evans Wanyama</p>
                                                <p className="userrole">Manager</p>
                                        </div> 
                                    </div>
                                    <hr className="firsthr"/>
                                    <p><a href="#">Change password</a></p>
                                    <p><a href="#">Account Details</a></p>
                                    <p><a href="#">Help </a></p>
                                    <hr/>
                                    <p className="loguser">logout</p>
                                </div>
                     </div>    
                </div>
           </div>
           <div className="bottom-menu-wrapper">
               <ul>
                   <li><a href="/home" className={currentRoute === "home"?"active":""}><i className="fa fa-home"></i> Home</a></li>
                   <li><a href="/categories" className={currentRoute === "categories"?"active":""}><i className="fa fa-file-text-o"></i> Categories</a></li>
                   <li><a href="/markets"  className={currentRoute === "markets"?"active":""}><i className="fa fa-map-marker"></i> Markets</a></li>
                   <li><a href="/hotels"  className={currentRoute === "hotels"?"active":""}><i className="fa fa-bed"></i> Hotels</a></li>
                   <li><a href="/bookings"  className={currentRoute === "bookings"?"active":""}><i className="fa fa-calendar"></i> Bookings <span className="count">6</span></a></li>
                   <li><a href="/settings" className={currentRoute === "settings"?"active":""}><i className="fa fa-gears"></i> Settings</a></li>{/* users, app settings, booking window, ranking algorithm*/}
                   <li><a href="/alerts"><i className="fa fa-bell-o"></i> Alerts <span className="count">2</span></a></li>
               </ul>
              {/*<ul>
                   <li><a href="">Dashboard</a></li>
                   <li><a href="">Bookings</a></li>
                   <li><a href="">Inventory</a></li>
                   <li><a href="">Profile</a></li>
                   <li><a href="">Reviews</a></li>
                   <li><a href="">Offers</a></li>
                   <li><a href="">Alerts</a></li>
                </ul>*/}
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
    border-bottom: 1px solid #ccc;
    .logo{
        padding-right: 20px;
        margin-right:20px;
        height:100%;
    }
    .imglogo{
       width: 150px;
       height:30px;
    }
    .imguser{
        height: 20px;
        width: 20px;
        border-radius: 50%;
        cursor: pointer;
        margin-bottom:3.5px;
    }
    .top-menu-wrapper{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 10px 0px;
    }
    .search-wrapper{
        height: 40px;
        width: 450px;
        display: flex;
        flex-direction: row;
        justify-content: end;
        input{
            width:100%;
            font-size: 14px;
            color:#188754;
        }
        input::placeholder { 
          color: #188754;
        }
        .input-wrapper{
           position: relative;
           width:65%;
        }
        .search-icon{
            position: absolute;
            color: #188754;
            font-size:20px;
            right:12px;
            top:8px;
        }
    }

    .user-profile{
        background-color: #188754;
        height: 20px;
        width: 20px;
        text-align:center;
        border-radius:50%;
        margin:0 65px 0 60px;
        color: #fff;
        text-transform:capitalize;
        position: relative;
        .nameuser{
            width:50px;
            height:15px;
            color:#000;
            margin:3px 0 0 -15px;
            font-size:.7rem;
        }
        .userinfo{
            width:195px;
            height:275px;
            background-color:#fff;
            z-index:1000;
            position:absolute;
            color:#000;
            top:60px;
            right:-66px;
            font-size:.7rem;
            display:none;
            transition:500ms;
            border:1px solid #ccc;

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
       }
         .userinfo::before{
            content: "";
            position: absolute;
            bottom: 100%;
            left: 50%;
            margin-left: -9px;
            border-width: 9px;
            border-style: solid;
            border-color:transparent transparent  #ccc transparent;
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
    .bottom-menu-wrapper{
        padding:0px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    ul {
        padding: 1px 25px;
        margin:5px 0px 10px 0px;
        li {
            float: left;
            list-style: none;
            margin-right:10px;
            a {
                padding: 7px 20px;
                text-decoration: none;
                color: #000;
                cursor: pointer;
            }
            i {
                font-size: 17px;
                margin-right: 3px;
            }
            a:hover, a.active{
                background-color: #188754;
                color: #fff
            }
            span.count{
                background-color: red;
                color: #fff;
                padding: 1px 5px;
                font-size:12px;
            }
        }
    }
    `

export default Header;