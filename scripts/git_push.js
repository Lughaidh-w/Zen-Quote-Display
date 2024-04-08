const { exec } = require('child_process');
const moment = require('moment-timezone');

// const gmt = 'Europe/Dublin';
const date_s = moment.tz('Europe/Dublin');




// Define the Git commands
const gitCommands = [
  'git add ../assets/dailyimage.jpg',
  'git commit -m "push with js"',
  'git push origin master'
];

// Execute Git commands sequentially
function executeCommands(commands) {
  if (commands.length === 0) {
    console.log('All commands executed successfully');
    return;
  }

  const command = commands.shift();
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Command stderr: ${stderr}`);
      return;
    }
    console.log(`Command stdout: ${stdout}`);
    executeCommands(commands);
  });
}

// Start executing commands
executeCommands(gitCommands);
