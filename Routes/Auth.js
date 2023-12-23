const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User, validate } = require("../Models/User");
const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res
        .status(400)
        .send({ status: false, message: error.details[0].message });
    const user = await User.findOne({ email: req.body.email });
    if (user)
      return res
        .status(409)
        .send({ status: false, message: "User Already Exists" });

    const salt = await bcrypt.genSalt(Number(10));
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    await new User({ ...req.body, password: hashedPassword }).save();
    res
      .status(201)
      .send({ status: true, message: "User created successfully" });
  } catch (error) {
    res.status(500).send({ status: false, message: "Internal Server Error" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      res.status(401).json({ status: false, message: "Invalid Credentials" });
      return;
    }
    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
      res.status(401).json({ status: false, message: "Invalid Credentials" });
      return;
    }
    const token = jwt.sign({ _id: user._id }, process.env.JWT_KEY, {
      expiresIn: "7d",
    });

    res.status(200).json({
      token: token,
      userId: user._id,
    });
  } catch (error) {
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
});

module.exports = router;
