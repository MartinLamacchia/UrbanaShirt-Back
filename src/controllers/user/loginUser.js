const User = require("../../models/User")
const bcrypt = require("bcrypt")

const loginUser = async (req, res) => {

  const {email, password} = req.body

  try {

    const userFound = await User.findOne({email})

    if (!userFound) {
       return res.status(404).json({active: false, message: "El mail no es correcto"})
    }

    const isMatch = await bcrypt.compare(password, userFound.password)

    if (!isMatch) {
      return res.status(404).json({active: false, message: "La contaseña no es correcta"})
   }

   res.status(200).json({active: true, userFound })
    
  } catch (error) {
    
  }

}

module.exports = loginUser