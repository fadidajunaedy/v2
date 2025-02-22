import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Breadcrumb from "../../widgets/Breadcrumb";
import { useEffect, useState } from "react";

const DetailPost = () => {
  const [markdownContent, setMarkdownContent] = useState("");
  const { key } = useParams();

  useEffect(() => {
    // Impor dinamis file Markdown berdasarkan key
    import(`../../../datas/md/posts/${key}.md`)
      .then((module) => setMarkdownContent(module.default)) // Simpan konten ke state
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

export default DetailPost;
