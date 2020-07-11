import React, { useState } from "react"
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import CardItems from "./CardItems/CardItems"
import Row1 from "./Row1/Row1"
import Row2 from "./Row2/Row2"
import { StyledButton } from "../../Elements/Elements"
import config from "../../../../website/howItWorks"

import "./tabContainer.scss"

export const TabContainer = () => {
  const [key, setKey] = useState("enterpreneurs")

  return (
    <div className="how-tabs text-custom-text text-center text-display">
      <h1 className="py-5 font-weight-bold">
        See how our platform can help you network and manage your projects
      </h1>
      <div>
        <Tabs
          id="controlled"
          activeKey={key}
          onSelect={k => setKey(k)}
          className="justify-content-center"
          transition={false}
        >
          <Tab
            eventKey="enterpreneurs"
            title="Enterpreneurs"
            className={`bg-custom-lightOrange`}
          >
            <div className="how-tabs__card-box wrap">
              <div className="how-tabs__card-box__discription py-5 inner-wrap">
                <h2 className="text-custom-text text-center font-weight-bold">
                  We help you connect with investors and raise funds for your
                  project
                </h2>
                <p className="how-tabs__card-box__discription__text pt-3 ">
                  We help you raise funds so that you can focus on creating a
                  valuable impact in the community. We’re here to assist you in
                  building a strong relationship with our network of investors
                  interested in opportunities that deliver strong social
                  returns.
                </p>
              </div>
              <CardItems array={config.enterpreneurCardData} />
            </div>
            <div className="bg-white mb-5">
              <div className="inner-wrap">
                <h2 className="text-custom-text text-center font-weight-bold py-5">
                  What makes Wheel for Change a unique impact investing
                  platform?
                </h2>
                <Row1 object={config.enterpreneurRow1Data} />
                <Row2 object={config.enterpreneurRow2Data} />
                <div className="text-center how-tabs__footer">
                  <span className="text-custom-text text-center font-weight-bold mr-5">
                    Share your innovative ideas and tackle social challenges
                    with us.
                  </span>
                  <StyledButton>Sign Up</StyledButton>
                </div>
              </div>
            </div>
          </Tab>

          <Tab
            eventKey="investors"
            title="Investors"
            className="bg-custom-lightGreen"
          >
            <div className="how-tabs__card-box wrap">
              <div className="how-tabs__card-box__discription py-5 inner-wrap">
                <h2 className="text-custom-text text-center font-weight-bold">
                  We help you choose the right investment that supports your
                  cause.
                </h2>
                <p className="how-tabs__card-box__discription__text pt-3 ">
                  We curate local projects and investment opportunities in
                  Canada to help you become part of an impactful project while
                  building a diversified portfolio. We also support you in
                  investing for a sustainable and resilient future by matching
                  you with causes that you strongly believe in.
                </p>
              </div>
              <CardItems array={config.investorCardData} green={true} />
            </div>
            <div className="bg-white mb-5">
              <h2 className="text-custom-text text-center font-weight-bold py-5">
                What makes Wheel for Change a unique impact investing platform?
              </h2>
              <Row1 object={config.investorRow1Data} />
              <Row2 object={config.investorRow2Data} />
              <div className="text-center how-tabs__footer">
                <span className="text-custom-text text-center font-weight-bold mr-5">
                  Are you ready to start investing in impact-driven projects for
                  a sustainable world?
                </span>
                <StyledButton>Sign Up</StyledButton>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}

export default TabContainer
