const Cocktail = require("./Cocktail");

const cocktail = async (req, res) => {
  try {
    const createCocktail = await Cocktail.create({
      strDrink: strDrink,
      strInstructions: strInstructions,
    });

    res.send(createCocktail);
  } catch (ex) {
    console.log(ex);
  }
};

module.exports = cocktail;
