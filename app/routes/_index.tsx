import type { MetaFunction } from "@remix-run/node";
import { Dashboard } from "~/components/layout/Dashboard";

export const meta: MetaFunction = () => {
  return [
    { title: "Admin Panel" },
    { name: "description", content: "Admin Panel with Shadcn+TailwindCSS!" },
  ];
};

export default function Index() {
  return (
    <main>
      <Dashboard />
    </main>
  );
}
