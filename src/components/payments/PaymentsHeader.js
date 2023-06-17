import { useCallback, useEffect, useState} from "react";
import styled from "styled-components";
import makeRequest from "../../utils/fetch-request";
    


const PaymentsHeader= (props) => {
    const [stats, setStats] = useState({});
    const [error, setError] = useState(null);

    const fetchStats = useCallback(() => {
        let _url = "/data/payment-stats"; 

       makeRequest({url:_url, method:"get", data:null}).then(([status, result]) => {
           if(status !== 200){
               setError(result?.message || "Error, could not fetch records");
           } else {
               console.log("I have paymenta header", result)
                setStats(result || []);
           }
       });
      
    }, []);

    useEffect(() => {
        fetchStats();
    },  [fetchStats])
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
                                            <p className="stat-title">Last Month</p>
                                            <p className="stat-total">{stats?.last_month}</p>
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
                                            <p className="stat-title">This Month</p>
                                            <p className="stat-total">{stats?.this_month}</p>
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
                                            <p className="stat-title">This Week</p>
                                            <p className="stat-total">{stats.this_week}</p>
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
                                            <p className="stat-title">Today</p>
                                            <p className="stat-total">{stats.today}</p>
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

export default PaymentsHeader;
