const { app, BrowserWindow, Menu, dialog } = require('electron')

const detailInfo = `
- Updated Prime 2 layout with new images and matching background
- Assigned point values to checks
- Added Prime 2 to tracker
- Both Prime & Echoes should work with multiworlds where only that game is there. (Currently, will not work for Prime/Echoes crossed multiworld. That will be coming soon.)`

const buildNumber = '252809.1'

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
            /*{
                role: 'toggleDevTools'
            },*/
            {
                role: 'togglefullscreen'
            }
        ]
    },
    {
        label: 'About',
        submenu: [
            {
                label: 'MPR Points Tracker',
                enabled: false
            },
            {
                label: 'Version ' + app.getVersion(),
                enabled: false
            },
            {
                label: 'Build ' + buildNumber,
                enabled: false
            },

            {
                label: 'Changelog',
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
    }
]
const menu = Menu.buildFromTemplate(menuTemplate)
Menu.setApplicationMenu(menu)

function createWindow() {
    const win = new BrowserWindow({
        width: 900,
        height: 900,
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