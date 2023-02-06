import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Categories from "../pages/Categories";
import CategoryElement from "../pages/CategoryElement";
import ErrorPage from "../pages/ErrorPage";
import CardDetails from "./CardDetails";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="category" element={<Categories />} />
        <Route path="category/:id" element={<CategoryElement />} />
        <Route path="product/:id" element={<CardDetails />} />
        <Route
          path="*"
          element={
            <ErrorPage>
              <div>The page you are looking for is not available.</div>
            </ErrorPage>
          }
        />
      </Route>
    </Routes>
  );
};
export default App;
