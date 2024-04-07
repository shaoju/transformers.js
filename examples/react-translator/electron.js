import { app, BrowserWindow, nativeImage } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';

// Define __dirname for ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

function createWindow() {
  // Create a native image instance from the icon file in the 'dist' folder
  const icon = nativeImage.createFromPath(path.join(__dirname, 'dist/app_icon.icns')); 

  // Create the browser window, setting the icon in the process
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: icon, 
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  // Load the index.html file into the window
  mainWindow.loadFile(path.join(__dirname, 'dist/index.html'));

  // Other window setup code...
}

app.whenReady().then(createWindow);

// Additional Electron app event handling...