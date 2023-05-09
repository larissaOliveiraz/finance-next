export type Transaction = {
   title: string;
   type: "income" | "outcome";
   category: string;
   amount: number;
};
