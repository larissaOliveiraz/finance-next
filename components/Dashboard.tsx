"use client";
import { ArrowDown, ArrowUp, PiggyBank } from "@phosphor-icons/react";

export const Dashboard = () => {
   return (
      <section className="space-y-5">
         {/* INCOME CARD */}
         <div className="w-full p-5 space-y-5 text-gray-100 bg-green-500 rounded-xl">
            <div className="flex items-center gap-3">
               <ArrowUp size={24} weight="bold" />
               <h2 className="text-2xl font-semibold">Income</h2>
            </div>
            <p className="text-3xl">2000</p>
         </div>

         {/* OUTCOME CARD */}
         <div className="min-w-full p-5 space-y-5 text-gray-100 bg-red-500 rounded-xl">
            <div className="flex items-center gap-3">
               <ArrowDown size={24} weight="bold" />
               <h2 className="text-2xl font-semibold">Outcome</h2>
            </div>
            <p className="text-3xl">500</p>
         </div>

         {/* TOTAL CARD */}
         <div className="min-w-full p-5 space-y-5 text-gray-100 bg-indigo-500 rounded-xl">
            <div className="flex items-center gap-3">
               <PiggyBank size={24} weight="bold" />
               <h2 className="text-2xl font-semibold">Total</h2>
            </div>
            <p className="text-3xl">1500</p>
         </div>
      </section>
   );
};
