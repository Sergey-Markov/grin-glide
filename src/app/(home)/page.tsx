// import HomePage from "@/components/Home/Home";
import Preloader from "@/components/Preloader/Preloader";
import dynamic from "next/dynamic";

const DynamicHomePage = dynamic(() => import("@/components/Home/Home"), {
  ssr: false,
  loading: () => <Preloader />,
});

export default function Home() {
  return <DynamicHomePage />;
}
