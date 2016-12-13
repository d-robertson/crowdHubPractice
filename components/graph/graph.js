(function(){
  angular.module('graphApp')
  .component('graph', {
    templateUrl: './components/graph/graph.html',
    controller: GraphCtrl,
    controllerAs: 'graph'
  });

  function GraphCtrl(){
    var graph = this;
    graph.name = 'Graph';
  }
})()
