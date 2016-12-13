(function(){
  angular.module('graphApp')
  .component('description', {
    templateUrl: './components/description/description.html',
    cotroller: descriptionCtrl,
    controllerAs: 'description'
  });

  function descriptionCtrl(){
    var description = this;

    description.name = "description";
  }
})()