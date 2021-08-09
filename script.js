window.onload = () => {
  fetchCountries();
};

const fetchCountries = () => {
  fetch("https://disease.sh/v3/covid-19/countries")
    .then((res) => res.json())
    .then((data) => buildCountryDropDown(data));
};

const buildCountryDropDown = (data) => {
  const countryDropDown = document.querySelector("#countries");

  data.map((country, id) => {
    const html = `<option id=${id} style="background-image: url(${country.countryInfo.flag})" value="${country.country}">${country.country}</option>`;
    countryDropDown.innerHTML += html;
  });
};
