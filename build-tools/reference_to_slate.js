/*
** Copy api-reference content (both markdown and images) to the staging area used by slate.
** Correct image references
*/
const fs = require('fs');
const path = require('path');

const TARGET_MD_DIRECTORY = "./src/Slate-API-Explorer-Reference/slate/source/includes";
const TARGET_IMAGE_DIRECTORY = "./src/Slate-API-Explorer-Reference/slate/source/images";

var imageRegex = /!\[(.*?)\]\((.*?)\)/

function updateImageLinks(sFile, sRelativeDirectory) {
    var sRaw = fs.readFileSync(sFile, { encoding: 'utf8' });
    var aContent = sRaw.split('\n');
    var sOutput = "";
    aContent.forEach(function (sLine) {
        if (sLine.trim().startsWith("!")) {
            var oResult = imageRegex.exec(sLine.trim());
            if (!oResult) {
                console.log("Error, couldn't parse line in: " + sFile);
                console.log("Line:" + sLine);
            } else {
                var sAlt = oResult[1];
                var sImg = oResult[2];
                if (sImg.startsWith("./")) {
                    sImg = sImg.substr(2);
                }
                console.log("Updating image link for: '" + sAlt + "' in: " + sFile);
                var sUpdated = "![" + sAlt + "](" + sRelativeDirectory + "/" + sImg + ")";
                sOutput = sOutput + sUpdated + "\n";
            }
        } else {
            sOutput = sOutput + sLine + "\n";
        }
    });

    fs.writeFileSync(sFile, sOutput);
}

function processDirectory(sDir, sRelativeDirectory) {
    var sTargetDir = path.join(TARGET_MD_DIRECTORY, sRelativeDirectory);
    if (!fs.existsSync(sTargetDir)) {
        fs.mkdirSync(sTargetDir);
    }
    sTargetDir = path.join(TARGET_IMAGE_DIRECTORY, sRelativeDirectory);
    if (!fs.existsSync(sTargetDir)) {
        fs.mkdirSync(sTargetDir);
    }

    fs.readdirSync(sDir, { withFileTypes: true }).forEach(oFile => {
        if (oFile.isDirectory() == true) {
            var subDir = path.join(sDir, oFile.name);
            var subRelative = path.join(sRelativeDirectory, oFile.name);
            processDirectory(subDir, subRelative);
        } else {
            var sExt = path.extname(oFile.name);
            if (sExt == ".md" || sExt == ".markdown") {
                sTargetDir = path.join(TARGET_MD_DIRECTORY, sRelativeDirectory);
                var sSourceFile = path.join(sDir, oFile.name);
                var sTargetFile = path.join(sTargetDir, "_" + oFile.name);
                fs.copyFileSync(sSourceFile, sTargetFile);

                updateImageLinks(sTargetFile, sRelativeDirectory);
            } else if (sExt == ".png" || sExt == ".jpg") {
                sTargetDir = path.join(TARGET_IMAGE_DIRECTORY, sRelativeDirectory);
                var sSourceFile = path.join(sDir, oFile.name);
                var sTargetFile = path.join(sTargetDir, oFile.name);
                fs.copyFileSync(sSourceFile, sTargetFile);
            }
        }
    });
}

aContent = [
    'authentication', 'ess', 'travel', 'budget', 'expense', 'locate', 'travel-profile',
    'callouts', 'financial-integration', 'notifications', 'travel-receipts', 'cash-advance',
    'profile', 'user', 'common', 'image', 'realtime-location-ingest', 'user-provisioning',
    'receipts', 'detokenizer', 'insights', 'request', 'direct-connects', 'invoice'
];

aContent.forEach(sDirectory => {
    sPath = path.join("./src/api-reference", sDirectory);
    processDirectory(sPath, sDirectory);
});
