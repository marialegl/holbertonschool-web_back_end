export default function signUpUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
    const success = true;
    if (success) {
      const response = {
        firstName,
        lastName,
      };
      resolve(response);
    } else {
      const error = new Error('No data');
      reject(error);
    }
  });
}
