const fs = require('fs/promises');

const deleteFile = async (filePath) => {
    await fs.unlink(filePath);
    console.log('File deleted...');
}

module.exports = {
    deleteFile,
}
