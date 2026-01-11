import { Link } from "react-router";

export default function NavigationItems() {
  const NAV_ITEMS = [
    {
      name: "Show List of Products - Using Latest React-19 use hook AND Search Products Feature Using debounce Technique",
      link: "/products",
    },
  ];
  return (
    <ul className="list-disc list-inside">
      {NAV_ITEMS.map((item) => (
        <li className="text-blue-500 underline" key={item.name}>
          <Link to={item.link}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}
