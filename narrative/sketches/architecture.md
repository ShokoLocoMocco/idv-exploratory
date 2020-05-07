## Architecture

### File struture

- **index.html**
- **main.js**
  - `map.js`: NYS map of municipalities with hate groups present (2019) :small_red_triangle: *zoom, tooltip*
    - `table-cities.js`: Count of groups per ideology by NYS municipality (2019)
  - `bar-compare.js`: % (with raw # included) of each ideology (100% = all groups) in US vs. NYS using grouped bar chart (2019)
  - `table-hg.js`: list of all groups in NYS (2019) :small_red_triangle: *dropdown*
  - One of these charts:
    - `lines.js`: "Timeline" of numbers by ideology (2000-2019) :small_red_triangle: *highlight*
    - `bar-ideology.js`: Count of groups by ideology in NYS (2000-2019) :small_red_triangle: *dropdown*
    - `bar-diverging.js`: Compares increase and decrease of groups by ideology using absolute numbers and percentage change in NYS (2018-2019) :small_red_triangle: *radio button*
- **style.css**
- **/[data](data)**

### index.html
```
<div>
  <div class="section">text</div>

  <div class="section" id="one">
    <div class="text">text</div>
    <div class="chart" id="map"> </div>
  </div>

  <div class="section" id="two">
    <div class='text'>text</div>
    <div class="chart" id="table-cities"> </div>
  </div>

  <div class='section' id='three'>
    <div class='text'>text</div>
    <div class="chart" id="bar-compare"> </div>
  </div>

  <div class="section" id="four">
    <div class="chart" id="table-hg"> </div>
  </div>

  <div class="section" id='five'>
    <div class="chart" id="lines"> </div> <!-- or bar-ideology, bar-diverging -->
  </div>
</div>

<script src="../../../lib/d3.js"></script>
<script src="main.js" type="module"></script>
```

### main.js
```
import { chart1 } from './map.js'
import { chart2 } from './table-cities.js'
import { chart3 } from './bar-compare.js'
import { chart3 } from './table-hg.js'
import { chart3 } from './lines.js'
import { chart3 } from './bar-ideology.js'
import { chart3 } from './bar-diverging.js'

map();
table-cities();
bar-compare();
table-hg();
lines();
bar-ideology();
bar-diverging();
```

#### map.js
*Cities with groups, points sized by group count*  
:small_red_triangle: User interaction: zoom, tooltip for cities

#### table-cities.js
*Count of hate groups by city in NYS*
```
const width = _,
  height = _,
  margin = { _ },
  paddingInner = _;

d3.csv("../../data/hg.csv", d3.autoType)

const table = d3
  .select("#table-hg")
  .append("table")
  .attr("width", width)
  .attr("height", height);

table
  .append("thead")
  .append("tr")
  .selectAll("th")
  .data(columns)
  .join("th")
  .text(d => d)
  .attr("class", "columns");

const rows = table
  .append("tbody")
  .selectAll("tr")
  .data(data)
  .join("tr");

rows
  .selectAll("td")
  .data(d => Object.values(d))
  .join("td")
  .text(d => d);
```

#### bar-compare.js
*Grouped bar chart compares number of groups belonging to an ideology as % of total hate groups for US and for NYS ([example](https://observablehq.com/@d3/grouped-bar-chart))*

#### table-hg.js
*List of all groups in 2019*  
:small_red_triangle: dropdown of ideologies
```
let state = {
  // functions that will update
};

d3.csv("../../data/hg.csv", d3.autoType).then(data => {
  state.data = data;
  init();
});

function init() { /* runs only once */
  // dropdown setup
  draw();
}

function draw() { /* what runs with each change in data input */
  // filter data
  // update domain
}
```

#### lines.js
*Multiple lines chart of number of groups by ideology every year (2000-2019)*  
:small_red_triangle: highlight a line

#### bar-ideology.js
*Number of groups by ideology in NYS (2000-2019)*  
:small_red_triangle: dropdown of years

```
let state = {
  // functions that will update
};

d3.csv("../../data/hg_nys_ideologies.csv", d3.autoType).then(data => {
  state.data = data;
  init();
});

function init() { /* runs only once */
  // scales
  // axes
  // dropdown setup
  // svg
  // add axes
  draw();
}

function draw() { /* what runs with each change in data input */
  // filter data
  // redraw axes?
}
```

#### bar-diverging.js
*Compares increase and decrease of groups by ideology between 2018 and 2019 using absolute numbers and percentage change in NYS ([example](https://observablehq.com/@d3/diverging-bar-chart))*  
:small_red_triangle: radio buttons: absolute, %
```
let state = {
  // functions that will update
};

d3.csv("../../data/hg_nys_change.csv", d3.autoType).then(data => {
  state.data = data;
  init();
});

function init() { /* runs only once */
  // scales
  // axes
  // radio button setup
  // svg
  // add axes
  draw();
}

function draw() { /* what runs with data change */
  // filter data
}
```

### Charts

File | Place | Description | Year | Data
--- | --- | --- | --- | ---
`map.js` | NYS | Points of group locations | 2019 | `hg_nys_geocoded.csv`, `nys.json`
`table-cities.js` | NYS | Groups by ideology by city | 2019 | `hg.csv`
`bar-compare.js` | US, NYS | % by ideology | 2019 | `hg_ideology_pct.csv`
`table-hg` | NYS | List of all groups + city, ideology | 2019 | `hg.csv`
`lines.js` | NYS | Multiple lines of ideology count per year | 2010-2019 | `hg_nys_ideologies.csv`
`bar-ideology.js` | NYS | Groups by ideology | 2000-2019 | `hg_nys_ideologies.csv`
`bar-diverging.js` | NYS | Groups by ideology, count and percent change | 2018-2019 | `hg_nys_change.csv`
