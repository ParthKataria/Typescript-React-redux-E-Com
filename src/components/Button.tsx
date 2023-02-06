import { ButtonProps } from "../TypeDefinations/types";
const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={
        "mt-2 block w-full bg-black hover:bg-gray-800 text-white font-semibold py-2 px-4 shadow"
      }
    >
      {children}
    </button>
  );
};
export default Button;
