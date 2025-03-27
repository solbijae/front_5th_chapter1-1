import userStore from "./store/userStore";
import { navigate, render } from "./router";

const loginAction = (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  userStore.setUser({
    username: username,
    email: "",
    bio: "",
  });
  navigate("/profile");
};

const logoutAction = () => {
  userStore.clearUser();
  navigate("/login");
};

const profileUpdateAction = () => {
  const user = userStore.getUser();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const bio = document.getElementById("bio").value;
  userStore.setUser({ ...user, username, email, bio });
  navigate("/profile");
};

window.addEventListener("popstate", render);
document.addEventListener("DOMContentLoaded", render);

document.addEventListener("click", (e) => {
  if (e.target.matches("a")) {
    e.preventDefault();
    const path = e.target.getAttribute("href");
    navigate(path);
  }

  if (e.target.matches("#logout")) {
    e.preventDefault();
    logoutAction();
  }
});

document.addEventListener("submit", (e) => {
  if (e.target.matches("#login-form")) {
    e.preventDefault();
    loginAction(e);
  }

  if (e.target.matches("#profile-form")) {
    e.preventDefault();
    profileUpdateAction();
  }
});
