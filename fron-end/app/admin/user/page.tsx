"use client";
import CreateUser from "@/components/Admin/CreateUser";
import ListUser from "@/components/Admin/ListUser";
import React from "react";
import { useState, useCallback } from "react";

const UserManeger = () => {
  const [tabIndex, setTadIndex] = useState<number>(0);

  const renderByTab = useCallback(() => {
    switch (tabIndex) {
      case 0:
        return <ListUser />;
      case 1:
        return <CreateUser setTabIndex ={setTadIndex}/>;
      default:
        return null;
    }
  },[tabIndex]);

  return (
    <div className="p-8 ">
      <div className="flex gap-4 mb-5">
        <div
          onClick={() => setTadIndex(0)}
          className={`p-4 py-2  rounded-lg shadow-lg cursor-pointer ${
            tabIndex === 0 ? "bg-blue-400 text-white font-bold" : ""
          }`}
        >
          List Users
        </div>
        <div
          onClick={() => setTadIndex(1)}
          className={`p-4 py-2  rounded-lg shadow-lg cursor-pointer ${
            tabIndex === 1 ? "bg-blue-400 text-white font-bold" : ""
          }`}
        >
          Create Users
        </div>
      </div>
      {renderByTab()}

      <div></div>
    </div>
  );
};

export default UserManeger;
