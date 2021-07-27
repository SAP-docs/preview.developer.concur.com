/*
** Copy static content to slate-ui directory for web-serving.
*/
const fs = require('fs');
const path = require('path');

const SOURCE_DIRECTORY = "./src"
const SITE_SOURCE_DIRECTORY = "./src/site-src";
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

var contentFile = path.join(SITE_SOURCE_DIRECTORY, "static-content.json");
var sRaw = fs.readFileSync(contentFile);
var aContent = JSON.parse(sRaw);

aContent.forEach(function (oSource) {
    sSource = path.join(SOURCE_DIRECTORY, oSource.name);
    sTarget = path.join(TARGET_DIRECTORY, oSource.name);
    if (oSource.type == "directory") {
        console.log("Copying to directory: " + sTarget);
        copyDirectory(sSource, sTarget);
    } else {
        console.log("Copying to file: " + sTarget);
        fs.copyFileSync(sSource, sTarget);
    }
});
