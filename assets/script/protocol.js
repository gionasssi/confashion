d3.svg('assets/img/protocol.svg').then(function(svg){

  let mySvg = svg.documentElement;
  let container = d3.select("#how-sideright");

  console.log(mySvg);

  container.node().append(mySvg);

  // let clusters = d3.selectAll("#nodes > g");
  //
  // clusters.on("click", function() { // On our selection, with .on() we "wire" the code to detect mouse events like clicks, scrolls, over. These events have specific names: https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events
  //   clusters.style("opacity", 0.3);
  //   d3.select(this).style("opacity", 1); // "this" refers to the element on which the event is fired (in this case, where we have clicked.)
  // })
});
