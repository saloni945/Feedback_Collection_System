import React from "react";
import { Link } from "react-router-dom";

// Images

// Icons
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";

const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
const Resources = [
  "How It Works",
  "Features",
  "Case Studies",
  "FAQs",
  "Contact Us",
];
const Plans = ["Free Plan", "Pro Plan", "Enterprise Plan"];
const Community = ["Blog", "Forum", "Events"];

const Footer = () => {
  return (
    <div className="bg-richblack-800">
      <div className="w-11/12 max-w-maxContent mx-auto py-14 text-richblack-400">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section */}
          <div className="flex flex-col w-full lg:w-1/2">
            {/* Logo and Company Info */}
            <div className="mb-8">
              <div className="flex gap-3 mt-3 text-2xl">
                <FaFacebook />
                <FaGoogle />
                <FaTwitter />
                <FaYoutube />
              </div>
            </div>

            {/* Company Links */}
            <div className="flex flex-col gap-2">
              <Link to="/about" className="text-sm hover:text-richblack-50 transition-all duration-200">About Us</Link>
              <Link to="/how-it-works" className="text-sm hover:text-richblack-50 transition-all duration-200">How It Works</Link>
              <Link to="/contact-us" className="text-sm hover:text-richblack-50 transition-all duration-200">Contact Us</Link>
              <Link to="/privacy-policy" className="text-sm hover:text-richblack-50 transition-all duration-200">Privacy Policy</Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col w-full lg:w-1/2">
            {/* Resources */}
            <div className="mb-8 flex justify-between">
              <div className="w-1/3">
                <h1 className="text-richblack-50 font-semibold text-sm mb-3">Resources</h1>
                <div className="flex flex-col gap-2">
                  {Resources.map((ele, index) => (
                    <Link
                      key={index}
                      to={`/${ele.split(" ").join("-").toLowerCase()}`}
                      className="text-sm hover:text-richblack-50 transition-all duration-200"
                    >
                      {ele}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Plans */}
              <div className="w-1/3">
                <h1 className="text-richblack-50 font-semibold text-sm mb-3">Plans</h1>
                <div className="flex flex-col gap-2">
                  {Plans.map((ele, index) => (
                    <Link
                      key={index}
                      to={`/${ele.split(" ").join("-").toLowerCase()}`}
                      className="text-sm hover:text-richblack-50 transition-all duration-200"
                    >
                      {ele}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Community */}
              <div className="w-1/3">
                <h1 className="text-richblack-50 font-semibold text-sm mb-3">Community</h1>
                <div className="flex flex-col gap-2">
                  {Community.map((ele, index) => (
                    <Link
                      key={index}
                      to={`/${ele.split(" ").join("-").toLowerCase()}`}
                      className="text-sm hover:text-richblack-50 transition-all duration-200"
                    >
                      {ele}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Support */}
            <div>
              <h1 className="text-richblack-50 font-semibold text-sm mb-3">Support</h1>
              <div className="text-sm hover:text-richblack-50 transition-all duration-200">
                <Link to={"/help-center"}>Help Center</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center w-full mt-8">
          <div className="flex gap-3">
            {BottomFooter.map((ele, i) => (
              <div
                key={i}
                className={`${
                  BottomFooter.length - 1 === i
                    ? ""
                    : "border-r border-richblack-700 hover:text-richblack-50 transition-all duration-200"
                } px-3`}
              >
                <Link to={`/${ele.split(" ").join("-").toLowerCase()}`}>{ele}</Link>
              </div>
            ))}
          </div>
          <div className="text-sm text-center">Made By 1.Saloni 2. Ankit    © 2024 Feedback Collection System</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
