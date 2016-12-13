(function(){
  angular.module('graphApp')
  .component('search', {
    templateUrl: './components/search/search.html',
    controller: searchCtrl,
    controllerAs: 'search'
  });

  function searchCtrl(){
    var search = this;

    search.name = 'search!';
  }
})()