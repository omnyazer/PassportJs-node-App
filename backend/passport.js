require("dotenv").config();

const passport = require("passport");
const { Strategy: GoogleStrategy } = require("passport-google-oauth20");
const { Strategy: GitHubStrategy } = require("passport-github2");

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || "";
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || "";
const GOOGLE_CALLBACK_URL =
  process.env.GOOGLE_CALLBACK_URL ||
  "http://localhost:5000/auth/google/callback";

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID || "";
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET || "";
const GITHUB_CALLBACK_URL =
  process.env.GITHUB_CALLBACK_URL ||
  "http://localhost:5000/auth/github/callback";

if (GOOGLE_CLIENT_ID && GOOGLE_CLIENT_SECRET) {
  passport.use(
    "google",
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: GOOGLE_CALLBACK_URL
      },
      (_accessToken, _refreshToken, profile, done) => {
        done(null, profile);
      }
    )
  );
} else {
  console.warn(
    "Google OAuth disabled: GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET is missing."
  );
}

if (GITHUB_CLIENT_ID && GITHUB_CLIENT_SECRET) {
  passport.use(
    "github",
    new GitHubStrategy(
      {
        clientID: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_CLIENT_SECRET,
        callbackURL: GITHUB_CALLBACK_URL
      },
      (_accessToken, _refreshToken, profile, done) => {
        done(null, profile);
      }
    )
  );
} else {
  console.warn(
    "GitHub OAuth disabled: GITHUB_CLIENT_ID or GITHUB_CLIENT_SECRET is missing."
  );
}

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
