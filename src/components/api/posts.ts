interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostReponse {
  posts: Post[];
}
const fetchAllPosts: Promise<PostReponse | void> = fetch(
  "https://dummyjson.com/posts"
).then((res) => {
  if (!res.ok) throw new Error("Failed to fetch posts");
    return res.json();
});

export default function getAllPosts(): Promise<PostReponse | void> {
  return fetchAllPosts;
}
