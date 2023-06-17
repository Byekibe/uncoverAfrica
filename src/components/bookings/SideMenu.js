
const BookingsSideMenu = (props) => {

    return (
          <div className="booking-tab">
            <p>
              {" "}
              <a href="/bookings">
                {" "}
                <i className="fa fa-calendar"></i> Bookings{" "}
              </a>
            </p>
            <hr />
            <p>
              {" "}
              <a href="/payments">
                <i className="fa fa-money"></i> Payments
              </a>
            </p>
            <hr />
            <p>
              {" "}
              <a href="/customers">
                <i className="fa fa-users"></i> Customers
              </a>
            </p>
          </div>)
}
export default BookingsSideMenu;
