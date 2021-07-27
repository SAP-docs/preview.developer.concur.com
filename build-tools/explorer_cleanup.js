/*
** This script is used to fix indentation in the api-explorer section.
** This is needed because the source markdown uses header levels which do not
** fit nicely into the auto-generated table of content side bar.
*/
const fs = require('fs');
const path = require('path');

var bFirstH1;

function processHTMLHeader(sLine, iHeader) {
    var sHeader = "h" + iHeader;
    if ((sLine.indexOf("<" + sHeader) >= 0) && (sLine.indexOf(sHeader + ">") > 0)) {
        var iNewHeader;
        if (iHeader == 1 && bFirstH1 == true) {
            // First H1 is the title, only indent one.
            iNewHeader = iHeader + 1;
            bFirstH1 = false;
        } else {
            iNewHeader = iHeader + 2;
        }
        var sNewHeader = "h" + iNewHeader
        var oRegex = new RegExp(sHeader, 'g')
        sLine = sLine.replace(oRegex, sNewHeader);
    }
    return sLine;
}

function processHTMLHeaders(sLine) {
    for (var i = 6; i >= 1; i--) {
        sLine = processHTMLHeader(sLine, i);
    }
    return sLine;
}

function processLine(sLine) {
    // Adjust HTML headers
    sLine = processHTMLHeaders(sLine);

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

    bFirstH1 = true;
    var aContent = sRaw.split('\n');
    var sOutput = "";
    aContent.forEach(function (sLine) {
        sOutput = sOutput + processLine(sLine);
    });
    fs.writeFileSync(sPath, sOutput);
}

function createVersionFile(sDir) {
    var sHeader = path.basename(sDir);
    var sPath = path.join(sDir, "VersionHeader.md");
    sOutput = "# Version " + sHeader + "\n";
    fs.writeFileSync(sPath, sOutput);
}

function processDirectory(sDir) {
    createVersionFile(sDir);

    fs.readdirSync(sDir).forEach(sFile => {
        var sExt = path.extname(sFile);
        if (sExt == ".md") {
            processFile(sDir, sFile);
        }
    });
}

processDirectory("src/Slate-API-Explorer-Reference/slate/source/includes/3.0")
processDirectory("src/Slate-API-Explorer-Reference/slate/source/includes/3.1")
processDirectory("src/Slate-API-Explorer-Reference/slate/source/includes/3.2")
processDirectory("src/Slate-API-Explorer-Reference/slate/source/includes/4.0")
