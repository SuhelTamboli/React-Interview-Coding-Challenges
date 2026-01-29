import { Link } from "react-router";

export default function NavigationItems() {
  const NAV_ITEMS = [
    {
      name: "Show List of Products - Using Latest React-19 use hook AND Search Products Feature Using debounce Technique",
      link: "/products",
    },
    {
      name: "Optimistic UI Update - using React-19 useOptimisic hook",
      link: "/optimisticUI",
    },
    {
      name: "Memoize complex calculation value using useMemo",
      link: "/testUseMemo",
    },
    {
      name: "Memoize function using useCallback",
      link: "/testUseCallback",
    },
    {
      name: "Star Based Rating System",
      link: "/rating",
    },
    {
      name: "Throttle - To Prevent Multiple Api Calls During Infinite Scroll",
      link: "/throttle/infiniteScroll",
    },
    {
      name: "Throttle - Button Click – Prevent Rapid Repeated Actions",
      link: "/throttle/repeatedClick",
    },
    {
      name: "React.memo - to prevent child component re-render",
      link: "/reactMemo",
    },
    {
      name: "Error Boundary - to catch errors and give fallback component",
      link: "/errorBoundary",
    },
    {
      name: "Custom Hook - Autheticate user to access app",
      link: "/authCustomHook",
    },
    {
      name: "Custom Hook - Fetch Data on Component Mount",
      link: "/fetchCustomHook",
    },
    {
      name: "Retry Failed API Request",
      link: "/retryRequest",
    },
    {
      name: "Cancel API request on component unmount",
      link: "/cancelRequest",
    },
    {
      name: "Parallel API calls using Promise.all",
      link: "/parallelRequest",
    },
    {
      name: "Search autocomplete",
      link: "/searchAutocomplete",
    },
    {
      name: "Image lazy loading",
      link: "/imageLazyloading",
    },

    //TODO

    {
      name: "Dark / light theme toggle (Context API)",
      link: "/themeToggle",
    },
    {
      name: "UI Components - Modal/Accordion/Dropdown",
      link: "/commonComponents",
    },

    //TODO:
    // 3.Pagination component
    // 5.File upload with preview
    // 10.Build undo / redo feature
    // 14.Pagination + filtering table
  ];
  return (
    <ul className="list-disc list-inside p-4">
      {NAV_ITEMS.map((item) => (
        <li className="text-blue-500 underline" key={item.name}>
          <Link to={item.link}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}
