"use client";
import { Tabs, TabsProps } from "antd";
import Image from "next/image";
import React from "react";

const ServicesTab: React.FC = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "জনপ্রিয় সেবা",
      children: PopularServices(),
    },
    {
      key: "2",
      label: "নতুন সেবা",
      children: newServices(),
    },
    {
      key: "3",
      label: "মোবাইল সেবা",
      children: mobileServices(),
    },
    {
      key: "4",
      label: "দপ্তর ভিত্তিক সেবা",
      children: dobtorServices(),
    },
    {
      key: "5",
      label: "সকল ই-সেবা",
      children: EServices(),
    },
  ];
  return (
    <div className="max-w-7xl mx-auto w-full px-5 py-4">
      <Tabs defaultActiveKey="1" size="large" type="card" items={items} />
    </div>
  );
};

export default ServicesTab;

import Admission from "@/../public/images/Services/Admission.png";
import Application from "@/../public/images/Services/Application.png";
import BirthRegistration from "@/../public/images/Services/BirthRegistration.png";
import Certificate from "@/../public/images/Services/Certificate.png";
import COA from "@/../public/images/Services/COA.png";
import ComputerCompose from "@/../public/images/Services/ComputerCompose.png";
import ComputerPrint from "@/../public/images/Services/ComputerPrint.png";
import EmailServices from "@/../public/images/Services/EmailServices.png";
import GraphicsD from "@/../public/images/Services/GraphicsD.png";
import ICT from "@/../public/images/Services/ICT.png";
import IDCard from "@/../public/images/Services/IDCard.png";
import Photostat from "@/../public/images/Services/Photostat.png";
import Printresult from "@/../public/images/Services/Printresult.png";
import Scanning from "@/../public/images/Services/Scanning.png";
import WebDesign from "@/../public/images/Services/WebDesign.png";
// import ICT from "@/../public/images/Services/ICT.png";
const PopularServices = () => {
  return (
    <div className=" flex items-center gap-y-10 gap-x-20 w-full flex-wrap">
      <div className=" cursor-pointer flex gap-2 flex-col items-center">
        <Image src={ICT} alt="ict" width={70} />
        তথ্য ও যোগাযোগ প্রযুক্তি ( HSC )
      </div>
      <div className="cursor-pointer flex flex-col items-center gap-2 ">
        <Image src={COA} alt="COA" width={70} />
        কম্পিউটার অফিস অ্যাপ্লিকেশন
      </div>
      <div className="cursor-pointer flex flex-col items-center gap-2 ">
        <Image src={GraphicsD} alt="GraphicsD" width={70} />
        গ্রাফিক্স ডিজাইন
      </div>
      <div className=" cursor-pointer flex flex-col items-center gap-2 ">
        <Image src={Printresult} alt="Printresult" width={70} />
        রেজাল্ট প্রিন্ট
      </div>
      <div className="cursor-pointer flex flex-col items-center gap-2 ">
        <Image src={ComputerPrint} alt="ComputerPrint" width={70} />
        কম্পিউটার প্রিন্ট
      </div>
      <div className="cursor-pointer flex flex-col items-center gap-2 ">
        <Image src={Application} alt="Application" width={70} />
        চাকরির আবেদন
      </div>
      <div className="cursor-pointer flex flex-col items-center gap-2 ">
        <Image src={EmailServices} alt="EmailServices" width={70} />
        ইমেইল সেবা
      </div>
      <div className="cursor-pointer flex flex-col items-center gap-2 ">
        <Image src={BirthRegistration} alt="BirthRegistration" width={70} />
        জন্ম নিবন্ধন আবেদন
      </div>
    </div>
  );
};
const newServices = () => {
  return (
    <div className=" flex items-center  gap-y-10 gap-x-20 w-full flex-wrap">
      <div className="cursor-pointer flex flex-col items-center gap-2">
        <Image src={WebDesign} alt="WebDesign" width={70} />
        ওয়েব ডিজাইন এ্যান্ড ডেভেলপমেন্ট
      </div>
      <div className=" cursor-pointer flex flex-col items-center gap-2">
        <Image src={Printresult} alt="Printresult" width={70} />
        রেজাল্ট প্রিন্ট
      </div>
      <div className="cursor-pointer flex flex-col items-center gap-2">
        <Image src={ComputerCompose} alt="ComputerCompose" width={70} />
        কম্পিউটার কম্পোজ
      </div>
      <div className="cursor-pointer flex flex-col items-center gap-2">
        <Image src={Certificate} alt="Certificate" width={70} />ই টিন
        সার্টিফিকেট
      </div>
      <div className="cursor-pointer flex flex-col items-center gap-2">
        <Image src={EmailServices} alt="EmailServices" width={70} />
        ইমেইল সেবা
      </div>
      <div className="cursor-pointer flex flex-col items-center gap-2">
        <Image src={IDCard} alt="IDCard" width={70} />
        আইডি কার্ড সংশোধন
      </div>
    </div>
  );
};
const mobileServices = () => {
  return (
    <div className=" flex items-center  gap-y-10 gap-x-20 w-full flex-wrap">
      <div className="cursor-pointer flex flex-col items-center gap-2">
        <Image src={EmailServices} alt="EmailServices" width={70} />
        ইমেইল সেবা
      </div>
      <div className=" cursor-pointer flex flex-col items-center gap-2">
        <Image src={Printresult} alt="Printresult" width={70} />
        রেজাল্ট প্রিন্ট
      </div>
      <div className="cursor-pointer flex flex-col items-center gap-2">
        <Image src={ComputerCompose} alt="ComputerCompose" width={70} />
        কম্পিউটার কম্পোজ
      </div>
      <div className="cursor-pointer flex flex-col items-center gap-2">
        <Image src={Certificate} alt="Certificate" width={70} />ই টিন
        সার্টিফিকেট
      </div>
      <div className="cursor-pointer flex flex-col items-center gap-2">
        <Image src={EmailServices} alt="EmailServices" width={70} />
        ইমেইল সেবা
      </div>
      <div className="cursor-pointer flex flex-col items-center gap-2">
        <Image src={IDCard} alt="IDCard" width={70} />
        আইডি কার্ড সংশোধন
      </div>
      <div className=" cursor-pointer flex flex-col items-center gap-2">
        <Image src={Printresult} alt="Printresult" width={70} />
        রেজাল্ট প্রিন্ট
      </div>
      <div className="cursor-pointer flex flex-col items-center gap-2">
        <Image src={ComputerCompose} alt="ComputerCompose" width={70} />
        কম্পিউটার কম্পোজ
      </div>
    </div>
  );
};
const dobtorServices = () => {
  return (
    <div className=" flex items-center  gap-y-10 gap-x-20 w-full flex-wrap">
      <div className="cursor-pointer flex flex-col items-center gap-2">
        <Image src={Scanning} alt="Scanning" width={70} />
        স্ক্যান ও লিমিনেটিং
      </div>
      <div className=" cursor-pointer flex flex-col items-center gap-2">
        <Image src={Printresult} alt="Printresult" width={70} />
        রেজাল্ট প্রিন্ট
      </div>
      <div className="cursor-pointer flex flex-col items-center gap-2">
        <Image src={ComputerCompose} alt="ComputerCompose" width={70} />
        কম্পিউটার কম্পোজ
      </div>
      <div className="cursor-pointer flex flex-col items-center gap-2">
        <Image src={Certificate} alt="Certificate" width={70} />ই টিন
        সার্টিফিকেট
      </div>
      <div className="cursor-pointer flex flex-col items-center gap-2">
        <Image src={EmailServices} alt="EmailServices" width={70} />
        ইমেইল সেবা
      </div>
      <div className="cursor-pointer flex flex-col items-center gap-2">
        <Image src={IDCard} alt="IDCard" width={70} />
        আইডি কার্ড সংশোধন
      </div>
    </div>
  );
};
const EServices = () => {
  return (
    <div className=" flex items-center  gap-y-10 gap-x-20 w-full flex-wrap">
      <div className="cursor-pointer flex flex-col items-center gap-2">
        <Image src={Admission} alt="Admission" width={70} />
        ভর্তি আবেদন
      </div>
      <div className=" cursor-pointer flex flex-col items-center gap-2">
        <Image src={Printresult} alt="Printresult" width={70} />
        রেজাল্ট প্রিন্ট
      </div>
      <div className="cursor-pointer flex flex-col items-center gap-2">
        <Image src={Photostat} alt="Photostat" width={70} />
        ফটোস্ট্যাট
      </div>
      <div className="cursor-pointer flex flex-col items-center gap-2">
        <Image src={Certificate} alt="Certificate" width={70} />ই টিন
        সার্টিফিকেট
      </div>
      <div className="cursor-pointer flex flex-col items-center gap-2">
        <Image src={EmailServices} alt="EmailServices" width={70} />
        ইমেইল সেবা
      </div>
      <div className="cursor-pointer flex flex-col items-center gap-2">
        <Image src={IDCard} alt="IDCard" width={70} />
        আইডি কার্ড সংশোধন
      </div>
    </div>
  );
};
