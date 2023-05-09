"use client";
import { Transaction } from "@/types/Transaction";
import { createContext, ReactNode, useState } from "react";

type Props = {
   children: ReactNode;
};

type TransactionType = {
   transactions: Transaction[];
   createTransaction: (newTransaction: Transaction) => void;
   deleteTransaction: (trasaction: Transaction) => void;
};

export const TransactionContext = createContext<TransactionType>(
   {} as TransactionType
);

export const TransactionContextProvider = ({ children }: Props) => {
   const storage = localStorage.getItem("transactions");
   const initialState: Transaction[] = storage && JSON.parse(storage);

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

   const deleteTransaction = (transaction: Transaction) => {
      const newTransactionList = transactions.filter(
         (item) => item !== transaction
      );
      localStorage.setItem("transactions", JSON.stringify(newTransactionList));
      setTransactions(newTransactionList);
   };

   return (
      <TransactionContext.Provider
         value={{ transactions, createTransaction, deleteTransaction }}
      >
         {children}
      </TransactionContext.Provider>
   );
};
