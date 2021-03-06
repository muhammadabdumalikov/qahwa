module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 5151),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "2179ddde57f389fdc5c3a287aafe9175"),
    },
  },
});
