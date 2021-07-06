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
      <h1 className="py-5 font-weight-bold how-tabs__title">{config.title}</h1>
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
            title="Engenharia"
            className={`bg-custom-lightOrange`}
          >
            <div className="how-tabs__card-box wrap">
              <div className="how-tabs__card-box__discription py-5 inner-wrap">
                <h2 className="text-custom-text text-center font-weight-bold">
                  {config.enterpreneurTabTitle}
                </h2>
                <p className="how-tabs__card-box__discription__text pt-3 ">
                  {config.enterpreneurTabDescription}
                </p>
              </div>
              <CardItems array={config.enterpreneurCardData} />
            </div>
            <div className="bg-white mb-5 how-tabs__row-container">
              <div className="wrap">
                <h2 className="text-custom-text text-center font-weight-bold py-5">
                  {config.enterpreneurSubtitle}
                </h2>
                <Row1 object={config.enterpreneurRow1Data} />
                <Row2 object={config.enterpreneurRow2Data} />
                <div className="text-center how-tabs__footer">
                  <span className="text-custom-text text-center font-weight-bold mr-5 how-tabs__footer__button-text">
                    {config.enterpreneurButtonText}
                  </span>
                  <StyledButton>Associa-se</StyledButton>
                </div>
              </div>
            </div>
          </Tab>

          <Tab
            eventKey="investors"
            title="Arquitetura"
            className="bg-custom-lightGreen"
          >
            <div className="how-tabs__card-box wrap">
              <div className="how-tabs__card-box__discription py-5 inner-wrap">
                <h2 className="text-custom-text text-center font-weight-bold">
                  {config.inverstorTabTitle}
                </h2>
                <p className="how-tabs__card-box__discription__text pt-3 ">
                  {config.inverstorTabDescription}
                </p>
              </div>
              <CardItems array={config.investorCardData} green={true} />
            </div>
            <div className="bg-white mb-5">
              <div className="wrap">
                <h2 className="text-custom-text text-center font-weight-bold py-5">
                  {config.investorSubtitle}
                </h2>
                <Row1 object={config.investorRow1Data} />
                <Row2 object={config.investorRow2Data} />
                <div className="text-center how-tabs__footer inner-wrap">
                  <span className="text-custom-text text-center font-weight-bold mr-5 how-tabs__footer__button-text">
                    {config.investorButtonText}
                  </span>
                  <StyledButton>Associe-se</StyledButton>
                </div>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}

export default TabContainer
