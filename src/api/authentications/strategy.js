const Jwt = require('@hapi/jwt');

const JwtStrategy = {
  name: 'openmusic_jwt',
  scheme: 'jwt',
  options: {
    keys: process.env.ACCESS_TOKEN_KEY,
    verify: {
      aud: false,
      iss: false,
      sub: false,
      maxAgeSec: process.env.ACCESS_TOKEN_AGE,
    },
    validate: (artifacts) => ({
      isValid: true,
      credentials: {
        id: artifacts.decoded.payload.id,
      },
    }),
  },
};

module.exports = JwtStrategy;