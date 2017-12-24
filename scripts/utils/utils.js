/**
 * @module utils
 */

import { join, resolve } from 'path';

import { SRC } from '../constants';

// root of the project
const ROOT = resolve(__dirname, '../..'); // APP

// templates folder path
const TEMPLATES_PATH = resolve(ROOT, 'scripts/gulp/templates'); // APP/scripts/gulp/templates

/**
 * gets the absolute path where the 'type' template folder is located
 *
 * @param {String} type - The type of the template
 * @return {String} -
 */
export const templatePath = (type = 'component') => join(TEMPLATES_PATH, `${type}/**/*.**`); // APP/scripts/gulp/templates/(type)/**/*.**

/**
 * Resolves paths for the folder the developer wants.
 *
 * @param {String} folderName - the name of the folder
 * @param {String} glob - the glob pattern
 */
export const resolveFolderPath = (folderName, glob = '') => join(SRC, folderName, glob); // src/{folderName}/{glob}

/**
 * Transform a string to 'capital-case'
 *
 * @param {String} str - the string to be apply the transformation
 * @return {String}
 */
export const capitalCase = (str) => str.charAt(0).toUpperCase() + str.slice(1);

/**
 * Transform a string to 'dash-case'
 *
 * @param {String} str - the string to be apply the transformation
 * @return {String}
 */
export const camelToDashCase = (str) => str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
