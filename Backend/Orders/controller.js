const Order = require('./model');

const bcrypt = require('bcryptjs');

module.exports = {
    Create: async (req, res) => {
        try {
            let order = {};
            order = await Order.create(req.body);
    
            return res.status(200).json({
                status: 'Successful',
                message: 'Successfully registered a order',
                data: order
            });

        } catch (error) {
            return res.status(500).json({
                status: 'Error',
                message: error.message
            });
        }
    },
    Read: async (req, res) => {
        try {
            let order = {};
            const id = req.params.id;
            order = await Order.findOne({_id: id}, {password: 0});
            return res.status(200).json({
                status: 'Successful',
                data: order
            });
        } catch (error) {
            return res.status(500).json({
                status: 'Error',
                message: error.message
            });
        }
    },
    Update: async (req, res) => {
        try {
            const id = req.params.id;
            order = await Order.findOneAndUpdate({_id: id}, {
                $set: req.body
            });
            return res.status(200).json({
                status: 'Successful',
                message: 'Successfully updated order',
                data: order
            });
        } catch (error) {
            return res.status(500).json({
                status: 'Error',
                message: error.message
            });
        }
    },
    Delete: async (req, res) => {
        try {
            const id = req.params.id;
            await Order.remove({_id: id});
            return res.status(200).json({
                status: 'Successful',
                message: 'Successfully Deleted order'
            });
        } catch (error) {
            return res.status(500).json({
                status: 'Error',
                message: error.message
            });
        }
    },
    List: async (req, res) => {
        try {
            let orders = [];
            orders = await Order.find({});
            return res.status(200).json({
                status: 'Successful',
                data: orders
            });
        } catch (error) {
            return res.status(500).json({
                status: 'Error',
                message: error.message
            });
        }
    }
}



