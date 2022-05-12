<template>
  <div class="flex-fill d-flex flex-column">
    <main>
      <div class="container">
        <div class="px-0 mx-auto col-12 col-md-11 col-xl-10">
          <header class="position-relative">
            <div>
              <router-link to="/">
                <img
                  class="img-fluid d-block mx-auto custom-logo pt-4"
                  src="https://ik.imagekit.io/bayc/assets/bayc-logo.png"
                  alt="bayc header logo"
                  width="300px"
                  height="300px"
                />
              </router-link>
            </div>
            <div
              class="
                d-none d-lg-flex
                gap-3
                social-icons
                position-absolute
                top-0
                pt-4
                end-0
              "
            >
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
          </header>
          <section>
            <div class="position-relative">
              <video class="mx-auto w-100" autoplay="" loop="" id="myVideo">
                <source
                  src="https://ik.imagekit.io/bayc/assets/club-landing.mp4"
                  type="video/mp4"
                />
              </video>
              <div class="welcome pt-lg-4 bg-black bottom-0 row">
                <div class="border-bottom px-0 me-3 me-lg-0 col-9">
                  <h1 class="common-title mb-3">
                    WELCOME TO<br />THE BORED APE<br />YACHT CLUB
                  </h1>
                  <router-link to="/home">
                    <button class="bayc-button mb-4 w-100" type="button">
                      ENTER
                    </button>
                  </router-link>
                </div>
                <div class="scroll m-auto pr-0 col-1">
                  <div class="rotate my-auto">← SCROLL DOWN</div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div class="col-12 col-md-10 col-lg-9 col-xl-8 col-xxl-7">
              <p class="common-p my-5">
                A limited NFT collection where the token itself doubles as your
                membership to a swamp club for apes. The club is open! Ape in
                with us.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
    <FooterPrimary />
  </div>
</template>

<script>
import FooterPrimary from "../components/FooterPrimary.vue";

export default {
  components: { FooterPrimary },

  data() {
    return { name: "Get Started" };
  },
};
</script>

<style lang="scss" scoped>
.custom-logo {
  margin-bottom: -35px;
  z-index: 3;
  position: relative;
}

.welcome {
  position: absolute;

  @media screen and (max-width: 700px) {
    position: unset;
    margin: 10px 5px;
  }
}

.rotate {
  font-size: 0.7rem;
  transform: translateX(-50%) translateY(-50%) rotate(-90deg);
  width: max-content;
  animation: fadeAnim 2s infinite;
}

@keyframes fadeAnim {
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0.7;
  }
  50% {
    opacity: 0.4;
  }
  75% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
}
</style>