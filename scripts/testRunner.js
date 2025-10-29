#!/usr/bin/env node

const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🚀 Mobile Automation Test Runner');
console.log('================================\n');
//syntax Promise
// if (window.Promise) { // Check if the browser supports Promises
//   var promise = new Promise(function(resolve, reject) {
//     //asynchronous code goes here
//   });
// }
function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function runTests() {
  console.log('📋 Test Options:');
  console.log('1. Run all tests (default session behavior)');
  console.log('2. Run all tests (quit after each test)');
  console.log('3. Run all tests (keep session alive)');
  console.log('4. Run login tests only');
  console.log('5. Run tests without Allure report');
  console.log('6. Run tests in debug mode');
  console.log('7. Generate Allure report only');
  console.log('8. Open Allure report');
  console.log('9. Exit\n');

  const choice = await askQuestion('Select an option (1-9): ');

  switch (choice) {
    case '1':
      console.log('\n🔄 Running all tests with default session behavior...\n');
      execSync('npm run test', { stdio: 'inherit' });
      break;
    
    case '2':
      console.log('\n⚠️  Running all tests (will quit after each test)...\n');
      execSync('npm run test:quit-after', { stdio: 'inherit' });
      break;
    
    case '3':
      console.log('\n🔄 Running all tests (keeping session alive)...\n');
      execSync('npm run test:keep-session', { stdio: 'inherit' });
      break;
    
    case '4':
      console.log('\n🔐 Running login tests only...\n');
      execSync('npm run test:login', { stdio: 'inherit' });
      break;
    
    case '5':
      console.log('\n📊 Running tests without Allure report...\n');
      execSync('npm run test:no-allure', { stdio: 'inherit' });
      break;
    
    case '6':
      console.log('\n🐛 Running tests in debug mode...\n');
      execSync('npm run test:debug', { stdio: 'inherit' });
      break;
    
    case '7':
      console.log('\n📊 Generating Allure report...\n');
      execSync('npm run allure:generate', { stdio: 'inherit' });
      break;
    
    case '8':
      console.log('\n🌐 Opening Allure report...\n');
      execSync('npm run allure:open', { stdio: 'inherit' });
      break;
    
    case '9':
      console.log('\n👋 Goodbye!');
      rl.close();
      return;
    
    default:
      console.log('\n❌ Invalid option. Please try again.\n');
      await runTests();
      return;
  }

  console.log('\n✅ Operation completed!');
  const continueChoice = await askQuestion('\nWould you like to run another test? (y/n): ');
  
  if (continueChoice.toLowerCase() === 'y' || continueChoice.toLowerCase() === 'yes') {
    console.log('\n');
    await runTests();
  } else {
    console.log('\n👋 Goodbye!');
    rl.close();
  }
}

// Handle Ctrl+C gracefully
process.on('SIGINT', () => {
  console.log('\n\n👋 Goodbye!');
  rl.close();
  process.exit(0);
});

runTests().catch(console.error);
