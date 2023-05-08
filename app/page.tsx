"use client";
import { Dashboard } from "@/components/Dashboard";
import { Header } from "@/components/Header";
import { transactions } from "@/database/Transactions";
import { Trash } from "@phosphor-icons/react";

export default function Home() {
   return (
      <div>
         <main className="absolute flex w-3/5 gap-5 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <section className="w-64">
               <Dashboard />
            </section>
            <section className="flex-1 bg-gray-100 rounded-xl">
               <Header />
               <table className="w-full">
                  <tbody className="w-full">
                     {transactions.map((item) => (
                        <tr
                           className={`flex gap-8 p-3 m-3 border rounded-lg   ${
                              item.type === "income"
                                 ? "bg-emerald-50 border-emerald-600"
                                 : "bg-red-50 border-red-600"
                           }`}
                        >
                           <td className="flex-1">{item.title}</td>
                           <td>{item.description}</td>
                           <td>{item.total}</td>
                           <td className="flex items-center text-red-600">
                              <button>
                                 <Trash size={20} />
                              </button>
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </section>
         </main>
      </div>
   );
}
