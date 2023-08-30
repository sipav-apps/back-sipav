import userRoutes from "./user.routes.js";
import authRoutes from "./auth.routes.js";

const routes = app => {
  userRoutes(app);
  authRoutes(app);
};

export default routes;