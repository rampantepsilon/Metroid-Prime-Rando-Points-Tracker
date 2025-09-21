const { app, BrowserWindow, Menu, dialog } = require('electron')

const detailInfo = `
- HOTFIX: Fixed bug where Power Beam wasn't showing as a starting item.
- Added Prime 2 and 3 to the launcher menu.
- Found way to convert .rdvgame files to a usable format for Prime 2 (and possibly 3).
- Updated backend of Prime 2 to start reading the file.
- Fixed issue where points quick calculating.
- Reconfigured how points were generated.
- Changed Layout to implement Metroid Prime 2.`

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
        width: 1450,
        height: 720,
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