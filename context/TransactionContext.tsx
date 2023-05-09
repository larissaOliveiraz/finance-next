"use client";
import { Transaction } from "@/types/Transaction";
import { createContext, ReactNode, useState } from "react";

type Props = {
   children: ReactNode;
};

type TransactionType = {
   transactions: Transaction[];
   createTransaction: (newTransaction: Transaction) => void;
};

export const TransactionContext = createContext<TransactionType>(
   {} as TransactionType
);

export const TransactionContextProvider = ({ children }: Props) => {
   const storage = localStorage.getItem("transactions");
   const initialState = storage && JSON.parse(storage);

   const [transactions, setTransactions] =
      useState<Transaction[]>(initialState);

   const createTransaction = (newTransaction: Transaction) => {
      let transactionList: Transaction[] = [];

      for (let i in transactions) {
         transactionList.push(transactions[i]);
      }
      transactionList.push(newTransaction);

      localStorage.setItem("transactions", JSON.stringify(transactionList));
      setTransactions(transactionList);
   };

   return (
      <TransactionContext.Provider value={{ transactions, createTransaction }}>
         {children}
      </TransactionContext.Provider>
   );
};
