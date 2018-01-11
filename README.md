# Cryptoz

## Install tools
If you don’t have any of these tools installed already, you will need to:

Download and install git

Download and install nodejs https://nodejs.org

## Install dependencies

run `npm install`

run `npm install -g bower`

run `npm install -g gulp`

This will setup a working copy of Cryptoz on your local machine

## Running local copy
To run local copy in development mode, execute:

run `gulp serve`
This script should automatically open template in your default browser.

To run local copy in production mode, execute:

run `gulp serve:dist`

## Create production folder

Clear previous build
run `gulp clean`

Create build
run `gulp build`

All necessary files will be generated into the **cryptoz-production** folder
