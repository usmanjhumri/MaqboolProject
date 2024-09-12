import ADL from "@/components/ApplicationDevelopment/ADL/ADL";
import AgileProcess from "@/components/ApplicationDevelopment/AgileProcess/AgileProcess";
import DevelopApp from "@/components/ApplicationDevelopment/AppDevelop/DevelopApp";
import ArchitectModal from "@/components/ApplicationDevelopment/ArchitectModal/ArchitectModal";
import Benifit from "@/components/ApplicationDevelopment/Benifit/Benifit";
import InDemandServices from "@/components/ApplicationDevelopment/InDemandServices/InDemandServices";
import FeedbackStyleFour from "@/components/Common/FeedbackStyleFour";
import AppDiscussForm from "@/components/ComputerVision/AppDiscussForm/AppDiscussForm";
import ApplicationServices from "@/components/ComputerVision/ApplicationServices/ApplicationServices";
import BusinessNeeds from "@/components/ComputerVision/BusinessNeeds/BusinessNeeds";
import CoreServices from "@/components/ComputerVision/CoreServices/CoreServices";
import SoftWareSolution from "@/components/ComputerVision/SoftWareSolution/SoftwareSolution";
import TopNotch from "@/components/ComputerVision/TopNotch/TopNotch";
import WhyUs from "@/components/ComputerVision/WhyUs/WhyUs";
import BlogCard from "@/components/MachineLearning/BlogCard";
import FAQs from "@/components/MachineLearning/FAQs/FAQs";
import Industries from "@/components/MachineLearning/Industries/Industries";
import LetsMakeitHappen from "@/components/MachineLearning/LetsMakeItHappen/LetsMakeitHappen";
import MainBanner from "@/components/MachineLearning/MainBanner";
import MLPartners from "@/components/MachineLearning/Partners/MLPartners";
import Technology from "@/components/MachineLearning/Technologies/Technology";
import WhyChooseUs from "@/components/MachineLearning/WhyChooseUS/WhyChooseUs";
import Footer from "@/components/_App/Footer";
import Navbar from "@/components/_App/Navbar";
import React from "react";

const Index = () => {
  return (
    <>
      <Navbar />
      <MainBanner />
      <ApplicationServices />
      <AppDiscussForm />
      <CoreServices />
      <TopNotch />
      <SoftWareSolution />
      {/* <MLPartners /> */}
      {/* <DevelopApp />
      <ADL /> */}
      <BusinessNeeds />
      <Benifit />

      {/* <InDemandServices />
      <ArchitectModal />
      <Technology /> */}
      {/* <AgileProcess /> */}
      <WhyUs />
      <Industries />

      <BlogCard />
      <WhyChooseUs />
      <FAQs />

      {/* <FeedbackStyleFour /> */}

      <LetsMakeitHappen />
      <Footer />
    </>
  );
};

export default Index;
