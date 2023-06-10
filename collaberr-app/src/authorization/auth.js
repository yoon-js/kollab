/* Assumes this data is from database */
const users = [
    { email: "foo@test.io", password: "123", name: "Kim" },
    { email: "lee@test.io", password: "456", name: "Lee" },
    { email: "park@test.io", password: "789", name: "Park" },
  ];
  

/* Check if input data matches with database */
  export function signIn({ email, password }) {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user === undefined) throw new Error();
    return user;
  }