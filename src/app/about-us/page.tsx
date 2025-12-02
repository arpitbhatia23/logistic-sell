import React from "react";
import About from "../../components/Aboutus";
import WhyUs from "../../components/Whyus";
import Founders from "../../components/Founder";
import LeadershipValues from "../../components/LeaderShip";

const page = () => {
  return (
    <div>
      <title>About Us | Logistics & Fleet Services in North America</title>
      <meta
        name="description"
        content="Learn about our logistics, fleet, dispatch, and brokerage services across North America. Tailored solutions for your business needs."
      />
      <meta
        name="keywords"
        content="About Walia Group, Rahul Walia, Karan Dhatwalia, logistics experts, fleet safety, dispatch team, leadership values"
      />
      <About />
      <WhyUs />
      <Founders />
      <LeadershipValues />
    </div>
  );
};

export default page;
