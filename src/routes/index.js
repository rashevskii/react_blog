import About from "../pages/About";
import Login from "../pages/Login";
import PostId from "../pages/PostId";
import Posts from "../pages/Posts";

export const privateRoutes = [
  { path: "/", component: <Posts /> },
  { path: "/about", component: <About /> },
  { path: "/posts", component: <Posts /> },
  { path: "/posts/:id", component: <PostId /> },
  { path: "/login", component: <Posts /> },
]

export const publicRoutes = [
  { path: "/login", component: <Login /> }
]