const fs = require('fs');
const csv = require('csv-parser');
const { workerData } = require('worker_threads');
const { deleteFile } = require('./file.helper');
const connectDB = require('../config/database');
const {
    userService,
    agentService,
    policyService,
    accountService,
    carrierService,
    categoryService
} = require('../services');

const parseCSV = (filePath) =>
  new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => resolve(results))
      .on('error', reject);
  });

(async () => {
    await connectDB();
    const { filePath } = workerData;

    try {
        const data = await parseCSV(filePath);

        for (const row of data) {
            const agent = await agentService.findOneAndUpdate(row.agent);
            const account = await accountService.findOneAndUpdate(
                row.account_name,
                row.account_type
            );            
            const user = await userService.findOneAndUpdate(row, account._id);            
            const carrier = await carrierService.findOneAndUpdate(row.company_name);
            const category = await categoryService.findOneAndUpdate(row.category_name);
            await policyService.findOneAndUpdate(
                row,
                account._id,
                agent._id,
                user._id,
                category._id,
                carrier._id,
            );
        }

        await deleteFile(filePath);
        console.log('All data saved...');
        process.exit(0);
    } catch (error) {
        console.error('Error in worker:', error);
        await deleteFile(filePath);
        process.exit(1);
    }
})();
