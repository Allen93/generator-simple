var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

  // The name `constructor` is important here
  constructor: function () {
    // Calling the super constructor is important so our generator is correctly set up
    generators.Base.apply(this, arguments);

    // this.argument('appname', {typs: String, required: true});
    
  },
  installPackage: function () {
    //  TODO: 整理成配置读取
  	this.npmInstall(['lodash'], { 'saveDev': true });
    this.npmInstall(['gulp'], { 'saveDev': true });
    this.npmInstall(['gulp-webpack'], { 'saveDev': true });
    this.npmInstall(['gulp-sourcemaps'], { 'saveDev': true });
  	this.npmInstall(['gulp-server-livereload'], { 'saveDev': true });
  },
  writing: function () {
    this.fs.copyTpl(
      this.templatePath(),
      this.destinationPath(),
      { appname: this.appname }
    );
  },
  prompting: function () {
    var done = this.async();
    this.prompt({
      type    : 'input',
      name    : 'name',
      message : 'Your project name',
      default : this.appname // Default to current folder name
    }, function (answers) {
      this.appname = answers.name;
      done();
    }.bind(this));
  }
});