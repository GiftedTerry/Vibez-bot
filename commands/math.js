const modes = {
  noob: {
    range: [-3, 3],
    ops: ['+', '-'],
    time: 15000,
    bonus: 10
  },
  easy: {
    range: [-10, 10],
    ops: ['*', '/', '+', '-'],
    time: 20000,
    bonus: 40
  },
  medium: {
    range: [-40, 40],
    ops: ['*', '/', '+', '-'],
    time: 40000,
    bonus: 150
  },
  hard: {
    range: [-100, 100],
    ops: ['*', '/', '+', '-'],
    time: 60000,
    bonus: 350
  },
  extreme: {
    range: [-999999, 999999],
    ops: ['*', '/'],
    time: 99999,
    bonus: 9999
  },
  impossible: {
    range: [-99999999999, 99999999999],
    ops: ['*', '/'],
    time: 30000,
    bonus: 35000
  },
  impossible2: {
    range: [-999999999999999, 999999999999999],
    ops: ['/'],
    time: 30000,
    bonus: 50000
  }
};

const operators = {
  '+': '+',
  '-': '-',
  '*': '×',
  '/': '÷'
};

function randomInt(from, to) {
  if (from > to) [from, to] = [to, from];
  return Math.floor(Math.random() * (to - from + 1)) + from;
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

async function genMath(mode) {
  const { range, ops, time, bonus } = modes[mode];
  const a = randomInt(...range);
  const b = randomInt(...range);
  const op = pickRandom(ops);
  let result;

  if (op === '/') {
    [a, b] = [b, a]; // swap a and b for division
  }

  try {
    result = eval(`${a} ${op} ${b}`);
  } catch (error) {
    console.error(`Error evaluating expression: ${error}`);
    return null;
  }

  return {
    soal: `${a} ${operators[op]} ${b}`,
    mode,
    waktu: time,
    hadiah: bonus,
    jawaban: result
  };
}

export { modes, operators, randomInt, pickRandom, genMath };
