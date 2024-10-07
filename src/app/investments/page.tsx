"use client";

import QuickBuyTokens from "@/components/QuickBuyTokens/QuickBuyTokens";

const Investments = () => (
  <main className=" min-h-screen p-4 md:p-8 text-white pb-24">
    <h2 className="text-primary text-4xl font-bold font-mono mb-6">
      For investors
    </h2>
    <p className="font-extralight pl-1 mb-6">
      {`Ми шукаємо стратегічних партнерів та інвесторів, які допоможуть нам
      розширити застосунок і залучити капітал для лістингу токена GrinG на
      біржі. Наша мета – зробити GrinG ключовим інструментом для
      децентралізованого управління нашого ком'юніті і платформою для
      інвестиційного заробітку реальних коштів використовуючи можливості
      сучасних та майбутніх технології. GrinG має на меті масштабування не лише
      в межах цифрової економіки, але й розширення в реальний сектор для
      диверсифікації активів. Більш детальну інформацію про нас ми опублікували
      у відповідному пункті головного меню. Зробити інвестицію можливо за
      допомогою вказаних нижче кнопок швидкого використання, також можливе
      обговорення спеціальних пропозицій для серйозної довгострокової співпраці.`}
    </p>
    <QuickBuyTokens />
  </main>
);

export default Investments;
