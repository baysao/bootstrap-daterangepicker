Package.describe({
  name: 'baysao:bootstrap-daterangepicker',
  version: '2.0.9',
  summary: 'Date range picker component for Bootstrap',
  git: 'https://github.com/dangrossman/bootstrap-daterangepicker',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.use('nemo64:bootstrap@3.3.5_2', ["client"]);
  api.use('nemo64:bootstrap-data@3.3.5', ["client"]);
  api.use('momentjs:moment@2.10.3', ["client"]);
  api.use('jquery@1.11.3_2', ["client"]);

  api.addFiles('daterangepicker.js', ["client"]);
  api.addFiles('daterangepicker.css', ["client"]);
});
