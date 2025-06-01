const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/albums",
  "https://jsonplaceholder.typicode.com/posts",
];

Promise.all(urls.map((url) => fetch(url).then((res) => res.json())))
  .then((data) => {
    console.log(data[0]);
    console.log(data[1]);
    console.log(data[2]);
  })
  .catch((err) => console.log(err));
