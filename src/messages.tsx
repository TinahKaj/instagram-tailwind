import { useState } from "react";
import { Link } from "react-router-dom";

function Messages() {

    return(
        <>
  <div className="border-e-2 p-2">
    <a href="Index.html">
      <div className="pb-3 pt-2">
        <div className="p-1">
          <button className=" hover:bg-slate-200 hover: p-2 rounded-lg">
            <img
              className="w-9 p-1"
              src="./icons/icons8-instagram-24.png"
              alt=""
            />
          </button>
        </div>
      </div>
    </a>
    <div className="">
      <div className="p-1 flex">
        <button
          data-tooltip-target="tooltip-right-start"
          className=" hover:bg-slate-200 p-2 rounded-lg"
        >
          <img
            className="w-9 p-1"
            src="./icons/icons8-home-48 (1).png"
            alt=""
          />
        </button>
        <div
          data-tooltip="tooltip-right-start"
          data-tooltip-placement="right-start"
          className="absolute z-10 invisible inline-block
              text-sm text-black transition-opacity duration-400 bg-slate-200 shadow-sm">
          home
        </div>
        <div className="tooltip-arrow" data-popper-arrow="" />
      </div>
    </div>
    <div className="">
      <div className="p-1">
        <button className="hover:bg-slate-200 p-2 rounded-lg">
          <img className="w-9 p-1" src="./icons/icons8-search-30.png" alt="" />
        </button>
      </div>
    </div>
    <div className="">
      <div className="p-1">
        <button className="hover:bg-slate-200 p-2 rounded-lg">
          <img className="w-9 p-1" src="./icons/icons8-explore-24.png" alt="" />
        </button>
      </div>
    </div>
    <div className="">
      <div className="p-1">
        <button className="hover:bg-slate-200 p-2 rounded-lg">
          <img className="w-9 p-1" src="./icons/icons8-reels-50.png" alt="" />
        </button>
      </div>
    </div>
    <div className="">
      <div className="p-1">
        <button className="hover:bg-slate-200 p-2 rounded-lg">
          <img
            className="w-9 p-1"
            src="./icons/icons8-messenger-50 (1).png"
            alt=""
          />
        </button>
      </div>
    </div>
    <div className="">
      <div className="p-1">
        <button className=" hover:bg-slate-200 p-2 rounded-lg">
          <img className="w-9 p-1" src="./icons/icons8-heart-48.png" alt="" />
        </button>
      </div>
    </div>
    <div className="">
      <div className="p-1">
        <button className=" hover:bg-slate-200 p-2 rounded-lg">
          <img className="w-8 p-1" src="./icons/icons8-create-24.png" alt="" />
        </button>
      </div>
    </div>
    <div className="">
      <div className="p-2">
        <button className="hover:bg-slate-200 p-2 rounded-lg">
          <div className="w-7 h-7 border-2 rounded-full border-gray-100">
            <img className="" src="./icons/icons8-duck-64.png" alt="" />
          </div>
        </button>
      </div>
    </div>
    <div className="pb-8" />
    <div className="">
      <div className="p-1">
        <button className="hover:bg-slate-200 p-2 rounded-lg">
          <img
            className="w-9 p-1"
            src="./icons/Threads_(app)_logo.svg.png"
            alt=""
          />
        </button>
      </div>
    </div>
    <div>
      <div className="p-1">
        <button className="hover:bg-slate-200 p-2 rounded-lg">
          <img
            className="w-9 p-1"
            src="./icons/icons8-menu-50 (1).png"
            alt=""
          />
        </button>
      </div>
    </div>
  </div>
  <div className="overflow-y-auto border-e-2">
    <div className="ml-5 mr-5">
      <div className="flex">
        <button className="flex font-bold text-lg pt-8">
          albertinah
          <img
            className="w-4 ml-2 pt-2"
            src="./icons/icons8-arrow-30.png"
            alt=""
          />
        </button>
        <button className="ml-52 pt-6">
          <img src="./icons/icons8-create-32.png" alt="" />
        </button>
      </div>
      <div className="pt-10">
        <button>
          <ul className="flex">
            <li>
              <div>
                <img
                  className="w-20 h-20 rounded-full border-2"
                  src="./images/bonny_A.jpeg"
                  alt=""
                />
              </div>
              <p className="text-xs text-center">Your note</p>
            </li>
          </ul>
        </button>
      </div>
      <div className="flex pt-8">
        <p className="font-bold">Messages</p>
        <button className="ml-52">
          <p className="text-gray-600">Requests</p>
        </button>
      </div>
    </div>
    <div className="pt-4">
      <div className="pl-3 hover:bg-slate-100">
        <button className="p-2">
          <ul>
            <li className="flex">
              <div>
                <img
                  className="w-16 h-16 border-2 rounded-full"
                  src="./images/elsa.png"
                  alt=""
                />
              </div>
              <div className="content-center justify-start ml-3 font-bold">
                <ul className="text-sm">
                  <li className="text-left">
                    <p>Yav Mutombu</p>
                  </li>
                  <li>
                    <p>Yav sent an attachment</p>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </button>
      </div>
    </div>
  </div>
  <div className="text-center p-[15%] border-e-2 w-[73%]">
    <div className="">
      <div className="content-center ml-[44%] border-black border-2 w-20 h-20 rounded-full">
        <img
          className="w-10 ml-4 align-center"
          src="icons/icons8-messenger-50.png"
          alt=""
        />
      </div>
    </div>
    <ul>
      <li className="text-lg font-bold">Your messages</li>
      <li className="text-sm">
        Send private photos and messages to a friend or group
      </li>
    </ul>
    <button className=" p-1 rounded-lg bg-sky-600">
      <p className="text-white text-sm font-bold">Send message</p>
    </button>
  </div>
</>

    )
}
export default Messages;