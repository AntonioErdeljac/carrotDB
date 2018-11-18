module.exports.generate = () => {
  let id = '';
  const possibleChars = 'ABCDEFGHIJKLMNOPRSTUVZWYQX123456789';

  for (let i = 0; i < 10; i += 1) {
    id += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
  }

  return id;
};
