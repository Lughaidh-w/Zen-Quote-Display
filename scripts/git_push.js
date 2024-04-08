const { exec } = require('child_process');
const moment = require('moment-timezone');

// const gmt = 'Europe/Dublin';
const date_s = moment().tz('Europe/Dublin').format();

const commitMessage = `push with cron job every 10 minutes: time ${date_s}`;


const gitCommit = `git commit -m "${commitMessage}"`;


exec("git add assets/dailyimage.jpg")
exec(gitCommit);
exec("git push origin master")


// Execute the Git commands sequentially
exec("git add assets/dailyimage.jpg", (error, stdout, stderr) => {
  if (error) {
    console.error('Error adding file:', error);
    return;
  }
  console.log('File added successfully:', stdout);
  
  // Execute the git commit command
  exec(gitCommit, (error, stdout, stderr) => {
    if (error) {
      console.error('Error committing changes:', error);
      return;
    }
    console.log('Changes committed successfully:', stdout);
    
    // Execute the git push command
    exec("git push origin master", (error, stdout, stderr) => {
      if (error) {
        console.error('Error pushing changes:', error);
        return;
      }
      console.log('Changes pushed successfully:', stdout);
    });
  });
});