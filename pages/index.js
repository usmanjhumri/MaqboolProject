import React, { useEffect } from "react";
import Navbar from "@/components/_App/Navbar";
import FunFactsArea from "@/components/Common/FunFactsArea";
import Partner from "@/components/Common/Partner";
import Footer from "@/components/_App/Footer";
// import { useRouter } from "next/router";
import WhatWeOffer from "@/components/MachineLearning/WhatWeOffer";
import AboutUsContent from "@/components/MachineLearning/AboutUsContent";
import OurServices from "@/components/MachineLearning/OurServices";
// import Projects from "@/components/MachineLearning/Projects";
// import PricingStyleFour from "@/components/PricingPlans/PricingStyleFour";
import FeedbackStyleFour from "@/components/Common/FeedbackStyleFour";
import BlogCard from "@/components/MachineLearning/BlogCard";
// import Newsletter from "@/components/Common/Newsletter";
// import { Box } from "@mui/material";
import MLPartners from "@/components/MachineLearning/Partners/MLPartners";
import EmergingInnovations from "@/components/MachineLearning/EmergingInnovation/EmergingInnovations";
import Technology from "@/components/MachineLearning/Technologies/Technology";
import Industries from "@/components/MachineLearning/Industries/Industries";
import WhyChooseUs from "@/components/MachineLearning/WhyChooseUS/WhyChooseUs";
import FAQs from "@/components/MachineLearning/FAQs/FAQs";
import LetsMakeitHappen from "@/components/MachineLearning/LetsMakeItHappen/LetsMakeitHappen";
import MainBanner from "@/components/MachineLearning/MainBanner";


const Index = () => {
  return (
    //main home page is commented because we have to use machine learning page
    // <>
    //     <Navbar />

    //     <MainBanner />

    //     <Features />

    //     <ServicesArea />

    //     <OurFeatures />

    //     <Team />

    //     <FunFactsArea />

    //     <RecentWorks />

    //     <PricingStyleOne />

    //     <Feedback />

    //     <Partner />

    //     <BlogPost />

    //     <Footer />
    // </>

    <>
      <Navbar />

      <MainBanner />

      <MLPartners />

      <WhatWeOffer />
      <EmergingInnovations />
      <Technology />
      <Industries />
      <AboutUsContent />

      <OurServices />
      <WhyChooseUs />
      <FAQs />
      <FunFactsArea />

      {/* <Projects /> */}

      {/* <PricingStyleFour /> */}

      <FeedbackStyleFour />
      <BlogCard />

      {/* <Newsletter /> */}
      <LetsMakeitHappen />
      <Footer />
    </>
  );
};

export default Index;
