import { ArrowDown, ArrowUp, X } from "@phosphor-icons/react";
import * as Dialog from "@radix-ui/react-dialog";
import { Input } from "./Input";
import { useState } from "react";

export const NewTransactionModal = () => {
   const [name, setName] = useState("");
   const [category, setCategory] = useState("");
   const [activeType, setActiveType] = useState<"income" | "outcome">("income");

   const createTransaction = () => {};

   return (
      <Dialog.Portal>
         <Dialog.Overlay className="absolute inset-0 bg-black/50" />
         <Dialog.Content className="absolute w-1/3 p-5 text-indigo-900 -translate-x-1/2 -translate-y-1/2 bg-gray-100 rounded-lg top-1/2 left-1/2">
            <div className="flex items-center justify-between">
               <Dialog.Title className="text-lg font-bold">
                  New Transaction
               </Dialog.Title>
               <Dialog.Close>
                  <X size={20} weight="bold" />
               </Dialog.Close>
            </div>
            <form className="mt-5 space-y-5">
               <Input placeholder="Name" value={name} setValue={setName} />
               <Input
                  placeholder="Category"
                  value={category}
                  setValue={setCategory}
               />

               <div className="flex w-full gap-3">
                  <div
                     onClick={() => setActiveType("income")}
                     className={`${
                        activeType === "income"
                           ? "bg-green-600 text-white font-bold"
                           : "bg-gray-300"
                     }  flex-1 p-4 rounded-lg flex gap-2 cursor-pointer text-gray-600 items-center justify-center`}
                  >
                     <ArrowUp weight="bold" /> Income
                  </div>
                  <div
                     onClick={() => setActiveType("outcome")}
                     className={`${
                        activeType === "outcome"
                           ? "bg-red-500 text-white font-bold"
                           : "bg-gray-300"
                     } p-4 flex-1 flex gap-2 rounded-lg cursor-pointer text-gray-600 items-center justify-center`}
                  >
                     <ArrowDown weight="bold" /> Outcome
                  </div>
               </div>

               <button
                  type="button"
                  onClick={createTransaction}
                  className="w-full p-3 text-gray-100 transition-all bg-indigo-800 rounded-lg hover:bg-indigo-600"
               >
                  Create
               </button>
            </form>
         </Dialog.Content>
      </Dialog.Portal>
   );
};
