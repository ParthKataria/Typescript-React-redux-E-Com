import { useSelector } from "react-redux";
import Button from "../components/Button";
import Card from "../components/Card";
import { modifyElement, removeElement } from "../store";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { MyState } from "../TypeDefinations/types";
const Cart = () => {
  const [cost, setCost] = useState(0);
  const dispatch = useDispatch();
  const { cartList } = useSelector((state: MyState) => {
    return {
      cartList: state.cart,
    };
  });
  useEffect(() => {
    const temp = cartList.reduce((acc, item) => {
      return acc + item.quantity * item.price.value;
    }, 0);
    setCost(temp);
  }, [cartList]);
  // console.log(cartList);
  const content = cartList.map((item, id) => {
    // console.log(item);
    return (
      <div key={id}>
        <Card url={item.images[0].url}>
          <div className="text-center bg-gray-400 mt-2 text-white">
            COST ${item.price.value}
          </div>
          <div className="grid grid-cols-3">
            <Button
              onClick={() =>
                dispatch(
                  modifyElement({
                    code: item.articles[0].code,
                    quantity: item.quantity - 1,
                  })
                )
              }
            >
              -
            </Button>
            <p className="m-auto">{item.quantity}</p>
            <Button
              onClick={() =>
                dispatch(
                  modifyElement({
                    code: item.articles[0].code,
                    quantity: item.quantity + 1,
                  })
                )
              }
            >
              +
            </Button>
          </div>

          <Button
            onClick={() => dispatch(removeElement(item.articles[0].code))}
          >
            Remove
          </Button>
        </Card>
      </div>
    );
  });
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5">
        {content}
      </div>
      <div className="mx-5 my-10 border-y-8 border-black ">
        <div className="m-auto my-10 w-80">
          <p className="text-center">TOTAL COST : ${cost}</p>
          <Button>Place Order</Button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
