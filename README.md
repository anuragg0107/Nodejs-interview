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

<h2>10. Difference between Http and Https?</h2>
<p>HTTP (Hyper Text Transfer Protocol) and HTTPS (Hyper Text Transfer Protocol Secure) are protocols for data communication.</p>
<p><strong>Key Differences:</strong></p>
<p>- HTTPS is more secure than HTTP.</p>
<p>- HTTPS files are encrypted with an SSL certificate, whereas HTTP does not use SSL. This means HTTP is more vulnerable to interception and data breaches.</p>

<h2>11. What is a URL?</h2>
<p>URL (Uniform Resource Locator) is an address used to visit a website.</p>
<p><strong>Example:</strong> https://nodejs.org/</p>
<p>1) <code>https</code>: Protocol</p>
<p>2) <code>nodejs.org</code>: Domain Name</p>
<p>3) <code>/</code>: Path (e.g., home, about, contact us, features, etc.)</p>
<p><strong>Nested Path:</strong> https://nodejs.org/about/1</p>
<p><strong>Query Parameter:</strong> https://nodejs.org/about?userid=1&a=2</p>

<h2>12. Explain GET, POST, PUT, PATCH, DELETE methods?</h2>
<p><strong>GET:</strong> Used to request data from the server.</p>
<p>Example: www.youtube.com/search</p>

<p><strong>POST:</strong> Used to send data to the server.</p>
<p>Example: Filling out a signup form.</p>

<p><strong>PUT:</strong> Used to update the entire profile with new details.</p>
<p>Example: Updating an image and other profile details.</p>

<p><strong>PATCH:</strong> Used to update specific parts of a profile (e.g., just the bio).</p>
<p>Example: Updating only the mobile number or name.</p>

<p><strong>DELETE:</strong> Used to delete something.</p>
<p>Example: Deleting a specific item.</p>

<h2>13. Difference between local storage, session storage and cookies?</h2>
<p><strong>Local Storage:</strong> Larger, long-term storage data that can not expire automatically.</p>
<p>Good for storing data you want to keep around for a long time. <strong>Size Limit :</strong> 5-10 MB.</p>
<p><strong>Session Storage:</strong> It is temporary stroage data but</p>
<p>is deleted when the browser is closed. <strong>Size Limit :</strong> 5-10 MB.</p>
<p><strong>Cookies:</strong> Cookies are small pieces of data that websites store on your computer or device when you visit them.</p>
<p>They help the website remember information about you, like your login details, preferences, or what's in your shopping cart.</p>
<p>his way, when you visit the website again, it can provide a more personalized experience without asking for the same information every time. <strong>Size Limit :</strong> 4 kb. </p>

<h2>13. Explain Middleware?</h2>
<p>Middleware is an helper or mideator to do some work on user requrest before reach to final destination.</p>
<h2>Understanding Express Middleware: A Simple Analogy</h2>

<h3>Imagine This Scenario:</h3>

<p><strong>A Visitor at the Door:</strong> Picture your Express app as a house. A visitor (user) arrives and knocks on the door (makes a request).</p>

<p><strong>Security Check (Middleware 1):</strong> The first thing that happens is a security guard (the first middleware) checks the visitor’s ID (logs the request details). Once the check is complete, the guard allows the visitor to proceed.</p>

<p><strong>Coat Room (Middleware 2):</strong> Next, the visitor stops by a coat room, where they might hang their coat (another middleware). Here, the middleware might perform a specific task, like checking if the visitor has a special pass (for example, verifying if the user is logged in). After this, the visitor continues their journey.</p>

<p><strong>Visitor Reaches the Host:</strong> Finally, the visitor arrives at the host (the final route handler), who asks, “What can I do for you?” The host then provides whatever the visitor requested (sends the response).</p>

<h3>Example in Code</h3>

<pre>
<code>
const express = require('express');
const app = express();

// First middleware: Security Check
app.use((req, res, next) => {
  console.log('Security: Checked the request details.');
  next(); // Let the visitor move to the next step
});

// Second middleware: Coat Room
app.use((req, res, next) => {
  console.log('Coat Room: Checking for a special pass.');
  // Here you might check if the user is logged in, for example
  next(); // Let the visitor move to the host
});

// Host: Final destination where the visitor gets a response
app.get('/', (req, res) => {
  res.send('Welcome to the house!');
});

// Start the server
app.listen(3000, () => {
  console.log('House is open on port 3000');
});
</code>
</pre>

<h3>Summary</h3>

<p>In this analogy, <strong>middleware</strong> acts as a series of checkpoints (like the security check or coat room) that a visitor (the user's request) must pass through before reaching the host (where the server decides how to respond). Each middleware can perform crucial tasks, such as logging the request, verifying user credentials, or modifying the request.</p>

<p>Finally, the <strong>host</strong> (route handler) sends the response, like welcoming the visitor into the house.</p>

<h2>14. Explain Middleware?</h2>
