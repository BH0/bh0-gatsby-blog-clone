webpackJsonp([64672452356029],{359:function(n,a){n.exports={data:{markdownRemark:{html:'<hr>\n<p>path: "/a-simplified-introduction-to-objects-in-javascript"\ntitle: "A Simplified Introduction To Objects In Javascript"\npublished: true\ndate: "10-11-2017" </p>\n<hr>\n<p>The scope of this post: this post will cover what objects are, how to create your own object and access an object’s data. But it will not touch on prototypes, parents and children, destroying objects and when to use a particular method of creating an object (it also ignores JSON format and leaves a lot out regarding scope). It also ignores many other topics related to object oriented programming.</p>\n<p>Firstly, what is an object and why might we want one? Objects can be containers of data - think “variables on steroids”, the great thing about them is that it can be a decent chunk of code written once but reused multiple times in multiple ways - this is accomplishable as you can create as many instances of an object as you want - an instance is essentially the object with it\'s own ID meaning it won\'t affect the others. They\'re often used for namespacing too. Also, everything or at least most things in Javascript is an object.</p>\n<h2>How to create an object: There are three ma8n ways</h2>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">/// Object Literal </span>\n<span class="token keyword">var</span> car <span class="token operator">=</span> <span class="token punctuation">{</span> \n    fuelVariable<span class="token punctuation">:</span> <span class="token number">300</span><span class="token punctuation">,</span> \n    driveFunction<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n    <span class="token punctuation">}</span> \n<span class="token punctuation">}</span>\n<span class="token comment">/// “new” and Constructor Functions (similar to classes - first letter should be capitalised) var car = new Object; function Person(age) { this.personAge = age; } var oldPerson = new Person(200); // new AnArray().localArray[1]; console.log("age: " + oldPerson.personAge);</span>\n\n\n<span class="token keyword">var</span> car2 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>car<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Try not to get confused by the syntax. To access data inside an object simply do “objectName.variableName” or “this.propertyName” if you\'re inside the object - a property is anything you associate with that particular object. Personally I use the Constructor function or the Object Literal method which I\'ll hopefully explain why in a future post. </p>',frontmatter:{path:"/a-simplified-introduction-to-objects-in-javascript",title:"A Simplified Introduction To Objects In Javascript"}}},pathContext:{}}}});
//# sourceMappingURL=path---a-simplified-introduction-to-objects-in-javascript-3bf8c09df8264b57ae64.js.map