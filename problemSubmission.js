const puppy = require("puppeteer");



let moderators = ["bansalbhavesh47", "bansalbhavesh50"];

async function openBrowser(){

  const browser = await puppy.launch({
        headless: false,
        args: ['--start-maximized'],
        defaultViewport: false ,
        // slowMo : 100
    });
    // console.log(browser);
    // console.log("hello");
    // await puppy.goto("https://www.google.com");
//   await  browser.pages().then(function(tabs){
//         tabs[0].goto("https://www.google.com");
//     })
    // for(let i=0;i<9;i++){
    //   await  browser.newPage().then(function (tab){
    //         tab.goto("https://www.google.com");
    //     });
    // }  
    // console.log(tabs);
    // console.log(tab);
        // let currentTabs = tabs[i];
        // await currentTabs.goto("https://www.google.com");
    
    const tabs = await browser.pages();
    const tab = tabs[0];
    await tab.goto("https://www.hackerrank.com/auth/login");
    // await tab.goto("https://instagram.com");
    let userNameInputTab = await tab.$('[id="input-1"]');
    //.$ query selector
    // .$$ quesry all
    // console.log(userNameInputTab);

   await userNameInputTab.type("dhruv19csu091@ncuindia.edu");

    let passwordInputTab = await tab.$('[id="input-2"]');
   await passwordInputTab.type("Xyz@12345");

  let rememberCheckbox = await tab.$(".checkbox-input");
  await rememberCheckbox.click();

let loginButton = await tab.$('[type="submit"]');
await loginButton.click();

// let loginViaGmail = await tab.$('[data-analytics="SignupGoogle"]');
// await loginViaGmail.click();
// console.log(tabs.length);

// const gmailLog = tabs[0];
// await tab.goto("https://www.hackerrank.com/auth/login");

// const page = await browser.pages();
//  await tab.goto('https://www.hackerrank.com/dashboard');

// const page ;
// const baseURL = 'https://www.hackerrank.com'
// // await page.goto(baseURL)
// // ...login code...
// const pageIWannaGo = '/dashboard';
// await tab.goto(baseURL + pageIWannaGo);
await tab.waitForNavigation({waitUntil : "networkidle2"});
await tab.waitForSelector('[data-analytics="StartPreparation"]',{
    visible:true
});
let StartPreparationButton = await tab.$('[data-analytics="StartPreparation"]');
await StartPreparationButton.click();
//await tab.waitForSelector('[data-analytics="SolvePrepKitChallenge]"');
let solveChallengeButton = await tab.$$('[data-analytics="StartPreparation"]');
let solveChallengeUrl = [];
// for(let solve of solveChallengeButton){
    solveChallengeUrl.push(
        await tab.evaluate(function (ele){
            return "https://hackerranck.com" + ele.getAttribute('href');
        },solveChallengeButton[0])
    );
    solveChallengeUrl.push(
        await tab.evaluate(function (ele){
            return "https://hackerranck.com" + ele.getAttribute('href');
        },solveChallengeButton[2])
    );
    // await tab.waitForSelector('#tab-1-item-4',{
    //     visible:true
    // });

    // let editorialButton = await tab.$('#tab-1-item-4');
    // editorialButton.click();


for(let i =0;i<solveChallengeUrl.length;i++){
    await solveChallenge(solveChallengeUrl[i],tab);
    // console.log(solveChallenge.length);
}

async function solveChallenge(url,tab){
    let problemUrl = url.replace("?", "/problem?");
    let editorialUrl = url.replace("?","/editorial?");
    await tab.goto(url);
    
    let solutionsH3Tags = await tab.$$(".hackdown-content h3");
    
    let solutionLang = [];
    for(let solutionsH3Tags of solutionsH3Tags){
        solutionLang.push(
            await tab.evaluate(function (ele){
                return ele.innerText;
            },solutionsH3Tags)
        )
    }
    console.log(solutionLang);
    let solutionPreTags = await tab.$$(".highlight pre");
    let solution ;
    for(let i =0;i<solutionLang.length;i++){
        if(solutionLang[i]=="C++"){
            solution = await tab.evaluate(function(ele){
                return ele.innerText;
            },solutionPreTags[i]);
            break;
        }
    }
    console.log(solution);
await tab.goto(problemUrl);
await tab.waitForSelector('.view-lines');
await tab.click('[type="checkbox"]');
await tab.type('#input-1',solution);
await tab.keyboard.down('Control');
await tab.keyboard.up('Control');

await tab.keyboard.press('X');
await tab.keyboard.up('Control');

await tab.click('.view-lines');
await tab.keyboard.up('Control');
await tab.keyboard.press('A');
await tab.keyboard.press('V');
await tab.keyboard.down('Control');

await tab.click(".hr-monaco-submit");
await tab.waitForSelector('.congrats-wrapper');


}










}
//  solveChallengeButton.map((async function (solveChallengeButton){
// const attr = await tab.evaluate((ele)=>{
// return ele.getAttribute("href");
// },solveChallengeButton);
// return href;
// })

// await tab.$$eval('[data-analytics="SolvePrepKitChallenge]"',()=>{
//     solveChallengeButton.map((solveChallengeButton)=>{

//     })
// });



openBrowser();
// openBrowser();
// openBrowser();