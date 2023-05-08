import React, { useState } from "react";

type Props = {
   placeholder: string;
   value: string;
   setValue: (value: string) => void;
};

export const Input = ({ placeholder, value, setValue }: Props) => {
   const [focused, setFocused] = useState(false);

   return (
      <div
         className={`p-3 flex flex-1 items-center bg-white border  rounded-lg ${
            focused ? "border-gray-800" : "border-gray-300"
         }`}
      >
         <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder={placeholder}
            className="flex-1 outline-none"
         />
      </div>
   );
};
