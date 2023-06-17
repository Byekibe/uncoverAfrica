import styled from "styled-components";

interface Props {
    users?: string,
}

const BookingSummary= (props: Props) => {

    return(
        <Booking>
            <table>
                <thead>
                    <tr>
                        <td>Hotel</td>
                        <td>Customer</td>
                        <td>Type</td>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
            <div className="no-bookings">
                  <p>No bookings now</p>
            </div>
        </Booking>
    )
}

const Booking = styled.div`
    width: 100%;
    height: auto;    
    .no-bookings{
        background-color: #fff;
        height:335px;
        margin-top:15px;
        width:100%;
        border:1px solid #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
    }`

export default BookingSummary;
