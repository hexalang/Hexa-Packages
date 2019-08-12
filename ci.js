// Basically tests packages.json
var json = JSON.parse(require('fs').readFileSync('_includes/packages.json').toString())
console.log('Packages ' + json.length)
