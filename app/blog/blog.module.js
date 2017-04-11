angular
    .module('blog', [
        'ui.router',
        'blog.home'
    ])
    .config(blogConfig);

function blogConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}