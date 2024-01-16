import React from 'react'
import Layout from '../components/Layouts/Layout'

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
        <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>
           This privacy policy sets out how li'l Leaves uses and protects any information that you give li'l Leaves when you use this website.
           li'l Leaves is committed to ensuring that your privacy is protected. </p>
           <h3>What we collect</h3>
            <p>We may collect the following information:</p>
            <li>name</li>
            <li>email address</li>
            <li>address</li>
            <li>mobile number</li>
            <br></br>
            <p>If you believe that any information we are holding on you is incorrect or incomplete, please write to or email us as soon as possible, at the above address. We will promptly correct any information found to be incorrect.</p>
        </div>
      </div>
    </Layout>
  )
}

export default Policy
