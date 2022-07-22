/*
  clean.js
  ===========
  removes folders:
    - public
*/

const gulp = require('gulp')

const config = require('./config.json')

gulp.task('clean', function (done) {
  import('del').then(del => {
    del.deleteSync([config.paths.public + '/*',
      '.port.tmp'])
    done()
  })
})
