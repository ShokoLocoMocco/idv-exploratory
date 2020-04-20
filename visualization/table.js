class Table {

  constructor(state, setGlobalState) {
    // this.width = window.innerWidth * 0.2;
    // this.margins = {top: 20, bottom:20, left:20, right:20};
    this.duration = 500;

    const columns = ["Group"]
    //, "Ideology", "City"];

    this.table = d3
      .select("#table")
      .append("table")
      .append("thead")
      //.append("tr")
      //.selectAll("th")
      // .data(columns)
      // .join("th")
      // .text(d => d) // column names to appear


  }

  draw(state, setGlobalState) {

    //this.table.text(`${state.selectedState}`)


      const stateData = state.hg.filter(d => state.selectedState === d.state);
    console.log(stateData);

      const tableStateData = stateData.map(d => ({
        "Group": d.group,
        "Ideology": d.ideology,
        "City": d.city,
        "State": d.state
      })).sort((a, b) => d3.descending(a['city'], b['group']));
        console.log(tableStateData);

    this.tableRows = this.table
      .append("tbody")
      .selectAll("tr")
      .data(tableStateData)
      .join("tr")
      .selectAll("td")
      .data(d => Object.values(d))
      // .join("td")
      // .text(d => d)
      //.attr("class", "groups")
      .join(
        enter =>
          enter
            .append("td")

            //.text(d => d),
            .call(enter => enter
              .text(d => d)
              .attr("class", "groups")),
          update => update,
          exit => exit.remove())
  }
}

export { Table };
