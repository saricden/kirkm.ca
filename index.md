---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
isHome: true
---
<header id="header-banner" class="secondary">
  <div class="centerblock sm text-center">
    <h1>{{ site.slogan }}</h1>
  </div>
</header>

<div class="centerblock">

  <h2>Services Offered</h2>
  <div class="cols">
    <div class="col service">
      <div class="img" style="background-image:url({{ "/assets/rapid-prototyping.svg" | relative_url }});"></div>
      <h3>Rapid Prototyping</h3>
      <p>Want to bring your ideas into the world as quickly as possible? I'm here to help. Using a sprint-based development cycle, we can work together to iteratively develop your vision and quickly create a "minimum viable product", then enhance from there.</p>
    </div>
    <div class="col service">
      <div class="img" style="background-image:url({{ "/assets/ux-refinement.svg" | relative_url }});"></div>
      <h3>UX Refinement</h3>
      <p>Improve the user experience of your product with iterative UX design adjustments. I'll help you use analytic-driven research to understand your user's wants and needs, and design a product that completely fulfills them.</p>
    </div>
    <div class="col service">
      <div class="img" style="background-image:url({{ "/assets/product-scaling.svg" | relative_url }});"></div>
      <h3>Product Scaling</h3>
      <p>As your userbase grows, so too must your product. I can help you build your software stack such that it will be able to scale from a small community with a handful of users, all the way up to a community of hundreds of thousands or more.</p>
    </div>
  </div>

  <h2>Projects I've Worked On</h2>
  <div class="slideshow">
      <a class="slide">
        <div style="background-image:linear-gradient(rgba(12, 142, 218, 0.7), rgba(12, 142, 218, 0.7)), url({{ "/assets/screenshots/serious.jpg" | relative_url }});">
          <header>
            <h3>Serious Coffee</h3>
            <span class="tag">Mobile App</span>
            <span class="tag">Website</span>
          </header>
        </div>
      </a>
      <a class="slide">
        <div style="background-image:linear-gradient(rgba(12, 142, 218, 0.7), rgba(12, 142, 218, 0.7)), url({{ "/assets/screenshots/skateview.jpg" | relative_url }});">
          <header>
            <h3>Skateview</h3>
            <span class="tag">Website</span>
          </header>
        </div>
      </a>
      <a class="slide">
        <div style="background-image:linear-gradient(rgba(12, 142, 218, 0.7), rgba(12, 142, 218, 0.7)), url({{ "/assets/screenshots/golf-canada.jpg" | relative_url }});">
          <header>
            <h3>Golf Canada</h3>
            <span class="tag">Web App</span>
          </header>
        </div>
      </a>
  </div>
  <div class="slideshow">
      <a class="slide">
        <div style="background-image:linear-gradient(rgba(12, 142, 218, 0.7), rgba(12, 142, 218, 0.7)), url({{ "/assets/screenshots/designstor.jpg" | relative_url }});">
          <header>
            <h3>Designstor</h3>
            <span class="tag">Website</span>
          </header>
        </div>
      </a>
      <a class="slide">
        <div style="background-image:linear-gradient(rgba(12, 142, 218, 0.7), rgba(12, 142, 218, 0.7)), url({{ "/assets/screenshots/fbn.jpg" | relative_url }});">
          <header>
            <h3>Feeling Better Now</h3>
            <span class="tag">Web App</span>
          </header>
        </div>
      </a>
      <a class="slide">
        <div style="background-image:linear-gradient(rgba(12, 142, 218, 0.7), rgba(12, 142, 218, 0.7)), url({{ "/assets/screenshots/pmr.jpg" | relative_url }});">
          <header>
            <h3>PMRobot</h3>
            <span class="tag">Web App</span>
          </header>
        </div>
      </a>
  </div>

  <h2>What People Are Saying</h2>
  <div class="cols">
    <div class="col testimony">
      <img src="{{ "/assets/people/jason.jpg" | relative_url }}" alt="Jason Hanley" />
      <h3>Jason Hanley</h3>
      <span class="title">
        CTO, The Rumie Initiative
      </span>
      <blockquote>
        <p>Kirk is a talented developer with an amazing work ethic. He completed tasks on a variety of projects with us, including frontend HTML/CSS/Javascript and backend PHP and MySQL. We would work with Kirk again anytime.</p>
      </blockquote>
    </div>
    <div class="col testimony">
      <img src="{{ "/assets/people/simon.jpg" | relative_url }}" alt="Simon Carr" />
      <h3>Simon Carr</h3>
      <span class="title">
        Founder, NanoTyrano Interactive Ltd.
      </span>
      <blockquote>
        <p>I have worked with Kirk on a freelance basis and he is an excellent developer with an eye for craftmanship and detail and a very good understanding of web based technology stacks. He is a pleasure to work with!</p>
      </blockquote>
    </div>
    <div class="col testimony">
      <img src="{{ "/assets/people/tim.jpg" | relative_url }}" alt="Tim Smith" />
      <h3>Tim Smith</h3>
      <span class="title">
        Principal, The Pixel Shop
      </span>
      <blockquote>
        <p>While I only worked with Kirk for about a year at The Pixel Shop, during that time I was impressed with the energy and enthusiasm he brought to the team as well as his passion for web development & technology...</p>
      </blockquote>
    </div>
  </div>

  <h2>Technologies I Use</h2>
  <div class="tech-logos">
    <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank">
      <img src="{{ "/assets/techlogos/js.png" | relative_url }}" alt="JavaScript">
      JavaScript
    </a>
    <a href="https://reactjs.org/" target="_blank">
      <img src="{{ "/assets/techlogos/react.png" | relative_url }}" alt="ReactJS">
      ReactJS
    </a>
    <a href="https://redux.js.org/" target="_blank">
      <img src="{{ "/assets/techlogos/redux.png" | relative_url }}" alt="Redux">
      Redux
    </a>
    <a href="https://firebase.google.com/" target="_blank">
      <img src="{{ "/assets/techlogos/firebase.png" | relative_url }}" alt="Firebase">
      Firebase
    </a>
    <a href="http://www.php.net/" target="_blank">
      <img src="{{ "/assets/techlogos/php.png" | relative_url }}" alt="PHP">
      PHP
    </a>
    <a href="https://laravel.com/" target="_blank">
      <img src="{{ "/assets/techlogos/laravel.png" | relative_url }}" alt="Laravel">
      Laravel
    </a>
    <a href="https://www.mysql.com/" target="_blank">
      <img src="{{ "/assets/techlogos/mysql.png" | relative_url }}" alt="MySQL">
      MySQL
    </a>
    <a href="https://www.sqlite.org/" target="_blank">
      <img src="{{ "/assets/techlogos/sqlite.png" | relative_url }}" alt="SQLite">
      SQLite
    </a>
    <a href="https://jekyllrb.com/" target="_blank">
      <img src="{{ "/assets/techlogos/jekyllrb.png" | relative_url }}" alt="JekyllRB">
      JekyllRB
    </a>
    <a href="https://wordpress.org/" target="_blank">
      <img src="{{ "/assets/techlogos/wordpress.png" | relative_url }}" alt="WordPress">
      WordPress
    </a>
    <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank">
      <img src="{{ "/assets/techlogos/html5.png" | relative_url }}" alt="HTML5">
      HTML5
    </a>
    <a href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets" target="_blank">
      <img src="{{ "/assets/techlogos/css3.png" | relative_url }}" alt="CSS3">
      CSS3
    </a>
    <a href="https://git-scm.com/" target="_blank">
      <img src="{{ "/assets/techlogos/git.png" | relative_url }}" alt="Git SCM">
      Git SCM
    </a>
    <a href="https://www.npmjs.com/" target="_blank">
      <img src="{{ "/assets/techlogos/npm.png" | relative_url }}" alt="NPM">
      Node Package Manager
    </a>
    <a href="https://en.wikipedia.org/wiki/Linux" target="_blank">
      <img src="{{ "/assets/techlogos/linux.png" | relative_url }}" alt="Linux">
      Linux
    </a>
    <a href="https://www.ubuntu.com/" target="_blank">
      <img src="{{ "/assets/techlogos/ubuntu.png" | relative_url }}" alt="Ubuntu">
      Ubuntu
    </a>
    <a href="https://www.gnome.org/" target="_blank">
      <img src="{{ "/assets/techlogos/gnome.png" | relative_url }}" alt="GNOME (®)">
      GNOME(®)
    </a>
  </div>

  <h2>About Me</h2>
  <div class="about">
    <img src="{{ "/assets/people/kirk.jpg" | relative_url }}" alt="Kirk" />
    <p>Hi there! My name's Kirk and I've been passionately developing software for over 10 years. I absolutely love the creative potential software development provides. It's like Lego for adults, if you can dream it up, you can almost always build it.</p>
    <p>I write code for work, but also for fun. If you want to see the home of my open source work and other passion projects (including games, apps, and websites) please visit: <a href="//saricden.com" target="_blank">saricden.com</a>.</p>
    <p>In addition to coding, I also love skateboarding and enjoy drawing, reading a good book, or playing guitar. I grew up in Victoria, BC, Canada and wouldn't trade my hometown for anywhere else in the world!</p>
    <p>Really my favourite thing in the world to do is to create things. It doesn't matter if I'm hacking together an app, trying to paint a picture, or writing a story. As long as my mind is engaged in creative-mode, I feel like I'm on top of the world.</p>
    <p>If you want to get in touch about anything, business or otherwise, feel free to <a href="" data-scrollto="contact_me">contact me</a>.</p>
  </div>

  <h2>Get in Touch</h2>
  <div id="message-received" class="message success" style="display:none;">
    Your message was successfully delivered! Thank you!
  </div>
  <form action="https://formspree.io/worker.kirk@gmail.com" method="POST">
    <div class="control half">
      <label for="contact_name">Your Name</label>
      <input type="text" id="contact_name" name="emailer_name" />
    </div>
    <div class="control half">
      <label for="contact_email">Your Email</label>
      <input type="email" id="contact_email" name="_replyto" />
    </div>
    <div class="control">
      <label for="contact_subject">Subject</label>
      <input type="text" id="contact_subject" name="_subject" />
    </div>
    <div class="control">
      <label for="contact_message">Message</label>
      <textarea id="contact_message" name="message"></textarea>
    </div>
    <div class="control text-center">
      <input type="hidden" name="_next" value="//kirkm.ca/message-received">
      <input type="text" name="_gotcha" style="display:none;">
      <button type="submit">Send Message</button>
    </div>
  </form>

</div>