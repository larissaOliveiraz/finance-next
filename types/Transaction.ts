export type Transaction = {
   title: string;
   type: "income" | "outcome";
   description: string;
   total: number;
};
