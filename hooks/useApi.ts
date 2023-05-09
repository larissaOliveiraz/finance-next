import { transactions } from "@/database/Transactions";
import { Transaction } from "@/types/Transaction";

const useApi = () => ({
   getAllTransactions: () => {
      const transactions = localStorage.getItem("transactions");
      if (transactions !== null) {
         return JSON.parse(transactions);
      }
      return null;
   },

   createTransaction: (newTransaction: Transaction) => {
      let transactions: Transaction[] = [];

      const transactionStorage =
         typeof window !== "undefined" && localStorage.getItem("transactions");
      const transactionsJson: Transaction[] =
         transactionStorage && JSON.parse(transactionStorage as string);

      for (let i in transactionsJson) {
         transactions.push(transactionsJson[i]);
      }
      transactions.push(newTransaction);

      localStorage.setItem("transactions", JSON.stringify(transactions));
   },
});

export default useApi;
