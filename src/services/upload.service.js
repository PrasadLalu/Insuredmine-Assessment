const { status: { OK }} = require('http-status');
const { Worker } = require('worker_threads');
const path = require('path');

const uploadFile = (file) => {
    new Worker(path.join(__dirname, '../helpers/worker.helper.js'), {
        workerData: { filePath: file.path }
    });
    return { code: OK, status: 'Success', message: 'File uploaded. Processing in background.' }
}

module.exports = {
    uploadFile
}
