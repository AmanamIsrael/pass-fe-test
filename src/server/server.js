import { createServer, Model } from "miragejs";

export const makeServer = ({ environment = "development" } = {}) => {
  let server = createServer({
    environment,
    models: {
      invoice: Model,
      user: Model,
    },

    seeds(server) {
      server.create("user", {
        name: "Amanam Israel",
        email: "hello@amanamisrael.com",
        address: {
          street: "jen Boulevard Street 101",
          city: "Malang City, 65115",
          country: "East Java, Indonesia",
        },
        payment: {
          accountName: "Barly Vallendito",
          accountNumber: "9700 0023 4200 2900",
          routingNumber: "084009519",
        },
      });
      server.create("invoice", {
        number: "INV-001",
        issuedDate: "2020-01-01",
        dueDate: "2020-01-08",
        billedTo: {
          name: "Zaky Grizzly",
          address: {
            street: "Monlight Agency LTD",
            city: "New York, USA",
          },
        },
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/users", (schema) => {
        return schema.users.all();
      });

      this.get("/invoice", (schema) => {
        return schema.invoices.all();
      });
    },
  });

  return server;
};
