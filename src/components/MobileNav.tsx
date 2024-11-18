import { CollapseProps } from "antd";
import { NavCollapse } from "./NavCollapse ";

function MobileNav() {
  const domainHostingItems: CollapseProps["items"] = [
    {
      key: "1",
      label: (
        <p className="hover:text-primary transition-all duration-200 ease-linear">
          ওয়েব হোস্টিং
        </p>
      ),
      children: (
        <div className=" ml-3 flex flex-col  gap-2 divide-y">
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            ওয়েব হোস্টিং CWP
          </li>
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            ওয়েব হোস্টিং Cpanel
          </li>
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            ওয়েব হোস্টিং BDIX
          </li>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <p className="hover:text-primary transition-all duration-200 ease-linear">
          সার্ভার বা ক্লাউড
        </p>
      ),
      children: (
        <div className=" ml-3 flex flex-col  gap-2 divide-y">
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            ওয়ার্ডপ্রেস ম্যানেজড হোস্টিং
          </li>
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            ভিপিএস সার্ভার
          </li>
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            ডেডিকেটেড সার্ভার
          </li>
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <p className="hover:text-primary transition-all duration-200 ease-linear">
          ডোমেইন নিবন্ধন ও এসএসএল
        </p>
      ),
      children: (
        <div className=" ml-3 flex flex-col  gap-2 divide-y">
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            ডোমেইন নিবন্ধন
          </li>
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            এডু ও বিডি ডোমেইন
          </li>
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            এসএসএল সার্টিফিকেট
          </li>
        </div>
      ),
    },
    {
      key: "4",
      label: (
        <p className="hover:text-primary transition-all duration-200 ease-linear">
          অন্যান্য পরিষেবা
        </p>
      ),
      children: (
        <div className=" ml-3 flex flex-col  gap-2 divide-y">
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            বাল্ক এসএমএস পরিষেবা
          </li>
        </div>
      ),
    },
  ];
  const softwareItems: CollapseProps["items"] = [
    {
      key: "1",
      label: (
        <p className="hover:text-primary transition-all duration-200 ease-linear">
          ব্যবসায়িক সফটওয়্যার
        </p>
      ),
      children: (
        <div className=" ml-3 flex flex-col  gap-2 divide-y">
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            ক্লাউড বিজনেস সফটওয়্যার
          </li>
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            পস সফটওয়্যার
          </li>
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            হোম সার্ভিস সফটওয়্যার
          </li>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <p className="hover:text-primary transition-all duration-200 ease-linear">
          এডুকেশন রিলেটেড সফটওয়্যার
        </p>
      ),
      children: (
        <div className=" ml-3 flex flex-col  gap-2 divide-y">
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            স্কুল ম্যানেজমেন্ট সফটওয়্যার
          </li>
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            কলেজ ম্যানেজমেন্ট সফটওয়্যার
          </li>
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            কোচিং প্রাইভেট সেন্টার সফটওয়্যার
          </li>
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <p className="hover:text-primary transition-all duration-200 ease-linear">
          স্বাস্থ্য চিকিৎসা সফটওয়্যার
        </p>
      ),
      children: (
        <div className=" ml-3 flex flex-col  gap-2 divide-y">
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            মেডিকেল হসপিটাল সফটওয়্যার
          </li>
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            ডায়াগনস্টিক ক্লিনিক সফটওয়্যার
          </li>
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            ফার্মেসিস সফটওয়্যার
          </li>
        </div>
      ),
    },
    {
      key: "4",
      label: (
        <p className="hover:text-primary transition-all duration-200 ease-linear">
          অন্যান্য সফটওয়্যার
        </p>
      ),
      children: (
        <div className=" ml-3 flex flex-col  gap-2 divide-y">
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            ট্রেনিং ম্যানেজমেন্ট সফটওয়্যার
          </li>
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            হোটেল ম্যানেজমেন্ট সফটওয়্যার
          </li>
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            রেস্টুরেন্ট ম্যানেজমেন্ট সফটওয়্যার
          </li>
        </div>
      ),
    },
  ];
  const servicesItems: CollapseProps["items"] = [
    {
      key: "1",
      label: (
        <p className="hover:text-primary transition-all duration-200 ease-linear">
          ডেভেলপমেন্ট সার্ভিসেস
        </p>
      ),
      children: (
        <div className=" ml-3 flex flex-col  gap-2 divide-y">
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            ওয়েব ডিজাইন এন্ড ডেভেলপমেন্ট
          </li>
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            অ্যাপস ডেভেলপমেন্ট
          </li>
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            ই-কমার্স ওয়েবসাইট
          </li>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <p className="hover:text-primary transition-all duration-200 ease-linear">
          ডিজিটাল মার্কেটিং সার্ভিস
        </p>
      ),
      children: (
        <div className=" ml-3 flex flex-col  gap-2 divide-y">
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            ওয়েবসাইট এসইও
          </li>
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            ফেসবুক বুস্টিং ও অ্যাট রানিং
          </li>
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            ইমেইল মার্কেটিং
          </li>
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <p className="hover:text-primary transition-all duration-200 ease-linear">
          এডিটিং সার্ভিস
        </p>
      ),
      children: (
        <div className=" ml-3 flex flex-col  gap-2 divide-y">
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            গ্রাফিক্স ডিজাইন
          </li>
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            মোশন গ্রাফিক্স
          </li>
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            ভিডিও এডিটিং
          </li>
        </div>
      ),
    },
    {
      key: "4",
      label: (
        <p className="hover:text-primary transition-all duration-200 ease-linear">
          প্রিন্টিং পণ্য ও পরিষেবা
        </p>
      ),
      children: (
        <div className=" ml-3 flex flex-col  gap-2 divide-y">
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            আইডি কার্ড এবং রিবন প্রিন্ট
          </li>
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            স্মার্ট আইডি ও অ্যাটেনডেন্স সিস্টেম
          </li>
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            অন্যান্য প্রিন্টিং পরিষেবা
          </li>
        </div>
      ),
    },
  ];
  const coursesItems: CollapseProps["items"] = [
    {
      key: "1",
      label: (
        <p className="hover:text-primary transition-all duration-200 ease-linear">
          একাডেমিক কোর্স
        </p>
      ),
      children: (
        <div className=" ml-3 flex flex-col  gap-2 divide-y">
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            অফিস এপ্লিকেশন (সার্টিফিকেশন)
          </li>
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            অফিস এপ্লিকেশন (বিসিক)
          </li>
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            আইসিটি একাডেমিক কোর্স
          </li>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <p className="hover:text-primary transition-all duration-200 ease-linear">
          প্রফেশনাল কোর্স
        </p>
      ),
      children: (
        <div className=" ml-3 flex flex-col  gap-2 divide-y">
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            গ্রাফিক্স ডিজাইন
          </li>
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            অ্যাপস ডেভেলপমেন্ট
          </li>
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            ওয়েব ডিজাইন ও ডেভেলপমেন্ট
          </li>
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <p className="hover:text-primary transition-all duration-200 ease-linear">
          ক্যারিয়ার ডেভেলপমেন্ট
        </p>
      ),
      children: (
        <div className=" ml-3 flex flex-col  gap-2 divide-y">
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            ডিজিটাল মার্কেটিং
          </li>
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            ই-কমার্স এবং ই-শপ
          </li>
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            ফিনান্সিং এবং আউটসোর্সিং
          </li>
        </div>
      ),
    },
    {
      key: "4",
      label: (
        <p className="hover:text-primary transition-all duration-200 ease-linear">
          মাল্টিমিডিয়া কোর্স
        </p>
      ),
      children: (
        <div className=" ml-3 flex flex-col  gap-2 divide-y">
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            অডিও ভিডিও এডিটিং
          </li>
        </div>
      ),
    },
  ];
  const aboutUsItems: CollapseProps["items"] = [
    {
      key: "1",
      label: (
        <p className="hover:text-primary transition-all duration-200 ease-linear">
          আইসিটি সেবা (ICTSEBA)
        </p>
      ),
      children: (
        <div className=" ml-3 flex flex-col  gap-2 divide-y">
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            আমাদের সম্পর্কে
          </li>
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            প্রশ্ন ও উত্তর
          </li>
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            শর্তাবলী
          </li>
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            গোপনীয়তা নীতি
          </li>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <p className="hover:text-primary transition-all duration-200 ease-linear">
          পোর্টফোলিও এবং অন্যান্য
        </p>
      ),
      children: (
        <div className=" ml-3 flex flex-col  gap-2 divide-y">
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            ফটো গ্যালারী
          </li>
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            আমাদের ক্লায়েন্ট এবং পোর্টফোলিও
          </li>
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            টেস্টমোনিয়ালস এবং রিভিউ
          </li>
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            ব্লক সংবাদ
          </li>
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <p className="hover:text-primary transition-all duration-200 ease-linear">
          আমাদের এপস এবং গেমস
        </p>
      ),
      children: (
        <div className=" ml-3 flex flex-col  gap-2 divide-y">
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            Dream Lead Agency
          </li>
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            RecalmTrip
          </li>
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            ICTSEBA
          </li>
        </div>
      ),
    },
    {
      key: "4",
      label: (
        <p className="hover:text-primary transition-all duration-200 ease-linear">
          মিস্টার কনসান
        </p>
      ),
      children: (
        <div className=" ml-3 flex flex-col  gap-2 divide-y">
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            মুভি ভিডিও
          </li>
          <li className=" cursor-pointer hover:text-primary transition-all duration-200 ease-linear pt-2">
            স্মার্ট লার্নিং
          </li>
        </div>
      ),
    },
  ];

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: (
        <p className="hover:text-primary transition-all duration-200 ease-linear">
          ডোমেইন/হোস্টিং
        </p>
      ),
      children: <NavCollapse items={domainHostingItems} />,
    },
    {
      key: "2",
      label: (
        <p className="hover:text-primary transition-all duration-200 ease-linear">
          সফটওয়্যার
        </p>
      ),
      children: <NavCollapse items={softwareItems} />,
    },
    {
      key: "3",
      label: (
        <p className="hover:text-primary transition-all duration-200 ease-linear">
          সার্ভিসেস
        </p>
      ),
      children: <NavCollapse items={servicesItems} />,
    },
    {
      key: "4",
      label: (
        <p className="hover:text-primary transition-all duration-200 ease-linear">
          কোর্স
        </p>
      ),
      children: <NavCollapse items={coursesItems} />,
    },
    {
      key: "5",
      label: (
        <p className="hover:text-primary transition-all duration-200 ease-linear">
          আমাদের সম্পর্কে
        </p>
      ),
      children: <NavCollapse items={aboutUsItems} />,
    },
  ];
  return (
    <div>
      <ul className=" flex flex-col w-full">
        <li className=" hover:text-primary transition-all duration-200 ease-linear cursor-pointer font-light pl-[20px] border-b pb-2">
          হোম
        </li>
        <li>
          <NavCollapse items={items} />
        </li>
        <li className="hover:text-primary transition-all duration-200 ease-linear cursor-pointer font-light pl-[15px] border-t pt-2">
          যোগাযোগ
        </li>
      </ul>
    </div>
  );
}

export default MobileNav;
