import axios from "axios";

const baseUrl = "https://drinx-9345a-default-rtdb.firebaseio.com";

const postDrink = () =>
  new Promise((resolve, reject) => {
    const drink = {
      drinkName: "Last Word",
      imgURL: "../assets/lastdrinx.jpg",
      description:
        "The Last Word is a gin-based prohibition-era cocktail originally developed at the Detroit Athletic Club.",
    };
    axios
      .post(`${baseUrl}/drink.json`, drink)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => reject(error));
  });

const getDrinks = (uid) =>
  new Promise((resolve, reject) => {
    axios
      .get(`${baseUrl}/drink.json`)
      .then((response) => {
        resolve(Object.values(response.data));
      })
      .catch((error) => reject(error));
  });

export default { postDrink, getDrinks };
