const dataFetched = fetch("https://jsonplaceholder.typicode.com/todos")
  .then((Response) => {
    return Response.json(Response);
  })
  .then((data) => {
    console.log(data);
  });

module.exports = {
  dataFetched,
};
