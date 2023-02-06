import { useFetchItemsQuery } from "../store";
import { Link } from "react-router-dom";
import Button from "./Button";
import Card from "./Card";
import ErrorPage from "../pages/ErrorPage";
import Skeleton from "./Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store";
import { MyState } from "../TypeDefinations/types";
import { ReactNode, useState } from "react";
import { Item } from "../TypeDefinations/types";
const CardList = ({ category }: { category: string }) => {
  const dispatch = useDispatch();
  const user = useSelector((state: MyState) => state.user);
  const handleAddToCart = (item: Item) => {
    if (user === null) {
      alert("Please Login First");
      return;
    }
    dispatch(addToCart(item));
  };
  const [page, setPage] = useState(0);
  const { data, isFetching, error } = useFetchItemsQuery({
    categories: category,
    page: page,
  });
  let content: ReactNode = "loading";
  if (isFetching) {
    content = (
      <Skeleton
        times={30}
        names="mx-2 mt-5 bg-zinc-200 shadow p-2 h-64 mx-2 mt-5"
      />
    );
  } else {
    if (error) {
      console.log(error);
      //   content = <ErrorPage>{error.message}</ErrorPage>;
    } else {
      const { results } = data!;
      content = results.map((item: Item) => (
        <Card key={item.code} url={item.images[0].url}>
          <Link to={`/product/${item.articles[0].code}`} state={item}>
            <Button>View Product</Button>
          </Link>

          <Button onClick={() => handleAddToCart(item)}>Add to Cart</Button>
        </Card>
      ));
    }
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5">
      {content}
    </div>
  );
};

export default CardList;
