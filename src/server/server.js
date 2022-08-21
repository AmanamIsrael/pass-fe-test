import { createServer, Model } from "miragejs";

export const makeServer = ({ environment = "development" } = {}) => {
  let server = createServer({
    environment,
    models: {
      item: Model,
      user: Model,
    },

    seeds(server) {
      server.create("user", {
        name: "Amanam Israel",
        items: [],
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/items", (schema) => {
        return schema.items.all();
      });
    },
  });

  return server;
};
