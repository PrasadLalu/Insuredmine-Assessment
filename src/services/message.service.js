const { status: { CREATED, BAD_REQUEST, OK }, default: status} = require('http-status');
const Message = require('../models/message.model');

const insertMessage = async ({ message, day, time }) => {
    if (!message || !day || !time) {
        return { code: BAD_REQUEST, status: status[BAD_REQUEST], message: 'message params missing' }
    }
    const newMessage = await Message.create({
        message,
        day,
        time,
    });

    return { code: CREATED, status: status[CREATED], data: newMessage };
}

const listMessages = async () => {
    const messages = await Message.find({});
    return { code: OK, status: 'Success', data: messages };
}

module.exports = {
    insertMessage,
    listMessages,
}
