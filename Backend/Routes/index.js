const users = require('../Users/routes');
const agents = require('../AgentUsers/routes');
const adminuser = require('../AdminUser/routes');
const category = require('../Catogery/routes');
const products = require('../Products/routes');
const orders = require('../Orders/routes');
const invoice = require('../Invoice/routes');
const chat = require('../Chat/routes');
const messages = require('../Messages/routes');


module.exports = {
    users,
    agents,
    adminuser,
    category,
    products,
    orders,
    invoice,
    chat,
    messages
}