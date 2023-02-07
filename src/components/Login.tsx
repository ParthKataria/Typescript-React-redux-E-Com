import { signInWithGooglePopup } from "../firebase/firebaseAuth";
import { useDispatch, useSelector } from "react-redux";
import { changeUser } from "../store";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { UserDetails } from "../TypeDefinations/types";
const Login = () => {
  const dispatch = useDispatch();
  const logUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      const loggedUser: UserDetails = {
        displayName: user.displayName!,
        photoURL: user.photoURL!,
      };
      dispatch(changeUser(loggedUser));
    } catch (err) {
      alert(err);
    }
  };
  return <Button onClick={logUser}>LOGIN</Button>;
};
export default Login;
