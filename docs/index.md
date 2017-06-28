

<img src="img/Desktop.jpg" width="750" />

* [Design Challenge](https://www.topcoder.com/challenge-details/30055851/?type=design&noncache=true)

* [Code Challenge 1: VISUAL REPRESENTATION OF TOPCODER ACTIVITY ](https://www.topcoder.com/challenge-details/30057746/)

### Code Challenge 1: VISUAL REPRESENTATION OF TOPCODER ACTIVITY Results
This challenge resulted in 4 visually appealing solutions.  The winning solution by choke68 was the only one that used the real data stream.  The live app can be seen [here](https://coronav2-choke68.herokuapp.com/)>   As you can see from the image below this solution is a rotating global that monetarily highlights activity by 3 concentric yellow rings that fade in and fade out in about a second as the globe turns.  It is interesting but does not show all the activity at a single view.   It requires the animation and to watch over a period of time to get a sense of the activity.  By looking at the source of this submission you can see that choke68 took a static list of 15000 cites that are already geocoded so they could be mapped by the streaming data that contained the city names.  The local pseudo geocoding service will allow for great performance when there are a large number of data points. 

<img src ="https://user-images.githubusercontent.com/1180747/27639661-7c3a361a-5bdc-11e7-95e7-7e398b857819.png"width ="500px" />

Another submission by daft300punk has really nice visuals but does not use the real data stream, However daft300punk did a great job representing what we wanted with the filtering.  See the screenshot below.

<img src="https://user-images.githubusercontent.com/1180747/27639805-f4de1fc8-5bdc-11e7-9807-0c20c61ff9d2.png" width="500px" />

Also you can see the live demo of this submission [here:](https://corona2-daft300punk.herokuapp.com/)
