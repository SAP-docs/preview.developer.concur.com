const fs = require('fs');
const path = require('path');

const TARGET_MD_DIRECTORY = "./src/Slate-API-Explorer-Reference/slate/source/includes";
const TARGET_IMAGE_DIRECTORY = "./src/Slate-API-Explorer-Reference/slate/source/images";

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
