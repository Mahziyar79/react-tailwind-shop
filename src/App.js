import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import SingleProductPage from "./pages/SingleProductPage";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import CategoryPage from "./pages/CategoryPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<CategoryPage />} />
            <Route path="/product/:name" element={<SingleProductPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
