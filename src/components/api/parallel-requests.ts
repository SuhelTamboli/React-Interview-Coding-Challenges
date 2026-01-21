const fetchRecipes = fetch("https://dummyjson.com/recipes").then((res) => {
  if (!res.ok) throw new Error("failed to fetch recipes");
  return res.json();
});

const fetchComments = fetch("https://dummyjson.com/comments").then((res) => {
  if (!res.ok) throw new Error("failed to fetch comments");
  return res.json();
});

/**
 * parallel execution of api requests
        Promise.all is fail-fast.
        Promise.allSettled allows partial success and granular error handling
 *  */
async function getParallelRequest() {
  return Promise.all([fetchRecipes, fetchComments]).then(
    ([recipes, comments]) => {
      return { recipes, comments };
    },
  );
}

export const parallelRequestPromise = getParallelRequest();
