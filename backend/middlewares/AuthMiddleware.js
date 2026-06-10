const User = require("../model/UserModel");
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ status: false, message: "No token" });
  }

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(data.id);

    if (!user) {
      return res.status(401).json({ status: false });
    }

    req.user = user; // ✅ attach user
    next(); // 🔥 VERY IMPORTANT
  } catch (err) {
    return res.status(401).json({ status: false, message: "Invalid token" });
  }
};