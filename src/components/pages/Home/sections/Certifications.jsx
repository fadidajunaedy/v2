import { IoIosArrowRoundForward } from "react-icons/io";
import certifications from "../../../../datas/json/certifications.json";

const Certifications = () => {
  return (
    <section>
      <div className="container border-y border-dark-2 py-12">
        <h2 className="mb-4 md:mb-8">Certifications</h2>
        <ul className="w-full flex flex-col">
          {certifications.map((certification, index) => (
            <li
              key={index}
              className="border-t-2 border-dashed first:border-t-0 border-[var(--color-dark-2)] py-3 md:py-6 first:pt-0 last:pb-0 group"
            >
              <a
                href={certification.link}
                target="_blank"
                title={certification.title}
                className="transition-all duration-300 ease-in-out flex items-center cursor-pointer"
              >
                <IoIosArrowRoundForward
                  size={24}
                  className="transition-all duration-300 ease-in-out w-0 group-hover:w-auto group-hover:mr-4 group-hover:text-accent"
                />
                <div className="flex-grow">
                  <p className="text-white">{certification.publisher}</p>
                  <p className="text-xs sm:text-sm">{certification.title}</p>
                </div>
                <p className="text-xs sm:text-sm text-right">
                  {certification.date}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certifications;
