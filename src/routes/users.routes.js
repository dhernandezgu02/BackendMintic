const { Router } = require("express");
const {
  singup,
  signin,
  logout,
  getUsers,
} = require("../controllers/users.controller");

const router = Router();

// Routes
// router.get("/users/signup", renderSignUpForm);
router.get("/users", getUsers);
router.post("/users/signup", singup);

// router.get("/users/signin", renderSigninForm);

router.post("/users/signin", signin);

router.get("/users/logout", logout);

module.exports = router;
