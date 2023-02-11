const User = require('../models/User')
require('dotenv').config()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {validationResult} = require('express-validator')

class userController {
    async addUser(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({message: "Uncorrect request", errors})
            }

            const {email, password} = req.body
            const candidate = await User.findOne({email})

            if (candidate) {
                return res.status(400).json({message: `User with email ${email} already exist`})
            }

            const hashPassword = await bcrypt.hash(password, 8)
            const user = new User({email, password: hashPassword})
            await user.save()
            return res.json({message: 'User successfully added'})
        } catch (e) {
            console.log(e);
        }
    }

    async login(req, res) {
        try {
            const {email, password} = req.body
            const user = await User.findOne({email})

            if (!user) {
                return res.status(404).json({message: 'User not found'})
            }

            const isValidPassword = bcrypt.compareSync(password, user.password)

            if(!isValidPassword) {
                return res.status(400).json({message: 'Invalid password'})
            }

            const secretKey = process.env.SECRET_KEY
            const token = jwt.sign({id: user.id}, secretKey, {expiresIn: "1h"})
            
            return res.json(
                {
                    message: 'The user is authorized', 
                    token,
                    user: {
                        id: user.id
                    }
                })
        } catch (e) {
            console.log(e);
        }
    }

    async auth(req, res) {
        try {
            const user = await User.findOne({_id: req.user.id})
            const secretKey = process.env.SECRET_KEY
            const token = jwt.sign({id: user.id}, secretKey, {expiresIn: "1h"})
            return res.json({ 
                    token,
                    user: {
                        id: user.id
                    }
                })
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new userController()