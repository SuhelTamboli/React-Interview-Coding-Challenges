import { Route, Routes } from "react-router";

import Home from "./components/home/Home";
import Header from "./components/header/Header";
import { lazy, Suspense } from "react";
import StarRating from "./components/rating-system/RatingSystem";
import ThrottleInfiniteScroll from "./components/throttle/InfiniteScroll";
import ThrottleRepeatedClick from "./components/throttle/ThrottleRepeatedClick";
import ReactMemoExample from "./components/react-memo/ReactMemoExample";

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
        <Route path="/rating" element={<StarRating />} />
        <Route
          path="/throttle/infiniteScroll"
          element={<ThrottleInfiniteScroll />}
        />
        <Route
          path="/throttle/repeatedClick"
          element={<ThrottleRepeatedClick />}
        />
        <Route path="/reactMemo" element={<ReactMemoExample />} />
      </Routes>
    </>
  );
}

export default App;
