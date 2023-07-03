const fetchData = () => {
  {
    return new Promise((resolve, reject) => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
};

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });

module.exports = {
  fetchData,
};
