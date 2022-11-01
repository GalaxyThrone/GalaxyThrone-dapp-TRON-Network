import { allResearch } from "../../lib/research";
import Card from "../_shared/Card";

const ListView = ({ category }) => {
  const route = "research";

  const main = () => {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-12">
        {allResearch[category]?.map((s, i) => (
          <Card key={i} info={s} index={i} route={route} category={category} />
        ))}
      </div>
    );
  };
  return <div>{main()}</div>;
};

export default ListView;
