const { Schema, model } = require("mongoose");
// import bcrypt from "bcryptjs";

const ProductsSchema = new Schema(
  {
    id: { type: String },
    description: { type: String },
    available: { type: Number },
    price: { type: Number },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// UserSchema.methods.encryptPassword = async (password) => {
//   const salt = await bcrypt.genSalt(10);
//   return await bcrypt.hash(password, salt);
// };

// UserSchema.methods.matchPassword = async function (password) {
//   return await bcrypt.compare(password, this.password);
// };

module.exports = model("Products", ProductsSchema);
