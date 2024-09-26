// import { useTranslations } from "next-intl";
import Image from "next/image";
import babyImg from "@images/gring-baby_svg.svg";

export default function Home() {
  // const t = useTranslations("HomePage");
  return (
    <div className="font-sans text-white min-h-screen pb-12">
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-gray-300" />
            <div>
              <h1 className="text-2xl font-bold">Gring</h1>
              <p className="text-sm opacity-75">5/o sinic +</p>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-circle btn-ghost"
            aria-label="st"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </button>
        </header>
        <main className="p-4">
          <div className="flex justify-center items-center mb-8">
            <div className="relative ring-primary ring-offset-base-100 w-80 h-80 rounded-full ring ring-offset-2">
              <Image
                className="absolute z-10"
                src={babyImg}
                alt="Gringlide child"
                priority
              />
              <div className="absolute -top-16 -left-14 xs:-left-2 xs:-top-8  ">
                <p className=" text-secondary font-sans font-extrabold text-9xl mb-6 drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-blue-500 xs:text-8xl">
                  WHO
                </p>
                <p className="text-primary font-sans font-extrabold text-9xl drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-secondary-content xs:text-8xl">
                  IS
                </p>
              </div>
            </div>
          </div>
          <div className="text-center font-serif text-xl">
            <p className="mb-4">Choose who GrinG will become:</p>
            <form className="flex gap-4 flex-col items-center">
              <div className="flex gap-1 justify-center">
                <input
                  type="radio"
                  name="futureGrinG"
                  aria-label="leprechaun"
                  className="btn"
                />
                <input
                  type="radio"
                  name="futureGrinG"
                  aria-label="investor"
                  className="btn"
                />
                <input
                  type="radio"
                  name="futureGrinG"
                  aria-label="pirate"
                  className="btn"
                  defaultChecked
                />
              </div>
              <button
                type="submit"
                className="btn  btn-success"
              >
                SEND
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
