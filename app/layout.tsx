import "./globals.css";
import { Nunito } from "next/font/google";
import { TransactionContextProvider } from "@/context/TransactionContext";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
   title: "FinancesNext",
   description: "Control your finances",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html lang="en">
         <body className={font.className}>
            <TransactionContextProvider>{children}</TransactionContextProvider>
         </body>
      </html>
   );
}
