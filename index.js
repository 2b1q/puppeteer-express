const express = require('express');
const app = express();
const puppeteer = require('puppeteer');

app.get('/goto/:site', async (req, res) => {
  const { params: { site } } = req;
  console.log(`goto site: ${site}`);
  const result = await gotoSite(site)
  res.send({ cmd: 'goto', site, result });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Hello world listening on port', port);
});

const gotoSite = async site => {
  try {
    if (!site) {
      return 'site not provided'
    }
    const browser = await puppeteer.launch({args: ['--no-sandbox']});
    const page = await browser.newPage();
    await page.goto(`https://${site}`);
    // await page.screenshot({path: 'example.png'});
    await browser.close();
    return 'done';
  } catch (err) {
    console.log('puppeteer goto cmd failed:\n', err);
  }
}
