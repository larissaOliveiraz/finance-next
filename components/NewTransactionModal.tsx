import { useContext, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowDown, ArrowUp, X } from "@phosphor-icons/react";
import { Input } from "./Input";
import { TransactionContext } from "@/context/TransactionContext";

export const NewTransactionModal = () => {
   const { createTransaction } = useContext(TransactionContext);

   const [title, setTitle] = useState("");
   const [category, setCategory] = useState("");
   const [type, setType] = useState<"income" | "outcome">("income");
   const [amount, setAmount] = useState(0);

   const handleCreateNewTransaction = () => {
      createTransaction({ title, category, type, amount });
      setTitle("");
      setCategory("");
      setType("income");
      setAmount(0);
   };

   return (
      <Dialog.Portal>
         <Dialog.Overlay className="fixed inset-0 bg-black/70" />
         <Dialog.Content className="absolute p-5 text-indigo-900 bg-gray-100 rounded-lg w-[91%] md:w-2/3 lg:w-1/3 position-middle">
            <div className="flex items-center justify-between">
               <Dialog.Title className="text-lg font-bold">
                  New Transaction
               </Dialog.Title>
               <Dialog.Close>
                  <X size={20} weight="bold" />
               </Dialog.Close>
            </div>
            <form className="mt-5 space-y-5">
               <Input placeholder="Name" value={title} setValue={setTitle} />
               <Input
                  placeholder="Category"
                  value={category}
                  setValue={setCategory}
               />
               <Input placeholder="Total" value={amount} setValue={setAmount} />

               <div className="flex w-full gap-3">
                  <div
                     onClick={() => setType("income")}
                     className={`${
                        type === "income"
                           ? "bg-green-600 text-white font-bold"
                           : "bg-gray-300"
                     }  flex-1 p-4 rounded-lg flex gap-2 cursor-pointer text-gray-600 items-center justify-center`}
                  >
                     <ArrowUp weight="bold" /> Income
                  </div>
                  <div
                     onClick={() => setType("outcome")}
                     className={`${
                        type === "outcome"
                           ? "bg-red-500 text-white font-bold"
                           : "bg-gray-300"
                     } p-4 flex-1 flex gap-2 rounded-lg cursor-pointer text-gray-600 items-center justify-center`}
                  >
                     <ArrowDown weight="bold" /> Outcome
                  </div>
               </div>

               <Dialog.Close
                  onClick={handleCreateNewTransaction}
                  className="w-full p-3 text-gray-100 transition-all bg-indigo-800 rounded-lg hover:bg-indigo-600"
               >
                  Create
               </Dialog.Close>
            </form>
         </Dialog.Content>
      </Dialog.Portal>
   );
};
