import { useParams } from "react-router-dom";
import CardList from "../components/CardList";
const CategoryElement = () => {
  let { id } = useParams();
  if (id === undefined) id = "";
  return (
    <div>
      <CardList category={id} />
    </div>
  );
};
export default CategoryElement;
