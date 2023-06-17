import styled from "styled-components";



const TotalTabs= (props:any) => {
    return(
        <Wrapper>
            <div className="page-title">
                <h3>{props?.pageTitle}</h3>
            </div>
            <div className="totaltabs">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="home-stat-wrapper totalwrapper">
                                        <div className="stat-icon">
                                        <i className="fa fa-calendar"></i>
                                    </div> 
                                        <div className="stat-top-wrapper ">
                                            <p className="stat-title">Arrivals</p>
                                            <p className="stat-total">{props?.arrivals}</p>
                                        </div>
                                        <div className="stat-bottom-wrapper">
                                        <p><span className="text-danger fw-bold">-5% </span>decrease since last month</p>
                                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="home-stat-wrapper ">
                                        <div className="stat-icon">
                                        <i className="fa fa-bed"></i>
                                        </div>
                                        <div className="stat-top-wrapper">
                                            <p className="stat-title">Departures</p>
                                            <p className="stat-total">{props?.depatures}</p>
                                    </div>
                                    <div className="stat-bottom-wrapper">
                                        <p><span className="text-danger fw-bold">-5% </span>decrease since last month</p>
                                    </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="home-stat-wrapper pricewrapper">
                                        <div className="stat-icon">
                                        <i className="fa fa-bed"></i>
                                        </div>
                                        <div className="stat-top-wrapper">
                                            <p className="stat-title">Stay Overs</p>
                                            <p className="stat-total">{props.stays}</p>
                                    </div>
                                    <div className="stat-bottom-wrapper">
                                        <p><span className="text-danger fw-bold">-5% </span>decrease since last month</p>
                                    </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="home-stat-wrapper pricewrapper">
                                        <div className="stat-icon">
                                        <i className="fa fa-bed"></i>
                                        </div>  
                                        <div className="stat-top-wrapper">
                                            <p className="stat-title">Requests to book</p>
                                            <p className="stat-total">3000</p>
                                    </div>
                                    <div className="stat-bottom-wrapper">
                                        <p><span className="text-danger fw-bold">-5% </span>decrease since last month</p>
                                    </div>
                        </div>
                    </div>
              </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width:100%;
    height:120px;
    `

export default TotalTabs;
