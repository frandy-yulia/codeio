import readdir from './readdir';

class Api {
    init(channel,win) {
        this.hendleOpenFolder(channel,win);
    }

    hendleOpenFolder(channel,win) {
        channel.on('Open Folder',(event,arg) => {
            const arga = arg.split('/');
            const name = arga[arga.length - 1];
            const all = readdir(arg);
            win.webContents.send('opened-folder', {name,all});
        });
    }
}

export default new Api;