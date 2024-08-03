<h1>Node.js Interview Questions</h1>

<h2>1. What is Node.js?</h2>
<p>Node.js is an open-source, cross-platform runtime environment for JavaScript. For example, on the browser console, if we pass <code>console.log('hello')</code>, we get 'hello'. But if we pass the same on our system, we get an error. To run this, we first use Node.js, then we can run <code>console.log</code>.</p>
<p>Basically, JavaScript is used only on the browser side. But if we want to run JavaScript outside the browser, we use Node.js.</p>
<p><strong>Always remember:</strong> Node.js works only on JavaScript files. Here, we only work on the backend, so UI parts of JavaScript like <code>alert</code>, <code>window</code>, <code>createElement</code>, <code>removeElement</code>, etc., are removed from Node.js.</p>

<h2>2. Version of Node.js?</h2>
<p>20.16.0</p>

<h2>3. What is the use of <code>package.json</code> and why do we use it?</h2>
<p>Basically, it is a configuration file that shows the data or packages we use in the project. To install it, use the command <code>npm init -y</code>.</p>
<p>We use it because when we connect files to a database, there are a lot of files present. To avoid confusion about which packages are already installed, we check this folder to see which packages are present. Additionally, we can just use <code>npm start</code> in the script instead of always passing <code>node filename.js</code>.</p>

<h2>4. What are Modules in Node.js?</h2>
<p>Basically, modules are like building blocks of our application. They allow us to organize our application into pieces of code that can be reused. For example, <code>https</code>, <code>fs</code>, <code>path</code>, etc.</p>

<h2>5. What is <code>fs</code>?</h2>
<p><code>fs</code> stands for File System. It is built-in in Node.js. It provides interaction with the file system of our system. We can use it to read, delete, create, and update files.</p>
<pre><code>const fs = require('fs')</code></pre>

<h2>6. What is UTF-8?</h2>
<p>Basically, it helps to encode our file type. For example, we have video files, text files, etc., so we use it to specify which type of file we want to encode.</p>

<h2>7. What is the difference between Async & Sync?</h2>
<p><strong>Sync (Synchronous) Operations:</strong></p>
<p>- Sync functions will return something while Async functions will not. Async functions check if a callback function is provided.</p>

<p><strong>Async (Asynchronous) Function (Non-Blocking Operation):</strong></p>
<pre><code>fs.writeFile("text.txt", "Hey anurag with async", (err) => {
    console.log(err);
})</code></pre>

<p><strong>Sync (Synchronous) Function (Blocking Operation):</strong></p>
<pre><code>const result = fs.writeFileSync("text.txt", "Hey anurag");
console.log(result);</code></pre>

<h2>8. Explain Node.js architecture? (Important Question)</h2>
<p>- First, the client/user makes a request, which goes to the event queue.</p>
<p>- The event queue works on FIFO (First In First Out).</p>
<p>- Then it goes to the Event Loop, which checks if there are any requests.</p>
<p>- We have two operations: Blocking (Sync) & Non-Blocking (Async).</p>
<p>- Non-Blocking (Async) operations check and immediately return the result. They do not wait and execute the faster ones first.</p>

<pre><code>console.log('1');
fs.readFile("text.txt", "utf-8", (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
});
console.log('2');
console.log('3');
console.log('4');</code></pre>

<p>- Blocking (Sync) operations go to the thread pool (default thread pool size is 4).</p>
<p>- The thread pool assigns a task to a thread.</p>
<p>- Once the thread completes the task, it returns the request.</p>
<p>- Blocking operations wait and go with the flow.</p>

<pre><code>console.log("1");
const result = fs.readFileSync("text.txt", "utf-8");
console.log(result);
console.log('2');
console.log('3');
console.log('4');</code></pre>

<h2>9. What is a Thread Pool?</h2>
<p>Basically, a thread pool is a pre-installed set of threads. It has a fixed number of threads (by default, 4) and can go up to 8.</p>
