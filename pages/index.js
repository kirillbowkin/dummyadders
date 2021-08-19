import Circuit from "../components/circuit";
import Dashboard from "../components/dashboard";

export default function Home() {
  return (
    <div className="px-4 py-4 flex flex-col items-center justify-evenly h-screen">
      <p className="text-3xl">Cool Binary Half Adder</p>
      <Circuit />
      <Dashboard />
    </div>
  );
}
