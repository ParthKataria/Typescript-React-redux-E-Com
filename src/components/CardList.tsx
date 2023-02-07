import { useFetchItemsQuery } from "../store";
import { Link } from "react-router-dom";
import Button from "./Button";
import Card from "./Card";
import ErrorPage from "../pages/ErrorPage";
import Skeleton from "./Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store";
import { MyState } from "../TypeDefinations/types";
import { useState, useRef, useCallback } from "react";
import { Item } from "../TypeDefinations/types";
const CardList = ({ category }: { category: string }) => {
  const [page, setCurrentPage] = useState(0);
  const { data, isFetching, error } = useFetchItemsQuery({
    categories: category,
    page: page,
  });
  const observer = useRef<IntersectionObserver | null>(null);
  const lastElement = useCallback(
    (node: HTMLDivElement) => {
      if (isFetching) return;
      if (observer.current) observer.current.disconnect();
      if (!(observer.current instanceof IntersectionObserver)) {
        observer.current = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            setCurrentPage((prev) => prev + 1);
          }
        });
      }
      console.log(observer, node);
      if (node) observer.current.observe(node);
    },
    [isFetching]
  );
  const dispatch = useDispatch();
  const user = useSelector((state: MyState) => state.user);
  const handleAddToCart = (item: Item) => {
    if (user === null) {
      alert("Please Login First");
      return;
    }
    dispatch(addToCart(item));
  };
  if (error) {
    console.log(error);
    return <ErrorPage>Error getting details</ErrorPage>;
  } else {
    if (data === undefined)
      return (
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5">
          <Skeleton
            times={20}
            names="mx-2 mt-5 bg-zinc-200 shadow p-2 h-64 mx-2 mt-5"
          />
        </div>
      );

    return (
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5">
        {data.map((item: Item, id) => {
          if (id === data.length - 1) {
            return (
              <Card
                key={item.code}
                url={item.images[0].url}
                innerRef={lastElement}
              >
                <Link to={`/product/${item.articles[0].code}`} state={item}>
                  <Button>View Product</Button>
                </Link>

                <Button onClick={() => handleAddToCart(item)}>
                  Add to Cart
                </Button>
              </Card>
            );
          }
          return (
            <Card key={item.code} url={item.images[0].url}>
              <Link to={`/product/${item.articles[0].code}`} state={item}>
                <Button>View Product</Button>
              </Link>

              <Button onClick={() => handleAddToCart(item)}>Add to Cart</Button>
            </Card>
          );
        })}
        {isFetching && (
          <Skeleton
            times={10}
            names="mx-2 mt-5 bg-zinc-200 shadow p-2 h-64 mx-2 mt-5"
          />
        )}
      </div>
    );
  }
};

export default CardList;
