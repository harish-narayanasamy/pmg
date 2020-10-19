var receipt = [
  "Coles Supermarkets Australia Pty Ltd",
  "Tax Invoice ABN: 45 004 189 708",
  "coles",
  "Store: 4813 - CS MACARTHUR SQR NSW",
  "Store Manager: Mala",
  "Phone:",
  "0246292100",
  "Served By: Adrian",
  "Register: 004",
  "Receipt: 9270",
  "Date:",
  "29/03/2019",
  "Time:",
  "10:08",
  "Description",
  "COLES SUPER TAMPONS 32PACK",
  "4.00",
  "NESCAFE DOLCE GUSTO 186GRAM",
  "8.50",
  "COLES REGULAR TAMPON 40PACK",
  "4.00",
  "% HASK CONDITIONER 355ML",
  "15.00",
  "% HASK SHAMPOO 355ML",
  "15.00",
  "THE JUICE LAB SMOOTH 350ML",
  "3.10",
  "* MAYVERS SPREAD 240GRAM",
  "4.25",
  "* THE JUICE LAB SMOOTH 350ML",
  "3.10",
  "* CREATIVE FROZEN ACAI 400GRAM",
  "6.00",
  "FAMILY SPINACH 280GRAM",
  "5.00",
  "NAVEL ORANGES 5PACK",
  "4.50",
  "GRN SMITH APPLES 1KG 1EACH",
  "5.00",
  "CARROTS PERKG",
  "0.59",
  "0.266 kg NET @ $2.20/kg",
  "BABY BEETROOT 250GRAM",
  "3.00",
  "TOOHEYS NEW CANS 30 PACK",
  "50.00",
  "LEMONS 5PK 1EACH",
  "3.00",
  "CELERY 1EACH",
  "5.90",
  "Total for 20 items:",
  "$139.94",
  "EFT",
  "$139.94",
  "Coles",
  "NSW AU",
  "29/03/19 10:08",
  "29833035",
  "NN1304",
  "***** 3704",
  "MASTERCARD",
  "CREDIT ACCOUNT",
  "Mastercard",
  "APSN 0001 ATC 0107",
  "A0000000041010",
  "PURCHASE",
  "AUD$ 139.94",
  "RRN 000040927000",
  "(00) APPROVED",
  "AUTH R42139",
];
var output = [];
receipt.map((item, index, array) => {
  if (item.includes("GRAM")) {
    output.push([item, array[index + 1]]);
  }
  if (item.includes("ML")) {
    output.push([item, array[index + 1]]);
  }
  if (item.includes("PACK")) {
    output.push([item, array[index + 1]]);
  }
  if (item.includes("EACH")) {
    output.push([item, array[index + 1]]);
  }
  if (item.includes("PERKG")) {
    output.push([item, array[index + 1]]);
  }
});
console.log(output);
