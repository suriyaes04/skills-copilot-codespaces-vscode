// create web browser
const { app, BrowserWindow } = require('electron')

// create a new browser window
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // load the index.html file
  win.loadFile('index.html')
}

// when the app is ready, create the browser window
app.whenReady().then(createWindow)

// quit the app when all windows are closed (except on macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// create a new window if the app is activated (on macOS)
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})