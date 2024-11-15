const fs = require("fs");
const PNG = require("pngjs").PNG;
const path = require("path");

/**
 * Description: decompress file from given pathIn, write to given pathOut
 *
 * @param {string} pathIn
 * @param {string} pathOut
 * @return {promise}
 */
const yauzl = require('yauzl-promise'),
  fs = require('fs'),
  {pipeline} = require('stream/promises');

const zip = await yauzl.open('/path/to/myfile.zip');
try {
  for await (const entry of zip) {
    if (entry.filename.endsWith('/')) {
      await fs.promises.mkdir(`/path/to/output/${entry.filename}`);
    } else {
      const readStream = await entry.openReadStream();
      const writeStream = fs.createWriteStream(
        `/path/to/output/${entry.filename}`
      );
      await pipeline(readStream, writeStream);
    }
  }
} finally {
  await zip.close();
}



const unzip = (pathIn, pathOut) => {};

/**
 * Description: read all the png files from given directory and return Promise containing array of each png file path
 *
 * @param {string} path
 * @return {promise}
 */
const readDir = (dir) => {};

/**
 * Description: Read in png file by given pathIn,
 * convert to grayscale and write to given pathOut
 *
 * @param {string} filePath
 * @param {string} pathProcessed
 * @return {promise}
 */
const grayScale = (pathIn, pathOut) => {};

module.exports = {
  unzip,
  readDir,
  grayScale,
};
