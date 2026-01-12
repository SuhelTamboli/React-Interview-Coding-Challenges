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
      link: "/throttle",
    },
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
