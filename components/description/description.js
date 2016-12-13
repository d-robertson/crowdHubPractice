(function(){
  angular.module('graphApp')
  .component('description', {
    templateUrl: './components/description/description.html',
    controller: DescriptionCtrl,
    controllerAs: 'description'
  });

  function DescriptionCtrl(){
    var description = this;
    console.log('description');
    description.name = "description";
  }
})()