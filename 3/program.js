var inputs = process.argv.slice(2);
var result = inputs.map(arg => `${arg.charAt(0)}`).reduce((current, next) => `${current}${next}`);
console.log(`[${inputs}]`,'becomes',`"${result}"`);
