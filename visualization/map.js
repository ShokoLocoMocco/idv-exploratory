class USMap {

    constructor(state, setGlobalState) {
        this.width = window.innerWidth * 0.5;
        this.height = window.innerHeight * 0.7;
        //this.margins = {top: 20, bottom:20, left:20, right:20};
        //this.paddingInner = 0.1;

        const filteredData = state.hg.map(d => ({
          "state": d.state,
          "gpsPerCapita": d.gpsPerCapita
        }));
        console.log(filteredData)

        // https://groups.google.com/forum/#!msg/d3-js/pl297cFtIQk/Eso4q_eBu1IJ
        const uniqueData = d3
          .nest()
          .key(function(d) { return d.state; })
          .entries(filteredData)
          .map(function(entry) { return entry.values[0]; });
        console.log(uniqueData)

        // https://github.com/d3/d3-scale-chromatic
        const colorScale = d3.scaleSequential(d3.interpolateOrRd)
          .domain(d3.extent(uniqueData.map(d => d.gpsPerCapita)))

        const projection = d3
          .geoAlbersUsa()
          .fitSize([this.width, this.height], state.geojson);

        const path = d3
          .geoPath()
          .projection(projection);

        const populationLookup = new Map(uniqueData.map(d => [d.state, d.gpsPerCapita]))

        this.svg = d3
          .select("#map")
          .append("svg")
          .attr("width", this.width)
          .attr("height", this.height);

        this.svg
          .selectAll(".state")
          .data(state.geojson.features)
          .join("path")
          .attr("d", path)
          .attr("class", "state")
          .attr("fill", d => {
            /* the curly braces here allow me to do more when this function is envoked each time.
            the best use of this is to console log the value, so for each item (d) in data, we console log (d) to get more clarity */
            console.log(d)

            // PART 1: I will save the state name from the data element that is getting created
            const stateName = d.properties.NAME

            // PART 2: get the data associated with that state name

            // OPTION A: using [array].find
            /* This version is the "crude" option, not performance optimized, that just looks for the state name in the populations data set */
            //const statePopulations = uniqueData.find(e => e.state === stateName).gpsPerCapita

            // OPTION B: using a pre-defined map.get
            /* This version is more advanced, leveraging a pre-defined Map.*/
            const statePopulations2 = populationLookup.get(stateName)

            // PART 3: use the color scale defined above to return a color
            return colorScale(statePopulations2)

          })
          .attr("fill-opacity", 0.8)
          .on("mouseover", function(d, i) { d3
            .select(this)
            .attr("fill-opacity", 1)
            })
          .on("mouseout", function(d, i) { d3
            //.selectAll("path")
            .select(this)
            .attr("fill-opacity", 0.8)
          })
          .on("click", function(d, i) { d3
            .select(this)
            .join("path");
            setGlobalState({ selectedState: d.properties.NAME });
          });

    }

    draw(state, setGlobalState) { // updating map state updates global state

    }
  }

export { USMap };
