"use client";
import { TransactionContext } from "@/context/TransactionContext";
import { useFormatter } from "@/hooks/useFormatter";
import { Transaction } from "@/types/Transaction";
import { Trash } from "@phosphor-icons/react";
import React, { useContext } from "react";

export const TransactionTable = () => {
   const { transactions, deleteTransaction } = useContext(TransactionContext);
   const formatter = useFormatter();

   return (
      <div className="lg:h-[380px] md:h-[450px] overflow-auto scrollbar-hidden mt-4">
         <table className="w-full table-auto">
            <tbody className="w-full space-y-2 overflow-y-auto">
               {transactions &&
                  transactions.map((item: Transaction) => (
                     <tr
                        key={item.title}
                        className={`flex gap-8 p-3 border row rounded-lg ${
                           item.type === "income"
                              ? "bg-emerald-50 border-emerald-600"
                              : "bg-red-50 border-red-600"
                        }`}
                     >
                        <td className="flex-1">{item.title}</td>
                        <td className="min-w-[50px]">{item.category}</td>
                        <td className="min-w-[50px]">
                           {formatter.priceFormatter(item.amount)}
                        </td>
                        <td
                           onClick={() => deleteTransaction(item)}
                           className="flex items-center text-gray-600 hover:text-red-600"
                        >
                           <Trash size={22} weight="fill" />
                        </td>
                     </tr>
                  ))}
            </tbody>
         </table>
      </div>
   );
};
