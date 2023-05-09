"use client";
import { Dashboard } from "@/components/Dashboard";
import { Header } from "@/components/Header";
import { TransactionTable } from "@/components/TransactionTable";
import { Coins } from "@phosphor-icons/react";

export default function Home() {
   return (
      <div className="flex flex-col items-center overflow-x-hidden">
         {/* HEADER */}
         <header className="flex items-center justify-center w-full gap-2 p-4 py-3 pl-1 mb-3 text-2xl text-gray-100 bg-indigo-800 md:hidden">
            <Coins size={28} weight="bold" />
            <h1>Finances</h1>
         </header>

         {/* MAIN */}
         <main className="w-full pt-3 lg:flex md:w-[80%] md:position-middle lg:items-start lg:w-[60%] lg:space-x-5 lg:position-middle">
            {/* DASHBOARD */}
            <section className="flex items-center">
               <Dashboard />
            </section>

            {/* SEARCH - ADD - TRANSACTIONS */}
            <section className="flex-1 p-5 rounded-xl lg:bg-gray-100 lg:p-3">
               {/* SEARCH - ADD */}
               <Header />

               {/* TRANSACTIONS TABLE */}
               <TransactionTable />
            </section>
         </main>
      </div>
   );
}
