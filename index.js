#!/usr/bin/env node

const {getCode} = require("country-list");
const axios = require("axios");
const process = require("process");

let country = process.argv.slice(2);
let codeCountry = getCode(country[0]);
let date = new Date();
let year = date.getFullYear();

const getHolidays = async () => {
  let holidays = await axios.get(`https://date.nager.at/api/v2/PublicHolidays/${year}/${codeCountry}`);

  let holidaysTable = holidays.data;
  holidaysTable.forEach(holiday => {
    console.log(holiday.name + " (" + holiday.date + ")");
  });
};
getHolidays();