export interface User {
  account: {
    userName: String,
    password: String
  },
  personal: {
    firstName: String,
    lastName: String,
    email: String,
    gender: String
  },
  id: String
}