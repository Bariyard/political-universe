import React from 'react'
import * as d3 from 'd3'
import scrollama from 'scrollama'
import WvContainer from '@wevisdemo/ui/react/container'
import Box1 from './Box1'
import Box3 from './Box3'
import Box4 from './Box4'
import Box5 from './Box5'
type Props = {}

const Section2 = (props: Props) => {

  const [currentStep, setCurrentStep] = React.useState(0)

  React.useEffect(() => {
    // using d3 for convenience
    var container = d3.select("#scorlly-container");
    var scrolly = d3.select("#scrolly");
    var figure = scrolly.select("figure");
    var article = scrolly.select("article");
    var step = article.selectAll(".scrolly-step");

    // initialize the scrollama
    var scroller = scrollama();

    // generic window resize listener event
    function handleResize() {
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
    }

    // scrollama event handlers
    function handleStepEnter(response: any) {
      console.log(response);
      // response = { element, direction, index }

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
      if (currentStep !== response.index)
        setCurrentStep(response.index)
    }

    function handleStepProgress(response: any) {
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
    }
    function init() {

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

    }

    // kick things off
    init();
  }, [])


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