# 🧪 Testing Guide

This guide explains how to use the enhanced testing features including session control and Allure reporting.

## 🚀 Quick Start

### Interactive Test Runner
```bash
npm run test:interactive
```
This opens an interactive menu where you can choose different test execution options.

## 📋 Available Test Commands

### Basic Test Execution
```bash
# Run all tests (default behavior)
npm run test

# Run only login tests
npm run test:login

# Run tests in headless mode
npm run test:headless
```

### Session Control Options
```bash
# Quit session after each test
npm run test:quit-after

# Keep session alive between tests
npm run test:keep-session
```

### Reporting Options
```bash
# Run tests without Allure report
npm run test:no-allure

# Generate Allure report only
npm run allure:generate

# Open Allure report in browser
npm run allure:open

# Serve Allure report (live updates)
npm run allure:serve
```

### Debug Options
```bash
# Run tests in debug mode
npm run test:debug
```

## 🔧 Session Control

### What is Session Control?
Session control determines how the WebDriver session behaves between tests:

- **Default**: Session terminates after the entire test suite completes
- **Quit After Test**: Session terminates after each individual test
- **Keep Session**: Session remains alive between tests (useful for debugging)

### When to Use Each Option

#### Default Session Behavior
- ✅ **Use for**: Normal test execution
- ✅ **Benefits**: Faster execution, clean state between test runs
- ❌ **Avoid when**: You need to debug specific tests

#### Quit After Each Test
- ✅ **Use for**: Debugging individual tests
- ✅ **Benefits**: Complete isolation between tests, easier debugging
- ❌ **Avoid when**: Running large test suites (slower)

#### Keep Session Alive
- ✅ **Use for**: Debugging multiple tests in sequence
- ✅ **Benefits**: Faster debugging, can inspect app state between tests
- ❌ **Avoid when**: Tests depend on clean app state

## 📊 Allure Reporting

### Automatic Report Generation
Allure reports are automatically generated after test execution unless disabled.

### Report Features
- 📸 **Screenshots**: Automatic screenshots on test failures
- 📝 **Console Logs**: Captured console output
- 🔄 **Step Details**: Detailed test step information
- 📈 **Timeline**: Test execution timeline
- 🏷️ **Tags**: Test categorization and filtering

### Viewing Reports
```bash
# Generate and open report
npm run allure:open

# Serve live report (updates automatically)
npm run allure:serve

# Generate report only
npm run allure:generate
```

### Report Location
- **Results**: `./allure-results/`
- **Report**: `./allure-report/`

## 🐛 Debug Mode

Debug mode provides additional logging and information:
- Enhanced console output
- Detailed error information
- Extended timeouts
- Additional screenshots

## 🔧 Environment Variables

You can control behavior using environment variables:

```bash
# Session control
export QUIT_AFTER_TEST=true
export KEEP_SESSION=true

# Reporting
export GENERATE_ALLURE=false

# Debug
export DEBUG_MODE=true
export TAKE_SCREENSHOTS=true
```

## 📁 File Structure

```
mobile-automation-test-tutorial/
├── config/
│   ├── sessionConfig.js      # Session control configuration
│   └── testData.js          # Test data
├── scripts/
│   └── testRunner.js        # Interactive test runner
├── allure-results/          # Allure test results
├── allure-report/           # Generated Allure reports
└── screenshots/             # Test failure screenshots
```

## 🎯 Best Practices

### For Development
1. Use `npm run test:interactive` for easy test selection
2. Use debug mode when investigating issues
3. Use "quit after test" for isolated debugging

### For CI/CD
1. Use default session behavior for speed
2. Always generate Allure reports
3. Archive screenshots and reports

### For Debugging
1. Use "keep session" to inspect app state
2. Enable debug mode for detailed logging
3. Check Allure reports for detailed failure information

## 🚨 Troubleshooting

### Common Issues

#### Session Control Not Working
- Check that `sessionConfig.js` is properly configured
- Verify environment variables are set correctly

#### Allure Report Not Generated
- Ensure `allure-commandline` is installed globally
- Check that `allure-results` directory exists
- Verify file permissions

#### Tests Failing with Session Errors
- Try using "quit after test" mode
- Check device connectivity
- Restart Appium server

### Getting Help
- Check console output for detailed error messages
- Review Allure reports for test details
- Use debug mode for additional information
