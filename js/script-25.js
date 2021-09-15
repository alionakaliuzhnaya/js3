const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};

// Change code below this line

const {
  today: {
    low: lowToday,
    high: highToday,
    icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
  },

  tomorrow: {
    low: lowTomorrow,
    high: highTomorrow,
    icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
  },
} = forecast;

console.log(highToday); // 3
console.log(lowToday); // 28
console.log(todayIcon); //"https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"
console.log(highTomorrow); // 31
console.log(lowTomorrow); //27
console.log(tomorrowIcon); //"https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
