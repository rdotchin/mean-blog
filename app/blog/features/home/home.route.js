angular
    .module('blog.home')
    .config(homeConfig);

function homeConfig($stateProvider) {
    $stateProvider.state({
        name: 'home', // name of the route
        url: '/', // url endpoint for the route
        templateUrl: '/blog/features/home/home.html', // The url to the view template
        controller: 'HomeCtrl', // The name of the controller to use for this route
        controllerAs: 'HomeVM' // The namespace for the view to access the view model
    })
}