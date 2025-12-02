import { IoIosArrowRoundForward } from "react-icons/io";
import contacts from "../../../../datas/json/contacts.json";
import links from "../../../../datas/json/links.json";
import PartyPopper from "../../../../assets/images/party-popper.webp";
import Wave from "../../../../assets/images/wave.webp";

const Hero = () => {
  return (
    <section>
      <div className="md:min-h-screen container py-12 md:pt-48 md:pb-12">
        <h2 className="flex items-center gap-4 mb-4 md:mb-8">
          Welcome
          <img
            src={Wave}
            className="w-6 -translate-y-1 md:w-12 md:-translate-y-3"
          />
        </h2>
        <p>
          Hi, I'm Fadida Junaedy, Bachelor of Computer Science in Information Technology with a background in web development and software testing. Currently working as a Quality Assurance Tester in the banking sector, focusing on system integration testing and digital product quality.
        </p>

        <h2 className="mt-6 md:mt-12 mb-3 md:mb-6">Contact</h2>
        <ul>
          {contacts.map((contact, index) => (
            <li key={index}>
              <a
                href={contact.link}
                target="_blank"
                className="transition-all duration-300 ease-in-out flex items-end gap-1 hover:text-white group"
              >
                {contact.title}: &nbsp;
                {contact.content}
                <IoIosArrowRoundForward
                  size={24}
                  className="transition-all duration-300 ease-in-out -rotate-45 group-hover:rotate-0 group-hover:text-accent"
                />
              </a>
            </li>
          ))}
        </ul>

        <h2 className="mt-6 md:mt-12 mb-3 md:mb-6">Links</h2>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.link}
                target="_blank"
                className="transition-all duration-300 ease-in-out flex items-end gap-1 hover:text-white group"
              >
                {link.title}
                <IoIosArrowRoundForward
                  size={24}
                  className="transition-all duration-300 ease-in-out -rotate-45 group-hover:rotate-0 group-hover:text-accent"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Hero;
