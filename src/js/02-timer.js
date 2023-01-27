// const date = new Date();

// console.log(date);
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// console.log(date.toString());
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

const fetchUserFromServer = (username, onSuccess, onError) => {
  console.log(`Fetching data for ${username}`);

  setTimeout(() => {
    // Change value of isSuccess variable to simulate request status
    const isSuccess = true;

    if (isSuccess) {
      onSuccess('success value');
    } else {
      onError('error');
    }
  }, 2000);
};

const onFetchSuccess = user => {
  console.log(user);
};

const onFetchError = error => {
  console.error(error);
};

fetchUserFromServer('Mango', onFetchSuccess, onFetchError);