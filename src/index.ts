import axios from 'axios';
const cheerio = require("cheerio");
const cron = require("node-cron");
const express = require("express");
// const serverless = require("serverless-http");

const app = express();
const PORT = process.env.PORT || 3000;
const SITE = "https://www.olx.kz/";
// let browser: Browser | null = null;
// let page: Page | null = null;
// let page_content: string | null = null;
let parsedData:{}[] | null = null;


const launchBrowser = async () => {
  axios.get(SITE)
  .then ((response) => {
    const $ = cheerio.load(response.data);

    const scrapedData:{}[] = [];
    $(".css-2v45ok").each((index, element) => {
      const data = {img: $(element).find("img").attr("src"), title: $(element).find(".css-z3gu2d").text(), location: $(element).find(".css-1pzx3wn").text(), time: $(element).find(".css-1uf1vew").text()};
      scrapedData.push(data);
    })

    parsedData = scrapedData;
    })
}
/*

const axios = require("axios");
const cheerio = require("cheerio");

*/


// cron.schedule("* * * * *", axios.get("https://functions.yandexcloud.net/d4eshhh2pd736riam8bf"));
const getData = async() => {
  const response = await axios.get("https://functions.yandexcloud.net/d4eshhh2pd736riam8bf");
  console.log(response.data);
}

getData();

// //mongodb+srv://tengekking8:uUS5P7MBJ3gFBQSB@cluster0.woaufvg.mongodb.net/


app.listen(PORT, () => {
  console.log(`Server runs at http://localhost:${PORT}`);
});