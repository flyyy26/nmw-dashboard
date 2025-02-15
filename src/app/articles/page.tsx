import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import TableSix from "@/components/Tables/TableSix";
import ButtonDefault from "@/components/Buttons/ButtonDefault";

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import TableEleven from "@/components/Tables/TableEleven";

export const metadata: Metadata = {
  title: "Articles || NMW Aesthetic Clinic",
  description: "This is Next.js Tables page for NextAdmin Dashboard Kit",
};

const ArticlesPage = () => { 
  return (
    <DefaultLayout>
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Breadcrumb route="articles" pageName="Manage Articles" pageNameSecond="" />
            <ButtonDefault
                    label="Add New Article"
                    link="/articles/create"
                    customClasses="bg-green text-white py-[11px] px-6 rounded-lg"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="currentColor" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"/></svg>
            </ButtonDefault>
        </div>

      <div className="flex flex-col gap-10">
        <TableEleven showPagination={true}/> 
      </div>
    </DefaultLayout>
  ); 
};

export default ArticlesPage;
