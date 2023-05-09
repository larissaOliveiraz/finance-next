"use client";
import { Dashboard } from "@/components/Dashboard";
import { Header } from "@/components/Header";
import { transactions } from "@/database/Transactions";
import { Coin, Coins, Money, Trash } from "@phosphor-icons/react";

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
               <div className="lg:h-[380px] md:h-[450px] overflow-auto scrollbar-hidden mt-4">
                  <table className="w-full table-auto">
                     <tbody className="w-full space-y-2 overflow-y-auto">
                        {transactions.map((item) => (
                           <tr
                              className={`flex gap-8 p-3 border rounded-lg ${
                                 item.type === "income"
                                    ? "bg-emerald-50 border-emerald-600"
                                    : "bg-red-50 border-red-600"
                              }`}
                           >
                              <td className="flex-1">{item.title}</td>
                              <td className="min-w-[50px]">
                                 {item.description}
                              </td>
                              <td className="min-w-[50px]">{item.total}</td>
                              <td className="flex items-center text-gray-600 hover:text-red-600">
                                 <Trash size={22} weight="fill" />
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </section>
         </main>
      </div>
   );
}
