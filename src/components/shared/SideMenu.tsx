import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SideMenu = (props: any) => {
    
    const location = useLocation();
    const [currentRoute, setCurrentRoute] = useState((location.pathname.substring(1)));

    return(
        <Wrapper>
            <ul>
                <li className={currentRoute === "home"?"active":""}><a href="/home" className={currentRoute === "home"?"active":""}><i className="fa fa-home"></i> Home</a></li>
                <li className={currentRoute === "categories"?"active":""}><a href="/categories" className={currentRoute === "categories"?"active":""}><i className="fa fa-file-text-o"></i> Categories</a></li>
                <li className={currentRoute === "markets"?"active":""}><a href="/markets"  className={currentRoute === "markets"?"active":""}><i className="fa fa-map-marker"></i> Markets</a></li>
                <li className={currentRoute === "hotels"?"active":""}><a href="/hotels"  className={currentRoute === "hotels"?"active":""}><i className="fa fa-bed"></i> Hotels</a></li>
                <li className={currentRoute === "bookings"?"active":""}><a href="/bookings"  className={currentRoute === "bookings"?"active":""}><i className="fa fa-calendar"></i> Bookings <span className="count">6</span></a></li>
                <li className={currentRoute === "settings"?"active":""}><a href="/settings" className={currentRoute === "settings"?"active":""}><i className="fa fa-gears"></i> Settings</a></li>{/* users, app settings, booking window, ranking algorithm*/}
                {/*<li><a href="/alerts"><i className="fa fa-bell-o"></i> Alerts <span className="count">2</span></a></li>*/}
            </ul>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color:#fff;
    height: 100%;
    width:110px;
    position:fixed;
    top:68px;
    border-right: 1px solid #ccc;
    z-index: 10;
    ul{
        padding:0;
        margin:0;
        li{
            text-align:center;
            padding:15px;
            border-top: 1px solid #f1f1f1;
            border-bottom: 1px solid #f1f1f1;
            a{
                color:#000;
                text-decoration:none;
                i{
                    font-size: 25px;
                    display: block;
                    margin-bottom:5px;
                }
            }
            a:hover, li.active{
              color: #fff
            }
            span.count{
                background-color: red;
                color: #fff;
                padding: 1px 5px;
                font-size:12px;
            }
        }
        li:hover, li.active{
            background-color: #188754;
            color: #fff;
            a{
                color: #fff;
            }
        }
        
    }
`
export default SideMenu;