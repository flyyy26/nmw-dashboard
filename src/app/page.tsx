import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableEleven from "@/components/Tables/TableEleven";
import TableEight from "@/components/Tables/TableEight";

export const metadata: Metadata = {
  title:
    "NMW Aesthetic Clinic CMS",
  description: "This is Next.js Home page for NextAdmin Dashboard Kit",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <div className="mb-5">
          <h1>Dashboard</h1>
        </div>
        <ECommerce />
        <div className="flex flex-col  gap-5 mt-9">
          <TableEleven/>
          <button className="flex w-max justify-center m-auto gap-2 rounded-[7px] bg-primary p-[9px] px-5 font-medium text-white hover:bg-opacity-90">
              See Other
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m14 16l4-4m0 0l-4-4m4 4H6"/></svg>
          </button>
        </div>
        <div className="flex flex-col  gap-5 mt-9">
          <TableEight/>
          <button className="flex w-max justify-center m-auto gap-2 rounded-[7px] bg-primary p-[9px] px-5 font-medium text-white hover:bg-opacity-90">
              See Other
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="m14 16l4-4m0 0l-4-4m4 4H6"/></svg>
          </button>
        </div>
        
      </DefaultLayout>
    </>
  );
}
