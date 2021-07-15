const fs = require('fs');
const path = require('path');

const TARGET_IMAGE_DIRECTORY = "./src/Slate-API-Explorer-Reference/slate/source/images";

function processDirectory(sDir, sDirname, sRelativePath) {
    fs.readdirSync(sDir).forEach(sFile => {
        var sExt = path.extname(sFile);
        if (sExt == ".png" || sExt == ".PNG" || sExt == ".ico") {
            var sSourceFile = path.join(sDir, sFile);
            var sTargetFile = path.join(TARGET_IMAGE_DIRECTORY, sFile);
            // Create target directory.
            if (!fs.existsSync(TARGET_IMAGE_DIRECTORY)) {
                fs.mkdirSync(TARGET_IMAGE_DIRECTORY);
            }
            fs.copyFileSync(sSourceFile, sTargetFile);
        }
    });
}

aContent = [
    'images'
];

aContent.forEach(sDirectory => {
    sPath = path.join("./src/site-src", sDirectory);
    processDirectory(sPath, sDirectory);
});
