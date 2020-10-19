var axios = require("axios");

main();
async function main() {
  try {
    let ac = await getCocktail("a");
    let bc = await getCocktail("b");
    let cc = await getCocktail("c");
    let dc = await getCocktail("d");
    let ec = await getCocktail("e");

    var list = ac.concat(bc, cc, dc, ec);
    let output = list.sort(dynamicSort("strDrink"));
    console.log(output);
  } catch (ex) {
    console.log(ex);
  }
}

function getCocktail(param) {
  return new Promise((resolve, reject) => {
    axios({
      method: "get",
      url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=" + param,
    })
      .then((res) => {
        resolve(res.data.drinks);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
function dynamicSort(property) {
  var sortOrder = 1;

  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }

  return function (a, b) {
    if (sortOrder == -1) {
      return b[property].localeCompare(a[property]);
    } else {
      return a[property].localeCompare(b[property]);
    }
  };
}
