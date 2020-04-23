class Table {

  constructor(state, setGlobalState) {
    // this.width = window.innerWidth * 0.2;
    // this.margins = {top: 20, bottom:20, left:20, right:20};
    this.duration = 500;

    this.table = d3
      .select("#table")
      .append("table")

    this.table
      .append("thead")
      .append("tr")
      .selectAll("th")
      .data(["Group", "Ideology", "City"])
      .join("th")
      .text(d => d) // column names to appear
      .attr("class", "columns")

  }

  draw(state, setGlobalState) {

    const stateData = state.hg.filter(d => state.selectedState === d.state)

    const tableStateData = stateData.map(d => ({
      "Hate Group": d.group,
      "Ideology": d.ideology,
      "City": d.city
    }))
    console.log(stateData);
      console.log(tableStateData);


      this.tableRows = this.table
        .append("tbody")
        .selectAll("tr")
        .data(tableStateData)
        .join("tr")

      this.tableRows
        .selectAll("td")
        .data(d => Object.values(d))
        // .join("td")
        // .text(d => d)
        //.attr("class", "groups")
        .join(
          enter =>
            enter
              .append("td")
              .text(d => d)
              .attr("class", "hate-groups"),
            update => update,
            exit => exit.remove())


  }
}

export { Table };
