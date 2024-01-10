import React, { useState } from "react";

import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { SiSimpleanalytics } from "react-icons/si";
import { GrDeliver } from "react-icons/gr";
import { FaMoneyBillWave } from "react-icons/fa";
import { IoLogoAmplify } from "react-icons/io5";

import { MdOutlineMenuBook } from "react-icons/md";
import { IoColorPaletteOutline } from "react-icons/io5";
import { FaWallet } from "react-icons/fa";

import { IoMdHome } from "react-icons/io";
import { IoIosPeople } from "react-icons/io";
import { SiGooglemarketingplatform } from "react-icons/si";
import { IoFlashOutline } from "react-icons/io5";

import { IoGridOutline } from "react-icons/io5";

const Navbar = () => {
  const [menu, setMenu] = useState(true);

  const toggleMenu = () => {
    setMenu((prevmenu) => !prevmenu);
    if (menu) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  };

  return (
    <div className=" justify-center left-0 top-0 items-center py-[0.50rem] lg:px-[2rem] h-[100%]  pl-[0.39rem] fixed pr-[0.99rem] borderfull bg-[#1E2640] text-white lg:w-[13%] w-[15%]">
      <div className="navbar fixed h-[100%] justify-between items-center  left-0 top-0 pl-0 lg:pl-[1.09rem] py-2">
        <div className="brand  flex-row items-center gap-7 lg:flex-row-reverse">
          <div className="logo ml-[3px] lg:ml-0 w-[100%] flex items-center gap-4">
            <IoLogoAmplify className="text-2xl lg:flex hidden" />
            <div>
              <h1 className=" lg:text-sm text-xs font-thin flex items-center lg:font-bold uppercase text-white">
                Nishya
              </h1>
              <p className="text-sm underline text-gray-500 lg:flex hidden">
                visit store
              </p>
            </div>
          </div>
          {menu ? (
            <RxHamburgerMenu
              className=" lg:hidden text-[2.5rem] text-[#ffff] pl-[3px] lg:pl-0 inline-block ml-0"
              onClick={() => {
                toggleMenu();
              }}
            />
          ) : (
            <IoMdClose
              className="lg:hidden text-[2.5rem] text-[#ffff] pl-[3px] lg:pl-0 inline-block ml-0"
              onClick={() => {
                toggleMenu();
              }}
            />
          )}

          <div
            className={
              menu
                ? "navs lg:flex hidden mt-[1rem] lg:relative fixed lg:top-0 left-0 top-[64px] z-20 lg:pt-0  bg-[#f3f3f3] h-[100%] lg:bg-transparent"
                : "navs lg:flex lg:relative fixed lg:top-0 left-0 top-[64px]  lg:pt-0  h-[100%] lg:bg-transparent"
            }
          >
            <ul className="p-0 justify-center leading-[35px] lg:leading-0  bg-[#1E2640] top-0 z-[-18] lg:ml-0 lg:bg-transparent ml-[59px] w-[100%] h-[100%] fixed lg:relative">
              <li className="li">
                <a className="links" to="/Scores">
                  <IoMdHome className="text-sm font-light mr-2 " />
                  Home
                </a>
              </li>

              <li className="li">
                <a className="links" to="/Schedule">
                  <MdOutlineMenuBook className="text-sm font-light mr-2 " />
                  Orders
                </a>
              </li>

              <li className="li">
                <a className="links" to="/Schedule">
                  <IoGridOutline className="text-sm font-light mr-2 " />
                  Products
                </a>
              </li>

              <li className="li">
                <a className="links" to="/Tickets">
                  <GrDeliver className="text-sm font-light mr-2 " /> Delivery
                </a>
              </li>

              <li className="li">
                <a className="links" to="/Visit">
                  <SiGooglemarketingplatform className="text-sm font-light mr-2 " />
                  Marketing
                </a>
              </li>

              <li className="li">
                <a className="links" to="/Watch">
                  <SiSimpleanalytics className="text-sm font-light mr-2 " />
                  Analytics
                </a>
              </li>
              <li className="li bg-slate-400 rounded pl-1">
                <a className="links" to="/News">
                  <FaMoneyBillWave className="text-sm font-light mr-2 " />
                  Payouts
                </a>
              </li>

              <li className="li">
                <a className="links" to="/News">
                  <IoIosPeople className="text-sm font-light mr-2 " /> Audience
                </a>
              </li>

              <li className="li">
                <a className="links" to="/News">
                  <IoColorPaletteOutline className="text-sm font-light mr-2 " />
                  Appearance
                </a>
              </li>

              <li className="li">
                <a className="links" to="/News">
                  <IoFlashOutline className="text-sm font-light mr-2 " />
                  Plugins
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={
            menu
              ? "relative z-[48] lg:mt-[6rem] mt-[28rem] lg:opacity-[1] flex justify-center items-center space-x-2 bg-[#353C53] px-2 py-2 rounded-sm lg:left-0 left-[75px] opacity-0"
              : "relative z-[48] lg:mt-[6rem] mt-[28rem]  flex justify-center items-center space-x-2 bg-[#353C53] px-2 py-2 rounded-sm lg:left-0 left-[75px] opacity-[1]"
          }
        >
          <FaWallet className="text-[30px]" />
          <span className="">
            <p className=" lg:text-[11px] text-[13px] font-light">
              available-credits
            </p>
            <b>222.10</b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
