<script setup></script>

<template>
  <div class="breadcrumbs_area commun_bread">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="breadcrumb_content">
            <h3>contact us</h3>
            <ul>
              <li><a href="index.html">home</a></li>
              <li><i class="fa fa-angle-right"></i></li>
              <li>contact us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="contact_area">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12">
          <div class="contact_message content">
            <h3>contact us</h3>
            <p>
              Claritas est etiam processus dynamicus, qui sequitur mutationem
              consuetudium lectorum. Mirum est notare quam littera gothica, quam
              nunc putamus parum claram anteposuerit litterarum formas human.
              qui sequitur mutationem consuetudium lectorum. Mirum est notare
              quam
            </p>
            <ul>
              <li>
                <i class="fa fa-fax"></i> Address : No 40 Baria Sreet 133/2
                NewYork City
              </li>
              <li>
                <i class="fa fa-phone"></i> <a href="#">Infor@roadthemes.com</a>
              </li>
              <li><i class="fa fa-envelope-o"></i> 0(1234) 567 890</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="contact_message form">
            <h3>Tell us your project</h3>
            <form
              id="contact-form"
              method="POST"
              action="https://whizthemes.com/nazmul/php/mail.php"
            >
              <p>
                <label> Your Name (required)</label>
                <input name="name" placeholder="Name *" type="text" />
              </p>
              <p>
                <label> Your Email (required)</label>
                <input name="email" placeholder="Email *" type="email" />
              </p>
              <p>
                <label> Subject</label>
                <input name="subject" placeholder="Subject *" type="text" />
              </p>
              <div class="contact_textarea">
                <label> Your Message</label>
                <textarea
                  placeholder="Message *"
                  name="message"
                  class="form-control2"
                ></textarea>
              </div>
              <button type="submit">Send</button>
              <p class="form-messege"></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
