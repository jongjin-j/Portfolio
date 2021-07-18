---
title: GIS Mapping Software
stack: C++
slug: GoogleMaps
projectImage: ../images/GoogleMaps.png
link: https://www.youtube.com/watch?v=_91wIJ_akvU&t=141s&ab_channel=JongjinJung
---

This project is a city mapping GIS software developed in C++ through using the OpenStreetMap Database. It was developed by myself and two other teammates using git version control. By utilizing the EZGL graphics library, we rendered geographical features and many points of interests in a single city. It also has a navigation system that allows the user to find an optimal path from one place to another, using path-finding algorithms such as Dijkstras and A* Heuristics. We attempted to solve the Travelling Salesman Problem using 2-opt, 3-opt, and simulated annealing.

<br/><br/>

### More about the Project

The rendering of the points of interests and streets are designed in a way that they appear after a certain zoom level in order to prevent cluttering. At lower zoom levels, the mapper would only display geographical features such as green spcaes and blue spaces, plus highways and major roads. The two street search bars for locations allows the users to search a starting point and an end point to find the optimal path between the two. The city search bar allows the user to switch between major cities they want to display, which includes Toronto, New York, London, and many others. 

The following link is to the video of demonstrating the mapping software: https://www.youtube.com/watch?v=_91wIJ_akvU&t=141s&ab_channel=JongjinJung