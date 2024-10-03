import { aboutContent } from "@/constants";

const About = () => (
  <main className=" min-h-screen p-4 md:p-8 text-white pb-24">
    <h2 className="text-primary text-4xl font-mono font-bold mb-7">About us</h2>
    <ul className="space-y-4">
      {aboutContent.map(({ id, title, text, description }) => {
        const isDescription = description?.length;
        return (
          <li
            key={id}
            className="px-1"
          >
            {title && (
              <h3 className="text-primary text-2xl font-mono font-bold mb-1">
                {title}
              </h3>
            )}
            {text && <p className="px-2 font-light ">{text}</p>}
            {isDescription && (
              <ul className="list-disc pl-2">
                {description.map((el) => (
                  <li key={el.id}>
                    <h3 className="text-accent font-mono">{el.subTitle}</h3>
                    <p className="px-2 font-extralight">{el.subText}</p>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  </main>
);

export default About;
