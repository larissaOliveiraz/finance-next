"use client";
import { Dashboard } from "@/components/Dashboard";
import { Header } from "@/components/Header";
import { transactions } from "@/database/Transactions";
import { Trash } from "@phosphor-icons/react";

export default function Home() {
   return (
      <div className="flex h-screen m-auto overflow-x-hidden w">
         <main className="flex w-3/5 gap-5 m-auto ">
            <section className="fixed top-0 bottom-0 left-0 flex items-center bg-gray-100 rounded-xl w-96">
               <Dashboard />
            </section>
            <section className="flex-1 pt-3 pb-3 mt-32 mb-32 ml-64 rounded-xl">
               <Header />
               <table className="w-full">
                  <tbody className="w-full overflow-y-auto">
                     {transactions.map((item) => (
                        <tr
                           className={`flex gap-8 p-3 m-3 border rounded-lg ${
                              item.type === "income"
                                 ? "bg-emerald-50 border-emerald-600"
                                 : "bg-red-50 border-red-600"
                           }`}
                        >
                           <td className="flex-1">{item.title}</td>
                           <td>{item.description}</td>
                           <td>{item.total}</td>
                           <td className="flex items-center text-gray-600 hover:text-red-600">
                              <button>
                                 <Trash size={22} weight="fill" />
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
