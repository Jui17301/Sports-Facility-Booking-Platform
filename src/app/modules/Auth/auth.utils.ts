import jwt from 'jsonwebtoken';

export const createToken = (
  jwtPayload: { email: string; role: string },
  secret: string,
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  expiresIn: string,
) => {
  return jwt.sign(jwtPayload, secret, {
    expiresIn:'1d'
  });
};