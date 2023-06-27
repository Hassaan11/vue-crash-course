export class UserService {
  static getUsers() {
    return fetch("https://jsonplaceholder.typicode.com/users");
  }

  static getUser(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  }
  static getNewUser(userId) {
    let users = JSON.parse(localStorage.getItem("users"));
    return users.find((user) => user.id == userId);
  }
}
