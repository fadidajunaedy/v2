import { Link } from "react-router-dom";
import { BsArrowReturnRight } from "react-icons/bs";
import { IoIosArrowRoundForward } from "react-icons/io";
import Breadcrumb from "../../widgets/Breadcrumb";
import posts from "../../../datas/json/posts.json";

const Posts = () => {
  return (
    <>
      <section>
        <div className="min-h-[90vh] container flex flex-col gap-4 py-12 md:pt-48 md:pb-12">
          <Breadcrumb />
          {/* <h2 className="mb-2 md:mb-4">Topics</h2>
          <div className="flex items-center gap-2">
            <Link to="" className="flex items-center gap-2 hover:text-white">
              <BsArrowReturnRight /> Thoughts
            </Link>
          </div> */}
          <h2 className="mb-4 md:mb-8">Posts</h2>
          <ul className="w-full flex flex-col">
            {posts.map((post, index) => (
              <li
                key={index}
                className="border-t-2 border-dashed first:border-t-0 border-[var(--color-dark-2)] py-3 md:py-6 first:pt-0 last:pb-0 group"
              >
                <Link
                  to={`/posts/${post.file_content}`}
                  title={post.title}
                  className="transition-all duration-300 ease-in-out flex items-center cursor-pointer"
                >
                  <IoIosArrowRoundForward
                    size={24}
                    className="transition-all duration-300 ease-in-out w-0 group-hover:w-auto group-hover:mr-4 group-hover:text-accent"
                  />
                  <div className="flex-grow pr-4">
                    <div className="flex justify-between items-center gap-2">
                      <p className="text-white line-clamp-2">{post.title}</p>
                      <p className="text-xs sm:text-sm text-right italic">
                        {post.published_at}
                      </p>
                    </div>
                    <p className="text-xs sm:text-sm line-clamp-2">
                      {post.headline}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Posts;
