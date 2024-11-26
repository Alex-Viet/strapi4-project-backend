module.exports = () => ({
  io: {
    enabled: true,
    config: {
      contentTypes: ["api::product.product"],
      events: [
        {
          name: "connection",
          handler: ({ socket }) => {
            console.log(`Socket connected: ${socket}`);
          },
        },
        {
          name: "disconnect",
          handler: ({ socket }) => {
            console.log(`Socket disconnected: ${socket}`);
          },
        },
      ],
    },
  },
});
