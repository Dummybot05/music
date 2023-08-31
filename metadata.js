import { parseFile, selectCover } from 'music-metadata';
import { inspect } from 'util';

export const meta = async (filNam) => {
  try {
    const metadata = await parseFile(`./public/music/${filNam}`);
    return inspect(metadata, { showHidden: false, depth: null });
  } catch (error) {
    console.error(error.message);
  }
}

export const cover = async (filePath) => {
  const {common} = await parseFile(`./public/music/${filePath}`);
  const cover = selectCover(common.picture);
  return cover
}
