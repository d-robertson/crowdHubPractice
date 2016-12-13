(function(){
  angular.module('graphApp')
  .component('info', {
    templateUrl: './components/info/info.html',
    controller: infoCtrl,
    controllerAs: 'info'
  });

  function infoCtrl(){
    var info = this;
    info.name = 'info';
  }
})()