const fs = require('fs');
const path = require('path');

function processFile(sDir, sFile) {
    var sPath = path.join(sDir, sFile);
    var oRaw = fs.readFileSync(sPath);
    var oContent = JSON.parse(oRaw);

    // Delete unwanted content
    delete oContent.security;
    delete oContent.securityDefinitions;
    if (oContent.hasOwnProperty("components")) {
        delete oContent.components.securitySchemes;
    }

    var sRaw = JSON.stringify(oContent);
    sPath = sPath + "p";
    fs.writeFileSync(sPath, sRaw);

    console.log("Created: " + sPath);
}

function processDirectory(sDir) {
    fs.readdirSync(sDir).forEach(sFile => {
        var sExt = path.extname(sFile);
        if (sExt == ".json") {
            processFile(sDir, sFile);
        }
    });
}

processDirectory("./src/api-explorer/v3-0");
processDirectory("./src/api-explorer/v3-1");
processDirectory("./src/api-explorer/v3-2");
processDirectory("./src/api-explorer/v4-0");

