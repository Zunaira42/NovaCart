    function animateValue(id, start, end, duration) {
      let obj = document.getElementById(id);
      let range = end - start;
      let stepTime = Math.abs(Math.floor(duration / range));
      let current = start;
      let increment = end > start ? 1 : -1;
      let timer = setInterval(function () {
        current += increment;
        obj.textContent = current;
        if (current == end) clearInterval(timer);
      }, stepTime);
    }

    animateValue("customers", 0, 1200, 2000);
    animateValue("products", 0, 350, 2000);
    animateValue("orders", 0, 890, 2000);
    let countDownDate = new Date().getTime() + (60 * 60 * 1000);

    let countdownfunction = setInterval(function () {
      let now = new Date().getTime();
      let distance = countDownDate - now;

      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("timer").innerHTML =
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds;

      if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("timer").innerHTML = "EXPIRED";
      }
    }, 1000);
    const text = "NovaCart";
    let i = 0;
    function typingEffect() {
      if (i < text.length) {
        document.querySelector(".header").innerHTML += text.charAt(i);
        i++;
        setTimeout(typingEffect, 100);
      }
    }
    typingEffect();
