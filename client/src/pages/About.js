import React from 'react'
import Layout from '../components/Layouts/Layout'


const About = () => {
  return (
    
    <Layout title={"About us - Online Plant Nursery"}>
      
        <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpg"
            alt="contactus"
            style={{ width: "90%", height:"90%"}}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Leaves germinated in 2023 from a promise to make ‘green and healthy’ a click away for all Indians.
          </p>
          <p>Having plants in our homes or in our offices doesn’t just look good, it also boosts our mood, makes us more productive, and cleans the air around us by absorbing toxins</p>
          <p>Ordering a pizza is easy but ever heard of ordering a plant to your doorstep? This is where leaves comes in.</p>
          <p>We believe that Green is Good and are here to enable Indians to access plants in the easiest way possible – online! We are here to shape the future of gardening!</p>
          <p>A one-stop-shop for all gardening related requirements, leaves has more than 50 products available online for delivery across India saving you numerous messy trips to various nurseries.</p>
        </div>
      </div>
    </Layout>
  )
}

export default About
