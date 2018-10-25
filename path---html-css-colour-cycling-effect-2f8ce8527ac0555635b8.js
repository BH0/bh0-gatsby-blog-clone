webpackJsonp([0xce91591b9b52],{367:function(n,a){n.exports={data:{markdownRemark:{html:'<hr>\n<p>path: "/html-css-colour-cycling-effect"\ntitle: "HTML &#x26; CSS Colour Cycling Effect"\npublished: true\ndate: "11-08-2018" </p>\n<hr>\n<p>In this tutorial we will learn how to make a divs\' background-color cycle through a set of colours using HTML and CSS. </p>\n<!-- more --> \n<p>Here is our HTML (but you can use pretty much any HTML of your choosing). </p>\n<div class="gatsby-highlight" data-language="html">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span> \n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>My Parent-element\'s [the div] background will cycle through colours.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span> \n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span> </code></pre>\n      </div>\n<p>We accomplish this colour changing effect using an animation, which will give our element a different colour, at each predefined interval. Here is our keyframe animaiton. </p>\n<div class="gatsby-highlight" data-language="css">\n      <pre class="language-css"><code class="language-css"><span class="token comment">/* The animation code */</span>\n<span class="token atrule"><span class="token rule">@keyframes</span> cycleThroughColours</span> <span class="token punctuation">{</span>\n  <span class="token selector">1%</span> <span class="token punctuation">{</span> <span class="token comment">/* one percentage in to anaimtion change color to red  */</span> \n    <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span> \n  <span class="token punctuation">}</span> \n  <span class="token selector">30%</span> <span class="token punctuation">{</span> <span class="token comment">/* thirty percentage in to anaimtion change color to blue  */</span>\n    <span class="token property">background-color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span> \n  <span class="token punctuation">}</span> \n  <span class="token selector">60%</span> <span class="token punctuation">{</span> <span class="token comment">/* sixty percentage in to anaimtion change color to green */</span> \n    <span class="token property">background-color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span> \n  <span class="token punctuation">}</span>\n  <span class="token selector">90%</span> <span class="token punctuation">{</span> <span class="token comment">/* ninety percentage in to anaimtion change color to orange  */</span> \n    <span class="token property">background-color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span> \n  <span class="token punctuation">}</span> \n  <span class="token selector">100%</span> <span class="token punctuation">{</span> <span class="token comment">/* when the animaiton is done, change the color back to red */</span> \n    <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span> \n  <span class="token punctuation">}</span> \n<span class="token punctuation">}</span> </code></pre>\n      </div>\n<p>In my example, I target a div, but you can target essentially any other element you want, I then give it properties. I make divs\' background-color red, then I set its width and height to 100rem - because I want to stretch the size of the div. </p>\n<p>And we assign our div with an animaiton proeprty, whihc will be the animation we just made, the animation will last for 3 seconds and will never end - this is accomplished using the "infinite" keyword. </p>\n<p>Here is the div element\'s properties. </p>\n<div class="gatsby-highlight" data-language="css">\n      <pre class="language-css"><code class="language-css"><span class="token selector">div</span> <span class="token punctuation">{</span> \n  <span class="token property">background-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span> \n  <span class="token property">animation</span><span class="token punctuation">:</span> cycleThroughColours infinite 3s<span class="token punctuation">;</span> \n  <span class="token property">width</span><span class="token punctuation">:</span> 100rem<span class="token punctuation">;</span> \n  <span class="token property">height</span><span class="token punctuation">:</span> 100rem<span class="token punctuation">;</span> \n<span class="token punctuation">}</span> </code></pre>\n      </div>\n<h1>What Now</h1>\n<p>Feel free to experiment with and improve upon this simple example, CSS keyframe animations are wonderful, and I highly suggest you learn more about them if you are interested. </p>',frontmatter:{path:"/html-css-colour-cycling-effect",title:"HTML & CSS Colour Cycling Effect"}}},pathContext:{}}}});
//# sourceMappingURL=path---html-css-colour-cycling-effect-2f8ce8527ac0555635b8.js.map