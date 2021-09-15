const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Change code below this line

const finalSettings = {
  ...defaultSettings,
  theme: "light",
  minNumberOfQuestions: 10,
  ...overrideSettings,
  public: "false",
  withPassword: "true",
  timePerQuestion: 30,
};

console.log(finalSettings.theme); //"light"
console.log(finalSettings.public); // "false"
console.log(finalSettings.withPassword); //"true"
console.log(finalSettings.minNumberOfQuestions); // 10
console.log(finalSettings.timePerQuestion); // 30
