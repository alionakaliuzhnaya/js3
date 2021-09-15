//Деструктуризация в циклах
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const { hex, rgb } of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}

//const colors = [
//  { hex: "#f44336", rgb: "244,67,54" },
//  { hex: "#2196f3", rgb: "33,150,243" },
//  { hex: "#4caf50", rgb: "76,175,80" },
//  { hex: "#ffeb3b", rgb: "255,235,59" },
//];
//
//const hexColors = [];
//const rgbColors = [];
//// Change code below this line
//
//for (const color of colors) {
//  hexColors.push(color.hex);
//  rgbColors.push(color.rgb);
//}

console.log(hexColors); //["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
console.log(rgbColors); //["244,67,54", "33,150,243", "76,175,80", "255,235,59"]
