const { execSync } = require('child_process');

const runCommand = (command) => {
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    process.exit(1);
  }
};

runCommand('npm run lint');
runCommand('npm run format');
