import experiences from "../../../../datas/json/experiences.json";

const Experiences = () => {
  return (
    <section>
      <div className="container border-y border-dark-2 py-12">
        <h2 className="mb-4 md:mb-8">Experiences</h2>
        <ul className="w-full flex flex-col">
          {experiences.map((experience, index) => (
            <li
              key={index}
              className="border-t-2 border-dashed first:border-t-0 border-[var(--color-dark-2)] py-3 md:py-6 first:pt-0 last:pb-0"
            >
              <div className="flex items-center gap-2">
                <div className="flex-grow">
                  <p className="text-white font-medium">
                    {experience.role}{" "}
                    <span className="text-grey">
                      — {experience.status}, {experience.type}
                    </span>
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-right italic">
                  {experience.period}
                </p>
              </div>
              <div className="flex justify-between items-center gap-2">
                <p className="text-xs sm:text-sm">{experience.place}</p>
                <p className="text-xs sm:text-sm text-right italic">
                  {experience.location}
                </p>
              </div>
              <ul className="list-disc text-xs sm:text-sm leading-loose ml-4">
                {experience.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experiences;
