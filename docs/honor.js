$(document).ready(function() {
  /* SPEED DIAL */
  $(`#speedDialTrigger`).on(`click`, function(){
    // prevent conflict with both open
    $(`#language`).removeClass(`open`);

    if ($(this).parent().hasClass(`open`)) {
      // close speed dial
      $(`#speedDial`).removeClass(`open`);
      $(`#speedDial li`).removeClass(`show`);
      return;
    }

    $(this).parent().addClass(`open`);
    $(`#speedDial li`).toArray().reverse().forEach(function(li, i) {
      window.setTimeout(function(){
        $(li).addClass(`show`);
      }, (i+1)*30 );
    });
  });

  $(`#overlay, #dismiss`).on(`click`, function(){
    if ($(`#speedDial`).hasClass(`open`)) {
      $(`#speedDialTrigger`).click();
    }
  });
  /* END SPEED DIAL */

  /* LANGUAGE SELECTOR */
  $(`#language`).on(`click`, function(e) {
    $(this).toggleClass(`open`);
    if (e.target.tagName !== `LI`) { return; }

    var path = window.location.pathname.split(`/`);
    var selectedLanguage = e.target.dataset.language;

    path = path.filter(function(str){
      if (str !== `` && str !== undefined) return str;
    });

    // short circuit
    if (path[0] === selectedLanguage) return;

    switch(path[0]) {
      case `cn`: // Site is currently in Chinese
        path = path.slice(1);
      break;
      default: // Site is currently in US English
        // path is not prepended with a language string
        if (selectedLanguage === `en`) return;
      break;
    }

    if (selectedLanguage !== `en`) {
      path.unshift(selectedLanguage);
    }

    window.location.href = window.location.origin+`/`+path.join(`/`);
  });
  /* END LANGUAGE SELECTOR */

  /* CAROUSEL */
  $(`carousel-group`).on(`click`, `.control`, function(e){
    var el = e.target;
    var str = Array.from(e.target.classList);
    var dots = $(`.indicator i`).toArray();
    var quotes = $(el).parents(`carousel-group`).find(`blockquote`).toArray();
    var clickedIndex = Array.prototype.slice.call(el.parentElement.children).indexOf(el);
    var activeIndex;

    quotes.forEach(function(quote, i) {
      if ($(quote).hasClass(`active`)){
        activeIndex = i;
      }
    });

    $(quotes).removeClass(`active`);
    $(dots).removeClass(`active`);

    switch(true) {
      case /next/.test(str):
        if(quotes[activeIndex+1] != undefined) {
          $(quotes[activeIndex+1]).addClass(`active`);
          $(dots[activeIndex+1]).addClass(`active`);
        } else {
          $(quotes[0]).addClass(`active`);
          $(dots[0]).addClass(`active`);
        }
        break;

      case /prev/.test(str):
        if(quotes[activeIndex-1] != undefined) {
          $(quotes[activeIndex-1]).addClass(`active`);
          $(dots[activeIndex-1]).addClass(`active`);
        } else {
          $(quotes[quotes.length-1]).addClass(`active`);
          $(dots[quotes.length-1]).addClass(`active`);
        }
        break;

      case /fa-circle/.test(str):
        $(quotes[clickedIndex]).addClass(`active`);
        $(dots[clickedIndex]).addClass(`active`);
        break;
    }

  });
  /* END CAROUSEL */

  /* ALERT */
  $(`.alert`).on(`click`, function(){
    var alert = $(this);
    var message = alert.find(`.message`);
    var dismiss = alert.find(`.dismiss`);
    alert.addClass(`expanded`);

    message.slideDown();
    dismiss.on(`click`, function(e){
      e.stopPropagation();
      alert.removeClass(`expanded`);
      message.slideUp();
      dismiss.off(`click`);
    })
  });
  /* END ALERT */

  /* CONTACT FORM */
  window.submitting = false;
  $(`#contact`).on(`click`, `button`, function(e){
    e.preventDefault();
    if (window.submitting) return;

    var errors = checkMessage();
    if (errors.length) {
      console.log(`invalid input`);
      return;
    }

    sendMessage();

    // notify user
    $(`#contact`).on(`click`, `.dismiss`, function(){
      $(`#contact .status`).slideUp().remove();
      $(`#contact aside`).slideDown();
    });

  });
});

/* CONTACT FORM */
function checkMessage() {
  var fieldErrors = [];
  var nameRegex = /^[a-zA-Z]+$/,
      RFC5322EmailRegex = /(?:[A-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[A-z0-9](?:[A-z0-9-]*[A-z0-9])?\.)+[A-z0-9](?:[A-z0-9-]*[A-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
      phoneRegex = /^[\+]?\d{0,3}?[(-\s\.]?[2-9]{1}\d{2}[)]?[-\s\.]?[2-9]{1}\d{2}[-\s\.]?\d{4,6}$/,
      field =  `checkEverything`;

  checkNotEmpty(`#nameInput`);
  checkNotEmpty(`#companyInput`);
  checkPhone();
  checkEmail();
  checkNotEmpty(`#messageInput`);

  function checkNotEmpty(el) {
    var entry = $(el);
    if (entry.val().trim() === ``) {
      inputValid = false;
      var msg = `Please complete all fields`;
      entry.addClass(`invalid`);
      fieldErrors.push(el);
    } else entry.removeClass(`invalid`);
  }

  function checkPhone() {
    var el = `#phoneInput`
    if (!phoneRegex.test($(`#phoneInput`).val().trim())) {
      inputValid = false;
      var msg = `Please make sure you entered a valid phone number`;
      $(`#phoneInput`).addClass(`invalid`);
      fieldErrors.push(el);
    } else $(`#phoneInput`).removeClass(`invalid`);
  }

  function checkEmail() {
    var el = `#emailInput`
    if (!RFC5322EmailRegex.test($(`#emailInput`).val().trim())) {
      inputValid = false;
      var msg = `Please make sure you entered a valid email address`;
      $(`#emailInput`).addClass(`invalid`);
      fieldErrors.push(el);
    } else $(`#emailInput`).removeClass(`invalid`);
  }

  return fieldErrors;
}

function sendMessage() {
  if (window.submitting) return;
  window.submitting = true;
  $(`#contact aside`).slideUp();

  var inquiry = {
    name: $(`#nameInput`).val().trim(),
    company: $(`#companyInput`).val().trim(),
    phone: $(`#phoneInput`).val().trim().replace(/\D/g,``),
    email: $(`#emailInput`).val().trim(),
    message: $(`#messageInput`).val().trim(),
    source: 'Honor'
  };

  var dismissText;

  if ($(`#language .language`).text() === `中文`) {
    inquiry.language = `chinese`;
    dismissText = `<i class="fas fa-times-square mr-2" aria-hidden="true"></i>关闭`;
  } else {
    dismissText = `Dismiss`;
  }

  var alert = $($(`<div class="status" />`)).appendTo($(`#contact`));
  alert.append($(`<a class="dismiss btn btn-dark mt-3" />`).html(dismissText));

  $.ajax({
    url: `https://cors-anywhere.herokuapp.com/https://scheduleux.herokuapp.com/api/contact/mailer`,
    type: `POST`,
    data: JSON.stringify(inquiry),
    dataType: `json`,
    contentType: `application/json`,
    success: function(response) {
      window.response = response;

      var message = $(`<div/>`);
      switch (inquiry.language) {
        case `chinese`:
          message.append($(`<h3 class="mb-4" />`).text(`您的消息已发送。`))
            .append($(`<p/>`).text(`感谢您的来信！我们会尽快与您联系。 方便您的备份和查询，您会收到一封记录您留言内容的电子邮件。`))
            .append($(`<p/>`).text(`您可以通过直接回复此邮件，来跟进或提供其他信息。`));
          message.prependTo(alert);
          break;

        default: // english
          message.append($(`<h3 class="mb-4" />`).text(`Message received`))
            .append($(`<p/>`).text(`We'll be in touch soon. You should receive a confirmation shortly.`))
            .append($(`<p/>`).text(`If you need to provide additional information, you can reply to the confirmation email.`));
          message.prependTo(alert);
          break;
      }

      window.submitting = false;
      alert.slideDown();
    },
    error: function(xhr, status, error) {
      console.log(xhr, status, error);

      var message = $(`<div/>`);
      switch (inquiry.language) {
        case `chinese`:
          message.append($(`<h3 class="mb-4" />`).text(`出问题了，向您致歉`))
            .append($(`<p/>`).text(`提交您的消息时出错。`))
            .append($(`<p/>`).html(`您可以尝试再次提交消息，或直接发送电子邮件至<a href="mailto:team@honor.software" target="_blank">team@honor.software</a>`));
          message.prependTo(alert);
          break;

        default: // english
          message.append($(`<h3 class="mb-4" />`).text(`Something went wrong`))
            .append($(`<p/>`).text(`There was an error submitting your message.`))
            .append($(`<p/>`).html(`You can try submitting the message again or email us directly at <a href="mailto:team@honor.software" target="_blank">team@honor.software</a>`));
          message.prependTo(alert);
          break;
      }

      window.submitting = false;
      alert.slideDown();
    }
  });
}
/* END CONTACT FORM */

/* CUSTOM DOM ELEMENTS */
class speedDial extends HTMLElement {
  connectedCallback() {
    // this.innerHTML = ``;
  }
}
customElements.define('speed-dial', speedDial);

class bio extends HTMLElement {
  connectedCallback() {
    // this.innerHTML = ``;
  }
}
customElements.define('employee-bio', bio);

class team extends HTMLElement {
  connectedCallback() {
    // this.innerHTML = ``;
  }
}
customElements.define('team-group', team);

class contact extends HTMLElement {
  connectedCallback() {
    // this.innerHTML = ``;
  }
}
customElements.define('contact-group', contact);

class carousel extends HTMLElement {
  connectedCallback() {
    // this.innerHTML = ``;
  }
}
customElements.define('carousel-group', carousel);

class promo extends HTMLElement {
  connectedCallback() {
    // this.innerHTML = ``;
  }
}
customElements.define('promo-group', promo);

class partner extends HTMLElement {
  connectedCallback() {
    // this.innerHTML = ``;
  }
}
customElements.define('partner-group', partner);
