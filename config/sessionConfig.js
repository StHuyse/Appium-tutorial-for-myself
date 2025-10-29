export const sessionConfig = {
  // Session control options
  quitAfterTest: process.env.QUIT_AFTER_TEST === 'true' || false,
  keepSession: process.env.KEEP_SESSION === 'true' || false,
  
  // Allure report configuration
  generateAllureReport: process.env.GENERATE_ALLURE === 'true' || true,
  allureResultsDir: './allure-results',
  allureReportDir: './allure-report',
  
  // Test execution options
  maxRetries: process.env.MAX_RETRIES || 2,
  timeout: process.env.TEST_TIMEOUT || 60000,
  
  // Debug options
  debugMode: process.env.DEBUG_MODE === 'true' || false,
  takeScreenshots: process.env.TAKE_SCREENSHOTS === 'true' || true
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
