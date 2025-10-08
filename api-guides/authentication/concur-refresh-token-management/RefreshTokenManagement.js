/** 
 * Tutorial 2 - Token Management
 * =============================
 * 
 * Purpose: Adds refresh token management automation to the previous tutorial using an external json file.
 * 
 * 
 * Method: Uses timestamps and a json file to manage refresh token expiration.
 * 
 * 
 * Required:
 * - SAP Concur instance credentials
 * - NodeJs
 * 
 * 
 * This app uses your credentials to access APIs using the following flow:
 * - Company Request Token -> Refresh token
 *
 *  
 * Company Request Token -> Refresh token:
 * 1. Company Request Token:
 *  - Generate your company request token using the Concur Admin Panel.
 *    - Used to generate a refresh token.
 *    - Token lifetime = 24 hours.
 *    - Multiple use.
 * 
 * 2. Refresh token:
 *  - Generate a refresh token using this app.
 *    - Used to generate a bearer token.
 *    - Token lifetime = 6 months.
 *    - Multiple use.
 * 
 * 
 * Procedure:
 * 1. Login to your Concur admin panel at https://www.concursolutions.com/nui/ocstool
 * 2. Click "Create new app"
 * 3. Fill in all of the required fields and add all of the grants and scopes you have access to.
 * 4. Go to your Concur Admin panel at https://www.concursolutions.com/nui/authadmin/companytokens
 * 5. Generate your Company Request Token using your App ID.
 * 6. Copy/paste the Company UUID and Company Request Token fields to a text file.
 * 7. Run the app to generate the credentials.json file.
 * 8. Fill in the empty fields in this file with your credentials.
 * 9. Run the app again. The app will call the Oauth2 /token endpoint using your credentials.
 * 
 * 
 * Check Debug Output (Without a refresh token):
 * 1. Your credentials are transferred from the JSON file to the credentials object. 
 * 2. A validity check on the credentials object is performed.
 * 3. If the validity check is successful the company request token in the credentialsObject is used to make an API call to get the refresh token.
 * 4. If the API call is successful, the refresh token data is converted from JSON format into a refresh token object.
 * 5. The refresh token object is stored in the file refreshTokenObjectFile.json.
 * 
 * 
 * Check Debug Output (While refresh token is valid):
 * 1. Your credentials are transferred from the JSON file to the credentials object. 
 * 2. A validity check on the credentials object is performed.
 * 3. If the validity check is successful, the refresh token is loaded from the file refreshTokenObjectFile.json and converted into a refresh token object.
 * 4. A validity check on the refresh token object is performed.
 * 5. If the validity check is successful, the refresh token in the refresh token object can be used to make an API call to get a bearer token.
 * 
 * 
 * */   

/**
 * This code imports several Node.js modules: 'https', 'querystring', 'util', 'fs', and 'path'.
 * It then creates constants 'credentialsFileName' and 'refreshTokenObjectFileName' with some predefined filenames.
 * It then creates constants 'savedCredentialsPathFileName' and 'savedRefreshTokenObjectPathFileName' using the 'path' module to determine the absolute paths to the respective files in the current directory (using the '__dirname' variable). The resulting paths are logged to the console. 
 * Several variables are declared with initial empty values: 'refreshTokenObject', 'refreshToken', 'dataRetrieved', 'credentialsObject', 'refreshTokenExpiresInTimestamp', 'refreshTokenExpiresInDate'. 
 * The 'credentialsObject' is an object with some key-value pairs used for authentication, including the 'appID', 'clientSecret', 'grantType', 'companyUUID', 'companyRequestToken', and 'credentialType'. 
 */
const https = require('https');
const querystring = require('querystring');
const util = require('util');
const fs = require('fs');
const path = require('path');

const credentialsFileName = "credentials.json";
const savedCredentialsPathFileName = path.resolve(__dirname, credentialsFileName);
const refreshTokenObjectFileName = "refreshTokenObjectFile.json";
const savedRefreshTokenObjectPathFileName = path.resolve(__dirname, refreshTokenObjectFileName);
console.log(savedCredentialsPathFileName);
console.log(savedRefreshTokenObjectPathFileName);

let refreshTokenObject = '';
let refreshToken = '';
let dataRetrieved = '';
let credentialsObject = {
  appID: "",
  clientSecret: "",
  grantType: "password",
  companyUUID: "",
  companyRequestToken: "",
  credentialType: "authtoken"
};
let refreshTokenExpiresInTimestamp = 0;
let refreshTokenExpiresInDate = '';

/**
 * This function reads a saved credentials file, represented by the savedCredentialsPathFileName variable, using the Node.js fs module's readFile() method with the encoding type of UTF-8. If the file is successfully read, it attempts to parse the JSON data contained in the file into an object. If the parsing succeeds, it checks to see if the appID property of the resulting object is blank; if it is not, it then calls another function, readRefreshTokenObjectFile(), to continue the authentication process. If the appID property is indeed blank, an error message is printed to the console indicating that the credentials are invalid.
 * If there are errors with reading or parsing the saved credentials file, their respective error messages are printed to the console and then the function returns. If there were issues reading the saved credentials file, then a new credentials file containing a default credentialsObject is saved.
 */
function readCredentialsFile() {
  fs.readFile(savedCredentialsPathFileName, "utf8", (err, jsonString) => {
    if (err) {
      console.log("Error reading file from disk:", err);
      console.log("No credentials found.");
      writeCredentialsFile(credentialsObject, savedCredentialsPathFileName);
      return;
    }
    try {
      credentialsObject = JSON.parse(jsonString);
      console.log("credentialsObject Object: ");
      console.log(util.inspect(credentialsObject, { showHidden: false, depth: null, colors: true }));
      if (credentialsObject.appID != "") {
        console.log("Credentials object is valid. Checking for refresh token.");
        readRefreshTokenObjectFile();
      }
      else {
        console.log("Invalid credentials object. Please fill in all required fields in credentials.json");
      }
      
    } catch (err) {
      console.log("Error parsing JSON string:", err);
      writeCredentialsFile(credentialsObject, savedCredentialsPathFileName);
      return;
    }
  });
}

/**
 * This function writeCredentialsFile is responsible for writing a credentialsObject in a JSON file with the path and name provided in the savedCredentialsPathFileName argument. 
 * The credentialsObject is converted to JSON format using the JSON.stringify method and assigned to jsonString. 
 * The fs.writeFile method is then called to create the file with the savedCredentialsPathFileName, using the jsonString. This method takes a callback function which will either log an error message if there was an error writing the file, or a success message if the file was written successfully. 
 * If the file is written successfully, two several logs is printed to the console: a success message and the credentials object template.
 */
function writeCredentialsFile(credentialsObject, savedCredentialsPathFileName) {
  console.log("Attempting to create new credentials.json file.");
  const jsonString = JSON.stringify(credentialsObject);
  fs.writeFile(savedCredentialsPathFileName, jsonString, err => {
    if (err) {
      console.log('Error writing file', err);
    } else {
      console.log('Successfully wrote credentials.json file to the app folder using the credentials object template.');
      console.log("Add your credentials to this file and run the app again.");
      console.log("credentialsObject Object: ");
      console.log(util.inspect(credentialsObject, { showHidden: false, depth: null, colors: true }));
    }
  });
}

/**
 * This code defines a function called getAuthTokenAuthKey() that is used to retrieve a refresh token by sending a POST request to an endpoint using the AuthTokenAuthKey flow.
 * The function first logs a message to the console indicating that it is attempting to retrieve a refresh token using the AuthTokenAuthKey flow. 
 * Then, it creates a variable called postData that stores an object containing several key-value pairs representing the required form data parameters to be sent in the POST request. 
 * After that, the code creates a variable called options that contains the details for the HTTPS request, including hostname, method (POST), endpoint path, and request headers.
 * The code then creates a request object using the https.request() method and provides a callback function that handles the response of the request object. The callback function logs the status code of the response, parses the returned data, stores the refresh token object, and writes it to a new file.
 * The code also includes error-handling functions for the request and response objects.
 * Finally, the function calls the request object's write() method to send the POST request with the form data and calls the end() method to complete the request.
 */
function getAuthTokenAuthKey() {
  console.log("Getting refresh token using AuthTokenAuthKey flow");
  
  // form data
  var postData = querystring.stringify({
    client_id: credentialsObject.appID,
    client_secret: credentialsObject.clientSecret,
    grant_type: credentialsObject.grantType,
    username: credentialsObject.companyUUID,
    password: credentialsObject.companyRequestToken,
    credtype: credentialsObject.credentialType
  });
  
  // request option
  var options = {
    host: 'us.api.concursolutions.com',
    method: 'POST',
    path: '/oauth2/v0/token',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': postData.length
    }
  };

  // request object
  var req = https.request(options, res => {
    var result = '';
    var users = '';
    res.on('data', function (chunk) {
      result += chunk;
    });
    res.on('end', function () {
      console.log("Status code = " + res.statusCode)
      dataRetrieved = JSON.parse(result);

      // Store this refresh token. Use this refresh token to call APIs.
      refreshTokenObject = dataRetrieved
      refreshToken = refreshTokenObject.refresh_token;
      refreshTokenObject.companyUUID = credentialsObject.companyUUID;

      console.log("Company UUID = " + refreshTokenObject.companyUUID);
      console.log("Refresh Token Object: ");
      console.log(util.inspect(refreshTokenObject, { showHidden: false, depth: null, colors: true }));

      if (res.statusCode == 200) {
        console.log("Success - Refresh token received.")
        writeRefreshTokenObjectFile();
      }
      else {
        console.log("Authentication Error. Please correct.");
      }
    });
    res.on('error', function (err) {
      console.log(err);
    })
  });

  // request error
  req.on('error', function (err) {
    console.log(err);
  });
  
  //send request with the postData form
  req.write(postData);
  req.end();
}

/**
 * This function reads a refresh token object from a file. It first reads the file using the fs module's readFile function, passing in the path and file name of the file to be read, and specifying the encoding format as "utf8". It takes a callback function with parameters for any errors encountered and the string data read from the file.
 * If an error is encountered, it logs the error message and a message indicating that no stored refresh token was found. It then calls the function getAuthTokenAuthKey() and returns.
 * If the file is successfully read, it tries to parse the JSON string data read from the file using JSON.parse(). The resulting JSON object is stored in a variable named refreshTokenObject. The function then adds a companyUUID property to the object using a value from another object named credentialsObject.
 * It logs a message indicating the Company UUID value and the refresh token object, then prints the refresh token object using util.inspect() to display the object in a more readable format. Finally, it calls another function named checkDateAndTime().
 * If there is an error parsing the JSON string data, it logs the error message, calls getAuthTokenAuthKey() and returns. 
 */
function readRefreshTokenObjectFile() {
  fs.readFile(savedRefreshTokenObjectPathFileName, "utf8", (err, jsonString) => {
    if (err) {
      console.log("Error reading file from disk:", err);
      console.log("No stored refresh token found.");
      getAuthTokenAuthKey();
      return;
    }
    try {
      refreshTokenObject = JSON.parse(jsonString);
      refreshTokenObject.companyUUID = credentialsObject.companyUUID;

      console.log("Company UUID = " + refreshTokenObject.companyUUID);
      console.log("Refresh Token Object: ");
      console.log(util.inspect(refreshTokenObject, { showHidden: false, depth: null, colors: true }));
      
      checkDateAndTime();
    } catch (err) {
      console.log("Error parsing JSON string:", err);
      getAuthTokenAuthKey();
      return;
    }
  });
}

/**
 * This function writeRefreshTokenObjectFile() writes a JSON object refreshTokenObject to a file at a specified path and file name savedRefreshTokenObjectPathFileName. 
 * It first converts the object to a JSON string using JSON.stringify(refreshTokenObject).
 * It then uses the fs.writeFile() method to write the string to the file. If there is an error during the writing process, it logs the error to the console. If there is no error, it logs a message that the file was successfully written. 
 */
function writeRefreshTokenObjectFile() {
  const jsonString = JSON.stringify(refreshTokenObject);
  fs.writeFile(savedRefreshTokenObjectPathFileName, jsonString, (err) => {
      if (err) {
        console.log('Error writing file', err);
      } else {
        console.log('Successfully wrote file');
      }
  });
}

/**
 * This function checkDateAndTime() is used to verify the expiration of a refresh token. It starts by retrieving the refresh token expiration Unix timestamp from a refreshTokenObject object. 
 * A new Date object is created using this Unix timestamp, and the Unix timestamp is logged to the console. 
 * The Unix timestamp is multiplied by 1000 which converts the timestamp to milliseconds as a date object, and then this date object is converted to a local date string, which is then logged to the console.
 * Next, the current date and time are obtained by creating a new Date object, and then is converted to a local date string, which is also printed to the console.
 * Subtracting the expiration date from the current date and time gives the remaining time until the refresh token expires, in milliseconds. This time is printed to the console.
 * The checkForRefreshTokenDateExpiry function is also called within checkDateAndTime() with the refreshTokenTimestampConvertedToDate and currentDate as arguments. The purpose of this function is not shown within the code snippet provided.
 * Finally, a message is logged to the console indicating that execution of the checkDateAndTime() function has ended. 
 * Overall, this function is used to monitor the expiration date of a refresh token, calculate the remaining time until it expires, and call another function with the relevant arguments.
 */
function checkDateAndTime() {
  refreshTokenExpiresInTimestamp = refreshTokenObject.refresh_expires_in;
  const dateInUNIXtimestamp = new Date(refreshTokenExpiresInTimestamp);
  console.log("refresh_expires_in Timestamp = " + dateInUNIXtimestamp.getTime());

  // Multiplied by 1,000 to transform timestamp to milliseconds as a date.
  const refreshTokenTimestampConvertedToDate = new Date(refreshTokenExpiresInTimestamp * 1000);
  
  refreshTokenExpiresInDate = refreshTokenTimestampConvertedToDate.toLocaleDateString("en-US");
  console.log("Refresh token expires on " + refreshTokenExpiresInDate);
  console.log("Refresh token expires on " + refreshTokenTimestampConvertedToDate);

  const currentDate = new Date();
  const currentDateConvertedToLocale = currentDate.toLocaleDateString("en-US");
  console.log("currentDate = " + currentDate);
  console.log("currentDateConvertedToLocale = " + currentDateConvertedToLocale);

  const refreshTokenTimeRemainingInMilliseconds = refreshTokenTimestampConvertedToDate - currentDate;
  console.log("Refresh token expires in " + refreshTokenTimeRemainingInMilliseconds + " milliseconds.");

  console.log("End checkDateAndTime.");

  checkForRefreshTokenDateExpiry(refreshTokenTimestampConvertedToDate, currentDate);
}

/**
 * The code defines a function named checkForRefreshTokenDateExpiry that takes two date parameters (date1 and date2). 
 * If date1 is greater than date2, the function logs the message "Refresh token is valid. Using existing token to make API Calls." to the console.
 * If date1 is not greater than date2, the function logs the message "Refresh token is invalid. Getting a new refresh token." to the console and then calls another function named getAuthTokenAuthKey(). This function is responsible for fetching a new authorization token.
 * After either of those two cases, the function outputs "End checkForRefreshTokenDateExpiry." to the console.
 */
function checkForRefreshTokenDateExpiry(date1, date2) {
    if(date1 > date2){
      console.log("Refresh token is valid. Using existing token to make API Calls.");
    } else {
      console.log("Refresh token is invalid. Getting a new refresh token.");
      getAuthTokenAuthKey();
    }
  console.log("End checkForRefreshTokenDateExpiry.");
}

// Starts App
readCredentialsFile();