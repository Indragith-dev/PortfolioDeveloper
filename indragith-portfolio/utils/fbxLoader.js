// utils/fbxLoader.js
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

export const loadFBX = (url) => {
  return new Promise((resolve, reject) => {
    const loader = new FBXLoader();
    loader.load(url, resolve, undefined, reject);
  });
};
