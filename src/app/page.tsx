// import { useTranslations } from "next-intl";
import Image from "next/image";
import babyImg from "@images/gring-baby_svg.svg";
import VoteForm from "@/components/VoteForm/VoteForm";
import { formFirstVoteOptions } from "@/constants";

export default function Home() {
  // const t = useTranslations("HomePage");
  return (
    <div className="font-sans text-white min-h-screen pb-12">
      <div className="mx-auto px-3 py-6">
        <header className="flex justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-12 rounded-full ring ring-offset-2">
                <Image
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="Gringlide child"
                  width={512}
                  height={512}
                  loading="lazy"
                />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Raduga</h1>
              <p className="text-sm opacity-75">wallet</p>
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
          <section
            id="hero-home"
            className="flex justify-center items-center mb-8"
          >
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
          </section>
          <VoteForm options={formFirstVoteOptions} />
        </main>
      </div>
    </div>
  );
}
