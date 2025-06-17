// pages/Pricing.js
import Head from "next/head";
import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PopupWidget from "../components/popupWidget";
import SectionTitle from "../components/sectionTitle";
import { Pricingcompone } from "@/components/component/pricingcompone";
import { Pricingcomptwo } from "@/components/component/Pricingcomptwo";
import { PricingcompBasic } from "@/components/component/PricingcompBasic";
import { PricingcompGst } from "@/components/component/PricingcompGst";
import AOS from "aos";
import "aos/dist/aos.css";

// AOS wrapper with consistent spacing
const AnimatedSectionAOS = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease",
    });
  }, []);

  return <div data-aos="fade-up" className="py-8">{children}</div>;
};

const Pricing = () => {
  return (
    <>
      <Head>
        <title>CapitalTaxPlus Financial Services</title>
        <meta name="google-site-verification" content="Pt0CCXRMJJ_C_kxbDFvVtdcABaYRRBrdGJ8bqCEiJR0" />
        <meta
          name="description"
          content="Streamline your tax filing with CapitalTaxPlus. File ITR, plan taxes smartly, and manage GST all in one place."
        />
        <meta name="keywords" content="tax, GST, ITR, income tax, tax planning, filing" />
        <meta name="author" content="capitaltaxplus" />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://capitaltaxplus.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Capital TaxPlus" />
        <meta
          property="og:description"
          content="Streamline your tax filing process with CapitalTaxPlus. File ITR, manage GST, and reduce your tax liability through expert planning."
        />
        <meta
          property="og:image"
          content="https://opengraph.b-cdn.net/production/documents/1298b67b-2c0f-4d76-9017-05ad308c1634.jpg?token=cu_fM5rDzgZXD0JmdiqiyCbYWwO4fx8LPby9jNpIb54&height=1600&width=1200&expires=33247963234"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="capitaltaxplus.com" />
        <meta property="twitter:url" content="https://capitaltaxplus.com/" />
        <meta name="twitter:title" content="Capital TaxPlus" />
        <meta
          name="twitter:description"
          content="Streamline your tax filing process with CapitalTaxPlus. File ITR, manage GST, and reduce your tax liability through expert planning."
        />
        <meta
          name="twitter:image"
          content="https://opengraph.b-cdn.net/production/documents/1298b67b-2c0f-4d76-9017-05ad308c1634.jpg?token=cu_fM5rDzgZXD0JmdiqiyCbYWwO4fx8LPby9jNpIb54&height=1600&width=1200&expires=33247963234"
        />

        <link rel="icon" href="favicon.ico" />
      </Head>

      {/* Navbar */}
      <div className="px-9 py-2 flex justify-between items-center">
        <Navbar />
      </div>

      {/* ITR Filing Section */}
      <AnimatedSectionAOS>
        <SectionTitle pretitle="ITR Filing" className="text-red-500 mb-6">
          File your Income Tax Returns quickly and accurately with our expert assistance and easy-to-use platform.
        </SectionTitle>
        <Pricingcompone />
      </AnimatedSectionAOS>

      {/* ITR Plan Options */}
      <AnimatedSectionAOS>
        <Pricingcomptwo />
      </AnimatedSectionAOS>

      {/* Tax Planning Section */}
      <AnimatedSectionAOS>
        <SectionTitle pretitle="Tax Planning" className="mb-6">
          Discover personalized tax-saving strategies and optimize your tax liability with our expert planning services.
        </SectionTitle>
        <PricingcompBasic />
      </AnimatedSectionAOS>

      {/* GST Filing & Planning Section */}
      <AnimatedSectionAOS>
        <SectionTitle pretitle="GST Planning" className="mb-6">
          Easily file GST returns, stay compliant, and get professional help for seamless Goods & Services Tax management.
        </SectionTitle>
        <PricingcompGst />
      </AnimatedSectionAOS>

      {/* Footer */}
      <div className="px-9">
        <Footer />
      </div>

      {/* Chat/Lead Widget */}
      <PopupWidget />
    </>
  );
};

export default Pricing;
