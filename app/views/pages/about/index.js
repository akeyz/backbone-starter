import Component from "../../../component";
import template from "./index.html";

export default Component.extend({
  template,

  initialize: function () {
    this.template.registerPartial(
      "header",
      require("../../partials/header.html")
    );
  },
});
