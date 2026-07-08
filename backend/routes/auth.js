const router = require("express").Router();
const passport = require("passport");

const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:3000";

const ensureStrategy = (strategyName) => (req, res, next) => {
  if (!passport._strategy(strategyName)) {
    return res.status(503).json({
      success: false,
      message: `${strategyName} authentication is not configured. Check backend/.env.`
    });
  }

  return next();
};

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successful",
      user: req.user
    });
    return;
  }

  res.status(401).json({
    success: false,
    message: "Not authorized"
  });
});

router.get("/login/failed", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure"
  });
});

router.get("/logout", (req, res, next) => {
  if (typeof req.logout !== "function") {
    res.redirect(CLIENT_URL);
    return;
  }

  if (req.logout.length > 0) {
    req.logout((error) => {
      if (error) {
        next(error);
        return;
      }

      res.redirect(CLIENT_URL);
    });
    return;
  }

  try {
    req.logout();
    res.redirect(CLIENT_URL);
  } catch (error) {
    next(error);
  }
});

router.get("/", (req, res) => {
  res.status(200).json({
    message: "Auth route ok"
  });
});

router.get(
  "/google",
  ensureStrategy("google"),
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  ensureStrategy("google"),
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: `${CLIENT_URL}/login`
  })
);

router.get(
  "/github",
  ensureStrategy("github"),
  passport.authenticate("github", { scope: ["user:email"] })
);

router.get(
  "/github/callback",
  ensureStrategy("github"),
  passport.authenticate("github", {
    successRedirect: CLIENT_URL,
    failureRedirect: `${CLIENT_URL}/login`
  })
);

module.exports = router;
