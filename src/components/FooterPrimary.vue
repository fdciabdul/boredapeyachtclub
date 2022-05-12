<template>
  <footer class="footer">
    <div class="container-fluid footer-line">
      <hr class="p-0 line" />
      <div class="row mx-0 footer-padding">
        <div class="col-12 col-lg-4 order-lg-first my-lg-auto">
          <div class="email-container">
            <span class="email-label">GET ON THE LIST</span><br />
            <div class="d-flex email-flex">
              <br />
              <form
                id="email-submit"
                method="post"
                name="mc-embedded-subscribe-form"
                target="_blank"
                class="email-form"
              >
                <input
                  id="email-address"
                  class="m-0 email-input-text"
                  type="email"
                  placeholder="Email Address"
                  name="EMAIL"
                  required=""
                  value=""
                />
                <div
                  aria-hidden="true"
                  style="position: absolute; left: -5000px"
                >
                  <input
                    type="text"
                    name="b_c979ffabc41007fd79ffe121b_b785550a9e"
                    tabindex="-1"
                    value=""
                  />
                </div>
                <button name="subscribe" class="email-submit" type="submit">
                  →
                </button>
              </form>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4 order-first">
          <img
            class="img-fluid footer-logo"
            src="https://ik.imagekit.io/bayc/assets/bayc-footer.png"
            alt="logo"
          />
        </div>
        <div class="order-last my-auto text-center col-lg-4 col-sm-12 col-12">
          <div class="d-flex flex-column">
            <div class="text-lg-end d-flex gap-3 justify-content-end">
              <a href="https://www.youtube.com/watch?v=Yqga_WgX58k"
                ><i class="fa fa-youtube-play social-icon pr-lg-0"></i></a
              ><a href="https://www.instagram.com/boredapeyachtclub"
                ><i class="fa fa-instagram social-icon pr-lg-0"></i></a
              ><a href="https://discord.gg/3P5K3dzgdB"
                ><i class="fa fa-discord-alt social-icon pr-lg-0"></i></a
              ><a href="https://twitter.com/BoredApeYC"
                ><i class="fa fa-twitter social-icon pr-lg-0"></i
              ></a>
            </div>
            <div>
              <p class="copyright text-end">
                <span class="copy-left">© 2021 Yuga Labs LLC</span>
              </p>
            </div>
            <div>
              <p id="terms" class="copyright text-end">
                <a class="link" href="#/terms">BAYC Terms &amp; Conditions</a
                ><br /><a class="link" href="#/mayc/terms"
                  >MAYC Terms &amp; Conditions</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid m-0 p-0"><span class="last-line"></span></div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      msg: "Footer Primary",
    };
  },
};
</script>

<style lang="scss" scoped>
input {
  caret-color: auto;
}
input:focus {
  outline: none;
}
.footer {
  width: 100%;
  margin-top: auto;
}
.footer-logo {
  display: flex;
  margin: auto;
  margin-top: calc(-1 * 200px / 2);
  max-width: 200px;
  max-height: 200px;
}
.foot-input {
  width: 100%;
}
.footer-line {
  max-width: 90%;
}
.line {
  border-bottom: 1px solid #fff;
  display: block;
  padding-top: 30px;
  margin: 0;
}
.last-line {
  border-bottom: 15px solid #bfc500;
  display: block;
  padding-top: 30px;
  max-width: 100%;
}
.copyright {
  font-size: 14px;
  color: #fff;
  line-height: 2;
}
.terms-link {
  float: right;
  color: #bfc500;
  text-decoration: underline;
}
.terms-link:hover {
  color: #fff;
}
.copy-left {
  float: left;
}
.text-right {
  font-size: 10px;
}
.thanks {
  color: #bfc500;
  font-size: 12px;
  font-style: italic;
}
@media only screen and (min-width: 768px) {
  .footer-logo {
    margin-top: calc(-1 * 200px / 2);
    max-width: 200px;
    max-height: 200px;
  }
}
@media only screen and (min-width: 992px) {
  .footer-container {
    margin-left: 5%;
    margin-right: 5%;
  }
  .footer-logo {
    margin-top: 0%;
  }
  .footer-padding {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .foot-icons {
    float: right;
  }
  .line {
    margin: auto;
    margin-left: -2%;
    width: 104%;
  }
  .copy-left {
    float: right;
  }
  .last-line {
    padding-top: 0%;
  }
}

/* === */

input {
  background-color: #272626;
  border: 0ch;
  padding: 10px;
  width: 80%;
  margin-top: 10px;
  color: #fff;
}
::placeholder {
  font-size: 12px;
  font-style: italic;
  color: #dbdbdb;
}
.email-container {
  padding-top: 2rem;
  padding-bottom: 2rem;
  text-align: center;
}
.email-input-text {
  width: 100%;
}
.email-submit {
  background-color: #4b4a4a;
  border: 0ch;
  padding: 10px 20px 10px 20px;
  color: #fff;
  caret-color: transparent;
  transition: 0.3s;
}
.email-submit:active {
  background-color: #bfc500;
  color: #000;
}
.email-flex {
  padding-top: 20px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
.email-flex button:hover {
  background-color: #bfc500;
  color: #000;
}
.email-form {
  display: flex;
  width: 80%;
  margin: auto;
}
.email-label {
  font-weight: 600;
  font-size: 20px;
  font-style: italic;
  color: #fff;
}
@media only screen and (min-width: 992px) {
  ::placeholder {
    font-size: 10px;
  }
  .email-flex {
    margin-left: 0;
    margin-right: 0;
    padding-top: 10px;
  }
  .email-form {
    margin: unset;
  }
  .email-container {
    padding: 0%;
    text-align: left;
  }
  .email-label {
    font-weight: 600;
    font-size: 13px;
    font-style: italic;
    color: #fff;
  }
  .email-submit {
    padding: 10px;
    line-height: 0;
  }
  .email-input-text {
    padding: 2px;
    padding-left: 10px;
  }
}
.thanks {
  color: #bfc500;
  font-size: 12px;
  font-style: italic;
}

/* == */

.copyright {
  margin-top: 10px;
  font-size: 0.6rem;
  a {
    font-size: 0.6rem;
    color: #999d2b;
    &:hover {
      color: #bfc500;
    }
  }
}
</style>