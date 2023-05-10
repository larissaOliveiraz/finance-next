import { useState, KeyboardEvent, useContext, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Coins, MagnifyingGlass, Plus, X } from "@phosphor-icons/react";
import { NewTransactionModal } from "./NewTransactionModal";
import { TransactionContext } from "@/context/TransactionContext";

export const Header = () => {
   const { searchTransaction } = useContext(TransactionContext);

   const [inputValue, setInputValue] = useState("");
   const [focused, setFocused] = useState(false);
   const [showInput, setShowInput] = useState(false);

   const handleCloseSearch = () => {
      setInputValue("");
      setShowInput(false);
   };

   useEffect(() => {
      searchTransaction(inputValue);
   }, [inputValue]);

   return (
      <div className="flex gap-3 justify-between">
         <section className="hidden md:flex items-center gap-2 text-indigo-800">
            <Coins size={24} weight="bold" />
            <p className="text-xl font-semibold">Finances</p>
         </section>
         <section className="flex flex-1 justify-end gap-3">
            {showInput ? (
               <div
                  className={`p-2 flex flex-1 items-center bg-white border  rounded-lg ${
                     focused ? "border-indigo-800" : "border-gray-300"
                  }`}
               >
                  <button type="button" className="p-1 text-indigo-800">
                     <MagnifyingGlass size={20} weight="bold" />
                  </button>
                  <input
                     type="text"
                     value={inputValue}
                     onChange={(e) => setInputValue(e.target.value)}
                     onFocus={() => setFocused(true)}
                     onBlur={() => setFocused(false)}
                     autoFocus
                     className="flex-1 outline-none ml-2"
                  />
                  <button
                     type="button"
                     onClick={handleCloseSearch}
                     className="p-1 text-indigo-800 hover:scale-105"
                  >
                     <X size={20} />
                  </button>
               </div>
            ) : (
               <button
                  type="button"
                  onClick={() => setShowInput(true)}
                  className="flex items-center justify-center gap-2 w-12 h-12 text-gray-100 bg-indigo-800 rounded-full hover:bg-indigo-600 transition-all"
               >
                  <MagnifyingGlass size={20} weight="bold" />
               </button>
            )}
            <Dialog.Root>
               <Dialog.Trigger className="flex items-center justify-center gap-2 w-12 h-12 text-gray-100 bg-indigo-800 rounded-full hover:bg-indigo-600 transition-all">
                  <Plus size={18} weight="bold" />
               </Dialog.Trigger>

               <NewTransactionModal />
            </Dialog.Root>
         </section>
      </div>
   );
};
