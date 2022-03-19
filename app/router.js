import Backbone from "backbone";
import HomePage from "./views/pages/home/index";
import About from "./views/pages/about/index";

const routes = {
  "": "index",
  about: "about",
  "*path": "index",
};

// Defining the application router.
class Router extends Backbone.Router {
  constructor() {
    super({ routes });
  }

  index() {
    new HomePage({ el: "main" }).render();
  }

  about() {
    new About({ el: "main" }).render();
  }
}

export default Router;
