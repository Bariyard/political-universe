// @ts-nocheck
import * as d3 from 'd3'
import React from 'react'
import reactMarkdown from 'react-markdown'
import scrollama from 'scrollama'
import { NEGATIVE_ICON_COLOR, POSITIVE_ICON_COLOR } from '../utils'
import Box1 from './Box1'
import Box3 from './Box3'
import Box4 from './Box4'
import Box5 from './Box5'
import StackedAreaChart from './viz/stacked'
import { DrawViz } from './viz/test'
type Props = {}

const Section2 = (props: Props) => {
  const [isInit, setIsInit] = React.useState(false)
  const [currentStep, setCurrentStep] = React.useState(0)
  const scroller = scrollama();

  const svg = React.useRef<SVGSVGElement>(null);

  const drawChart = React.useCallback(async (svg: React.RefObject<SVGSVGElement>) => {

    const csv = await d3.csv(`${process.env.HOST}${process.env.BASE_PATH}/data/analysed/viz4-sum-all-positive-negative-event.csv`, d3.autoType)
    await StackedAreaChart(svg, csv, {
      x: d => d.year,
      y: d => d.count,
      z: d => d.type,
      xType: d3.scaleLinear,
      yLabel: "จำนวนเหตุการณ์",
      // width: Number(d3.select('figure').style('width')),
      height: 500,
      // yDomain: [-200, 200],
      // xFormat: d3.format("%"),
      colors: ["#60C1AF", "#F92D46"]
    })
  }, [])

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

  React.useEffect(() => {
    if (svg)
      drawChart(svg);
  }, [svg, drawChart]);


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
    <div className='max-w-[1100px] mx-auto mt-[50vh]'>
      <div id='scorlly-container' className='p-4 min-h-screen'>
        <section id="scrolly">
          <figure className='flex flex-col'>
            <div id="chart" className='my-auto'>
              <svg ref={svg} />
            </div>
          </figure>
          <div className='max-w-[360px]'>
            <div className='sticky top-1/2 bg-transparent min-w-[360px] transition-all -translate-y-1/2'>
              {getStepContent()}
            </div>
          </div>
          <article className='w-[1px]'>
            <div className="scrolly-step" data-step={1} />
            <div className="scrolly-step" data-step={2} />
            <div className="scrolly-step" data-step={3} />
            <div className="scrolly-step" data-step={4} />
            <div className="scrolly-step" data-step={5} />
          </article>
        </section>
      </div>
    </div >

  )
}

export default Section2