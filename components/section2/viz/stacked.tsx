// @ts-nocheck
import * as d3 from "d3";
// Copyright 2021 Observable, Inc.
// Released under the ISC license.
// https://observablehq.com/@d3/stacked-area-chart
export default function StackedAreaChart(
  svgRef,
  data,
  {
    x = ([x]) => x, // given d in data, returns the (ordinal) x-value
    y = ([, y]) => y, // given d in data, returns the (quantitative) y-value
    z = () => 1, // given d in data, returns the (categorical) z-value
    marginTop = 20, // top margin, in pixels
    marginRight = 70, // right margin, in pixels
    marginBottom = 30, // bottom margin, in pixels
    marginLeft = 100, // left margin, in pixels
    yLabelTop = 10,
    width = parseInt(d3.select("#chart").style("width"), 10), // outer width, in pixels
    height = 400, // outer height, in pixels
    xType = d3.scaleUtc,
    xDomain, // [xmin, xmax]
    xRange = [marginLeft, width - marginRight], // [left, right]
    yType = d3.scaleLinear, // type of y-scale
    yDomain, // [ymin, ymax]
    yRange = [height - marginBottom, marginTop], // [bottom, top]
    zDomain, // array of z-values
    offset = d3.stackOffsetDiverging, // stack offset method
    order = d3.stackOrderNone, // stack order method
    xFormat, // a format specifier string for the x-axis
    yFormat, // a format specifier for the y-axis
    yLabel, // a label for the y-axis
    colors = d3.schemeTableau10 // array of colors for z
  } = {}
) {
  // Compute values.
  const X = d3.map(data, x);
  const Y = d3.map(data, y);
  const Z = d3.map(data, z);
  console.log(data)

  // Compute default x- and z-domains, and unique the z-domain.
  if (xDomain === undefined) xDomain = d3.extent(X);
  if (yDomain === undefined) yDomain = d3.extent(Y);
  if (zDomain === undefined) zDomain = Z;
  console.log(yDomain);


  zDomain = new d3.InternSet(zDomain);

  // Omit any data not present in the z-domain.
  const I = d3.range(X.length).filter((i) => zDomain.has(Z[i]));

  // Compute a nested array of series where each series is [[y1, y2], [y1, y2],
  // [y1, y2], …] representing the y-extent of each stacked rect. In addition,
  // each tuple has an i (index) property so that we can refer back to the
  // original data point (data[i]). This code assumes that there is only one
  // data point for a given unique x- and z-value.
  const series = d3
    .stack()
    .keys(zDomain)
    .value(([x, I], z) => Y[I.get(z)])
    .order(order)
    .offset(offset)(
      d3.rollup(
        I,
        ([i]) => i,
        (i) => X[i],
        (i) => Z[i]
      )
    )
    .map((s) => s.map((d) => Object.assign(d, { i: d.data[1].get(s.key) })));

  // Compute the default y-domain. Note: diverging stacks can be negative.
  if (yDomain === undefined) yDomain = d3.extent(series.flat(2));

  // Construct scales and axes.
  const xScale = xType(xDomain, xRange);
  const yScale = yType(yDomain, yRange);
  const color = d3.scaleOrdinal(zDomain, colors);
  const xAxis = d3.axisBottom(xScale).ticks(10, xFormat).tickSizeOuter(0);

  const yAxis = d3.axisRight(yScale).ticks(height / 50, yFormat);

  const area = d3
    .area()
    .x(({ i }) => xScale(X[i]))
    .y0(([y1]) => yScale(y1))
    .y1(([, y2]) => yScale(y2))
    .curve(d3.curveBasis);

  // const svg = d3
  //   .create("svg")
  const svg = d3.select(svgRef.current);
  svg
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", [0, 0, width, height])
    .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

  svg
    .append("g")
    .attr("transform", `translate(${width - marginRight * 0.75},0)`)
    .call(yAxis)
    .call((g) =>
      g
        .append("text")
        .attr('class', 'wv-bold wv-ibmplex wv-b7')
        .attr("x", height * 0.35)
        .attr("y", -marginRight * .5)
        .attr("fill", "currentColor")
        .attr("text-anchor", "start")
        .attr("transform", "rotate(90)")
        .text(yLabel)
        .call((g) => g.select(".domain").remove())

        .append("g")
        .call((g) =>
          g
            .selectAll(".tick line")
            .clone()
            .attr("x2", width - marginLeft - marginRight)
            .attr("stroke-opacity", 0.1)
        )
    );

  svg
    .append("g")
    .selectAll("path")
    .data(series)
    .join("path")
    .attr("fill", ([{ i }]) => color(Z[i]))
    .attr("d", area)
    .append("title")
    .text(([{ i }]) => Z[i]);

  svg
    .append("g")
    .attr("class", "xAxis dashed")

    .attr(
      "transform",
      `translate(0,${height * 0.5 - (marginBottom + 1)})`
    )
    .call(xAxis)
    .call((g) =>
      g
        // svg
        .selectAll(".tick")
        .insert("rect", "text")
        .attr("transform", `translate(-9,0)`)
        .attr("rx", "2")
        .attr("ry", "2")
        .attr("width", `${18}`)
        .attr("height", `${15}`)
        .attr("fill", d3.color("white"))
    )
    .call((g) =>
      g
        .selectAll(".tick text")
        .attr("font-family", "IBM Plex Sans Thai")
        .attr("font-size", "10px")
        .attr("font-weight", 700)
        .attr("fill", d3.color("black"))
        .attr("y", "4")
    );

  // Decoration for chart
  svg
    .append('line')
    .style("stroke", "white")
    .style("stroke-width", '1px')
    .attr('class', 'dashed')
    .attr("x1", xScale(54))
    .attr("y1", 60)
    .attr("x2", xScale(54))
    .attr("y2", height - marginBottom);

  svg
    .append('line')
    .style("stroke", "white")
    .style("stroke-width", '1px')
    .attr('class', 'dashed')
    .attr("x1", xScale(56))
    .attr("y1", 60)
    .attr("x2", xScale(56))
    .attr("y2", height - marginBottom);

  // Decoration icon
  svg.append("svg:image")
    .attr("xlink:href", `${process.env.HOST}${process.env.BASE_PATH}/design_assets/03_main_viz/pm_01_label.svg`)
    .attr("width", 49)
    .attr("height", 94)
    .attr("x", xScale(54) - 24.5)
    .attr("y", 0);
  svg.append("svg:image")
    .attr("xlink:href", `${process.env.HOST}${process.env.BASE_PATH}/design_assets/03_main_viz/pm_02_label.svg`)
    .attr("width", 49)
    .attr("height", 94)
    .attr("x", xScale(56) - 25.5)
    .attr("y", 0);
  svg.append("svg:image")
    .attr("xlink:href", `${process.env.HOST}${process.env.BASE_PATH}/design_assets/03_main_viz/pm_01-range.svg`)
    .attr("width", 73)
    .attr("height", 48)
    .attr("x", xScale(55) - 73 * .5)
    .attr("y", marginTop * .5);
  svg.append("svg:image")
    .attr("xlink:href", `${process.env.HOST}${process.env.BASE_PATH}/design_assets/03_main_viz/pm_02-range.svg`)
    .attr("width", xScale(65) - xScale(56))
    .attr("height", 24)
    .attr("x", xScale(56.5))
    .attr("y", marginTop);

  return Object.assign(svg.node(), { scales: { color } });
}
