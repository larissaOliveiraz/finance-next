import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { MagnifyingGlass, Plus } from "@phosphor-icons/react";
import { NewTransactionModal } from "./NewTransactionModal";

export const Header = () => {
   const [inputValue, setInputValue] = useState("");
   const [focused, setFocused] = useState(false);

   return (
      <div className="flex gap-3">
         <div
            className={`p-2 flex flex-1 items-center bg-white border  rounded-lg ${
               focused ? "border-indigo-800" : "border-gray-300"
            }`}
         >
            <input
               type="text"
               value={inputValue}
               onChange={(e) => setInputValue(e.target.value)}
               onFocus={() => setFocused(true)}
               onBlur={() => setFocused(false)}
               className="flex-1 outline-none"
            />
            <button type="button" className="p-1 text-indigo-800">
               <MagnifyingGlass size={20} weight="bold" />
            </button>
         </div>
         <Dialog.Root>
            <Dialog.Trigger className="flex items-center gap-2 p-3 px-4 text-gray-100 bg-indigo-800 rounded-lg">
               <Plus size={18} weight="bold" />
            </Dialog.Trigger>

            <NewTransactionModal />
         </Dialog.Root>
      </div>
   );
};
