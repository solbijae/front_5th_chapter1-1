import userStore from "./store/userStore";
import HomePage from "./components/HomePage";
import ProfilePage from "./components/ProfilePage";
import NotFoundPage from "./components/NotFoundPage";
import LoginPage from "./components/LoginPage";

const loginAction = (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  userStore.setUser({
    username: username,
    email: "",
    bio: "",
  });
  hashNavigate("/profile");
};

const logoutAction = () => {
  userStore.clearUser();
  hashNavigate("/login");
};

const profileUpdateAction = () => {
  const user = userStore.getUser();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const bio = document.getElementById("bio").value;
  userStore.setUser({ ...user, username, email, bio });
  hashNavigate("/profile");
};

const routes = {
  "/": () => HomePage(),
  "/login": () => {
    if (userStore.isLoggedIn()) {
      hashNavigate("/");
      return HomePage();
    }
    return LoginPage();
  },
  "/profile": () => {
    if (!userStore.isLoggedIn()) {
      hashNavigate("/login");
      return LoginPage();
    }
    return ProfilePage();
  },
};

const hashNavigate = (path) => {
  window.location.hash = path;
};

const App = () => {
  const path = window.location.hash.slice(1);
  const PageContent = routes[path] || (() => NotFoundPage());
  return PageContent();
};

const render = () => {
  const root = document.getElementById("root");
  root.innerHTML = App();
};

window.addEventListener("hashchange", function () {
  console.log("hashchange");
  render();
});
document.addEventListener("DOMContentLoaded", render);

document.addEventListener("click", (e) => {
  if (e.target.matches("a")) {
    e.preventDefault();
    const path = e.target.getAttribute("href");
    hashNavigate(path);
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
