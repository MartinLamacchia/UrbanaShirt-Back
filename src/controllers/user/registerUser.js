const User = require("../../models/User")

const registerUser = async (req, res, next) => {

  const {name, lastname, email, password, birthDate, document, addresses} = req.body

  try {

    const userFound = await User.findOne({email})

    if (userFound) {
      return res.status(400).json({message: "El usuario ya esta registrado"})
    }

    const newUser = await User.create({
      name, 
      lastname, 
      email, 
      password, 
      birthDate, 
      document, 
      addresses
    })
    
    return res.status(201).json({message: "Usuario creado con Exito", newUser})

  } catch (error) {
    return next(error);
  }
}

module.exports = registerUser