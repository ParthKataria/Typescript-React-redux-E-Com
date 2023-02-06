import { CardProps } from "../TypeDefinations/types";

const Card = ({ url, children }: CardProps) => {
  return (
    <div className="mx-2 mt-5 bg-white shadow p-2">
      <img className="block w-full" src={url} />
      {children}
    </div>
  );
};
export default Card;
