let fs = require('fs');
let puppeteer = require('puppeteer');
let minimist = require('minimist');

let args = minimist(process.argv);
let configJSON = fs.readFileSync(args.config,'utf-8');
let config =  JSON.parse(configJSON);



let browserKaPromise = puppeteer.launch({headless:false});
browserKaPromise.then(function(browser){
    let pagesKaPromise = browser.pages();
    pagesKaPromise.then(function(pages){
        let responseKaPromise = pages[0].goto( args.url );
   
        responseKaPromise.then(function(response){
            let closeKaPromise = browser.close();
            closeKaPromise.then(function (){
                console.log('Browser Closed');
            })
        })
    })

})



//IIFE => Immediately Invoked Function Execution
(async function run() {
    // Promise nhi hume maal chiye
    // use await when promise is there
    // await only in async funct
    let browser = await puppeteer.launch({headless:false});
    let pages = await browser.pages();
    await pages[0].goto(args.url);
    // await pages.screenshot({path:'example.png'});
    await pages[0].click()
    await browser.close();
})();
run();