async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
}

export default async function HomePafe() {
  const posts = await getPosts();
  console.log(posts);
}
