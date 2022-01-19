module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8e86746858ccfd1ff7591929946020c3'),
  },
});
