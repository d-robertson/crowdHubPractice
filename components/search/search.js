(function(){
  angular.module('graphApp')
  .component('search', {
    templateUrl: './components/search/search.html',
    controller: searchCtrl,
    controllerAs: 'search'
  });

  function searchCtrl(){
    var search = this;
    var req = {
      url: 'https://derekmockdata.herokuapp.com/api/data'
    }
    search.name = 'Search Options';

    search.callApi = function(){
      console.log('in search api function');
      $http(req).then(function success(res){
        console.log('success: ', res);
      }, function error(res){
        console.log('error : ', res);
      });
    }
  }

  searchCtrl.$inject = ["$http"];
})()