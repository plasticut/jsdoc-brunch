var JSDocRunner;

// Require the dependency
var execSync = require("exec-sync");

function JSDocRunner(config) {
    var defaults = {
        input : 'app',
        conf: 'node_modules/jsdoc-brunch/jsdoc.json',
        destination: 'public/jsdocs'
    };

    config = config.plugins && config.plugins.jsdoc;

    this.conf = {
        input: config.input || defaults.input,
        conf: config.conf || defaults.conf,
        destination: config.destination || defaults.destination
    };
}

module.exports = JSDocRunner;

JSDocRunner.prototype.brunchPlugin = true;
JSDocRunner.prototype.type = 'javascript';
JSDocRunner.prototype.extension = 'js';
JSDocRunner.prototype.onCompile = function(){
    var result = execSync("node_modules/jsdoc-brunch/node_modules/.bin/jsdoc -c " + this.conf.conf + " " + this.conf.input + " -d " + this.conf.destination, true);

    var failed = false;

    if (result.stdout) {
        console.log(result.stdout);
    }

    if (result.stderr){
        console.log(result.stderr)
        failed = true;
    }

    if (failed){
        console.log('JSDocs failed');
    } else {
        console.log('JSDocs was built in: ' + this.conf.destination);
    }
};