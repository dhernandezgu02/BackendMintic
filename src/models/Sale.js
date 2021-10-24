const { Schema, model } = require("mongoose");
// import bcrypt from "bcryptjs";

const SalesSchema = new Schema(
  {
    id: { type: String },
    totalValue: { type: Number },
    quantity: { type: Number },
    unitPrice: { type: Number },
    date: { type: Date },
    clientDoc: { type: String },
    clientName: { type: String },
    salesMan: { type: String },
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

module.exports = model("Sales", SalesSchema);
