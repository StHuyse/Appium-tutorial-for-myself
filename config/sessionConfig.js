const mode = process.env.TEST_MODE || 'regression';

export const sessionConfig = {
  mode,

  // Single source of truth
  keepSession: mode === 'e2e',
  quitAfterTest: mode === 'regression',

  generateAllureReport: process.env.GENERATE_ALLURE !== 'false',
  allureResultsDir: './allure-results',
  allureReportDir: './allure-report',

  maxRetries: process.env.MAX_RETRIES || 2,
  timeout: process.env.TEST_TIMEOUT || 60000,

  debugMode: process.env.DEBUG_MODE === 'true',
  takeScreenshots: process.env.TAKE_SCREENSHOTS !== 'false'
};

// Helper function to get session control message
export function getSessionControlMessage() {
  if (sessionConfig.quitAfterTest) {
    return "Session will be terminated after each test";
  } else if (sessionConfig.keepSession) {
    return "Session will be kept alive between tests";
  } else {
    return "Default session behavior (terminate after test suite)";
  }
}
