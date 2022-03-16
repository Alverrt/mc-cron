var AdmZip = require("adm-zip");
var CronJob = require('cron').CronJob;



var job = new CronJob('* * * * *', function() {
    var zip = new AdmZip();

    zip.addLocalFile("/root/mc-server/world");
    
    zip.writeZip("/root/yedek-dunyalar/files.zip");
}, null, true, 'America/Los_Angeles');
job.start();