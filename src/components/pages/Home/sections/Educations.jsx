import educations from "../../../../datas/json/educations.json";

const Educations = () => {
  return (
    <section>
      <div className="container border-y border-dark-2 py-12">
        <h2 className="mb-4 md:mb-8">Educations</h2>
        <ul className="w-full flex flex-col">
          {educations.map((education, index) => (
            <li
              key={index}
              className="border-t-2 border-dashed first:border-t-0 border-[var(--color-dark-2)] py-3 md:py-6 first:pt-0 last:pb-0"
            >
              <div className="flex items-center gap-2">
                <div className="flex-grow">
                  <p className="text-white">{education.title}</p>
                </div>
                <p className="text-xs sm:text-sm text-right italic">
                  {education.period}
                </p>
              </div>
              <p className="text-xs sm:text-sm">{education.place}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Educations;
