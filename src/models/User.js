const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
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
  birthDate: {
    type: String,
    required: true,
  },
  document: {
    type: Number,
    required: true,
  },
  addresses: {
    billingAddress: {
      streetName: {
        type: String,
        required: true,
      },
      streetNumber: {
        type: Number,
        required: true,
      },
      floor: {
        type: Number,
        required: false,
      },
      department: {
        type: String,
        required: false,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      postalCode: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      phone: {
        type: Number,
        required: true,
      },
    },
    deliveryAddress: {
      fullName: {
        type: String,
        required: true,
      },
      streetName: {
        type: String,
        required: true,
      },
      streetNumber: {
        type: Number,
        required: true,
      },
      floor: {
        type: Number,
        required: false,
      },
      department: {
        type: String,
        required: false,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      postalCode: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      phone: {
        type: Number,
        required: true,
      },
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", async function () {

  if (!this.isModified("password")) {
    return;
  }

  try {
    this.password = await bcrypt.hash(this.password, 10);
  } catch (error) {
    throw error;
  }

});

module.exports = mongoose.model("User", userSchema);
