import { Link } from "react-router";

export default function NavigationItems() {
  const NAV_ITEMS = [
    {
      name: "Show List of Products - Using Latest React-19 use hook AND Search Products Feature Using debounce Technique",
      link: "/products",
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
    //TODO
    // {
    //   name: "Error Boundary - to catch errors and give fallback component",
    //   link: "/errorBoundary",
    // },
    // {
    //   name: "HOC vs custom hook conversion",
    //   link: "/customHook",
    // },
    // {
    //   name: "UI Components - Modal/Accordion/Dropdown",
    //   link: "/commonComponents",
    // },

    //TODO:
    // 1.Retry failed API request
    // 2.Cancel API request on unmount
    // 3.Pagination component
    // 4.Parallel API calls using Promise.all
    // 5.File upload with preview
    // 6.Image lazy loading
    // 10.Build undo / redo feature
    // 11.Dark / light theme toggle (Context API)
    // 12.Build a search autocomplete
    // 13.Implement optimistic UI update
    // 14.Pagination + filtering table
    // 15.Custom hooks
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
