const { app, BrowserWindow } = require('electron')  //引入electron模块

var mainWindow = null;  //声明要打开的主窗口
app.on('ready', () => {
    mainWindow = new BrowserWindow({ width: 800, height: 800 })   //设置打开的窗口大小

    mainWindow.loadFile('index.html')  //加载那个页面

    //监听关闭事件，把主窗口设置为null
    mainWindow.on('closed', () => {
        mainWindow = null
    })
})
