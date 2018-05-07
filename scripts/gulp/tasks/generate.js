/**
 * @module generate
 */


import { join } from 'path';
import gulp from 'gulp';
import rename from 'gulp-rename';
import template from 'gulp-template';
import yargs from 'yargs';

import {
  resolveFolderPath,
  capitalCase,
  camelToDashCase,
  templatePath
} from '../../utils/utils';

gulp.task('generate', () => {

  // extract the arguments that was given in the CLI
  const {
    name,
    parent = '',
    type = 'component',
  } = yargs.argv;

  // Pluralize based on the type so it refers to its corresponding folder
  const folder = `${type}s`;
  // Where to put the generated template files
  const destPath = join(resolveFolderPath(folder), parent, capitalCase(name));
  // Capitalize 'name'
  const upCaseName = capitalCase(name);
  // dash-case 'name'
  const dashCaseName = camelToDashCase(name);

  return gulp.src(templatePath(type))
    .pipe(template({
      name,
      upCaseName,
      dashCaseName
    }))
    .pipe(rename((path) => {
      path.basename = path.basename.replace('temp', capitalCase(name));
    }))
    .pipe(gulp.dest(destPath));

});
