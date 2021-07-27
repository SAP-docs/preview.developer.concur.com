/*
** Copy static content built by middleman from from the slate directory
** back to slate-ui directory for web-serving.
*/
const fs = require('fs');
const path = require('path');

const SOURCE_DIRECTORY = "./src/Slate-API-Explorer-Reference/slate/build"
const TARGET_DIRECTORY = "./src/staged";

function copyDirectory(sSource, sTarget) {
    // Create target directory.
    if (!fs.existsSync(sTarget)) {
        fs.mkdirSync(sTarget);
    }
    fs.readdirSync(sSource, { withFileTypes: true }).forEach(oFile => {
        if (oFile.isDirectory() == true) {
            var oSourceSub = path.join(sSource, oFile.name);
            var oTargetSub = path.join(sTarget, oFile.name);
            copyDirectory(oSourceSub, oTargetSub);
        } else {
            var sSourceFile = path.join(sSource, oFile.name);
            var sTargetFile = path.join(sTarget, oFile.name);
            fs.copyFileSync(sSourceFile, sTargetFile);
        }
    });
}

// Copy index.html
var sSource = path.join(SOURCE_DIRECTORY, "api-explorer.html");
var sTarget = path.join(TARGET_DIRECTORY, "api-explorer.html");
fs.copyFileSync(sSource, sTarget);

// Copy api-reference.html
sSource = path.join(SOURCE_DIRECTORY, "api-reference.html");
sTarget = path.join(TARGET_DIRECTORY, "api-reference.html");
fs.copyFileSync(sSource, sTarget);

// Copy deprecated.html
sSource = path.join(SOURCE_DIRECTORY, "deprecated.html");
sTarget = path.join(TARGET_DIRECTORY, "deprecated.html");
fs.copyFileSync(sSource, sTarget);

// Copy CSS
sSource = path.join(SOURCE_DIRECTORY, "stylesheets");
sTarget = path.join(TARGET_DIRECTORY, "stylesheets");
copyDirectory(sSource, sTarget);

// Copy Images
sSource = path.join(SOURCE_DIRECTORY, "images");
sTarget = path.join(TARGET_DIRECTORY, "images");
copyDirectory(sSource, sTarget);

// Copy fonts
sSource = path.join(SOURCE_DIRECTORY, "fonts");
sTarget = path.join(TARGET_DIRECTORY, "fonts");
copyDirectory(sSource, sTarget);

// Copy javascript
sSource = path.join(SOURCE_DIRECTORY, "javascripts");
sTarget = path.join(TARGET_DIRECTORY, "javascripts");
copyDirectory(sSource, sTarget);
