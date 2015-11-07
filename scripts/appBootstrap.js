$script(['scripts/ng-app.js',
'scripts/controllers/main.js',
'scripts/controllers/cube.js'], function()
{
    console.log("About to bootstrap/compile new document")
    angular.bootstrap(document, ['App']);
});