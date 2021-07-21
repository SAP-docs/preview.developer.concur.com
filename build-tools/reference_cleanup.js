/*
** Post-processing of the markdown in the staging area, specifically for api-reference.
** Convert headers such as:
** ---
** title: Authentication
** layout: reference
** ---
** to
** # Authentication
**
** Adjust indents to work with the table of contents
** Create a markdown file in each new directory with a section name (for table of contents)
*/
const fs = require('fs');
const path = require('path');
const parser = require('node-html-parser');

var aIgnored = [];
var headerRegex = /---[\s\S]title: (.*?)[\s\S]layout: reference[\s\S]([.|\s|\S]*?)---/

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

function processLine(sLine, sTitle) {
    // Adjust markdown lines.
    if (sLine.startsWith("# ") ||
        sLine.startsWith("## ") ||//&& !sLine.startsWith("## " + sTitle)) ||
        sLine.startsWith("### ")) {
        return "#" + sLine + "\n";
    }
    return sLine + "\n";
}

function processFile(sDir, sFile) {

    var sPath = path.join(sDir, sFile);
    var sRaw = fs.readFileSync(sPath, { encoding: 'utf8' });

    // Step 1: Replace markdown header with simple title
    var oResult = headerRegex.exec(sRaw);
    var sTitle;
    if (!oResult) {
        console.log("No matching header in: " + sPath);
    } else {
        sTitle = oResult[1];
        sRaw = sRaw.replace(headerRegex, "# " + sTitle);
    }

    // Step 2, massage html headers
    var oRoot = parser.parse(sRaw);
    oRoot.childNodes.forEach(function (oNode) {
        processNode(oNode);
    });

    // Step 3, massage markdown headers
    var aContent = oRoot.toString().split('\n');
    var sOutput = "";
    aContent.forEach(function (sLine) {
        sOutput = sOutput + processLine(sLine, sTitle);
    });

    fs.writeFileSync(sPath, sOutput);
}

function createHeaderFile(sDir) {
    var sHeader = path.basename(sDir).toUpperCase();
    var sPath = path.join(sDir, "SectionHeader.md");
    sOutput = "#" + sHeader + "\n";
    fs.writeFileSync(sPath, sOutput);
}

function processDirectory(sDir) {
    if (aIgnored.includes(sDir)) {
        console.log("Ignoring: " + sDir)
        return;
    }

    fs.readdirSync(sDir, { withFileTypes: true }).forEach(oFile => {
        if (oFile.isDirectory() == true) {
            var subDir = path.join(sDir, oFile.name);
            processDirectory(subDir);
        } else {
            var sExt = path.extname(oFile.name);
            if (sExt == ".md" || sExt == ".markdown") {
                processFile(sDir, oFile.name);
            }
        }
    });

    createHeaderFile(sDir);
}

function excludeDirectory(sDir) {
    aIgnored.push(sDir);
}

// Only processing api-reference, not api-explorer which has already been adjusted
excludeDirectory("src/Slate-API-Explorer-Reference/slate/source/includes/3.0")
excludeDirectory("src/Slate-API-Explorer-Reference/slate/source/includes/3.1")
excludeDirectory("src/Slate-API-Explorer-Reference/slate/source/includes/3.2")
excludeDirectory("src/Slate-API-Explorer-Reference/slate/source/includes/4.0")

processDirectory("src/Slate-API-Explorer-Reference/slate/source/includes");
