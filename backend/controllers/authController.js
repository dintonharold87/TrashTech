const passport = require("passport");
const bcrypt = require("bcrypt");
const Admin = require("../models/adminModel");
const Client = require("../models/clientModel");

// Handle user login
exports.login = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.render("login", { error: info.message });
    }
    bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
      if (err) {
        return next(err);
      }
      if (!isMatch) {
        return res.render("login", { error: "Invalid email or password" });
      }
      req.logIn(user, (err) => {
        if (err) {
          return next(err);
        }
        if (user instanceof Admin) {
          //   return res.redirect("/admin/dashboard");
          // Redirect to a protected route or send a success response
          return res.json({ message: "Logged in successfully" });
        }
        if (user instanceof Client) {
          //   return res.redirect("/client/profile");
          // Redirect to a protected route or send a success response
          return res.json({ message: "Logged in successfully" });
        }
      });
    });
  })(req, res, next);
};

// Handle user logout
exports.logout = (req, res) => {
  req.logout();
  res.redirect("/login");
};
