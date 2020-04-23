## Data Source

The [Southern Poverty Law Center] has compiled a [database](https://www.splcenter.org/hate-map) of active hate groups in the U.S. since 2010. For the project, I am focusing on the recently released 2019 data.

- `hg.csv`: The raw data for 2019 lists each hate group by city (if applicable) and state, along with ideology. For each state, I added the per capita number of groups.
- `hg_ideology_across.csv`: Number of hate groups by ideology by state. This includes the same groups but in different locations within a state.
- `usStates.json`: GeoJSON file of the 50 states for mapping.
