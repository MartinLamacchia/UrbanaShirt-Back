const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
})

adminSchema.pre('save', async function (next) {
  const user = this;
  if (!user.isModified('password')) {
      return next();
  }
  try {
      user.password = await bcrypt.hash(user.password, 10);
      next();
  } catch (error) {
      return next("Error hashing password", error);
  }
})

module.exports = mongoose.model('Admin', adminSchema);