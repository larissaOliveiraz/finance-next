import { Dashboard } from "@/components/Dashboard";

export default function Home() {
   return (
      <div>
         <main className="absolute flex w-3/5 gap-5 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <section className="w-64">
               <Dashboard />
            </section>
            <section className="flex-1 bg-gray-100 rounded-xl"></section>
         </main>
      </div>
   );
}
