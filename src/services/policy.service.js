const {
  status: { NOT_FOUND, OK },
  default: status
} = require('http-status')
const User = require('../models/user.model')
const Policy = require('../models/policy.model')
const Account = require('../models/account.model')
const Agent = require('../models/agent.model')
const Carrier = require('../models/carrier.model')
const Category = require('../models/category.model')

const findOneAndUpdate = async (
  row,
  account,
  agent,
  user,
  category,
  company
) => {
  return await Policy.findOneAndUpdate(
    { policy_number: row.policy_number },
    {
      policy_number: row.policy_number,
      start_date: row.policy_start_date,
      end_date: row.policy_end_date,
      policy_mode: row.policy_mode,
      policy_type: row.policy_type,
      premium_amount: row.premium_amount || 0,
      premium_amount_written: row.premium_amount_written || 0,
      producer: row.producer,
      csr: row.csr,
      applicant_id: row['Applicant ID'],
      agency_id: row.agency_id,
      has_active_client_policy: row['hasActive ClientPolicy'],
      account,
      agent,
      user,
      category,
      company
    },
    { upsert: true, new: true }
  )
}

const policyByUsername = async username => {
  try {
    const user = await User.findOne({ first_name: username })
    if (!user) {
      let message = `User not found with username: ${username}`
      return { code: NOT_FOUND, status: status[NOT_FOUND], message }
    }
    const policies = await Policy.find({ user: user._id })
      .populate('agent', 'name')
      .populate('account', 'name type')
      .populate('category', 'name')
      .populate('user', 'first_name email address user_type')
      .populate('company', 'name')
    return { code: OK, status: 'Success', data: policies }
  } catch (error) {
    console.log(error)
  }
}

const policyByEachUser = async () => {
  try {
    const data = await Policy.aggregate([
      {
        $addFields: {
          premium_amount_number: {
            $round: [{ $toDouble: { $ifNull: ['$premium_amount', 0] } }, 2]
          }
        }
      },
      {
        $group: {
          _id: '$user',
          total_policies: { $sum: 1 },
          total_premium: { $sum: '$premium_amount_number' }
        }
      },
      {
        $lookup: {
          from: 'users',
          localField: '_id',
          foreignField: '_id',
          as: 'userData'
        }
      },
      { $unwind: '$userData' },
      {
        $project: {
          _id: 0,
          user_id: '$_id',
          user_name: '$userData.first_name',
          total_policies: 1,
          total_premium: 1
        }
      },
      { $sort: { total_policies: -1 } }
    ])
    return { code: OK, status: 'Success', data }
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  findOneAndUpdate,
  policyByUsername,
  policyByEachUser
}
