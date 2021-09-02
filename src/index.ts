import { app, BrowserWindow } from "electron";
import * as path from "path";

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  // eslint-disable-line global-require
  app.quit();
}

const isLinux = process.platform === "linux";
if (isLinux) {
  app.disableHardwareAcceleration();
}

/**
 * Create main electron window
 */
const createWindow = (): void => {
  const mainWindow = new BrowserWindow({
    height: 600,
    width: 900,
    titleBarStyle: "customButtonsOnHover",
    alwaysOnTop: true,
    maximizable: false,
    webPreferences: {
      nodeIntegration: false,
    },
  });

  mainWindow.loadFile(path.join(__dirname, "../index.html"));
  mainWindow.setVisibleOnAllWorkspaces(true);
};

app
  .whenReady()
  .then(createWindow)
  .catch((e) => console.error(e));

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
