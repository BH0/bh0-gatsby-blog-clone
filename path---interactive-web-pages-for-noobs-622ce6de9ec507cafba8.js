webpackJsonp([0x8110d210ac78],{372:function(n,a){n.exports={data:{markdownRemark:{html:'<hr>\n<p>path: "/interactive-web-pages-for-noobs"\ntitle: "Interactive Webpages for Noobs"\npublished: true\ndate: "05-05-2018" </p>\n<hr>\n<p>I personally do not like to use the word noob, but I am sure you know what it means (someone new to a topic and thus lacks knowledge). </p>\n<p>You have probably used a lot of websites which use interactivity and thought "wow, I hope I can do that one day". I personally do this all the time. And this blog post is here to tell you; you can - with some hard work and passion. This blog post will give you a hint as to the kind of stuff you should be search-engining. </p>\n<p>The process of making web pages interactive (that is; they do something when given input) is called "DOM manipulation" by responding to events - Document-Object-Model which means that you manipulate the individual elements that exist on the web page. </p>\n<p>There are two technologies you should be aware of: CSS (version 3, though version 4 seems to be just around the corner) and Javascript. Javascript is a programming language and many perceive it to be complicated - so for now I will focus on CSS. You can do a lot with CSS. </p>\n<h1>CSS Hover</h1>\n<p>Yes, if you simply type "div:hover { /background-color: red; }" you can accomplish an interactive web-page. This means that a div will turn red when the mouse hovers over it. </p>\n<h1>Keyframes (Animations)</h1>\n<div class="gatsby-highlight" data-language="css">\n      <pre class="language-css"><code class="language-css"><span class="token atrule"><span class="token rule">@keyframes</span> moveElement</span> <span class="token punctuation">{</span>\n    <span class="token selector">from</span> <span class="token punctuation">{</span><span class="token property">top</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span><span class="token punctuation">}</span>\n    <span class="token selector">to</span> <span class="token punctuation">{</span><span class="token property">top</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span> \n<span class="token selector">div</span> <span class="token punctuation">{</span> \n\t<span class="token property">animation</span><span class="token punctuation">:</span> moveElement 3s infinite<span class="token punctuation">;</span> \n<span class="token punctuation">}</span> \n<span class="token selector">/* \ndiv:hover</span> <span class="token punctuation">{</span> \n\t<span class="token property">animation</span><span class="token punctuation">:</span> moveElement 3s infinite<span class="token punctuation">;</span> \n<span class="token punctuation">}</span> </code></pre>\n      </div>\n<p>Keyframe animations are a method of adding animations (a series of individual frames) to HTML elements. The above-uncommented code is automatic, but by combining that code with "hover" we can mimic user-interaction. Hint: look into "transform" and "transitions". </p>\n<h1>Media Queries (I am possibly cheating here)</h1>\n<p>Media queries are not technically a means of implementing interactivity to your web-page, though they can be used to detect the device\'s orientation which I am sure you can get creative with - not very flexible though and anything complex will likely require Javascript. You will learn media queries when you learn responsive design for mobile  devices so no code snippets here. </p>\n<h1>Javascript: Event Listeners &#x26; DOM Manipulation</h1>\n<p>You can attach an event listener to many HTML elements, an event listener basically waits for an interaction [from the user] to be performed on the element it is attached to and does something when so. </p>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">// when the web-page is clicked </span>\ndocument<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> e <span class="token operator">=></span> <span class="token punctuation">{</span> \n\t<span class="token comment">// make the web page red </span>\n\tdocument<span class="token punctuation">.</span>style<span class="token punctuation">.</span>cssText <span class="token operator">=</span> <span class="token string">"background-color: red;"</span><span class="token punctuation">;</span> \n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> </code></pre>\n      </div>\n<p>I plan on going more in depth on this in future blog posts, but there are many style properties and many types of events (hover, click, etcetera), You can even dynamically add and remove CSS classes and IDs as well as entire elements using Javascript. </p>\n<h1>Libraries</h1>\n<p>Doing things with vanilla Javascript may be complicated and time-consuming for you so there are many libraries like JQuery out there which exist to make this kind of stuff easier.  </p>',frontmatter:{path:"/interactive-web-pages-for-noobs",title:"Interactive Webpages for Noobs"}}},pathContext:{}}}});
//# sourceMappingURL=path---interactive-web-pages-for-noobs-622ce6de9ec507cafba8.js.map