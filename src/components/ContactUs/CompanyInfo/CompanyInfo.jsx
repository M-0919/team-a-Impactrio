import React from "react"
import "./companyInfo.scss"

// import { Link } from "gatsby"

const CompanyInfo = () => {
  return (
    <div className="companyInfo mt-5">
      <h2 className="mt-5">Location</h2>
      <p className="mt-3">
        123 Slater Street, 6th Floor, Ottawa, Ontario K1P 5H2, Canada
      </p>
      <h2 className="mt-5">Hours</h2>
      <dl className="mt-3">
        <dt>Mon.</dt>
        <dd>09:00 a.m. – 05:00 p.m.</dd>
      </dl>
      <dl>
        <dt>Tue.</dt>
        <dd>09:00 a.m. – 05:00 p.m.</dd>
      </dl>
      <dl>
        <dt>Wed.</dt>
        <dd>09:00 a.m. – 05:00 p.m.</dd>
      </dl>
      <dl>
        <dt>Thu.</dt>
        <dd>09:00 a.m. – 05:00 p.m.</dd>
      </dl>
      <dl>
        <dt>Fri.</dt>
        <dd>09:00 a.m. – 05:00 p.m.</dd>
      </dl>
      <dl>
        <dt>Sat.</dt>
        <dd>closed</dd>
      </dl>
      <dl>
        <dt>Sun.</dt>
        <dd>closed</dd>
      </dl>
    </div>
  )
}

export default CompanyInfo
