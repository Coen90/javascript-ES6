function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => π₯`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => π³`);
}

function getChicken() {
  return Promise.reject(new Error("μΉν¨μ κ°μ§κ³  μ¬ μ μμ!"));
  //return Promise.resolve(`πͺ΄ => π`);
}

async function getOyako() {
  let chicken;
  try {
    chicken = await getChicken();
  } catch {
    chicken = "π";
  }
  const egg = await fetchEgg(chicken);
  const data = await fryEgg(egg);
  return console.log(data);
}

getOyako().then(console.log);
