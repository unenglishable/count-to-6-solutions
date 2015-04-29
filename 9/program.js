console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);
function html(...input) {
  var todo = input.slice(1);
  return input[0].slice(1).reduce((current, next, index) =>
      current
      + todo[index]
        .replace(/&/g, '&amp;')
        .replace(/'/g, '&apos;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/"/g, '&gt;')
      + next, input[0][0]);
}
