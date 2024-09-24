// import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  // const t = useTranslations("HomePage");
  return (
    <div className="font-sans text-white min-h-screen bg-gradient-to-b from-teal-900 to-emerald-700">
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

        {/* Main Content */}
        <main className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">Community interaction</h2>
          <div className="bg-black bg-opacity-20 rounded-full py-2 px-4 inline-block mb-8">
            Will ingm qning oe me tup lcan
          </div>
          <div className="relative w-64 h-64 mx-auto mb-8">
            <Image
              src="/placeholder.svg?height=256&width=256"
              alt="Gring Character"
              layout="fill"
              className="rounded-full"
            />
            <button
              className="btn btn-warning absolute bottom-4 left-1/2 transform -translate-x-1/2"
              type="button"
            >
              START
            </button>
          </div>
          <div className="flex justify-between mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold">28,001+</div>
              <div className="text-sm opacity-75">Score</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">7021G</div>
              <div className="text-sm opacity-75">Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">264.0206</div>
              <div className="text-sm opacity-75">Coins</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">1028,201+</div>
              <div className="text-sm opacity-75">Points</div>
            </div>
          </div>
        </main>

        {/* Mining Progress */}
        <section className="mb-8">
          <h3 className="text-xl font-bold mb-4">Mining Progress</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-pink-600 rounded-lg p-4">
              <h4 className="font-bold">Toke truh</h4>
              <p className="text-sm opacity-75">Sentorta </p>
              <p className="text-xl font-bold mt-2">$45.5FM</p>
            </div>
            <div className="bg-orange-500 rounded-lg p-4">
              <h4 className="font-bold">Daily Rewards</h4>
              <p className="text-sm opacity-75">Senorta</p>
              <p className="text-xl font-bold mt-2">$25.19M+</p>
            </div>
            <div className="bg-gray-700 rounded-lg p-4">
              <h4 className="font-bold">Catent</h4>
              <p className="text-sm opacity-75">Senorta toe </p>
              <div className="flex items-center mt-2">
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-6"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <span className="ml-2 text-sm">6NIETOINS</span>
              </div>
              <p className="text-xl font-bold mt-2">$45.190FM</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
