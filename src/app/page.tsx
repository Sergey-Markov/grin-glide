// import { useEffect } from "react";
import WebApp from "@twa-dev/sdk";
// import { useTelegramUser } from "@/hooks/useTelegramUser";
import { redirect } from "next/navigation";
import Preloader from "@/components/Preloader/Preloader";
// import { useUser } from "./context/UserContext";

export default function Home() {
<<<<<<< HEAD
  if (WebApp) {
    redirect(`/main`);
=======
  const [isOpen, setIsOpen] = useState(false);
  const [tgUserData, setTgUserData] = useState<IDbUser | null>(null);
  const { user } = useTelegramUser();

  useEffect(() => {
    if (WebApp && user) {
      if (!tgUserData) {
        setTgUserData(user);
        WebApp.showAlert("Hello bro");
      }
    }
  }, [user]);

  console.log("user:", tgUserData);

  const openMenuHandler = () => {
    setIsOpen(!isOpen);
  };

  if (!tgUserData) {
    return <Preloader />;
>>>>>>> parent of 0eebcf6 (fix start update 5)
  }

  return <Preloader />;
}
