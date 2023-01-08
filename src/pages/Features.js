import React from "react";
import styled from "styled-components";
import CreateHome from "../components/featuresComp/CreateHome";
import CreateMemberships from "../components/featuresComp/CreateMemberships";
import YourStore from "../components/featuresComp/YourStore";
import Footer from "../components/Footer";
import ShareWork from "../components/ShareWork";

const Features = () => {
  return (
    <>
      <YourStore
        heading="Customizable Options"
        title="Your store, your way"
        description="Gumroad plays well with others. Set up your store on our platform, or
      easily embed it on your existing site."
      />
      <CreateHome />
      <YourStore
        heading="Payment Integrations"
        title="Money, incoming"
        description="Once you get set up, it’s easy to ring the register.
      Here’s how you can sell and get paid, fast."
      />
      <CreateMemberships/>
      <YourStore
        heading="Comprehensive Platform"
        title="From start to finesse"
        description="We’ve spent ten years building an end-to-end
      platform so you can start selling in seconds."
      />
      <ShareWork />
      <Footer />
    </>
  );
};

export default Features;
