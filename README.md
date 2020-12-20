# Christmas Converter

## Holidays, but with deception

Christmas converter is a website to add some Christmas Cheer to all your photos. During the difficult times of COVID, friends and family are unable to join together and celebrate the holidays. One way to deal with this problem is to fake some Christman photos. Provide an image to the website from your computer (Hit the "Browse" button) and choose the cosmetics you would like to add to your photos. After that, click "Click me" and the website will return the same photo, but with a bit of the Christmas spirit! Santa's hat and beard and elf hats can be added to your photos. Even if you can't celebrate Christmas together, you can certainly pretend you did!


This website uses OpenCVJS for face-detection using haar-classifiers. Once faces are detected, the bounding box for each face will be provided and the necessary hats and beards will be applied accordingly using p5.js. 

Read our documentation **[here](https://jackliu612.github.io/HackUMass/js/out/index.html)** 
## Self-hosting instructions

This is a static web page. Download the repository and run it as a static server (install the npm package "static-server" and run "static-server" in Command Line). Go to the localhost on the given port and the website will function locally. 

## Examples

![Soccer players](img/sample1.png)
![Santa Lenna](img/sample2.png)