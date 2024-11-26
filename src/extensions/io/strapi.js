module.exports = (io) => {
  strapi.db.lifecycles.subscribe({
    models: ["product"],
    afterCreate(event) {
      io.sockets.emit("productAdded", event.state);
    },
    afterUpdate(event) {
      io.sockets.emit("productUpdated", event.state);
    },
    afterDelete(event) {
      io.sockets.emit("productDeleted", event.state);
    },
  });

  io.on("connection", (socket) => {
    console.log("Client connected:", socket);

    socket.on("subscribeToProducts", () => {
      console.log("Client subscribed to product updates");
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected:", socket);
    });
  });
};
