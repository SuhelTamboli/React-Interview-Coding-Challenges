import { Route, Routes } from "react-router";

import Home from "./components/home/Home";
import Header from "./components/header/Header";
import { lazy, Suspense } from "react";
import StarRating from "./components/rating-system/RatingSystem";
import ThrottleInfiniteScroll from "./components/throttle/InfiniteScroll";
import ThrottleRepeatedClick from "./components/throttle/ThrottleRepeatedClick";
import ReactMemoExample from "./components/react-memo/ReactMemoExample";
import ErrorBoundaryExample from "./components/error-boundary/ErrorBoundaryExample";
import AuthCustomHook from "./components/custom-hook/AuthHookExample";
import FetchCustomHook from "./components/custom-hook/FetchCustomHook";
import RetryRequest from "./components/retry-request/RetryRequest";
import CancelRequest from "./components/cancel-request/CancelRequest";
import ParallelRequest from "./components/parallel-request/ParallelRequest";
import SearchAutoComplete from "./components/search-autocomplete/SearchAutoComplete";

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
        <Route path="/errorBoundary" element={<ErrorBoundaryExample />} />
        <Route path="/authCustomHook" element={<AuthCustomHook />} />
        <Route path="/fetchCustomHook" element={<FetchCustomHook />} />
        <Route path="/retryRequest" element={<RetryRequest />} />
        <Route path="/cancelRequest" element={<CancelRequest />} />
        <Route
          path="/parallelRequest"
          element={
            <Suspense fallback={<p>Loading parallel requests...</p>}>
              <ParallelRequest />
            </Suspense>
          }
        />
        <Route path="/searchAutocomplete" element={<SearchAutoComplete />} />
      </Routes>
    </>
  );
}

export default App;
