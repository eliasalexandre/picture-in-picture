"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var path = require("path");
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
    // eslint-disable-line global-require
    electron_1.app.quit();
}
var isLinux = process.platform === "linux";
if (isLinux) {
    electron_1.app.disableHardwareAcceleration();
}
/**
 * Create main electron window
 */
var createWindow = function () {
    var mainWindow = new electron_1.BrowserWindow({
        height: 600,
        width: 900,
        titleBarStyle: "customButtonsOnHover",
        alwaysOnTop: true,
        maximizable: false,
        webPreferences: {
            nodeIntegration: false
        }
    });
    mainWindow.loadFile(path.join(__dirname, "../index.html"));
    mainWindow.setVisibleOnAllWorkspaces(true);
};
electron_1.app
    .whenReady()
    .then(createWindow)["catch"](function (e) { return console.error(e); });
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
electron_1.app.on("window-all-closed", function () {
    if (process.platform !== "darwin") {
        electron_1.app.quit();
    }
});
electron_1.app.on("activate", function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (electron_1.BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
//# sourceMappingURL=index.js.map