// import { useTranslations } from "next-intl";
// import Image from "next/image";

export default function Home() {
  // const t = useTranslations("HomePage");
  return (
    <div className="font-sans text-white min-h-screen ">
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
      </div>
    </div>
  );
}
