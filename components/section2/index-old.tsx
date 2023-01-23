// @type-nocheck
import * as d3 from 'd3'
import dynamic from 'next/dynamic'
import React from 'react'
import scrollama from 'scrollama'
import Box1 from './Box1'
import Box3 from './Box3'
import Box4 from './Box4'
import Box4ChartCollection from './Box4ChartCollection'
import Box5 from './Box5'
import { DrawViz } from './viz/test'

const DynamicStackedAreaChart = dynamic(
  () => import('./StackedAreaChartNew'),
  { ssr: false }
)

type Props = {}


const ChartContent = ({ step }: { step: number }) => {
  switch (step) {
    case 1: return <DynamicStackedAreaChart step={1} />;
    case 2: return <DynamicStackedAreaChart step={2} />;
    case 3: return <Box4ChartCollection />;
    default: return <DynamicStackedAreaChart step={0} />;
  }
}

const Section2 = (props: Props) => {
  const [isInit, setIsInit] = React.useState(false)
  const [currentStep, setCurrentStep] = React.useState(0)
  const scroller = scrollama();

  const svg = React.useRef<SVGElement>(null);
  const [data, setData] = React.useState()
  const stateRef = React.useRef();
  stateRef.current = data

  const handleStepEnter = React.useCallback((response: any) => {
    var scrolly = d3.select("#scrolly");
    var figure = scrolly.select("figure");
    var article = scrolly.select("article");
    var step = article.selectAll(".scrolly-step");
    // add color to current step only

    // update graphic based on step
    figure.select("p").text(response.index + 1);
    setCurrentStep((prev) =>
      prev !== response.index ? response.index : prev)

    switch (response.index) {
      case 0:
        if (response.direction === 'down') {

        }
        break;
      case 1:
        if (response.direction === 'up') {

        }
        break;
    }
    step.classed("is-active", function (d, i) {
      return i === response.index;
    });

  }, [data])

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



  const getStepContent = () => {
    switch (currentStep) {
      case 0: return <Box1 key={`box-1`} opacity={0.5} />
      case 1: return <Box1 key='box-2' />
      case 2: return <Box3 />
      case 3: return <Box4 />
      // case 4: return <Box5 />
      default: return <></>
    }
  }



  return (
    <div className='max-w-[1100px] mx-auto mt-[50vh]'>
      <div id='scorlly-container' className='p-4 min-h-screen'>
        <section id="scrolly">
          <figure className='flex flex-col'>
            <ChartContent step={currentStep} />
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
            <div className="scrolly-step" data-step={6} />
          </article>
        </section>
      </div>
    </div >

  )
}

export default Section2