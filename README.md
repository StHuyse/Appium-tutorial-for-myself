# STEP-BY-STEP GUIDE TO SETTING UP AN AUTOMATION PROJECT
0. Download and install IDE: VS code, make sure you downloaded and setup nodejs, npm(search google for more information :D). Check node and npm version

bash:

    node -v

    npm -v

If they are not installed, download and install Node.js from the official Node.js website.

1. Init a simple nodejs project:

- Create a Project Directory: Create a new folder for your project and navigate into it using your terminal or command prompt

Bash:

    mkdir name-of-your-node-app

    cd name-of-your-node-app

- Initialize the project with npm: Use the npm init command to create a package.json file, which will store your project's metadata and dependencies.

Bash: 

    npm init

You will be prompted to enter information about your project, such as package name, version, description, entry point, test command, git repository, keywords, author, and license. You can press Enter to accept the default values for most of these or provide your own.

(Optional)Alternatively, to quickly create a package.json with default values, you can use:

Bash:

    npm init -y

The -y flag accepts all default options.

- Create the Main Application File: Create your main application file, typically named index.js or app.js, within your project directory. This file will contain your Node.js code.

Bash:

    touch index.js

- Add Sample Code (Optional): Open index.js in your preferred code editor and add some basic Node.js code to verify the setup. For example, a simple "Hello, World!" message:

Bash:

    // index.js
    console.log("Hello, Node.js!");

- Run Application: Execute Node.js application from the terminal using the "node" command followed by the name of your main application file.

Bash:

    node index.js

This will run your index.js file, and you should see the "Hello, Node.js!" output in your terminal.

Your simple Node.js project is now initialized and ready for development. You can now install external packages using npm install "package-name" and build out application logic.

2. Install library for WebdriverIO(download all dependencies needed)

- Install the WebdriverIO CLI: The recommended way to set up WebdriverIO is by using its command-line interface (CLI) tool. This tool simplifies the installation and configuration process.(node_modules created, it's quite heavy by the time :D)

Bash:

    npm init wdio@latest

This command downloads the WebdriverIO CLI and launches a configuration wizard, which will guide you through setting up your project, including choosing test frameworks, reporters, and services. 

(Optional) You can also pass "--yes" to accept default options for a quick setup.

- If you want to install manually, let:

(Optional) Alternatively, you can manually install the WebdriverIO CLI package using:

Bash:

    npm i --save-dev @wdio/cli

Beside, you can manually install the WebdriverIO package using:

Bash: 

    npm i webdriverio --save

you can manually install the @wdio/local-runner using:

Bash: 

    npm i @wdio/local-runner

you can manually install the @wdio/sync using(but if your node version is >=16, don't do this step and you can replace this step by using async functions in your src):

Bash: 

    npm i @wdio/sync --save-dev

you can manually install the @wdio/mocha-framework using:

Bash: 

        npm i @wdio/mocha-framework


After installing the CLI, you can then run the configuration wizard:

Bash:

    npx wdio config



