let counter = 5;

const functionLoop = () => {
  console.log(counter);
  counter -= 1;
  if (counter === 0) return;

  functionLoop();
};

functionLoop();
