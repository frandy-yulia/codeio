class Api {
    init(channel) {
        this.hendleOpenFolder(channel);
    }

    hendleOpenFolder(channel) {
        channel.on('Open Folder',(event,arg) => {
            console.log(arg);
        });
    }
}

export default new Api;