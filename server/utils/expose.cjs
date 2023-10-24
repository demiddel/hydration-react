// Small 'bad' hack to use ESM instead of CJS in NodeJS and was getting errors when using import.meta.url because of babel.
module.exports = { __dirname };
