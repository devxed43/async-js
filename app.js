const links = [
  "https:jsonplaceholder.typicode.com/users",
  "https:jsonplaceholder.typicode.com/posts",
  "https:jsonplaceholder.typicode.com/albums",
];

Promise.all(links.map((link) => fetch(link).then((res) => res.json()))).then(
  (data) => {
    console.log("users:", data[0]);
    console.log("posts:", data[1]);
    console.log("albums:", data[2]);
  }
);
