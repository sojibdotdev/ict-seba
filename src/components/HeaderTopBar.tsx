"use client";
import BD from "@/../public/images/BD.png";
import USA from "@/../public/images/USA.png";
import { Select } from "antd";
import Image from "next/image";
import Link from "next/link";
import { FaRegBell } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { MdCurrencyRupee, MdOutlineLocalGroceryStore } from "react-icons/md";
import { TbCurrencyTaka } from "react-icons/tb";

function HeaderTopBar() {
  const handleChange = (value: { value: string; label: React.ReactNode }) => {
    console.log(value);
  };
  return (
    <div className="flex flex-col min-[950px]:flex-row gap-3 py-2 max-w-7xl mx-auto px-5  items-center justify-between">
      {/* left side */}
      <div className=" w-full flex items-center min-[950px]:justify-normal justify-between gap-3 min-[520px]:flex-row flex-col">
        <div className=" flex items-center gap-3">
          <div>
            <Select
              labelInValue
              defaultValue={{ value: "USD", label: "USD ($)" }}
              style={{ width: 120 }}
              onChange={handleChange}
              options={[
                {
                  value: "USD",
                  label: "USD ($)",
                },
                {
                  value: "BDT",
                  label: (
                    <div className=" flex items-center ">
                      BDT (<TbCurrencyTaka />)
                    </div>
                  ),
                },
                {
                  value: "INR",
                  label: (
                    <div className=" flex items-center ">
                      INR (<MdCurrencyRupee />)
                    </div>
                  ),
                },
              ]}
            />
          </div>
          <div>
            <Select
              labelInValue
              defaultValue={{
                value: "English",
                label: (
                  <div className=" flex items-center gap-2">
                    <Image src={USA} alt="USA-FLAG" width={20} /> English
                  </div>
                ),
              }}
              style={{ width: 120, border: "none", outline: "none" }}
              onChange={handleChange}
              options={[
                {
                  value: "English",
                  label: (
                    <div className=" flex items-center gap-2">
                      <Image src={USA} alt="USA-FLAG" width={20} /> English
                    </div>
                  ),
                },
                {
                  value: "Bangla",
                  label: (
                    <div className=" flex items-center gap-2">
                      <Image src={BD} alt="BD-FLAG" width={20} /> Bangla
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </div>
        <div className=" flex items-center gap-2 bg-gray-50 border rounded-md  border-gray-300 px-2 py-2 text-gray-500">
          <input
            className=" bg-transparent border-none outline-none"
            type="search"
            name="search"
            id="search"
            placeholder="Search..."
          />
          <div>
            <IoSearch />
          </div>
        </div>
      </div>
      {/* right side  */}
      <div className=" flex items-center gap-10">
        <div className=" text-xl">
          <MdOutlineLocalGroceryStore />
        </div>
        <div className=" text-xl">
          <FaRegBell />
        </div>
        <div className=" flex items-center gap-5 text-gray-600">
          <Link
            href={"/login"}
            className="hover:text-primary transition-all duration-200 ease-linear"
          >
            লগইন
          </Link>
          <Link
            href={"/register"}
            className="hover:text-primary transition-all duration-200 ease-linear"
          >
            রেজিস্টার
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default HeaderTopBar;
