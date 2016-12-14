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
    generateGraph();
  }

  function generateGraph() {
    var displayElem = document.getElementById("display");
    var width = 1440,
      height = 750,
      radius = Math.min(width, height) / 2 - 30;

    var r = d3.scale.linear()
      .domain([0, 1])
      .range([0, radius]);

    var line = d3.svg.line.radial()
      .radius(function(d) {
        return r(d[1]);
      })
      .angle(function(d) {
        return -d[0] + Math.PI / 2;
      });

    var svg = d3.select("#display").append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + ((display.offsetWidth / 2) - 57) + "," + ((display.offsetHeight / 2) + 50) + ")");

      console.log(svg);

    var gr = svg.append("g")
      .attr("class", "r axis")
      .selectAll("g")
      .data(r.ticks(3).slice(1))
      .enter().append("g");

    gr.append("circle")
      .attr("r", r);

    var ga = svg.append("g")
      .attr("class", "a axis")
      .selectAll("g")
      .data(d3.range(0, 360, 45))
      .enter().append("g")
      .attr("transform", function(d) {
        return "rotate(" + -d + ")";
      });

    ga.append("line")
      .attr("x2", radius);
        
    var color = d3.scale.category20();

    var line = d3.svg.line.radial()
      .radius(function(d) {
        return r(d[1]);
      })
      .angle(function(d) {
        return -d[0] + Math.PI / 2;
      });
        
    var data = [
      [Math.PI / 3, Math.random()],
      [Math.PI / 6, Math.random()],
      [0 * Math.PI, Math.random()],
      [(11 * Math.PI) / 6, Math.random()],
      [(5 * Math.PI / 3), Math.random()],
      [(3 * Math.PI) / 2, Math.random()],
      [(4 * Math.PI / 3), Math.random()],
      [(7 * Math.PI) / 6, Math.random()],
      [Math.PI, Math.random()],
      [(5 * Math.PI) / 6, Math.random()],
      [(2 * Math.PI) / 3, Math.random()],
      [Math.PI / 2, Math.random()]
    ]

    svg.selectAll("point")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "point")
      .attr("transform", function(d) {
        var coors = line([d]).slice(1).slice(0, -1);
        return "translate(" + coors + ")"
      })
      .attr("r", 8)
      .attr("fill",function(d,i){
        return color(i);
      });
  }
})()
