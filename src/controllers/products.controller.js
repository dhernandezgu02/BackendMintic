const Product = require("../models/Product");

exports.getProducts = async (req, res) => {
  //     const notes = await Note.find({ user: req.user.id })
  //     .sort({ date: "desc" })
  //     .lean();
  //   res.render("notes/all-notes", { notes });
  const products = await Product.find();
  res.status(200).json({
    products: products,
    status: 200,
  });
};

exports.createProduct = async (req, res) => {
  try {
    const { id, description, available, price } = req.body;
    console.log(req.body);
    const newProduct = new Product({
      id,
      description,
      available,
      price,
    });
    //   newUser.password = await newUser.encryptPassword(password);

    await newProduct.save();
    res.status(200).json({
      status: 200,
      message: "the product was created correctly",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 500,
      error: JSON.stringify(error),
    });
  }
};
