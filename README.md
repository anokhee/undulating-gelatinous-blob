# Undulating, Gelatinous Blob

An experimental personal code project to create some kind of 2D physics engine to achieve a 'blobby' effect. This is the function I came up with to create random animation: 

<pre>
function change(part, attr, min, max, deltaMin, deltaMax, x) {
    let delta = Math.random() * (deltaMax - deltaMin) + deltaMin;

    if (part[x]) {
        part[attr] += delta;
    } else if (!part[x]) {
        part[attr] -= delta;
    }

    if (part[attr] <= min) {
        part[x] = true;
    } else if (part[attr] >= max) {
        part[x] = false;
    }
}
</pre>

Results (gradient randomizes upon refresh): 

<img width="45%" src="demo1.gif">
<img width="45%" src="demo2.gif">
