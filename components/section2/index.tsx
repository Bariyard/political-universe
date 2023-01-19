import * as d3 from 'd3'
import React from 'react'
import reactMarkdown from 'react-markdown'
import scrollama from 'scrollama'
import Box1 from './Box1'
import Box3 from './Box3'
import Box4 from './Box4'
import Box5 from './Box5'
import { DrawViz } from './viz/test'
type Props = {}

const Section2 = (props: Props) => {
  const [isInit, setIsInit] = React.useState(false)
  const [currentStep, setCurrentStep] = React.useState(0)
  const scroller = scrollama();


  const handleStepEnter = React.useCallback((response: any) => {
    var scrolly = d3.select("#scrolly");
    var figure = scrolly.select("figure");
    var article = scrolly.select("article");
    var step = article.selectAll(".scrolly-step");
    // add color to current step only
    step.classed("is-active", function (d, i) {
      return i === response.index;
    });

    // update graphic based on step
    figure.select("p").text(response.index + 1);

    // switch (response.index) {
    //   case 0:
    //     d3.select('#description-content')
    //     break;
    //   case 1:
    //     d3.select('#main-viz-1').style("opacity", 1)
    //     break;
    // }
    // update graphic based on step
    // switch (response.index) {
    //   case 0:
    //     // toolTipState = 'title';
    //     if (response.direction === 'up') {
    //       dotColorGrey();
    //     }
    //     break;
    // }

    setCurrentStep((prev) =>
      prev !== response.index ? response.index : prev)
  }, [])

  const handleStepProgress = React.useCallback((response: any) => {
    // var opacityScale = d3.scaleLinear()
    //   .domain([0, 1])
    //   .range([0.5, 1]);

    // console.log(opacityScale(response.progress))
    // console.log(response)
    // switch (response.index) {
    //   case 0:
    //     d3.select('#main-viz-2').style("opacity", opacityScale(response.progress))

    // console.log(response.progress);
    // d3.select(response.element)
    //   .select("p")
    //   .text(d3.format(".1%")(response.progress));
    // }
  }, [])



  const handleResize = React.useCallback(

    () => {
      var scrolly = d3.select("#scrolly");
      var figure = scrolly.select("figure");
      var article = scrolly.select("article");
      var step = article.selectAll(".scrolly-step");

      // 1. update height of step elements
      var stepH = Math.floor(window.innerHeight);
      step.style("height", stepH + "px");

      var figureHeight = window.innerHeight;
      var figureMarginTop = (window.innerHeight - figureHeight) / 2;

      figure
        .style("height", figureHeight + "px")
        .style("top", figureMarginTop + "px");

      // 3. tell scrollama to update new element dimensions
      scroller.resize();
    }, [scroller])

  const drawViz = React.useCallback(() => {
    var data = [
      { month: new Date(2018, 1, 1), apples: 10, bananas: 20, oranges: 15 },
      { month: new Date(2018, 2, 1), apples: 15, bananas: 15, oranges: 15 },
      { month: new Date(2018, 3, 1), apples: 20, bananas: 25, oranges: 15 }
    ];

    const margin = { top: 50, right: 25, bottom: 45, left: 50 },
      width = 700 - margin.left - margin.right,
      height = 420 - margin.top - margin.bottom;

    // default viz
    const svg = d3.select('#viz')
    // .append('svg')
    // .attr("width", width + margin.left + margin.right)
    // .attr("height", height + margin.top + margin.bottom)
    // // .append("g")
    // // .attr("transform", `translate(${margin.left},${margin.top})`)
    // .append('rect')
    // .attr('fill', '#FF0000')
    // .attr('width', '100%')
    // .attr('height', '100%');


    // viz
    var stackGen = d3.stack()
      .keys(["apples", "bananas", "oranges"]);
    var stackedSeries = stackGen(data);

    var xScale = d3.scaleTime()
      .domain([data[0].month, data[2].month])
      .range([50, 275]);

    var yScale = d3.scaleLinear()
      .domain([0, 60])
      .range([275, 25]);

    var colorScale = d3.scaleOrdinal()
      .domain(["apples", "bananas", "oranges"])
      .range(["red", "yellow", "orange"]);

    var areaGen = d3.area()
      .x((d) => xScale(d.data.month))
      .y0((d) => yScale(d[0]))
      .y1((d) => yScale(d[1]));

    d3.select("#viz")
      .append('svg')
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`)

      .selectAll(".areas")
      .data(stackedSeries)
      .join("path")
      .attr("d", areaGen)
      .attr("fill", (d) => colorScale(d.key));
  }, [])

  const init = React.useCallback(() => {
    // setupStickyfill();

    // 1. force a resize on load to ensure proper dimensions are sent to scrollama
    handleResize();

    // 2. setup the scroller passing options
    // 		this will also initialize trigger observations
    // 3. bind scrollama event handlers (this can be chained like below)
    scroller
      .setup({
        step: "#scrolly article .scrolly-step",
        // offset: 0.5,
        offset: 0,
        debug: false,
        progress: true,

      })
      .onStepEnter(handleStepEnter)
      .onStepProgress(handleStepProgress);

    // drawViz();
    DrawViz();
    // setup resize event

    setIsInit(true);
  }, [handleResize, handleStepEnter, handleStepProgress, scroller])

  React.useEffect(() => {
    if (isInit) return

    init()

    // kick things off
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [isInit, init, handleResize])



  const getStepContent = () => {
    switch (currentStep) {
      case 0: return <Box1 key={`box-1`} opacity={0.5} />
      case 1: return <Box1 key='box-2' />
      case 2: return <Box3 />
      case 3: return <Box4 />
      case 4: return <Box5 />
      default: return <></>
    }
  }



  return (
    <div className='max-w-[1100px] mx-auto'>
      <div id='scorlly-container' className='p-4 min-h-screen'>
        <section id="scrolly">
          <figure>
            <p>0</p>
            <div id='viz' />
          </figure>
          <div className=''>
            <div className='sticky top-2 bg-transparent min-w-[360px] transition-all'>

              {getStepContent()}
            </div>
          </div>
          <article className=' w-1'>
            <div className="scrolly-step" data-step={1} />
            <div className="scrolly-step" data-step={2} />
            <div className="scrolly-step" data-step={3} />
            <div className="scrolly-step" data-step={4} />
            <div className="scrolly-step" data-step={5} />
          </article>
        </section>
      </div>
    </div>

  )
}

export default Section2