const {app, BrowserWindow, Menu, dialog} = require('electron')

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
        click: function(){
            const options = {
                message: "Changelog for v" + app.getVersion(),
                detail: `
                - Fixed issue when dragging items on top of others would cause the new item to "disappear" from the tracker. (Technically it was inside the other item.)
                - Fixed issue where rows would collapse once all items were removed causing you not to be able to return them to the bottom.`,
                type: 'info',
                buttons: ['Close']
            };
            dialog.showMessageBox(null, options, (response, checkboxChecked) =>{});
        }
    }
]
const menu = Menu.buildFromTemplate(menuTemplate)
Menu.setApplicationMenu(menu)

function createWindow() {
    const win = new BrowserWindow({
        width: 840,
        height: 660,
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