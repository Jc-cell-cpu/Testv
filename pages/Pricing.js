// pages/Pricing.js
import Head from "next/head";
import Navbar from "../components/navbar";
import React from 'react';
import Footer from "../components/footer";
import PaymentComponent from "../components/PaymentComponent";
import PaymentComponentII from "../components/PaymentComponentII";
import PaymentComponentBasic from "../components/PaymentComponentBasic";
import PaymentComponentGst from "../components/PaymentComponentGst";
import PopupWidget from "../components/popupWidget";
import SectionTitle from "../components/sectionTitle";
import { Pricingcompone } from "@/components/component/pricingcompone";
import { Pricingcomptwo } from "@/components/component/Pricingcomptwo";
import { PricingcompBasic } from "@/components/component/PricingcompBasic";
import { PricingcompGst } from "@/components/component/PricingcompGst";

const Pricing = () => {
    return (
      <>
      <Head>
        <title>Pricing</title>
        <meta
          name="description"
          content="Capital TaxPlus"
        />
        <link rel="icon" href="/img/logo1.png" />
      </Head>
      <div className="px-9 py-2 flex justify-between items-center">
          <Navbar />
      </div>

      <SectionTitle pretitle="ITR Filling" class="text-red-500">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>

      <Pricingcompone />
      <Pricingcomptwo />
      <SectionTitle pretitle="Tax Planning">
    Answer your customers possible questions here, it will increase the conversion rate as well as support or chat requests.
      </SectionTitle>
      <PricingcompBasic />
      <SectionTitle pretitle="GST Planning">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <PricingcompGst />
     
      <div className="px-9">
<Footer />
</div>
      <PopupWidget />

      </>
      
      );
      
};

export default Pricing;