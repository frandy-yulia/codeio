class Api {
    init(channel) {
        this.hendleOpenFolder(channel);
    }

    hendleOpenFolder(channel) {
        channel.on('open-folder',(event,arg) => {
            console.log(arg);
        });
    }
}

export default new Api;