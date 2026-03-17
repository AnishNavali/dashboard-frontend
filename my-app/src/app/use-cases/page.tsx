import { NavigationBar } from "@/src/components/dashboard/navigation-bar";
import Footer from "@/src/components/footer/footer";
import { UseCases } from "@/src/components/use-cases/use-cases";

export default function UseCasesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <NavigationBar />
      <UseCases />
      <Footer />
    </main>
  );
}
