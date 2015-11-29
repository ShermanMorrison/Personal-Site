var dep1 = ['scripts/ng-app.js'];

var deps2 = ['scripts/controllers/main.js', 'scripts/controllers/cube.js'];

$script(dep1, function(){
    $script(deps2, function(){
        angular.bootstrap(document, ['App']);
    });
});
