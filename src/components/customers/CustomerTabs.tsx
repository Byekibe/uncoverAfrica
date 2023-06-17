import styled from "styled-components";
import { useCallback, useEffect, useState } from "react";

const CustomerTabs = (props: any) => {
  console.log("total tabls", props);

  return (
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
              <div className="stat-top-wrapper">
                <p className="stat-title">Last Month</p>
                <p className="stat-total">{props?.last_month}</p>
              </div>
              <div className="stat-bottom-wrapper">
                <p>
                  <span className="text-danger fw-bold">-5% </span>decrease
                  since last month
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="home-stat-wrapper ">
              <div className="stat-icon">
                <i className="fa fa-bed"></i>
              </div>
              <div className="stat-top-wrapper">
                <p className="stat-title">Last Week</p>
                <p className="stat-total">{props?.this_month}</p>
              </div>
              <div className="stat-bottom-wrapper">
                <p>
                  <span className="text-danger fw-bold">-5% </span>decrease
                  since last month
                </p>
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
                <p className="stat-total">{props.this_week}</p>
              </div>
              <div className="stat-bottom-wrapper">
                <p>
                  <span className="text-danger fw-bold">-5% </span>decrease
                  since last month
                </p>
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
                <p className="stat-total">{props?.today}</p>
              </div>
              <div className="stat-bottom-wrapper">
                <p>
                  <span className="text-danger fw-bold">-5% </span>decrease
                  since last month
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 120px;
  .bg-white {
    background-color: #fff;
    padding: 10px;
  }
`;

export default CustomerTabs;
