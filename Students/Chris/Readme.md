# Chris Williams
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
    input:checked + label {
      color: red;
      font-weight: bold;
    }</style>
<style>
input.custom {caret-color: red; font: 16px "Helvetica", "Arial", "sans-serif"}
</style>
<fieldset>
    <label for="site-search">Search the site:</label>
<input type="search" id="site-search" name="q"
       aria-label="Search through site content">

<button>Search</button>
</fieldset>
<nav> 
<menu><button type="button">Home</button></menu> 
 <menu><button type="button">About me</button></menu>
 <menu><button type="button">Samples of my work</button></menu>
 <menu><button type="button">My Backround</button></menu>
 <menu><button type="button">Contact Me</button></menu>
</nav>
</Menu>
<fieldset>
This website is for Endicott Students ONLY. Please enter you student ID
    <form>
        <div class="controls">
    
            <label for="id">User ID:</label>
            <input type="text" id="id" name="id" />
    
            <input type="reset" value="Reset">
            <input type="submit" value="Submit">
    
        </div>
    </form>
<label for="name">Also, please enter you name</label>

    <input type="text" id="name" name="name" required
           minlength="4" maxlength="8" size="10">
</fieldset>
<main>
    <hgroup introducations>
<title>A Day in the Life of Chris Williams</title>
    </head>
    <body>
<div style="background-color: rgb(255, 251, 0);">
<section title>
        <hgroup about me>
<b><h1>A Day in the Life of Chris Williams</h1></b>
</section>
<section introducation>
<header>
    <h2><P>My Name is Chris. I am currently a student in the MSIT Master's Program at Endicott College. This is my first webcite for Advanced Web Programming. Enjoy!</P></h2>
    </header>
</section>
<section about me>
<article> 
    <h3><blockquote> "My daily life a huge techie. Which is why I am in this indussry and love techology. I also currently am working as a computer tech here in the college's IT departnment. I hope this class will give me a little more knowedge of what web prgramming is all about!"</blockquote></h3></article>
</article>
</main></hgroup></section>
<section side note and other stuff>
<aside>
    <hr><h4> On a side note, I also like to run for exereise and keep me in shape</h4></hr>
    <dl> <b>Facts about me</b>
    <dt> I love computers</dt>
    <pre><dd>Mac</dd>
    <dd>PC</dd>
    <dd>Linux</dd></pre>
    <dt> I also work for the college in IT</dt>
    <dt> I get free/reduced tituation</dt>
    <dt> I did not start out in this indussry</dt>
</dl>
<dl> <b>My Favorite Foods</b>
    <Li>Tachos</Li>
    <li>Pizza</li>
    <li>Pasta</li>
    <li>Bugers</li>
</dl>
<ol type="1"><b>Counties I want to visit (Ranked from first to last)</b>
    <Li>Ireland</Li>
    <li>England</li>
    <li>France</li>
    <li>Spain</li>
    <li>Iceland</li></ol>
<ul><b>Things I hate about the coronavirus</b>
<li>Can't do anything</li>
<li>Bars, Resturents, and events canceded</li>
<li>Kills People</li>
<li>Everywhere out of basic nesestities</li>
<li>No physcial class(could be good or bad based on how you look at it)</li>
</ul>
<fieldset>
    <legend>Counties I would like to visit</legend>
    <div>
      <input type="checkbox" id="Ireland" name="Country" value="Ireland">
      <label for="Ireland">Ireland</label>
    </div>
    <div>
      <input type="checkbox" id="Spain" name="country" value="Spain">
      <label for="Spain">Spain</label>
    </div>
    <div>
        <input type="checkbox" id="France" name="country" value="France">
        <label for="France">France</label>
      </div>
      <div>
        <input type="checkbox" id="Iceland" name="country" value="Iceland">
        <label for="Iceland">Iceland</label>
        <div>
            <input type="checkbox" id="Germany" name="country" value="Germany">
            <label for="Germany">Germany</label>
          </div>
      </div>
    </fieldset>
    <fieldset>
      <p>Let see if you can guess my 2 favorite colors?</p>
<div>
    <input type="color" id="Favorite" name="favorite"
           value="#e66465">
    <label for="Favorite">Favorite</label>
</div>
<div>
    <input type="color" id="Second Favorite" name="Second Favorite"
            value="#f6b73c">
    <label for="Second Favorite">Second Favorite</label>
</div>
</fieldset>
<fieldset>
<label for="Birthday">Can you guess my Birthday?</label>
<input type="date" id="start" name="trip-start"
       value="2018-07-22"
       min="2018-01-01" max="2018-12-31">
</fieldset>
<fieldset>
<label for="meeting-time">Can you also guess what time I was born?</label>

<input type="datetime-local" id="meeting-time"
       name="meeting-time" value="2018-06-12T19:30"
       min="2018-06-07T00:00" max="2018-06-14T00:00">
</fieldset>
<fieldset>
    <label for="start">What month do you think campus life will return back to normal?</label>

<input type="month" id="start" name="start"
       min="2018-03" value="2018-05">
</fieldset>
<fieldset>
    <label for="tentacles">Guess how many relationships I have been in?</label>

<input type="number" id="tentacles" name="tentacles"
       min="1" max="10">
</fieldset>
<fieldset>
    <p>Tell me about you. Are you are also in the IT field?</p>

<div>
  <input type="radio" id="huey" name="drone" value="huey"
         checked>
  <label for="huey">Yes</label>
</div>

<div>
  <input type="radio" id="dewey" name="drone" value="dewey">
  <label for="dewey">No</label>
</div>

<div>
  <input type="radio" id="louie" name="drone" value="louie">
  <label for="louie">No, but I am training to be in the future</label>
</div>
</fieldset>
<fieldset>
<p>Audio settings:</p>

<div>
  <input type="range" id="volume" name="volume"
         min="0" max="11">
  <label for="volume">Backround Music Level</label>
</div>

<div>
  <input type="range" id="cowbell" name="cowbell" 
         min="0" max="100" value="90" step="10">
  <label for="cowbell">Button Clicks</label>
  </div>
</fieldset>
<fieldset>
<label for="week">Choose a week in May or June to Join my Confercne</label>
<input type="week" name="week" id="camp-week"
       min="2018-W18" max="2018-W26" required>
</fieldset>
<fieldset>
<form action="url_of_form">
    <label for="FirstField">First field (enabled):</label>
    <input type="text" id="FirstField" value="Green"><br>
  
    <label for="SecondField">Second field (disabled):</label>
    <input type="text" id="SecondField" value="Grayed out" disabled="disabled"><br>
  
    <input type="button" value="Submit">
  </form>
  <style> 
input:enabled {
  color: #2b2;
}

input:disabled {
  color: #aaa;
}
</style>
  </fieldset>
  
Fun fact: Before I did IT I was doing Video Proudction. Check out my <a href="https://www.youtube.com/channel/UCzIOjdCuuOHPaxjN0sAoJWQ?view_as=subscriber">Youtube Chanel</a>
<dl>Now I would not say I waa that great at making videos. Buts heres a little time lapse it did. Which acually came out pretty cool</dl>
<iframe width="560" height="315" src="https://www.youtube.com/embed/q3hvGXg4xsw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</aside>
</section>
<section contact info>
<footer> <h5>Chris Williams
    <dl>Student in the MSIT Masters Program and Computer Technicain at Endicott College</dl></h5></footer>
<figure>
    <img src="San Diego.jpg" style="width: 25%;">
    <figcaption>Pacific Beach, San Diego, CA</figcaption>
</figure>
<address>
    <h6>Chris Williams
    <dl>Endicott College</dl>
    <dl>376 Hale Street, Beverly, MA</dl></h6>
</address>
</section>
</div>
<fieldset>
<label for="email">Enter your e-mail to connect with me</label>
<input type="email" id="email"
       pattern=".+@globex.com" size="30" required>
<label for="phone">Also, you may enter you phone number</label>

<input type="tel" id="phone" name="phone"
       pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
       required>

<small>Format: 123-456-7890</small>
<label for="appt">Best time to call you</label>

<input type="time" id="appt" name="appt"
       min="09:00" max="18:00" required>

<small>Office hours are 9am to 5pm</small>
</fieldset>
<fieldset>
    <label for="avatar">Need references in the IT field. Upload your resume or CV?</label>

<input type="file"
       id="avatar" name="avatar"
       accept="image/png, image/jpeg">
</fieldset>
<input id="my nickname" name=" my nickname" type="hidden" value="C.J.">
<fieldset>
    <label for="url">Have you own webcite to share. Enter it here!</label>

<input type="url" name="url" id="url"
       placeholder="https://example.com"
       pattern="https://.*" size="30"
       required>
</fieldset>
<fieldset>
    This section for admin use ONLY
        <div>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username">
        </div>
        
        <div>
            <label for="pass">Password (8 characters minimum):</label>
            <input type="password" id="pass" name="password"
                   minlength="8" required>
        </div>
        
        <input type="submit" value="Sign in">
    </fieldset>
    <input type="submit" value="Back to Top">
    </body>
</html>
## Links
