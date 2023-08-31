import fs from 'fs'
import { meta, cover } from './metadata.js';

const pic = await dd();
export default pic

async function dd() {
  return new Promise((resolve, reject) => {
    fs.readdir("./public/music", async (err, auddata) => {
      if (err) {
        reject(err);
        return;
      }
      const picPromises = auddata.map(async (audioFile) => {
        return cover(audioFile).then((picture) => {
          return `data:${picture.format};base64,${picture.data.toString('base64')}`;
        });
      });
      const picArray = await Promise.all(picPromises);
      resolve(picArray);
    });
  });
}

