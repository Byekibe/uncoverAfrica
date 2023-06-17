import styled from "styled-components";
import buildinghotel from "../../assets/images/buildinghotel.jpg";



const BookingDetails = (props: any) => {
    return(
        <Wrapper>
          <div className="booking-container">
                <div className="imgwrapper">
                     <img className="imgcontroller" src={props?.url_path || buildinghotel } alt="bookings" />   
                </div>  
                <div className="customer-details">
                    <h4>{ props?.business_name}</h4>
                    <p>{props?.business_description}</p>
                    <span className="book-type">Request to book</span>
                    <h4 className="customercash">
                        KSH {props?.cost_per_night?.toLocaleString(undefined, {maximumFractionDigits:2}) }
                    </h4>
                </div>
                <div className="checkdetails">
                     <div className="checkwrapper">
                            <div className="checkin">
                                <h6>check-in</h6>
                                <h4 className="time"> {props?.check_in_time}</h4>
                                <h6 className="date">{props?.check_in_date}</h6>
                            </div>
                            <div className="checkout">
                                <h6>check-out</h6>
                                <h4 className="time">{props?.check_out_time}</h4>
                                <h6 className="date">{props?.check_out_date}</h6>
                            </div> 
                     </div> 
                     {/**
                     <div><button>book again</button></div>  */}
                </div>    
        </div>   
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height:180px;
    width:100%;
    cursor: pointer;
       .booking-container{
            display:flex;
            background-color:#fff;
            height:100%;
            flex-wrap:wrap;
            margin-top:20px;
            .imgwrapper{
                flex:.2;
                margin-right:20px;
                height:100%;
                .imgcontroller{
                    width:320px;
                    height:180px;
                }
            }
            .customer-details{
                flex:.4;
                height:100%; 
                padding:0px 0 0 30px;
                 h4{
                     margin-top:20px !important;
                     text-transform:capitalize;
                     font-size:18px;
                 } 
                 h4.customercash{
                     margin-top:20px !important;
                     font-size:18px;
                 }
                 p{
                     font-size:13px;
                 }
            }
            .checkdetails{
                flex:.3;
                height:100%; 
                padding:40px 30px 0 0 ;  
                .checkwrapper{
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    .checkin{
                        position:relative;
                    }
                    .checkin::before{
                       position:absolute;
                       content:"";
                       border:1px solid #0a5ed7;
                       height:95px;
                       right:-100%;
                    }
                    h6{
                        text-transform:uppercase; 
                        font-size:15px;
                    }
                    
                      .time ,.date{
                            margin-top:15px;
                        }
                }
                button{
                    width:280px;
                    height:40px;
                    text-transform:capitalize;
                    margin:30px 0 0 13px;
                    color:#035efc;
                    border:1px solid #0a5ed7;
                    outline:none;
                }
            }
        }
        .booking-container:hover{
            background-color:#f9f9f9;
        }
        .book-type{
            background-color: orange;
            border-radius:5px;
            padding:5px 10px;
        }
    `

export default BookingDetails;
