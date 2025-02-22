import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import Natask from "../../../datas/md/natask.md";
import DreamCost from "../../../datas/md/dreamcost.md";
import Breadcrumb from "../../widgets/Breadcrumb";

const contents = [
  {
    key: "natask",
    content: Natask,
  },
  {
    key: "dreamcost",
    content: DreamCost,
  },
];

const DetailProject = () => {
  const { key } = useParams();

  return (
    <>
      <div className="md-container">
        <Breadcrumb />
        <ReactMarkdown>
          {contents.find((content) => content.key === key).content}
        </ReactMarkdown>
      </div>
    </>
  );
};

export default DetailProject;
