import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { HiArrowDownTray } from "react-icons/hi2";
import { RiArrowUpDownLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegCircle } from "react-icons/fa6";

const Prices_payment = () => {
  return (
    <div>
      <div className="flex justify-between  border">
        <button>overview</button>
        <select name="operator">
          <option value="this month">this month</option>
          <option value="last month">last month</option>
        </select>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 mt-5 gap-6 ">
        <div className=" bg-[#146EB4] text-white py-2  rounded-sm overflow-hidden">
          <div className="px-4">
            <p className="text-[14px]">Next Payout</p>
            <div className=" flex items-baseline justify-between mt-2 mb-3">
              <h2 className="text-[1.55rem] mb-3">₹2,312.23</h2>
              <p className=" underline ml-16 text-[14px] flex justify-center items-end">
                23 orders <IoIosArrowForward />{" "}
              </p>
            </div>
          </div>
          <div className="flex justify-between px-4 py-2 top-[16%] bg-[#0E4F82] rounded-sm relative mb-2">
            <p className="font-light text-[13px]">Next payout date</p>
            <p className="font-light text-[13px]">Today,4:00pm</p>
          </div>
        </div>

        <div className=" bg-blue-600 text-white py-2  h-[100px] rounded-sm">
          <div className="px-4">
            <p className="text-[14px]">Next Payout</p>
            <div className=" flex items-baseline justify-between mt-2 mb-3">
              <h2 className="text-[1.55rem] mb-3">₹2,312.23</h2>
              <p className=" underline ml-16 text-[14px] flex justify-center items-end">
                13 orders <IoIosArrowForward />{" "}
              </p>
            </div>
          </div>
        </div>
        <div className=" bg-blue-600 text-white py-2  h-[100px] rounded-sm">
          <div className="px-4">
            <p className="text-[14px]">Amount processed</p>
            <div className=" flex items-baseline justify-between mt-2 mb-3">
              <h2 className="text-[1.55rem] mb-3">₹2,312.23</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="my-[2rem]">
        <h3>Transactions | This Month</h3>
        <div className="my-[1rem] space-x-3 text-white">
          <button className=" bg-gray-400 px-2 py-1 rounded">
            payouts (22)
          </button>
          <button className=" bg-[#146EB4] px-2 py-1 rounded">
            refunds (6)
          </button>
        </div>
      </div>

      <main>
        <div className=" flex justify-between lg:flex-row flex-col items-start">
          <div className="bg-[#F2F2F2] px-2 rounded flex items-center space-x-2 ">
            <IoSearchOutline />
            <input
              type="text"
              placeholder="order id or transaction id.."
              className=" bg-transparent outline-none py-1"
            />
          </div>

          <span className=" space-x-3 flex justify-center mt-3 ">
            <button className=" px-2 py-1 rounded flex justify-center  border space-x-2 ">
              <b className=" font-normal"> Sort </b> <RiArrowUpDownLine />
            </button>
            <button className=" px-2 py-1 rounded border">
              <HiArrowDownTray />
            </button>
          </span>
        </div>

        <div className=" mt-3 ">
          <ul className="flex justify-between py-3 px-2 bg-[#F2F2F2] rounded">
            <li className="text-[12px] lg:text-[15px]">Order</li>
            <li className="text-[12px] lg:text-[15px]">Status</li>
            <li className="text-[12px] lg:text-[15px]">Transaction Id</li>
            <li className="text-[12px] lg:text-[15px]">Refund date</li>
            <li className="text-[12px] lg:text-[15px]">Order amount</li>
          </ul>

          <ul className="flex  justify-between border  py-2  border-t-[#000]  border-b-[1px]">
            <li className=" text-[#146EB4] text-[12px] lg:text-[15px]">
              #281209
            </li>
            <li className="text-[12px] lg:text-[15px] flex items-center gap-1">
              <FaRegCircle className=" text-[6px] bg-[#17B31B] rounded" />
              Successful
            </li>
            <li className="text-[12px] lg:text-[15px]">131634495747</li>
            <li className="text-[12px] lg:text-[15px]">Today,08:45pm</li>
            <li className="text-[12px] lg:text-[15px]">₹1,125.00</li>
          </ul>
          <ul className="flex  justify-between border  py-2  border-t-[#000]  border-b-[1px]">
            <li className=" text-[#146EB4] text-[12px] lg:text-[15px]">
              #281209
            </li>
            <li className="text-[12px] lg:text-[15px] flex items-center gap-1">
              <FaRegCircle className=" text-[6px] bg-[#999999] rounded" />
              Processing
            </li>
            <li className="text-[12px] lg:text-[15px]">131634495747</li>
            <li className="text-[12px] lg:text-[15px]">Today,08:45pm</li>
            <li className="text-[12px] lg:text-[15px]">₹1,125.00</li>
          </ul>
          <ul className="flex  justify-between border  py-2  border-t-[#000]  border-b-[1px]">
            <li className=" text-[#146EB4] text-[12px] lg:text-[15px]">
              #281209
            </li>
            <li className="text-[12px] lg:text-[15px] flex items-center gap-1">
              <FaRegCircle className=" text-[6px] bg-[#17B31B] rounded" />
              Successful
            </li>
            <li className="text-[12px] lg:text-[15px]">131634495747</li>
            <li className="text-[12px] lg:text-[15px]">Today,08:45pm</li>
            <li className="text-[12px] lg:text-[15px]">₹1,125.00</li>
          </ul>
          <ul className="flex  justify-between border  py-2  border-t-[#000]  border-b-[1px]">
            <li className=" text-[#146EB4] text-[12px] lg:text-[15px]">
              #281209
            </li>
            <li className="text-[12px] lg:text-[15px] flex items-center gap-1">
              <FaRegCircle className=" text-[6px] bg-[#17B31B] rounded" />
              Successful
            </li>
            <li className="text-[12px] lg:text-[15px]">131634495747</li>
            <li className="text-[12px] lg:text-[15px]">Today,08:45pm</li>
            <li className="text-[12px] lg:text-[15px]">₹1,125.00</li>
          </ul>
          <ul className="flex  justify-between border  py-2  border-t-[#000]  border-b-[1px]">
            <li className=" text-[#146EB4] text-[12px] lg:text-[15px]">
              #281209
            </li>
            <li className="text-[12px] lg:text-[15px] flex items-center gap-1">
              <FaRegCircle className=" text-[6px] bg-[#17B31B] rounded" />
              Successful
            </li>
            <li className="text-[12px] lg:text-[15px]">131634495747</li>
            <li className="text-[12px] lg:text-[15px]">Today,08:45pm</li>
            <li className="text-[12px] lg:text-[15px]">₹1,125.00</li>
          </ul>
          <ul className="flex  justify-between border  py-2  border-t-[#000]  border-b-[1px]">
            <li className=" text-[#146EB4] text-[12px] lg:text-[15px]">
              #281209
            </li>
            <li className="text-[12px] lg:text-[15px] flex items-center gap-1">
              <FaRegCircle className=" text-[6px] bg-[#17B31B] rounded" />
              Successful
            </li>
            <li className="text-[12px] lg:text-[15px]">131634495747</li>
            <li className="text-[12px] lg:text-[15px]">Today,08:45pm</li>
            <li className="text-[12px] lg:text-[15px]">₹1,125.00</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Prices_payment;
