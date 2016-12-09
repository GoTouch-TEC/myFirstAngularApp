(function(){
  angular
    .module('TodoApp',['ui.router'])
    .config(($stateProvider, $urlRouterProvider) => {
      $stateProvider
        .state({
          name: 'todo',
          url: '/',
          templateUrl: 'views/todo.html',
          controller: 'TodoController'
        })
        .state({
          name: 'new',
          url: '/new',
          templateUrl: 'views/new.html'
        });
      $urlRouterProvider.otherwise('/');
    });
})();