export default function getFullResponseFromAPI() {
    const getResponseFromAPI = new Promise(function(resolve, reject) {
      const success = true;
      if (success) {
        resolve("Stuff worked!");
      } else {
        reject(Error("It broke"));
      }
    });
  }
  