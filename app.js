import country from "./country.js";

// Vazifa

const len = country.reduce((acc, curVal) => {
  if (curVal.languages && typeof curVal.languages === "object") {
    const languages = Object.keys(curVal.languages);
    languages.forEach((nameLen) => {
      acc[nameLen] = (acc[nameLen] || 0) + 1;
    });
  }
  return acc;
}, {});

const validLen = Object.entries(len)
  .filter(([, soni]) => soni >= 5)
  .sort((a, b) => b[1] - a[1]);

validLen.forEach(([nameLen, soni]) => {
  console.log(`${nameLen}: ${soni} davlat`);
});
