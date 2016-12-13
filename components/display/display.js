(function(){
  angular.module('graphApp')
  .component('display', {
    templateUrl: './components/display/display.html',
    controller: displayCtrl,
    controllerAs: 'display'
  });

  function displayCtrl(){
    var display = this;

    display.name = 'display';
  }
})()