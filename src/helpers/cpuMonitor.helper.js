const pidusage = require('pidusage');

const THRESHOLD = 70;
const CHECK_INTERVAL = 5000;

const startCpuMonitoring = () => {
    setTimeout(() => {
        pidusage(process.pid, (err, stats) => {
            if (err) {
                console.error('CPU monitoring failed:', err);
                return;
            }

            const cpu = stats.cpu;
            console.log(`CPU usage: ${cpu.toFixed(2)}%`);

            if (cpu > THRESHOLD) { 
                console.warn(`⚠️ CPU usage exceeded ${THRESHOLD}%! Restarting server...`);
                process.exit(1);
            }
        });
    }, CHECK_INTERVAL);
}

module.exports = startCpuMonitoring;
