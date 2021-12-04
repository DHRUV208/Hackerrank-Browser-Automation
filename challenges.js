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
await tab.waitForSelector('[data-analytics="NavBarProfileDropDown"]',{
    visible:true
});







let navigationProfile = await tab.$('[data-analytics="NavBarProfileDropDown"]');
await navigationProfile.click();

let administration = await tab.$('[data-analytics="NavBarProfileDropDownAdministration"]');
await administration.click();

// let administrationPage = await tab.$('.nav-tabs.nav.admin-tabbed-nav a.backbone');

// await tab.waitForNavigation({waitUntil : "networkidle2"});
await tab.waitForSelector('.admin-tabbed-nav a',{
    visible:true
});
// $ ---> ek chese mangvani ho to
// $$ ---> ek se zyada chese mangvani h to
let manageChallenges =  await tab.$$('.admin-tabbed-nav a');
await manageChallenges[1].click();

let createChallenge = await tab.$('.btn.btn-green.backbone.pull-right');
await createChallenge.click();

// await tab.waitForNavigation({waitUntil : "networkidle2"});
// await tab.waitForSelector('.CodeMirror-line');


// let codeTextAreas = await tab.$('#input_format-container .CodeMirror-code');
// await codeTextAreas[0].click();
// await codeTextAreas[0].type('awqa');

// await codeTextAreas[1].click();
// await codeTextAreas[1].type('edsw');

// await codeTextAreas[2].click();
// await codeTextAreas[2].type('ujmn');

// await codeTextAreas[3].click();
// await codeTextAreas[3].type('hyui');

await tab.waitForSelector('#input_format-container .CodeMirror-code',{
    visible:true
});


let challengeName = await tab.$('#name');
await challengeName.type('Tower Of Hanoi');

let challengeDescription = await tab.$('#preview');
await challengeDescription.type('Intro to recursion');

let problemStatement = await tab.$('#problem_statement-container');
await problemStatement.click();
await problemStatement.type(`1. There are 3 towers. Tower 1 has n disks, where n is a positive number. Tower 2 and 3 are empty.
2. The disks are increasingly placed in terms of size such that the smallest disk is on top and largest disk is at bottom.
3. You are required to 
    3.1. Print the instructions to move the disks.
    3.2. from tower 1 to tower 2 using tower 3 
    3.3. following the rules
        3.3.1 move 1 disk at a time.
        3.3.2 never place a smaller disk under a larger disk.
        3.3.3 you can only move a disk at the top.

Note -> The online judge can't force you to write the function recursively but that is what the spirit of question is.Write recursive and not iterative logic. The purpose of the question is to aid learning recursion and not test you.`);

let inputFormatTextArea = await tab.$('#input_format-container .CodeMirror-code');
await inputFormatTextArea.click();
await inputFormatTextArea.type(`A number n, representing number of disks
A number n1, representing id of tower 1
A number n2, representing id of tower 2
A number n3, representing id of tower 3`);


// let  

let constraintFormatTextArea = await tab.$('#constraints-container .CodeMirror-code');
await constraintFormatTextArea.click();
await constraintFormatTextArea.type(`0 <= n <= 9
10 <= n1, n2, n3 <= 10^9
n1 != n2 != n3`);

let outputFormatTextArea = await tab.$('#output_format-container .CodeMirror-code');
await outputFormatTextArea.click();
await outputFormatTextArea.type(`n[n1 -> n2] 
..
A set of instructions in above format to represent, move nth disc from n1 tower to n2 tower`);
// 

let tagArea = await tab.$('#tags_addTag');
await tagArea.click();
await tagArea.type('Recursion');
await tab.keyboard.press("Enter");

let saveChanges = await tab.$('.save-challenge.btn.btn-green');
await saveChanges.click();

await tab.waitForNavigation({waitUntil : "networkidle2"});
await tab.waitForSelector('.save-challenge.btn.btn-green',{
    visible:true
});

saveChanges = await tab.$('.save-challenge.btn.btn-green');
await saveChanges.click();

await tab.waitForSelector('[data-tab="moderators"]');
let moderatorButton = await tab.$('[data-tab="moderators"]');
await moderatorButton.click();

await tab.waitForSelector("#moderator")
let moderatorTextArea = await tab.$("#moderator");
for(let moderator of moderators) {
    await moderatorTextArea.type(moderator);
    await tab.keyboard.press("Enter");
}
await tab.waitForSelector(".save-challenge.btn.btn-green");
saveChangesButton = await tab.$(".save-challenge.btn.btn-green");
await saveChangesButton.click();
}
openBrowser();
// openBrowser();
// openBrowser();


// aptitude test
// Aptitude Test_October 2021
// Solve all 15 questions. 
// Each question carries 2 marks. 
// Immersive Reader in Microsoft Forms allows you to hear the text of a form title and questions read out loud while following along. You can find the Immersive Reader button next to form title or questions after activating this control. You can also change the spacing of line and words to make them easier to read, highlight parts of speech and syllables, select single words or lines of words read aloud, and select language preferences.
// Hi, Dhruv. When you submit this form, the owner will see your name and email address.
// 1.In the given sequence how many perfect square numbers are there which are immediately preceded by a vowel and immediately followed by a consonant? 
// 23, A, 49, Z, 16, E, 81, W, 121, O, 9, D, 25, U, 784, Y
// (2 Points)

// One

// Two

// Three

// More than three
// 2.A die is rolled twice. What is the probability of getting a sum equal to 8?
// (2 Points)

// 5/36

// 1/9

// 7/36

// 2/9
// 3.A coaching opens for 5 days in a week starting from Monday to Friday. Four different subjects Mathematics, Physics, Chemistry and Biology are taught and only one subject is taught per day. 
// 1. Mathematics is taught on Monday and Friday.
// 2. Different subjects are taught on Tuesday and Thursday.
// 3. Different subjects are taught on Wednesday and Friday. To ensure that any two different subjects are taught on consecutive days-
// (2 Points)

// Statement 1 alone is sufficient

// Statement 3 alone is sufficient.

// Statement 2 alone is sufficient

// Statement 2 is not sufficient, but statement 2 along with statement 3 is sufficient
// 4.Golu and Bholu appear in an interview for 2 vacancies. The probability of selection of Golu and that of Bholu, are 1/3 and 1/7 respectively. What is the probability that only one of them will be selected?
// (2 Points)

// 1/21

// 8/21

// 4/21

// 2/7
// 5.In India 60% people went to Europe trip, 50% went to Russia trip and 10% did not travel abroad. Which of the following conclusion(s) can be drawn from the above data? 
// 1. 20% people went to Europe as well as Russia. 
// 2. 30% people went to only Russia. Select the correct answer using the codes given below:
// (2 Points)

// 1 only

// 2 only

// Both 1 and 2

// Neither 1 nor 2
// 6.A six digit number 4A7B3C is such that it leaves remainder 0 when divided by 7, 11 and 13. What will be the sum of numbers at A, B and C?
// (2 Points)

// 11

// 12

// 14

// 13
// 7.When the digits of a two-digit number are reversed, the number increases by 27. Sum of the least and the highest such two-digit numbers is-
// (2 Points)

// 85

// 93

// 83

// 113
// 8.Consider two statements 1 and 2 followed by a question: 
// S1 : Speed of A is twice that of B. A is eight times faster than D. 
// S2 : B takes half as much time as taken by C. How much time B will take to complete his journey, if D completes the same journey in one hour more than C?
// (2 Points)

// S1 alone is sufficient to answer the question

// S2 alone is sufficient to answer the question

// S1 and S2 taken together are not sufficient to answer the question

// Both S1 and S2 are necessary to answer the question
// 9.Consider two statements S1 and S2 followed by a question: 
// S1 : N is a natural number and N > 3.
// S2 : If N is divided by 6, remainder is either 1 or 5. Which one of the following is necessarily true?
// (2 Points)

// N is a prime number.

// N is divisible by 5, 7, 11 and 13.

// N is a perfect square.

// None of the above.
// 10.How many 4 digit even number can be formed by using the digits 5,7,9 and 2 only once?
// (2 Points)

// 24

// 12

// 8

// 6
// 11.What is X in the sequence given below: 287, 167, 119, 47, 23, 7, X ?
// (2 Points)

// 4

// 8

// 2

// 3
// 12.Ashok was travelling to Mumbai from Delhi. When he left Delhi on Friday noon, his watch was slow by 2 minutes. He took rest at Bhopal and got to know that his watch showed correct time at that time. He reached Mumbai at 2 p.m. on the following Friday and saw that his watch is 4 minutes 48 seconds fast. If the watch gains uniformly, then when did he reach Bhopal?
// (2 Points)

// 2 p.m. on Sunday

// 2 p.m. on Saturday

// 12 p.m. on Monday

// 12 p.m. on Sunday
// 13.A family consists of three sons and their parents. Average age of the family is 20 years. Average of the ages of second eldest son and parents is 24 years. Difference between parents age together and second eldest son is 48 years. Ratio of ages of second eldest son and eldest son is 2 : 3. What is the age of the youngest son?
// (2 Points)

// 10 years

// 20 years

// 12 years

// 15 years
// 14.A person walked 10 km towards west from point A, then moved 8 km towards north and reached the bus stand, then he walked 6 towards east and reached a school. From school, he walked 12 km towards his right and then moved 9 km towards east and reached his home. How far and in which direction is the school from his house?
// (2 Points)

// 13 km, south-west

// 12 km, north-east

// 15 km, north-west

// 15 km, south-west
// 15.Ram went to circus and he had Rs.350 in different denominations: Rs.1, Rs.5, Rs.10, Rs.20 and Rs.50. He bought the entry ticket by using two notes of Rs.10 and one note of Rs.5. Then he bought a toy by using three notes of Rs.20 and three notes of Rs.5. After that he bought an ice-cream by using one note of Rs.50, four notes of Rs.5 and ten notes of Rs.1. After that he booked an auto for home and paid him all the rupees he had. In how many ways can he pay the fare of auto if he had thirty-six notes initially?
// (2 Points)

// 2

// 3

// 5

// More than 5
// This content is created by the owner of the form. The data you submit will be sent to the form owner. Microsoft is not responsible for the privacy or security practices of its customers, including those of this form owner. Never give out your password.
// Powered by Microsoft Forms | Privacy and cookies | Terms of use