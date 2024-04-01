// pages/GST.js
import Head from "next/head";
import Navbar from "../components/navbar";
import React from 'react';
import ComingSoonPage from "../components/comingSoon";
import Footer from "../components/footer";
import PopupWidget from "../components/popupWidget";

const GstPage = () => {
    return (
        <>
<Head>
        <title>Capital TaxPlus</title>
        <meta
          name="description"
          content="Streamline your tax filing process this year with Tax Plus! This user-friendly platform allows you to not only file your income tax return but also manage your Goods and Services Tax (GST) conveniently in one place, saving you time and minimizing the hassle of navigating separate systems."
        />
        <meta name="keywords" content="tax, GST, income tax, tax filing" />
        <meta name="author" content="capitaltaxplus" />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <Navbar />
     
      <ComingSoonPage />
      <Footer />
      <PopupWidget />

      </>
      );
};

export default GstPage; // Correct default export