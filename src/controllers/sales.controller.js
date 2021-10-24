const Sale = require("../models/Sale");

exports.getSales = async (req, res) => {
  //     const notes = await Note.find({ user: req.user.id })
  //     .sort({ date: "desc" })
  //     .lean();
  //   res.render("notes/all-notes", { notes });
  const sales = await Sale.find();
  res.status(200).json({
    sales: sales,
  });
};

exports.createSale = async (req, res) => {
  try {
    const {
      id,
      totalValue,
      quantity,
      unitPrice,
      date,
      clientDoc,
      clientName,
      salesMan,
    } = req.body;
    console.log(req.body);
    const newSale = new Sale({
      id,
      totalValue,
      quantity,
      unitPrice,
      date,
      clientDoc,
      clientName,
      salesMan,
    });
    //   newUser.password = await newUser.encryptPassword(password);

    await newSale.save();
    res.status(200).json({
      status: 200,
      message: "the sale was created correctly",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 500,
      error: JSON.stringify(error),
    });
  }
};
