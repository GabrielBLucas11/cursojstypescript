type VerifyUserFn = (user: User, receivedValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, receivedValue) => {
  return (
    user.username === receivedValue.username &&
    user.password === receivedValue.password
  );
};

const bdUser = { username: 'Gabriel', password: '123456' };
const sentUser = { username: 'Gabriel', password: '123456', permissions: '' };

const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
