import { Sidebar } from "./components/Sidebar";
import { Content } from "./components/Content";

export default function Home() {
  return (
    <div className="flex min-h-screen h-full bg-gray-600">

      <Sidebar />
      <Content />

    </div>
  );
}
