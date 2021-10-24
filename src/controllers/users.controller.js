const User = require("../models/User");
// import passport from "passport";

// exports.renderSignUpForm = (req, res) => res.render("users/signup");

exports.singup = async (req, res) => {
  try {
    let errors = [];
    const { name, email, password, confirm_password } = req.body;
    if (password != confirm_password) {
      errors.push({ text: "Passwords do not match." });
    }
    if (password.length < 4) {
      errors.push({ text: "Passwords must be at least 4 characters." });
    }
    if (errors.length > 0) {
      res.status(500).json({
        status: 500,
        errors: errors,
      });
      // res.render("users/signup", {
      //   errors,
      //   name,
      //   email,
      //   password,
      //   confirm_password,
      // });
    } else {
      // Look for email coincidence
      const emailUser = await User.findOne({ email: email });
      if (emailUser) {
        res.status(500).json({
          status: 500,
          error: "the user already exist",
        });
        //   req.flash("error_msg", "The Email is already in use.");
        //   res.redirect("/users/signup");
      } else {
        // Saving a New User
        const newUser = new User({ name, email, password });
        //   newUser.password = await newUser.encryptPassword(password);
        newUser.password = password;
        await newUser.save();
        res.status(200).json({
          status: 200,
          message: "the user was created correctly",
        });
        //   req.flash("success_msg", "You are registered.");
        //   res.redirect("/users/signin");
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 500,
      error: JSON.stringify(error),
    });
  }
};

// exports.renderSigninForm = (req, res) => res.render("users/signin");
exports.signin = async (req, res) => {
  const { email, password } = req.body;
  const emailUser = await User.findOne({ email: email });
  console.log(email, password, emailUser);
  if (emailUser) {
    const correctPassword = password === emailUser.password;
    if (correctPassword) {
      res.status(200).json({
        status: 200,
        message: "log correct login",
      });
    } else {
      res.status(500).json({
        status: 500,
        message: "the password is incorrect",
      });
    }
  } else {
    res.status(500).json({
      status: 500,
      message: "the user does not exist",
    });
  }
};
// exports.signin = passport.authenticate("local", {
//   successRedirect: "/notes",
//   failureRedirect: "/users/signin",
//   failureFlash: true,
// });
exports.logout = (req, res) => {
  res.status(200).json({
    status: 200,
    message: "Correct logout",
  });
};
// exports.logout = (req, res) => {
//   req.logout();
//   req.flash("success_msg", "You are logged out now.");
//   res.redirect("/users/signin");
// };
