const adminModel = require('../models/adminModel')
const { responseReturn } = require('../utilities/response')
const bcrypt = require('bcryptjs')
const { createToken } = require('../utilities/tokenCreate')

class authControllers{
    admin_login = async(req,res) => {
        const {email,password} = req.body
        try {
            const admin = await adminModel.findOne({email}).select('+password')
            console.log("Email in request:", email);
            if (admin) {
                const match = await bcrypt.compare(password, admin.password)
                if (match) {
                    const token = await createToken({
                        id: admin.id,
                        role: admin.role
                    })
                    res.cookie('accessToken', token, {
                        expires: new Date(Date.now() + 7*24*60*60*1000)
                    })
                    responseReturn(res, 200, {token, message: 'Login Success'})
                } else {
                    responseReturn(res, 404, {error: 'Incorrect Password'})
                }
            
            } else {
                responseReturn(res, 404, {error: 'Email Not Found'})
            }
        } catch (error) {
            responseReturn(res, 500, {error: error.message})
        }
    }

    logout = async (req, res) => {
        try {
            res.cookie('accessToken', null, {
                expires: new Date(Date.now()),
                httpOnly: true
            })
            responseReturn(res, 200, { message: 'Log Out Success' })

        } catch (error) {
            responseReturn(res, 500, { error: error.message })
        }
    }
}

module.exports = new authControllers()