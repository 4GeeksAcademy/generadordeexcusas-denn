let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];


function getRandom (array){
  let randomIndex = Math.floor(Math.random() * array.length);
  let element = array [randomIndex];
  return element
}

function getExcuse() {
  let randomWho = getRandom(who);
  let randomAction = getRandom(action);
  let randomWhat = getRandom(what);
  let randomWhen = getRandom(when);

  let excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
  document.getElementById('excuse').innerHTML = excuse;
  return excuse;
}
