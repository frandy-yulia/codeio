import fs, { readdir } from 'fs';
import path from 'path';


function readdirs(data) {
    const all = fs.readdirSync(data,{withType: true}).map(item => {
        const realpath = path.join(data,item);

        const isDir = fs.lstatSync(realpath)
                         .isDirectory();

        return {
            name: item,
            realpath: realpath,
            isDir: isDir
        };
    }).sort((a, b) => {
        if (!a.isDir && b.isDir) {
            return 1;
        }

        if (a.isDir && !b.isDir) {
            return -1;
        }

        if (a.isDir && b.isDir || !a.isDir && !b.isDir) {
            return 0;
        }
    });

    return all;
}


export default readdirs;