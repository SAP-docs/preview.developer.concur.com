/*
** This script is used to fix indentation in the api-explorer section.
** This is needed because the source markdown uses header levels which do not
** fit nicely into the auto-generated table of content side bar.
*/
const fs = require('fs');
const path = require('path');
const parser = require('node-html-parser');

function processNode(oNode) {

    // nodeType == 1 is an HTML element
    if (oNode.nodeType !== 1) {
        return;
    }

    if (oNode.rawTagName == 'h4') {
        oNode.rawTagName = 'h5';
    }
    if (oNode.rawTagName == 'h3') {
        oNode.rawTagName = 'h4';
    }
    if (oNode.rawTagName == 'h2') {
        oNode.rawTagName = 'h3';
    }
    if (oNode.rawTagName == 'h1') {
        oNode.rawTagName = 'h2';
    }

    if (oNode.childNodes.length > 0) {
        oNode.childNodes.forEach(function (oChildNode) {
            processNode(oChildNode);
        });
    }
}

function processLine(sLine) {
    // Adjust markdown lines.
    // 1. Convert all ## to ####
    // 2. Convert "# Schemas" to "### Schemas"
    if (sLine.startsWith("## ") || sLine.startsWith("# Schemas")) {
        return "##" + sLine + "\n";
    }
    return sLine + "\n";
}

function processFile(sDir, sFile) {
    var sPath = path.join(sDir, sFile);
    console.log("Adjusting indents in: " + sPath);
    var sRaw = fs.readFileSync(sPath, { encoding: 'utf8' });
    var oRoot = parser.parse(sRaw);
    oRoot.childNodes.forEach(function (oNode) {
        processNode(oNode);
    });

    var aContent = oRoot.toString().split('\n');
    var sOutput = "";
    aContent.forEach(function (sLine) {
        sOutput = sOutput + processLine(sLine);
    });
    fs.writeFileSync(sPath, sOutput);
}

function processDirectory(sDir) {
    fs.readdirSync(sDir).forEach(sFile => {
        var sExt = path.extname(sFile);
        if (sExt == ".md") {
            processFile(sDir, sFile);
        }
    });
}

processDirectory("./src/api-explorer/v3-0");
processDirectory("./src/api-explorer/v3-1");
processDirectory("./src/api-explorer/v3-2");
processDirectory("./src/api-explorer/v4-0");
