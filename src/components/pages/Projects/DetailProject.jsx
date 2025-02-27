import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Breadcrumb from "../../widgets/Breadcrumb";

const DetailProject = () => {
  const [markdownContent, setMarkdownContent] = useState("");
  const { key } = useParams();

  useEffect(() => {
    import(`../../../datas/md/projects/${key}.md`)
      .then((module) => setMarkdownContent(module.default))
      .catch((error) => console.error("Error loading markdown:", error));
  }, [key]);

  return (
    <>
      <div className="md-container">
        <Breadcrumb />
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    </>
  );
};

export default DetailProject;
