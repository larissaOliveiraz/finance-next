"use client";
import { ArrowDown, ArrowUp, PiggyBank } from "@phosphor-icons/react";

export const Dashboard = () => {
   return (
      <section className="flex w-full gap-3 p-4 overflow-x-auto lg:p-0 md:justify-center scrollbar-hidden lg:block lg:space-y-4">
         {/* INCOME CARD */}
         <div className="min-w-[80%] space-y-5 text-gray-100 bg-green-500 p-7 rounded-xl md:min-w-[31.9%] lg:min-w-[280px]">
            <div className="flex items-center gap-3">
               <ArrowUp size={24} weight="bold" />
               <h2 className="text-2xl font-semibold">Income</h2>
            </div>
            <p className="text-3xl">$ 2000</p>
         </div>

         {/* OUTCOME CARD */}
         <div className="min-w-[80%] space-y-5 text-gray-100 bg-red-500 p-7 rounded-xl md:min-w-[31.9%] lg:min-w-[280px]">
            <div className="flex items-center gap-3">
               <ArrowDown size={24} weight="bold" />
               <h2 className="text-2xl font-semibold">Outcome</h2>
            </div>
            <p className="text-3xl">$ 500</p>
         </div>

         {/* TOTAL CARD */}
         <div className="min-w-[80%] space-y-5 text-gray-100 bg-indigo-500 p-7 rounded-xl md:min-w-[31.9%] lg:min-w-[280px]">
            <div className="flex items-center gap-3">
               <PiggyBank size={24} weight="bold" />
               <h2 className="text-2xl font-semibold">Total</h2>
            </div>
            <p className="text-3xl">$ 1500</p>
         </div>
      </section>
   );
};
