<h1>Lifting Heavy Weights and Writing Lightweight Code</h1>
<br>
I was hired by a representative of a canoe building comapny called ARE Tahiti Outrigger to redesign their old website. I was asked to make the new site load quickly, do a better job of
displaying content compared to the old site, and look good on any screen size. Working within those parameters, this is what I built: 
<br>
<br> 
<div align='center'>
  <img width='50%' src='https://media.giphy.com/media/Vwf0G57SrWa4bqkouc/giphy.gif'/>
</div>
<br>
<h1>How It's Made:</h1>
<br>

**Tech Used:** Adobe XD, HTML, CSS, JavaScript, Django, Bootstrap and SQLite
<br>
<p>I started by building out prototypes and reviewing them with the client to hammer out the design
of the new site. Once that was completed, I got to work blocking out the website in HTML and CSS.
I used Bootstrap for the navbar as well as the image carousels on the individual boat pages. Aside
from that, I wrote all of the HTML and CSS from scratch.</p>
<br>
<p>One of the clients biggest priorites was mobile responsiveness, so a lot of time was put into making 
sure that all of the elements scall properly to keep the pages looking nice and clean. Once I had the
site blocked out, I set up the SQLite database, using the Django model system. The site uses an API I built to manage
and display the companies inventory using Django's built in admin interface.</p>
<br>
<p>After I completed the API and invetory system, I moved on to writing the JavaScript functionality. The
client needed to the website to be translated into multiple langauges, so I wrote function to handle swapping 
the languages when a user clicks a button. This was done by translating each block of text into different languages
and turning them off when the user selects a new langauge.</p>
<br>
<p>And finally, I created a checkout system for the site using the PayPal developer API. All of 
code was taken from the PayPal website. This is to ensure that the code was secured and none of the 
users' personal information could be leaked.</p>
<br>
<h1>Optimizations</h1>
<br>
<p>One area I could definitely improve is the language translation system. Beyond a certain point it no longer becomes feasible to continue copying over text as I introduce languages. A better solution would be to dynamically load the text or elemnts and inject them into the page dynamically using JavaScript. But for right now, the system is simple and works, so until necessary I'm going to leave it as is.</p>
<br>
<h1>Lessons I Learned</h1>
<br>
<p>One of the big things this project taught me was the value of planning ahead. If I hadn't taken the time to communicate with the client, I probably would have spent a huge ammount of time and effort making small design changes that would have bogged down the design process.</p>
<br>
<p>I also learned how important it is to know how to find resources for what you're working on. Since I was working on this project alone, my Googling skills were really put to the test everytime I ran into an obstacle.</p>
