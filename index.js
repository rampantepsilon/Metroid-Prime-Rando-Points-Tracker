const { app, BrowserWindow, Menu, dialog } = require('electron')

const detailInfo = `
- Updated background for Prime 1 with new colors. (Should be easier to see icons now)
- Changed the output for Current Seed to make it easier to identify.
- Resized the main window to elimiate unneeded spacing.
- Added Toggles for Background and Point Values.
- Updated Electron to current version.`

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
        label: 'Version ' + app.getVersion(),
        click: function () {
            const options = {
                message: "Changelog for v" + app.getVersion(),
                detail: detailInfo,
                type: 'info',
                buttons: ['Close']
            };
            dialog.showMessageBox(null, options, (response, checkboxChecked) => { });
        }
    }
]
const menu = Menu.buildFromTemplate(menuTemplate)
Menu.setApplicationMenu(menu)

function createWindow() {
    const win = new BrowserWindow({
        width: 870,
        height: 760,
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