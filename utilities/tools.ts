// imgタグの動的srcに対応させるための関数
/**
 * @param {string}  fileName - 画像ファイル名 
 * @return {string} path
 */
const convertImgSrc = (fileName: string): string => {
  return new URL(`../assets/images/${fileName}.png`, import.meta.url).href;
};

export {convertImgSrc}
