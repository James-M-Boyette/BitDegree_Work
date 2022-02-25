// 6.3, "Installing MongoDB"

// STEP 1: "Installing MongoDB": Navigate to Mongo's installation instructions portal: https://docs.mongodb.com/manual/administration/install-community/

// STEP 2: Choose your OS, and read the corrisponding instructions. 

// STEP 3: Be on the look-out for steps under the heading "Install MongoDB Community Edition". Follow the link to the download center (https://www.mongodb.com/try/download/community) and download the MongoDB installer file

// STEP 4: Install MongoDB (and Compass) using the installer you've just downloaded. When prompted to choose a path for your data(base), you can either 1) set your storage folder to be on a secondary hard drive,, or) 2) in your main drive's root directory, or 3) in your MongoDB's program folder. Since the decision will matter much-more later-on (based on some security and privacy concerns etc) in your dev career, keep what the installer suggests (in windows, for instance, likely in MongoDB's program folder: C:\Program Files\MongoDB\Server\5.0\data\db). 

// STEP 5: (If you have not already done-so, start your command line with admin privilages and) Set your database path using (for Windows) "C:\Program Files\MongoDB\Server\5.0\bin\mongod.exe" --dbpath="C:\Program Files\MongoDB\Server\5.0\data\db" (including double-quotes) in your cmd. Note: you will need to change --dbpath if you want your database to be stored in the root directory or on another drive, partition etc

// STEP 6: "Installing Mongo Shell/mongosh": go to mongo shell's instruction page (https://docs.mongodb.com/mongodb-shell/) and read the instructions. Download the .msi installer for the shell from https://www.mongodb.com/try/download/shell

// STEP 7: Run the .msi. Note: don't install it "just for you" - doing so will install to your computer's appdata folder. Instead, untick the box - this will install the shell to a folder in the same directory as MongoDB (for instance, in Windows, C:\Program Files\mongosh)

// STEP 8: Test your paths by running (in your admin console) mongosh --version & mongo --version. If you get an error for either (or both) saying that it is not a recognized as a command, you will need to set/update your computer's environment variables to include a system path to mongo.exe (or monosh.exe). Follow the instructions on https://docs.mongodb.com/mongodb-shell/install/#std-label-mdb-shell-install - specifically step #4 of "Install from .zip file" - and save paths to the containing folders (for instance, C:\Program Files\MongoDB\Server\5.0\bin\ or C:\Program Files\mongosh\ on a windows machine)

// STEP 9: Re-try your console commands to see versions of both mongo database, and mongo shell

// STEP 10: If you are still unable to get the versions of these programs returned in your command console, review the steps on mongodb's tutorial pages carefully to make certain that you have not missed any steps.

// STEP 11: "Connect to database using Compass": start compas, and enter mongodb://localhost:27017. You should see databases like "admin" "config" and "local"

// unclear if we need the following ...

// Start the mongodb daemon by running C:\mongodb\bin\mongod.exe in the Command Prompt. Or by running, C:\path\to\mongodb\bin\mongod.exe

// Connect to MongoDB using the Mongo shell While the MongoDB daemon is running, from a different Command prompt window run C:\mongodb\bin\mongo.exe