import {
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
  FaSquareWhatsapp,
  FaSquareXTwitter,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className=" bg-primary text-white">
      <div>
        <div className=" grid grid-cols-4 gap-5 px-5 py-3">
          <div className="">
            <h2 className=" text-xl">About us</h2>
            <p className=" text-sm text-gray-100">
              Lorem ipsum dolor sit  amet consectetur adipisicing elit. Soluta
              necessitatibus labore voluptatum! Dolor et officia esse eaque
              laboriosam ipsam, nulla quis velit?
            </p>
          </div>
          <div>
            <h2 className=" text-xl">Additional Links</h2>
            <ul className=" text-sm text-gray-100">
              <li className=" cursor-pointer hover:underline">Login</li>
              <li className=" cursor-pointer hover:underline">Register</li>
              <li className=" cursor-pointer hover:underline">
                Terms & conditions
              </li>
              <li className=" cursor-pointer hover:underline">About US </li>
              <li className=" cursor-pointer hover:underline">
                Become instructor
              </li>
            </ul>
          </div>
          <div>
            <h2 className=" text-xl">Popular Services</h2>
            <ul className=" text-sm text-gray-100">
              <li className=" cursor-pointer hover:underline">
                Graphics design
              </li>
              <li className=" cursor-pointer hover:underline">
                Web Design and Development
              </li>
              <li className=" cursor-pointer hover:underline">
                Scanning and Laminating
              </li>
              <li className=" cursor-pointer hover:underline">
                Email Services
              </li>
              <li className=" cursor-pointer hover:underline">
                Computer Compose
              </li>
              <li className=" cursor-pointer hover:underline">Print Result</li>
              <li className=" cursor-pointer hover:underline">
                Application for Admission
              </li>
            </ul>
          </div>
          <div>
            <h2 className=" text-xl">Contact Us</h2>
            <ul className="text-gray-100">
              <li className="flex items-center gap-1">
                <FaPhone className="text-blue-800" />
                +88 01500000000
              </li>
              <li className="flex items-center gap-1">
                <FaSquareWhatsapp className="text-green-800" />
                +88 01500000000
              </li>
              <li className="flex items-center gap-1">
                <FaEnvelope className="text-orange-700" />
                info@ictseba.com
              </li>
              <li className="flex gap-1">
                <FaLocationDot className="text-blue-800 mt-1.5" />
                Bogura, Zip 0000, Dhaka, Bangladesh
              </li>
            </ul>
            <ul className="flex items-center gap-3 mt-2 text-2xl">
              <li>
                <FaFacebook className="text-blue-800 cursor-pointer transition-all duration-200 ease-linear hover:scale-[.9]" />
              </li>
              <li>
                <FaLinkedin className="text-sky-800 cursor-pointer transition-all duration-200 ease-linear hover:scale-[.9]" />
              </li>
              <li>
                <FaSquareXTwitter className="cursor-pointer transition-all duration-200 ease-linear hover:scale-[.9]" />
              </li>
            </ul>
          </div>
        </div>
        <div className=" text-white border-t w-full border-white text-center py-2">
          <h2>
            &copy; {new Date().getFullYear()} All rights reserved by ICTSEBA
          </h2>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
