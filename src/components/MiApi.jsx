import React, { useEffect, useState } from "react";
import Buscador from "./Buscador";

const MiApi = () => {
  const categorias = [
    "Ordinary Drink",
    "Cocktail",
    "Shake",
    "Other / Unknown",
    "Cocoa",
    "Shot",
    "Coffee / Tea",
    "Homemade Liqueur",
    "Punch / Party Drink",
    "Beer",
    "Soft Drink",
  ];

  const [apiDrinks, setDrinks] = useState([]);
  const [originalDrinks, setOriginalDrinks] = useState([]);
  const [letraBusqueda, setLetraBusqueda] = useState("a");
  const [filtro, setFiltro] = useState("");

  const getData = async () => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letraBusqueda}`;
    const res = await fetch(url);
    const data = await res.json();
    setDrinks(data.drinks);
    setOriginalDrinks(data.drinks);
  };

  const getRandomData = async () => {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
    const res = await fetch(url);
    const data = await res.json();
    setDrinks(data.drinks);
  };

  useEffect(() => {
    getData();
  }, [letraBusqueda]);

  useEffect(() => {
    if (
      filtro === "Ordinary Drink" ||
      filtro === "Cocktail" ||
      filtro === "Shake" ||
      filtro === "Other / Unknown" ||
      filtro === "Cocoa" ||
      filtro === "Shot" ||
      filtro === "Coffee / Tea" ||
      filtro === "Homemade Liqueur" ||
      filtro === "Punch / Party Drink" ||
      filtro === "Beer" ||
      filtro === "Soft Drink"
    ) {
      const filteredDrinks = originalDrinks.filter(
        (drink) => drink.strCategory === filtro
      );
      setDrinks(filteredDrinks);
    } else {
      setDrinks(originalDrinks);
    }
  }, [filtro, originalDrinks]);

  const handleFiltroMenu = (filtroArg) => {
    setFiltro(filtroArg);
  };

  return (
    <>
      <section className="text-center random-cocktail-container mb-4">
        <h2>Feeling Indecisive?</h2>
        <p>
          Let us help you discover your next favorite cocktail. Click below to
          find a random cocktail recipe!
        </p>
        <button className="btn btn-success" onClick={() => getRandomData()}>
          Discover a Random Cocktail
        </button>
      </section>
      <Buscador
        letraBusqueda={letraBusqueda}
        setLetraBusqueda={setLetraBusqueda}
      />
      <div className="filtro-container container d-flex flex-column align-items-start gap-3">
        <div className="dropup">
          <button
            className="btn btn-outline-primary dropdown-toggle text-start d-flex align-items-center justify-content-between"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ width: 10 + "rem" }}
          >
            Category
          </button>
          <ul className="dropdown-menu">
            {categorias.map((categoria) => (
              <li key={categoria}>
                <a
                  className="dropdown-item"
                  href="#!"
                  value={categoria}
                  onClick={() => handleFiltroMenu(categoria)}
                >
                  {categoria}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-start fw-light m-0">Selected Category: <span className="fw-semibold">{filtro}</span></p>
      </div>
      {apiDrinks.map((apiDrink) => (
        <div
          key={apiDrink.idDrink}
          className="drink-container py-3 col-sm-12 col-md-4 d-flex justify-content-center"
        >
          <div className="card shadow" style={{ width: 25 + "rem" }}>
            <img
              src={apiDrink.strDrinkThumb}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title text-center fw-bolder">
                {apiDrink.strDrink}
              </h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item text-center fw-semibold">
                  Ingredients
                </li>
                {Array.from({ length: 15 }, (_, i) => {
                  const ingredient = apiDrink[`strIngredient${i + 1}`];
                  return ingredient ? (
                    <li className="list-group-item" key={i}>
                      {ingredient}
                    </li>
                  ) : null;
                })}
              </ul>
              <div className="card-instructions">
                <p className="text-center fw-semibold">Instructions</p>
                <p className="card-text">{apiDrink.strInstructions}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MiApi;
