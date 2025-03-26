const userStore = {
  state: {
    user: JSON.parse(localStorage.getItem("user") || null),
  },

  getUser() {
    return this.state.user;
  },

  setUser(user) {
    this.state.user = user;
    localStorage.setItem("user", JSON.stringify(user));
  },

  clearUser() {
    this.state.user = null;
    localStorage.removeItem("user");
  },

  isLoggedIn() {
    return !!this.state.user;
  },
};

export default userStore;
