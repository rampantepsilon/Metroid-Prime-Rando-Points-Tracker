const { app, BrowserWindow, Menu, dialog } = require('electron')

const detailInfo = `
- Fixed issue where Space Jump Boots and Morph Ball weren't tracking properly when calculating points.
- Added Multiworld layout with ability to choose which players items are available (Currently only for 2P Multiworlds.)
- Changed Solo Layout to match Multiworld layout.`

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