const messageLimit = 1000;
const messages = [];

function queryMessages(maxMessages = messageLimit) {
  return { messages: messages.slice(-maxMessages) };
}

function addMessage(message) {
  if (messages.length >= messageLimit) messages.unshift();
  messages.push(message);
  return { messages: messages.slice(-messageLimit) };
}

function getMessages(req, res) {
  return res.json(queryMessages(req.params.limit));
}

function postMessage(req, res) {
  const body = req.body;
  if (!body || !body.message) return res.sendStatus(400);

  return res.json(addMessage(body));
}

module.exports = {
  getMessages,
  postMessage,
  queryMessages,
};

