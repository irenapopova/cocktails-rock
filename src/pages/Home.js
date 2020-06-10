import React from "react";
import CocktailList from "./components/CocktailList";
import SearchForm from "./components/SearchForm";

export default function Home() {
  // setting up my 3 State values
  const [loading, setLoading] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("a");
  const [cocktails, setCocktails] = React.setState([]);

  React.useEffect(() => {
    async function getDrinks() {

      try {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);
        //.then(response => response.json())
        // .then(data => setCocktails(data.drinks));

        const data = await response.json();
        const { drinks } = data;
        if (drinks) {
          const newCocktails = drinks.map(item => {
            //console.log(item);
            const { idDrink, strDrink, strDrinkThumb, strAlcholic, strGlass } = item;
            return { id: idDrink, name: strDrink, image: strDrinkThumb, info: strAlcholic, glass: strGlass }
          });
          setCocktails(newCocktails)
          //console.log(drinks);
        } else {
          setCocktails([])
          //console.log("no drinks");
        }
      } catch (error) {
        console.log(error);

      }
    }
    getDrinks();
  }, [searchTerm]);

  return (
    <main>
      <SearchForm setSearchTerm={setSearchTerm} />
      <CocktailList loading={loading} cocktails={cocktails} />
    </main>
  );
}