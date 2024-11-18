"use client";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import React from "react";
import { AiOutlineAppstore } from "react-icons/ai";

const items: MenuProps["items"] = [
  {
    key: "1",
    type: "group",
    label: "কম্পিউটার অফিস অ্যাপ্লিকেশন ",
    children: [
      {
        key: "1-1",
        label: "গ্রাফিক্স ডিজাইন",
      },
      {
        key: "1-2",
        label: "কম্পিউটার কম্পোজ",
      },
    ],
  },
  {
    key: "2",
    label: "তথ্য ও যোগাযোগ প্রযুক্তি ( HSC )",
    children: [
      {
        key: "2-1",
        label: "ওয়েব ডিজাইন এ্যান্ড ডেভেলপমেন্ট",
      },
      {
        key: "2-2",
        label: "কম্পিউটার কম্পোজ",
      },
      {
        key: "2-3",
        label: "ওয়েব ডিজাইন এ্যান্ড ডেভেলপমেন্ট",
      },
      {
        key: "2-4",
        label: "কম্পিউটার কম্পোজ",
      },
    ],
  },
];

const DropDown: React.FC = () => (
  <Dropdown
    menu={{ items }}
    className=" bg-gray-100 shadow p-3 cursor-pointer rounded-lg"
  >
    <a className=" flex items-center gap-1" onClick={(e) => e.preventDefault()}>
      <div className=" text-2xl">
        <AiOutlineAppstore />
      </div>
      <span className=" text-lg font-medium">Categories</span>
    </a>
  </Dropdown>
);

export default DropDown;
