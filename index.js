const {app, BrowserWindow, Menu} = require('electron')

const menuTemplate = [
    {
        label: "File",
        submenu: [
            {
                role: 'quit',
            }
        ]
    },
    {
        label: 'View',
        submenu: [
            {
                role: 'reload',
                accelerator: 'F5'
            },
            {
                role: 'forceReload',
                accelerator: 'CommandOrControl+F5'
            },
            {
                role: 'toggleDevTools'
            },
            {
                role: 'togglefullscreen'
            }
        ]
    },
    {
        label: 'Version ' + app.getVersion()
    }
]
const menu = Menu.buildFromTemplate(menuTemplate)
Menu.setApplicationMenu(menu)

function createWindow() {
    const win = new BrowserWindow({
        width: 840,
        height: 650,
        title: "MPR Points Tracker",
        icon: 'src/images/varia.png'
    })

    win.loadFile('src/index.html')
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})