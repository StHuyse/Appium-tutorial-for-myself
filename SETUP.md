# Mobile Automation Test Setup Guide

This project is set up for mobile automation testing using Appium, WebdriverIO, Mocha, and Babel.

## Prerequisites

1. **Node.js** (version 16 or higher)
   ```bash
   node -v
   npm -v
   ```

2. **Android Studio** with Android SDK
3. **Java Development Kit (JDK)** 8 or higher
4. **Appium Server** (installed globally or locally)

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Install Appium globally (if not already installed):**
   ```bash
   npm install -g appium
   ```

3. **Install Appium drivers:**
   ```bash
   appium driver install uiautomator2
   ```

## Project Structure

```
mobile-automation-test-tutorial/
├── apps/                          # APK files
│   └── Fire_Social_Media.apk
├── config/                        # Configuration files
│   └── testData.js
├── pages/                         # Page Object Model
│   ├── BasePage.js
│   └── login_page.js
├── test/                          # Test files
│   ├── setup.js
│   └── specs/
│       └── login.test.js
├── utils/                         # Utility functions
│   ├── driver.js
│   ├── helper.js
│   └── writeText.js
├── screenshots/                   # Test screenshots
├── allure-results/               # Allure test reports
├── babel.config.js               # Babel configuration
├── wdio.conf.js                  # WebdriverIO configuration
└── package.json
```

## Configuration

### 1. Device Setup
- Connect your Android device via USB
- Enable USB Debugging
- Verify device connection:
  ```bash
  adb devices
  ```

### 2. Appium Configuration
The project is configured to use:
- **Platform**: Android
- **Automation Name**: UiAutomator2
- **App Package**: com.minhtu.firesocialmedia
- **App Activity**: com.minhtu.firesocialmedia.android.MainActivity

### 3. Test Data
Test credentials are stored in `config/testData.js`:
```javascript
export const testData = {
  validUser: {
    email: 'khua01@gmail.com',
    password: '123456'
  }
};
```

## Running Tests

### 1. Start Appium Server
```bash
npm run appium:start
```

### 2. Run All Tests
```bash
npm test
```

### 3. Run Specific Test
```bash
npm run test:login
```

### 4. Check Appium Installation
```bash
npm run appium:doctor
```

## Test Execution

1. **Start Appium Server** in one terminal
2. **Run tests** in another terminal
3. **View results** in the terminal and Allure reports

## Troubleshooting

### Common Issues:

1. **Device not detected:**
   - Check USB debugging is enabled
   - Run `adb devices` to verify connection

2. **Appium connection issues:**
   - Ensure Appium server is running on port 4723
   - Check device is connected and authorized

3. **Test failures:**
   - Check screenshots in `./screenshots/` directory
   - Verify app package and activity names
   - Check element selectors in page objects

### Debug Mode:
Add `--headless` flag to run tests without UI:
```bash
npm run test:headless
```

## Page Object Model

The project uses Page Object Model pattern:
- `BasePage.js`: Common functionality for all pages
- `login_page.js`: Login page specific elements and methods

## Reports

- **Console**: Real-time test execution logs
- **Allure**: Detailed HTML reports in `allure-results/` directory
- **Screenshots**: Captured on test failures in `screenshots/` directory

## Next Steps

1. Add more test cases
2. Implement additional page objects
3. Add data-driven testing
4. Integrate with CI/CD pipeline
5. Add cross-platform testing (iOS)
