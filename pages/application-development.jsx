import ADL from "@/components/ApplicationDevelopment/ADL/ADL";
import AgileProcess from "@/components/ApplicationDevelopment/AgileProcess/AgileProcess";
import DevelopApp from "@/components/ApplicationDevelopment/AppDevelop/DevelopApp";
import AppDiscussForm from "@/components/ApplicationDevelopment/AppDiscussForm/AppDiscussForm";
import ApplicationServices from "@/components/ApplicationDevelopment/ApplicationServices/ApplicationServices";
import ArchitectModal from "@/components/ApplicationDevelopment/ArchitectModal/ArchitectModal";
import Benifit from "@/components/ApplicationDevelopment/Benifit/Benifit";
import CoreServices from "@/components/ApplicationDevelopment/CoreServices/CoreServices";
import InDemandServices from "@/components/ApplicationDevelopment/InDemandServices/InDemandServices";
import TopNotch from "@/components/ApplicationDevelopment/TopNotch/TopNotch";
import WhyUs from "@/components/ApplicationDevelopment/Whyus/WhyUs";
import FeedbackStyleFour from "@/components/Common/FeedbackStyleFour";
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
      <MLPartners />
      <DevelopApp />
      <ADL />
      <InDemandServices />
      <ArchitectModal />
      <Technology />
      <AgileProcess />
      <Benifit />
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
