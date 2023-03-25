import io from "socket.io-client";

let socket;

export const init = () => {
  console.log("sunucuya bağlanılıyor...");
  socket = io("http://localhost:3002", {
    transports: ["websocket"],
  });

  socket.on("connect", () => console.log("sunucu bağlantı gerçekleşti. "));
};

export const send = (color) => {
  socket.emit("newColor", color);
};

export const subscribe = (cb) => {
  socket.on("receive", (color) => {
    console.log(color);
    cb(color);
  });
};
