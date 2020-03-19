## Prospectus

For the Exploratory Data Visualization project, I would like to take a look at cetaceans in captivity in the U.S. This information is listed in Ceta Base's [Cetacean Database](https://www.cetabase.org/captive/cetacean/), which contains more than 600 known individual whales and dolphins, nearly three-quarters of those were born into captivity while one-fifth were captured. The data also includes the date the mammal entered into captivity – which in some cases would imply their date of birth. My primary question would be whether the number of cetaceans in captivity has decreased over the decades. From there, I would also ask: 

- Where are the mammals held – throughout the U.S. and/or are there any geographic “hotspots”? 
- For those not born into captivity, which spots in the wild did they come from? Any hotspots there?
- What kinds of whales and/or dolphins dominate in the data?

This would probably best target users with some interest in whales and dolphins whether that be in support of animal captivity or not. But it could be viewed by anyone regardless of their familiarity with the subject matter.

While the locations of each individual cetacean’s origin and current home are included in the data, I will have to give latitude and longitude coordinates to map them. In this case, and to answer the questions above, I’ll use R to find aggregated numbers, including of:

- Count by origin locations and last/present locations
- Count by species
- Count by manner of entering captivity
- Count by year acquired

## Sketch

![alt text](https://github.com/cheje/idv-final/raw/master/prospectus-sketches/cetaceans.png "Sketch")

I’ve narrowed down the chart types to a few (map, line, bar) with some possible others (treemap, table) in that they seem to best present aggregated forms of the data while still allowing the user to change features in the data. For example, a line chart can show over the years how many individuals of a particular species came into captivity. The viewer can change the type of species via a dropdown menu. I would like to go with the direction where the map is the main visualization with the line and bar charts in the “supporting” role.

## Mockups

![alt text](https://github.com/cheje/idv-final/raw/master/prospectus-sketches/idv-1mockup.png "Mockup")

1. Two maps to represent the geographical locations of where the animal was acquired and their latest/current location. 

   - Interactions expected by user: If they hover over the circles, a tooltip will pop up with information on location and number of cetaceans.
   
   - Interactions to enhance experience: Ideally the user would be able to swap between those two variables (acquired and last location).
   
   - Context: Maybe links/info to select locations

2. Bar charts showing count by species, decade acquired, count by locations (origin/last)

   - Interactions expected by user: Some kind of hovering effect? Tooltip?
   
   - Interactions to enhance experience: Swapping between variables
   
   - Context: Links to more info?

3. Line/area chart showing counts over decades by species

   - Interactions expected by user: Hovering and tooltip showing count and year at each point
   
   - Interactions to enhance experience: 
     - Dropdown menu to select by species
     - Some kind of transition effect?

   - Context: Info/pictures on species
