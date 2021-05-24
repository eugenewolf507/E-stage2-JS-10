// Your code goed here
fetch('../../mock.json')
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`Error: ${response.statusText}`);
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
