
# Understanding Perlin Noise



This article is to present an easy-to-understand analysis of Ken Perlin's [Improved Perlin Noise(java),published in 2002.](http://mrl.nyu.edu/~perlin/noise/).


Perlin Noise can be used for any sort of wave-like, undulating material or texture. For example, it could be used for procedural terrain (Minecraft-like terrain can be created with Perlin Noise, for example), fire effects, water, and clouds. 

These effects mostly represent Perlin noise in the 2nd and 3rd dimensions, but it can be extended into the 4th dimension rather trivially. Additionally Perlin Noise can be used in only 1 dimension for purposes such as side-scrolling terrain(such as in Terraria or Starbound) or to create the illusion of handwritten lines.

Also, if you extend Perlin Noise into an additional dimension and consider the extra dimension as time, you can **animate** it. For example, 2D Perlin Noise can be interpreted as Terrain, but 3D noise can similarly be interpreted as undulating waves in an ocean scene.


Noise Dimension	| Raw Noise (Grayscale)	| Use Case
:---: | :---: | :---:
1 | ![](http://adrianb.io/img/2014-08-09-perlinnoise/raw1d.png) | ![](http://adrianb.io/img/2014-08-09-perlinnoise/use1d.png) <br>Using noise as an offset to create handwritten lines.
2 | ![](http://adrianb.io/img/2014-08-09-perlinnoise/raw2d.png) | ![](http://adrianb.io/img/2014-08-09-perlinnoise/use2d.png)  <br>By applying a simple gradient, a procedural fire texture can be created
3 | ![](http://adrianb.io/img/2014-08-09-perlinnoise/raw3d.png) | ![](http://adrianb.io/img/2014-08-09-perlinnoise/use3d.png) <br>terrain can be created with caves and caverns using a modified Perlin Noise implementation.

