import { useEffect, useRef, useState } from "react";

const PAGE_SIZE = 40;
const THROTTLE_DELAY = 300;

export default function ThrottleInfiniteScroll() {
  const [allItems, setAllItems] = useState<string[]>([]);
  const [visibleItems, setVisibleItems] = useState<string[]>([]);
  const throttleRef = useRef<number | null>(null);
  const pageRef = useRef<number>(1);

  const fetchData = () => {
    return new Promise<string[]>((resolve) =>
      resolve(
        Array.from({ length: 200 }).map(
          (_, index) => `item number ${index + 1}`
        )
      )
    );
  };

  // Initial fetch on page render
  useEffect(() => {
    const getData = async () => {
      const items = await fetchData();
      setAllItems(items);
      //show limited items as per PAGE_SIZE
      setVisibleItems(items.slice(0, PAGE_SIZE));
    };

    getData();
  }, []);

  //Responsible for pagination logic.
  const loadMore = () => {
    console.log("inside load more");
    /*
    pageRef.current stores the current page number.
     Increment to calculate the next page.
     */
    const nextPage = pageRef.current + 1;

    /*
      Takes more items from the source list.
        Example:
        PAGE_SIZE = 20
        Page 2 → slice(0, 40)
👉      This simulates infinite scrolling
      */
    const nextItems = allItems.slice(0, nextPage * PAGE_SIZE);

    /*
      Prevents unnecessary state updates.
        Only update if new items are actually added.
       */
    if (nextItems.length > visibleItems.length) {
      /*
        Updates UI with more items.
        Triggers a re-render.;
         */
      setVisibleItems(nextItems);
      /**
         * Stores the new page index without causing a re-render
            useRef is used instead of useState for performance.
         */
      pageRef.current = nextPage;
    }
  };

  /*
    handle scroll event listener
    Effect re-runs if allItems changes.
    Ensures the scroll logic works with latest data.
    */
  useEffect(() => {
    //handler function of scroll event listener
    const handleScroll = () => {
      console.log("in handle scroll event handler");

      /*
      if scroll action is done recently then skip this handler
      This is the throttle guard (prevents excessive calls).
      */
      if (throttleRef.current) return;

      /* 
      Start a timer to delay execution.
      Ensures the logic inside runs at most once every THROTTLE_DELAY ms.
      */
      throttleRef.current = setTimeout(() => {
        /* 
        Clear the throttle lock.
        Allow the next scroll event to be processed after the delay.
         */
        throttleRef.current = null;

        /* 
         scrollTop → pixels scrolled from top
         clientHeight → viewport height
         scrollHeight → total page height (including hidden part) 
         */
        const { scrollTop, scrollHeight, clientHeight } =
          document.documentElement;

        /*  
        Checks if the user is near the bottom of the page.
         -50 gives a buffer (loads earlier, smoother UX).
        “Has the user scrolled within 50px of the bottom?” 
         */
        if (scrollTop + clientHeight >= scrollHeight - 50) {
          //Calls the function to load more items.
          loadMore();
        }
      }, THROTTLE_DELAY);
    };

    //add scroll event listener
    window.addEventListener("scroll", handleScroll);

    //clean up scroll event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [allItems]);

  return (
    <div className="flex flex-col">
      <p className="text-lg font-bold self-center">Throttle Infinite Scroll</p>
      <div className="p-4">
        {visibleItems.map((item) => (
          <li className="list-disc list-inside" key={item}>
            {item}
          </li>
        ))}
      </div>
    </div>
  );
}
