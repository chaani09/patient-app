import Image from "next/image";
import { PatientForm } from "./form";
export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between p-24">
      <PatientForm />
    </main>
  );
}
