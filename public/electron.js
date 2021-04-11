const path = require("path");
const isDev = require("electron-is-dev");

const { menubar } = require("menubar");

const mb = menubar({
  index: isDev
    ? "http://localhost:3000"
    : `file://${path.join(__dirname, "../build/index.html")}`,
  preloadWindow: true,
  icon: path.join(__dirname, "../resources/icon.ico"),
});

mb.on("ready", () => {
  console.log("app is ready");
});
