import { NavLink } from "react-router-dom";
import FileResume from "../../assets/pdf/FADIDA_JUNAEDY_RESUME_2025.pdf";
import { MdArrowOutward } from "react-icons/md";
import Eyes from "../../assets/images/eyes.webp";

const Header = () => {
  return (
    <header className="header md:fixed z-[99] w-full min-h-[10vh] ">
      <div className="w-full mx-auto flex flex-col md:flex-row justify-between md:items-center gap-6 p-4 md:p-6">
        <div className="flex items-center gap-4">
          <img
            src="https://res.cloudinary.com/dapi855px/image/upload/v1739853706/photo/1739853703381.jpg"
            alt="Fadida Junaedy's Photo"
            className="w-12 aspect-square object-cover rounded-lg overflow-hidden"
          />
          <div>
            <p className="text-[var(--color-white)]">Fadida Junaedy</p>
            <p>Full Stack Web Developer</p>
          </div>
        </div>
        <nav className="flex items-center gap-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/posts">Posts</NavLink>
          <a
            href={FileResume}
            target="_blank"
            rel="noreferrer noopener"
            className="btn-download-resume"
          >
            My Resume
          </a>
          {/* <img src={Eyes} className="w-6" /> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
