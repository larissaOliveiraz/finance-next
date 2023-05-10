import { TransactionContext } from "@/context/TransactionContext";
import { useContext } from "react";

export const useSumTransactions = () => {
   const { transactions } = useContext(TransactionContext);

   const result =
      transactions &&
      transactions.reduce(
         (acc, transaction) => {
            if (transaction.type === "income") {
               acc.income += transaction.amount;
            } else {
               acc.outcome += transaction.amount;
            }

            acc.total = acc.income - acc.outcome;

            return acc;
         },
         { income: 0, outcome: 0, total: 0 }
      );

   return result;
};
