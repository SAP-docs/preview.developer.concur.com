/*
** Update static html files to prepend a dummy front matter header.
** jekyll cannot process the file otherwise.
** Also revert &quot; substitutions in jekyll directives (converted
** by middleman)
*/
const fs = require('fs');
const path = require('path');

const STATIC_DIRECTORY = "./src/Slate-API-Explorer-Reference/slate/build";

function processLine(sLine) {
    if (sLine.indexOf("{%") >= 0) {
        return sLine.replace(/&quot;/g, '"');
    }
    return undefined;
}

function prependHeader(sFile) {
    var oContent = fs.readFileSync(sFile);
    var oDescriptor = fs.openSync(sFile, 'w+')
    var oPrepend = Buffer.from("---\n---\n");
    fs.writeSync(oDescriptor, oPrepend, 0, oPrepend.length, 0)
    fs.writeSync(oDescriptor, oContent, 0, oContent.length, oPrepend.length)
    fs.close(oDescriptor, (err) => {
        if (err) throw err;
    });
}

function processFile(sFile) {
    var sPath = path.join(STATIC_DIRECTORY, sFile);
    console.log("Fixing: " + sPath + " for jekyll processing.");

    var sRaw = fs.readFileSync(sPath, { encoding: 'utf8' });
    var aContent = sRaw.split('\n');
    var sOutput = "";

    aContent.forEach(function (sLine) {
        sResult = processLine(sLine);
        if (!!sResult) {
            sOutput = sOutput + sResult + "\n";
        } else {
            sOutput = sOutput + sLine + "\n";
        }
    });

    fs.writeFileSync(sPath, sOutput);

    prependHeader(sPath);
}

processFile("api-reference.html");
processFile("deprecated.html");
