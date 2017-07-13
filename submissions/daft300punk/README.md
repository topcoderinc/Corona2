### Video and Live Heroku deploy
1. Video - Inside
2. Live Deploy - https://serene-woodland-84470.herokuapp.com/

### Initial Setup
1. Clone the repsitory
2. ```cd react-corona```
3. ```npm install```
4. ```npm run dev``` launches the development build, with testing and linting running in watch mode.
5. This is based on react-slingshot starter kit. You may search for it in case some unforeseen error crops up.

### Other options
1. ```npm run build``` : spits the output in ```/deploy/dist```. A simple node server lives in ```/deploy/server.js```, configured to use files from ```/deploy/dist```.
2. ```npm run build``` : starts server with production build, make sure you run this command only after building.
3. Other commands can be referred to from ```package.json```

### Notes
+ Currently there are 5 categories. You can see them in the Bottombar.
  + All Activity
  + Design
  + Data Science
  + Development
  + Top Winners
+ These categories are configurable. So, any new can be added or removed.
+ Each category can have filters. Currently, I have all categories contain the same 4 filters
  + All Time
  + Last Week
  + Last Month
  + Last Year
+ Again, these are configurable.
+ The shown data points can be of two types - flat and magnitude. The flat one renders the data point as flat circle. These data points dont have the notion of magnitude. This can be seen in the top 4 categories mentioned in the first point.
+ Magnitude type will have the notion of magnitude. So for last category, i.e. Top Winners we can show long bars, whose length depends on the number of wins he had. This can be seen in 5th category i.e. Top Winners.
+ Design, Data Science, Development are assigned a color based on Topcoder logo. These are used consitently to mark the type of data point.

### Todo
+ Better responsive support. Since it uses webgl, I dont think we can hope for 100% support.
+ Testing for container components, and async actions. Also, the Globe component is kind of complex as of now, and depends on external libraries, so I have left its testing.
+ Not sure how much value it adds, but it would be cool to have a tooltip for all the data points rendered on globe. This is a little complex, since I didn't find a standard way of binding dom events to THREEjs Mesh. There is a library that does it - THREEx, and I tested it and it does work. So what needs to be done is, on click, the library will provide us the the coordiantes of click event in the world of THREEjs. Then we can use it to find which data point it belongs to by calculating minimum distance to all the points we have in our data set. This can be costly. This could be explored further.
+ Currently, I generate 1000 data points randomly and pass it using ```setTimeout``` to mock server delay. A graphql server, as mentioned in the competition could be added to suit the type of response the application expects

### Libraries used
+ Halogen - for loading spinners - https://github.com/yuanyan/halogen
+ webgl-globe - for globe features - https://github.com/dataarts/webgl-globe
+ <strong>Note:</strong> I have modified the globe library a lot to better suit our case. I added support for touch devices, although pinch zoom doesnt work currently, modified the way it accepts data points to suit our scenario, and to accept dynamically the type of graph it should plot - flat or the one with magnitude.
