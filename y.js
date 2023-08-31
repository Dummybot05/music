import path from 'path'
import fs from 'fs'



const musicFolderPath = './lyrics'; // Replace this with the actual path

/*
const fs = require('fs');
const path = require('path');

const musicFolderPath = '/path/to/music/folder'; // Replace this with the actual path
*/

fs.readdir(musicFolderPath, (err, files) => {
  if (err) {
    console.error('Error reading folder:', err);
    return;
  }

  files.forEach(file => {
    const filePath = path.join(musicFolderPath, file);
    const fileExtension = path.extname(file);
    const newFileName = file.replace(/\s+/g, '_'); // Replace spaces with underscores
    const newFilePath = path.join(musicFolderPath, newFileName);

    if (file !== newFileName) {
      fs.rename(filePath, newFilePath, err => {
        if (err) {
          console.error('Error renaming file:', err);
        } else {
          console.log(`Renamed ${file} to ${newFileName}`);
        }
      });
    }
  });
});

/*
fs.readdir(musicFolderPath, (err, files) => {
  if (err) {
    console.error('Error reading folder:', err);
    return;
  }

  files.forEach(file => {
    const filePath = path.join(musicFolderPath, file);
    const fileExtension = path.extname(file);
    const newFileName = `${file.replace(fileExtension, '')}${fileExtension}`;
    const newFilePath = path.join(musicFolderPath, newFileName);

    fs.rename(filePath, newFilePath, err => {
      if (err) {
        console.error('Error renaming file:', err);
      } else {
        console.log(`Renamed ${file} to ${newFileName}`);
      }
    });
  });
});
*/
