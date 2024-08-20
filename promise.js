// Create a function fetchData that returns a Promise. The Promise should resolve with the string "Data fetched successfully" after a delay of 2 seconds. Use setTimeout to simulate the delay. Test your function by calling it and using .then() to log the resolved value to the console. 

function fetchData() {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve("Data fetched successfully");
      }, 2000);
  });
}
fetchData().then((message) => {
  console.log(message); 
});

//   Modify the fetchData function from Question 1 to sometimes reject the Promise with an error message "Failed to fetch data". Modify your test to handle this rejection using .catch().


  function fetchData() {
    return new Promise((resolve, reject) => {
      const shouldReject = Math.random() < 0.5; 
      setTimeout(() => {
        if (shouldReject) {
          reject("Failed to fetch data");
        } else {
          resolve("Data fetched successfully");
        }
      }, 2000);
    });
  }
  fetchData()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
//   Convert the fetchData function from Question  1 to use async and await instead of .then(). Ensure to handle errors using try and catch

async function fetchData() {
  try {
      const message = await new Promise((resolve, reject) => {
          setTimeout(() => {
              const success = Math.random() > 0.5; 
              if (success) {
                  resolve("Data fetched successfully");
              } else {
                  reject("Failed to fetch data");
              }
          }, 2000); 
      });
      console.log(message); 
  } catch (error) {
      console.error(error); 
  }
}


fetchData();

//   Write a function "getCountryData" that fetches data from the public API " https://restcountries.com/v3.1/all ". Parse the JSON response and log the data to the console. Additionally, use DOM manipulation to display the data on the web page. Make sure to handle any errors that might occur during the fetch operation and display an appropriate error message in the div if the fetch fails. (deploy the webpage on github)

async function getCountryData() {
  try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      displayCountryData(data);
  } catch (error) {
      console.error('Fetch error:', error);
      document.getElementById('error-message').textContent = 'Failed to fetch country data. Please try again later.';
  }
}

function displayCountryData(countries) {
  const container = document.getElementById('country-container');
  container.innerHTML = '';
  countries.forEach(country => {
      const countryDiv = document.createElement('div');
      countryDiv.className = 'country';
      countryDiv.innerHTML = `
          <h2>${country.name.common}</h2>
          <p><strong>Capital:</strong> ${country.capital ? country.capital[0] : 'N/A'}</p>
          <p><strong>Region:</strong> ${country.region}</p>
          <p><strong>Population:</strong> ${country.population}</p>
      `;
      container.appendChild(countryDiv);
  });
}
getCountryData();

  