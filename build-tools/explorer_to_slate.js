/*
** Copy api-explorer content to the staging area used by slate.
** The file is also renamed (adding the required underscore at the start of the file).
** For each processed directory, the first file is also modified to include a Version
** header, for the table of contents to function correctly
*/
const fs = require('fs');
const path = require('path');

const TARGET_DIRECTORY = "./src/Slate-API-Explorer-Reference/slate/source/includes/";

function prependLine(sFile, sLine) {
    var oContent = fs.readFileSync(sFile);
    var oDescriptor = fs.openSync(sFile, 'w+')
    var oPrepend = Buffer.from(sLine);
    fs.writeSync(oDescriptor, oPrepend, 0, oPrepend.length, 0)
    fs.writeSync(oDescriptor, oContent, 0, oContent.length, oPrepend.length)
    fs.close(oDescriptor, (err) => {
        if (err) throw err;
    });
}

function processDirectory(sDir, sVersion) {
    var sVersionTarget = path.join(TARGET_DIRECTORY, sVersion);
    // Create target directory.
    if (!fs.existsSync(sVersionTarget)) {
        fs.mkdirSync(sVersionTarget);
    }

    fs.readdirSync(sDir).forEach(sFile => {
        var sExt = path.extname(sFile);
        var sSourceFile = path.join(sDir, sFile);
        var sTargetFile = path.join(sVersionTarget, "_" + sFile);
        if (sExt == ".md") {
            fs.copyFileSync(sSourceFile, sTargetFile);
        }
    });
}

if (!fs.existsSync(TARGET_DIRECTORY)) {
    fs.mkdirSync(TARGET_DIRECTORY);
}

processDirectory("./src/api-explorer/v3-0", "3.0");
processDirectory("./src/api-explorer/v3-1", "3.1");
processDirectory("./src/api-explorer/v3-2", "3.2");
processDirectory("./src/api-explorer/v4-0", "4.0");
