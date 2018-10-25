webpackJsonp([0x89e8225b523c],{382:function(n,s){n.exports={data:{markdownRemark:{html:'<hr>\n<p>path: "/unit-testing-(js)-with-jest"\ntitle: "Unit Testing (JS) With Jest"\npublished: true\ndate: "06-04-2018" </p>\n<hr>\n<h1>Unit Testing (JS) with Jest</h1>\n<p>Unit testing is a form of automated testing (a form of test which done programmatically). It means that we test each piece [unit[ of our code separate from the other parts of our code. </p>\n<!-- more --> \n<p>In this tutorial, we will make Fizzbuzz with a test-driven development approach. The testing tool we will be using is Jest (by Facebook) -  because as far as I\'m aware; it is the easiest to set up and I like Facebook\'s React library.  </p>\n<p>Disclaimer: It could be argued I don\'t yet fully understand test-driven development (TDD) and we will not be taking an extensive look at Jest. </p>\n<h1>Test Driven Development (TDD)</h1>\n<p>The main idea behind test-driven development is that we write our unit tests first which will then allow us to know [exactly[ what code we need to write - our test will fail due to non-existent code (red). We then write the code needed to pass the unit test, check that it passes (green), ask ourselves "does this code do what we want"? If not, write more code (red) Check if our updated code passes the test, if not (red), then keep writing until it does (green). And proceed with this (red green) cycle until we are satisfied. </p>\n<h1>Fizzbuzz</h1>\n<p> The concept of Fizzbuzz is that if a number is a multiple of 3, we output fizz, if its a multiple of 5 we output buzz, if it is a multiple of both 3 and 5 we output fizzbuzz, and I have an optional function (unit) which will let us know that it is neither fizz, buzz or fizzbuzz. </p>\n<h1>Setting Up</h1>\n<p>This tutorial assumes you have Node &#x26; NPM installed and thus are able to use the command line. Run "npm init" inside your project folder, make sure the entry point is called "fizzbuzz.js". The test command will be "jest", Everything else is optional and can be left as the default values if you wish. </p>\n<p>Now to install Jest run "npm install --save-dev jest". This will mean only our development environment will care about Jest as a package, </p>\n<p>Now create two files (assuming you haven\'t done so already): "fizzbuzz.js" and "fizzbuzz.test.js" - this is the file that Jest will know to look for our testing code in. And now we just have to write our unit test(s) than our code that will be tested - notice that we write a unit test first. To run our test we then type "npm run test", and the result of the test will be logged to the console (red = fail, green = pass). </p>\n<h1>Our First Test</h1>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"Check function which outputs fizz when multiple of 3 is given"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> \n    <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">fizz</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">"fizz"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> </code></pre>\n      </div>\n<p>What this code does is: check if that when the fizz function [unit} is invoked with 3 as its argument/parameter, the output will be fizz. This unit will not pass its test because the code does not exist, but at least we now know what code we have to write. </p>\n<p>This is what our fizz function will look like. </p>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">fizz</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// multiples of 3 </span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> \n        <span class="token keyword">return</span> <span class="token string">"fizz"</span><span class="token punctuation">;</span> \n    <span class="token punctuation">}</span> \n<span class="token punctuation">}</span> \nmodule<span class="token punctuation">.</span>exports<span class="token punctuation">.</span>fizz <span class="token operator">=</span> fizz<span class="token punctuation">;</span> <span class="token comment">// we have to export this function [unit] so that it can be used in our fizzbuzz.test.js file </span></code></pre>\n      </div>\n<p>We then have to import our function into our test file. For quickness, I\'m just going to put the code for each function that will be tested as a unit. </p>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> fizz <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./fizzbuzz"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>fizz<span class="token punctuation">;</span> \n<span class="token keyword">const</span> buzz <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./fizzbuzz"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>buzz<span class="token punctuation">;</span> \n<span class="token keyword">const</span> fizzbuzz <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./fizzbuzz"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>fizzbuzz<span class="token punctuation">;</span> \n<span class="token keyword">const</span> notFizzNorBuzz <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"./fizzbuzz"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>notFizzNorBuzz<span class="token punctuation">;</span> <span class="token comment">// neither fizz, buzz or fizzbuzz </span></code></pre>\n      </div>\n<p>If we run "npm run test" our one unit test will pass, unless we change its parameter/argument to something that is not a multiple of 3 - such as 2, this will cause our test to fail. This is the behavior we want.  </p>\n<h1>Something interesting regarding Unit Tests</h1>\n<p>Be aware that if we simply wrote: <code class="language-text">function fizz(n) { return &quot;fizz&quot;; }</code>; this is because of our unit testing only expecting "fizz" to be returned. Unit tests should not be 100% relied upon, Use your own judgment when able to ensure that the code does exactly what you want it to do - unit tests (and other automated tests) are more of a safety net than a replacement to a human. </p>\n<h1>Practice</h1>\n<p>We know that if we have a multiple of 3, we get fizz, but we still need buzz and fizzbuzz. I DARE YOU TO DO THIS PART YOURSELF - MAKE SURE YOU WRITE YOUR BUZZ UNIT TEST BEFORE THE BUZZ FUNCTION, AND THE FIZZBUZZ UNIT TEST BEFORE THE FIZZBUZZ FUNCTION. </p>\n<h1>Buzz Fizzbuzz Not Fizz and Not Buzz and not Fizzbuzz</h1>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">/// Unit Test </span>\n<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"Check function which outputs buzz when multiple of 5 is given"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> \n    <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">buzz</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">"buzz"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n\n<span class="token comment">/// Function to be tested </span>\n<span class="token keyword">function</span> <span class="token function">buzz</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span> \n    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">5</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> \n        <span class="token keyword">return</span> <span class="token string">"buzz"</span><span class="token punctuation">;</span> \n    <span class="token punctuation">}</span> \n<span class="token punctuation">}</span> \nmodule<span class="token punctuation">.</span>exports<span class="token punctuation">.</span>buzz <span class="token operator">=</span> buzz<span class="token punctuation">;</span> <span class="token comment">// we have to export this function [unit] so that it can be used in our fizzbuzz.test.js file </span>\n\n<span class="token comment">/// Unit Test </span>\n<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"Check function which outputs fizzbuzz when multiple of 3 and 5 is given"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> \n    <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">fizzbuzz</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">"fizzbuzz"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n\n<span class="token comment">/// Function to be tested </span>\n<span class="token keyword">function</span> <span class="token function">fizzbuzz</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span> \n    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> n <span class="token operator">%</span> <span class="token number">5</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> \n        <span class="token keyword">return</span> <span class="token string">"fizzbuzz"</span><span class="token punctuation">;</span> \n    <span class="token punctuation">}</span> \n<span class="token punctuation">}</span> \nmodule<span class="token punctuation">.</span>exports<span class="token punctuation">.</span>fizzbuzz <span class="token operator">=</span> fizzbuzz<span class="token punctuation">;</span> <span class="token comment">// we have to export this function [unit] so that it can be used in our fizzbuzz.test.js file </span>\n\n<span class="token comment">/// Unit Test </span>\n<span class="token function">test</span><span class="token punctuation">(</span><span class="token string">"Check function which outputs not fizz, buzz or fizzbuzzz"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> \n    <span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">notFizzNorBuzz</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token string">"not fizz, buzz or fizzbuzz"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     \n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n\n<span class="token comment">/// Function to be tested </span>\n<span class="token keyword">function</span> <span class="token function">notFizzNorBuzz</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span> \n    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token operator">||</span> n <span class="token operator">%</span> <span class="token number">5</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token operator">||</span> n <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">!=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> n <span class="token operator">%</span> <span class="token number">5</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> \n        <span class="token keyword">return</span> <span class="token string">"not fizz, buzz or fizzbuzz"</span><span class="token punctuation">;</span>  \n    <span class="token punctuation">}</span> \n<span class="token punctuation">}</span> \nmodule<span class="token punctuation">.</span>exports<span class="token punctuation">.</span>notFizzNorBuzz  <span class="token operator">=</span> notFizzNorBuzz<span class="token punctuation">;</span> <span class="token comment">// we have to export this function [unit] so that it can be used in our fizzbuzz.test.js file </span></code></pre>\n      </div>\n<h1>Optional</h1>\n<p>Feel free to write a test that will fail when a number that is not a multiple of 3 is given in the case of fizz and so on for buzz and fizzbuzz. Its important to not fear that your tests will fail, in fact, embrace this - also for the tests that should (eventually) pass - look forward to the time in which they do pass. Try not to write unit tests that deliberately pass every time. </p>\n<h1>More Practice</h1>\n<p>Writing good code and good unit tests take time and practice. Make sure your practice. And sooner or later you will reap the benefits of unit testing: quality code and clarity. </p>\n<h1>Why Unit Testing Rocks</h1>\n<p>In the case of the "notFizzNorBuzz " function, I accidentally put "n % 3 == 0" which obviously didn\'t return my expected result, but thankfully I had written the unit test beforehand so was able to quickly realize it was this exact function that I had to look at, and quickly realized my subtle mistake. </p>\n<h1>Finishing Up</h1>\n<p>We have confirmed each individual unit of our code works, but let\'s face it, this isn\'t exactly fizzbuzz is it? We will now make our "fizzbuzzMaster" function which will run fizz, buzz, fizzbuzz and notFizzNorBuzz. The "fizzbuzzMaster" function will essentially nest our smaller functions inside a for loop, which will determine what number we should pass to each function. </p>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">fizzbuzzMaster</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> \n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> \n        <span class="token function">fizz</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> \n        <span class="token function">buzz</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> \n        <span class="token function">fizzbuzz</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> \n        <span class="token function">notFizzNorBuzz</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> \n    <span class="token punctuation">}</span> \n<span class="token punctuation">}</span> \n<span class="token function">fizzbuzzMaster</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> </code></pre>\n      </div>\n<p>You can now begin to refactor (change) your individual functions and be [almost] confident that they still do exactly what they should do. </p>\n<h1>Integration Testing &#x26; Continuous Integration</h1>\n<p>There is one function we didn\'t test, and that is because this is not an isolated unit though it is comprised of individual units, thus it will have to be tested with an integration test - which is a blog post for another day. In a future blog post. I will demonstrate how to and identify the benefits of continuous integration (using CircleCI &#x26; Github). </p>\n<h1>Beware</h1>\n<p>While unit testing and integration testing etc can benefit greatly; automated testing does not guarantee that the code does exactly what you want it to do - you should multi check yourself at least once. Nor is automated testing is not a complete replacement to quality assurance. </p>',frontmatter:{path:"/unit-testing-(js)-with-jest",title:"Unit Testing (JS) With Jest"}}},pathContext:{}}}});
//# sourceMappingURL=path---unit-testing-js-with-jest-fe51c44fd6f3f1fa2cc7.js.map