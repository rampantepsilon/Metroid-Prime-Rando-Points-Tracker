const { app, BrowserWindow, Menu, dialog } = require('electron')

const detailInfo = `
- Added Prime/Echoes Cross-Multiworld Placeholder
- Added Optional Checks to Echoes
- Added ability to hide the background
- Added ability to hide the info for check amounts
- Addressed issue with Prime where you could place 1pt check even without the tracker calculating for that
- Updated landing page to show layout for all four options without creating too much issues
- Added landing page information to display possible issues that may occur`

const buildNumber = '250410.1'

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