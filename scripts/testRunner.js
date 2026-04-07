#!/usr/bin/env node

import { execSync } from 'child_process';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(answer));
  });
}

function runCommand(command, env = {}) {
  execSync(command, {
    stdio: 'inherit',
    env: { ...process.env, ...env }
  });
}

async function runTests() {
  console.log('Mobile Automation Test Runner');
  console.log('================================\n');

  console.log('Test Options:');
  console.log('1. Run REGRESSION (reset session per file)');
  console.log('2. Run E2E FLOW (keep session)');
  console.log('3. Run SPECIFIC FILE');
  console.log('4. Run LOGIN tests only');
  console.log('5. Run SIGNUP tests only');
  console.log('6. Generate Allure report');
  console.log('7. Open Allure report');
  console.log('8. Exit\n');

  const choice = await askQuestion('Select an option (1-8): ');

  switch (choice) {
    case '1':
      console.log('\nRunning REGRESSION tests...\n');
      runCommand('npx wdio run wdio.conf.js', {
        TEST_MODE: 'regression'
      });
      break;

    case '2':
      console.log('\nRunning E2E flow...\n');
      runCommand('npx wdio run wdio.conf.js', {
        TEST_MODE: 'e2e'
      });
      break;

    case '3':
      const filePath = await askQuestion('Enter spec file path: ');
      console.log(`\nRunning file: ${filePath}\n`);

      const mode = await askQuestion('Choose mode (regression/e2e): ');

      runCommand(`npx wdio run wdio.conf.js --spec ${filePath}`, {
        TEST_MODE: mode || 'regression'
      });
      break;

    case '4':
      console.log('\ Running LOGIN tests...\n');
      runCommand('npx wdio run wdio.conf.js --spec ./test/specs/login/**/*.js', {
        TEST_MODE: 'regression'
      });
      break;

    case '5':
      console.log('\nRunning SIGNUP tests...\n');
      runCommand('npx wdio run wdio.conf.js --spec ./test/specs/signup/**/*.js', {
        TEST_MODE: 'regression'
      });
      break;

    case '6':
      console.log('\nGenerating Allure report...\n');
      runCommand('npx allure generate ./allure-results --clean -o ./allure-report');
      break;

    case '7':
      console.log('\nOpening Allure report...\n');
      runCommand('npx allure open ./allure-report');
      break;

    case '8':
      console.log('\nGoodbye fella!');
      rl.close();
      return;

    default:
      console.log('\nInvalid option\n');
      await runTests();
      return;
  }

  console.log('\nDone!\n');

  const again = await askQuestion('Run another test? (y/n): ');
  if (again.toLowerCase() === 'y') {
    console.log('\n');
    await runTests();
  } else {
    console.log('\nGoodbye!');
    rl.close();
  }
}

// Handle Ctrl+C
process.on('SIGINT', () => {
  console.log('\n\nGoodbye!');
  rl.close();
  process.exit(0);
});

runTests().catch(console.error);