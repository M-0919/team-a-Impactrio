import React, { useState } from "react"
import Tabs from "react-bootstrap/Tabs"
import Tab from "react-bootstrap/Tab"
import CardItems from "./CardItems/CardItems"
import Row1 from "./Row1/Row1"
import Row2 from "./Row2/Row2"
import { StyledButton } from "../../Elements/Elements"

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
              <CardItems array={enterpreneurCardData} />
            </div>
            <div className="bg-white mb-5">
              <div className="inner-wrap">
                <h2 className="text-custom-text text-center font-weight-bold py-5">
                  What makes Wheel for Change a unique impact investing
                  platform?
                </h2>
                <Row1 object={enterpreneurRow1Data} />
                <Row2 object={enterpreneurRow2Data} />
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
              <CardItems array={investorCardData} green={true} />
            </div>
            <div className="bg-white mb-5">
              <h2 className="text-custom-text text-center font-weight-bold py-5">
                What makes Wheel for Change a unique impact investing platform?
              </h2>
              <Row1 object={investorRow1Data} />
              <Row2 object={investorRow2Data} />
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

const enterpreneurCardData = [
  {
    title: "Create a project",
    icon: "/how-create-black-48dp.svg",
    discription:
      "This includes sharing your business plan, a description of the problem you’re trying to solve, where the proceeds of your project will go, information about your team, and any additional information you want to share with potential investors.",
  },
  {
    title: "Apply for funds",
    icon: "/how-touch_app-black-48dp.svg",
    discription:
      "Once you’ve completed our platform’s unique project creation process, you can start to apply for funding by stating the type of investment you’re offering and how much you plan to raise.",
  },
  {
    title: "Launch project",
    icon: "/how-open_in_new-black-48dp.svg",
    discription:
      "Once your account becomes approved and upgraded, your project goes live and will be displayed to our investor community. Start promoting your project throughout your network using our platform.",
  },
  {
    title: "Connect",
    icon: "/how-connect_without_contact-black-48dp.svg",
    discription:
      "Our network of investors will get in touch and connect with you. You can also easily communicate with your investors through our messaging feature.",
  },
]

const enterpreneurRow1Data = {
  image: "how-row1-up.jpg",
  title: "Collaborate",
  discription:
    "Easily work with your team members in building a project profile by adding their email addresses.",
}

const enterpreneurRow2Data = {
  image: "how-row1-bottom.jpg",
  title1: "Track",
  discription1:
    "Efficiently achieve your goals by tracking your team’s progress with our real-time update indicators.",
  title2: "Autosave",
  discription2:
    "Focus on producing great ideas without worrying whether your data is safe and saved. Continue exactly where you left off and prevent accidental data loss with our auto-save function.",
}

const investorCardData = [
  {
    title: "Select a project",
    icon: "/how-create-black-48dp.svg",
    discription:
      "View all current investment opportunities on the platform. We review processes on all enterprises to analyze their project, traction, risk, and social impact.",
  },
  {
    title: "Learn more",
    icon: "/how-touch_app-black-48dp.svg",
    discription:
      "Once you’ve completed our platform’s unique project creation process, you can start to apply for funding by stating the type of investment you’re offering and how much you plan to raise.",
  },
  {
    title: "Compare and Review",
    icon: "/how-open_in_new-black-48dp.svg",
    discription:
      "If you have other projects that you are interested at, try comparing them to one another by utilizing the compare feature on our platform. This will help make sure you are choosing the right investment that is suited for you.",
  },
  {
    title: "Connect",
    icon: "/how-connect_without_contact-black-48dp.svg",
    discription:
      "When you’ve selected a project that supports your cause, go into the project page and send an inquiry to the entrepreneur",
  },
]

const investorRow1Data = {
  image: "how-row2-up.jpg",
  title: "Compare",
  discription:
    "Considering multiple projects? Compare them so that you can make sure you’re making the right decision.",
}

const investorRow2Data = {
  image: "how-row2-bottom.jpg",
  title: "Network",
  discription:
    "Connect on a more personal level and discuss your interests through sending direct messages to social entrepreneurs.",
}
