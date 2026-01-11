import { Route, Routes } from "react-router";

import Home from "./components/home/Home";
import Header from "./components/header/Header";
import { lazy, Suspense } from "react";

const ProductList = lazy(() => import("./components/product-list/ProductList"));

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={
            <Suspense fallback={<div>Loading ProductList page...</div>}>
              <ProductList />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
