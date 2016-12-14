(function(){
  angular.module('graphApp', [])
  .component('main', {
    templateUrl: './main.html',
    controller: MainCtrl,
    controllerAs: 'main'
  });

  function MainCtrl(){
    var main = this;

    main.name = 'derek';
  }

  MainCtrl.$inject = [];
})()


