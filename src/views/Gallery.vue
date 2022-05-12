<template>
  <div class="gallery flex-fill d-flex flex-column">
    <NavbarPrimary />
    <div>
      <div class="container">
        <div class="row">
          <div class="col-12"><h1 class="common-title mb-3">GALLERY</h1></div>
          <div class="gal-form col-lg-3 col-12">
            <div class="row">
              <div class="col-lg-10 col-12">
                <ul class="nav flex-column gap-3">
                  <li>
                    <v-select
                      placeholder="BACKGROUND"
                      :options="options"
                    ></v-select>
                  </li>
                  <li>
                    <v-select
                      placeholder="CLOTHES"
                      :options="options"
                    ></v-select>
                  </li>
                  <li>
                    <v-select
                      placeholder="EARRING"
                      :options="options"
                    ></v-select>
                  </li>
                  <li>
                    <v-select placeholder="EYES" :options="options"></v-select>
                  </li>
                  <li>
                    <v-select placeholder="FUR" :options="options"></v-select>
                  </li>
                  <li>
                    <v-select placeholder="HAT" :options="options"></v-select>
                  </li>
                  <li>
                    <v-select placeholder="MOUTH" :options="options"></v-select>
                  </li>
                  <li>
                    <input
                      placeholder="BY ID"
                      class="gal-input"
                      type="number"
                      min="0"
                      max="9999"
                      value=""
                    />
                  </li>
                  <li>
                    <button class="bayc-button gal-reset" type="button">
                      RESET FILTERS
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-9 col-12">
            <div class="infinite-scroll-component__outerdiv">
              <div
                class="infinite-scroll-component"
                style="height: auto; overflow: clip auto"
              >
                <div>
                  <div class="row">
                    <div class="col-lg-4 col-md-6 col-12">
                      <div>
                        <div
                          style="
                            transition: opacity 400ms ease 0s,
                              transform 400ms ease 0s;
                            transform: none;
                            opacity: 1;
                          "
                        >
                          <div>
                            <a
                              href="https://opensea.io/assets/0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D/0"
                              ><img
                                class="gal-image"
                                src="https://ipfs.io/ipfs/QmRRPWG96cmgTn2qSzjwr2qvfNEuhunv6FNeMFGa9bx6mQ"
                            /></a>
                            <p>BORED APE #0</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-12">
                      <div>
                        <div
                          style="
                            transition: opacity 400ms ease 0s,
                              transform 400ms ease 0s;
                            transform: none;
                            opacity: 1;
                          "
                        >
                          <div>
                            <a
                              href="https://opensea.io/assets/0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D/1"
                              ><img
                                class="gal-image"
                                src="https://ipfs.io/ipfs/QmPbxeGcXhYQQNgsC6a36dDyYUcHgMLnGKnF8pVFmGsvqi"
                            /></a>
                            <p>BORED APE #1</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-12">
                      <div>
                        <div
                          style="
                            transition: opacity 400ms ease 0s,
                              transform 400ms ease 0s;
                            transform: none;
                            opacity: 1;
                          "
                        >
                          <div>
                            <a
                              href="https://opensea.io/assets/0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D/2"
                              ><img
                                class="gal-image"
                                src="https://ipfs.io/ipfs/QmcJYkCKK7QPmYWjp4FD2e3Lv5WCGFuHNUByvGKBaytif4"
                            /></a>
                            <p>BORED APE #2</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-12">
                      <div>
                        <div
                          style="
                            transition: opacity 400ms ease 0s,
                              transform 400ms ease 0s;
                            transform: none;
                            opacity: 1;
                          "
                        >
                          <div>
                            <a
                              href="https://opensea.io/assets/0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D/3"
                              ><img
                                class="gal-image"
                                src="https://ipfs.io/ipfs/QmYxT4LnK8sqLupjbS6eRvu1si7Ly2wFQAqFebxhWntcf6"
                            /></a>
                            <p>BORED APE #3</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-12">
                      <div>
                        <div
                          style="
                            transition: opacity 400ms ease 0s,
                              transform 400ms ease 0s;
                            transform: none;
                            opacity: 1;
                          "
                        >
                          <div>
                            <a
                              href="https://opensea.io/assets/0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D/4"
                              ><img
                                class="gal-image"
                                src="https://ipfs.io/ipfs/QmSg9bPzW9anFYc3wWU5KnvymwkxQTpmqcRSfYj7UmiBa7"
                            /></a>
                            <p>BORED APE #4</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-12">
                      <div>
                        <div
                          style="
                            transition: opacity 400ms ease 0s,
                              transform 400ms ease 0s;
                            transform: none;
                            opacity: 1;
                          "
                        >
                          <div>
                            <a
                              href="https://opensea.io/assets/0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D/5"
                              ><img
                                class="gal-image"
                                src="https://ipfs.io/ipfs/QmNwbd7ctEhGpVkP8nZvBBQfiNeFKRdxftJAxxEdkUKLcQ"
                            /></a>
                            <p>BORED APE #5</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-12">
                      <div>
                        <div
                          style="
                            transition: opacity 400ms ease 0s,
                              transform 400ms ease 0s;
                            transform: none;
                            opacity: 1;
                          "
                        >
                          <div>
                            <a
                              href="https://opensea.io/assets/0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D/6"
                              ><img
                                class="gal-image"
                                src="https://ipfs.io/ipfs/QmWBgfBhyVmHNhBfEQ7p1P4Mpn7pm5b8KgSab2caELnTuV"
                            /></a>
                            <p>BORED APE #6</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-12">
                      <div>
                        <div
                          style="
                            transition: opacity 400ms ease 0s,
                              transform 400ms ease 0s;
                            transform: none;
                            opacity: 1;
                          "
                        >
                          <div>
                            <a
                              href="https://opensea.io/assets/0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D/7"
                              ><img
                                class="gal-image"
                                src="https://ipfs.io/ipfs/QmRsJLrg27GQ1ZWyrXZFuJFdU5bapfzsyBfm3CAX1V1bw6"
                            /></a>
                            <p>BORED APE #7</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 col-12">
                      <div>
                        <div
                          style="
                            transition: opacity 400ms ease 0s,
                              transform 400ms ease 0s;
                            transform: none;
                            opacity: 1;
                          "
                        >
                          <div>
                            <a
                              href="https://opensea.io/assets/0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D/23"
                              ><img
                                class="gal-image"
                                src="https://ipfs.io/ipfs/QmadJd1GgsSgXn7RtrcL8FePionDyf4eQEsREcvdqh6eQe"
                            /></a>
                            <p>BORED APE #23</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterPrimary />
  </div>
</template>


<script>
import FooterPrimary from "../components/FooterPrimary.vue";
import NavbarPrimary from "../components/NavbarPrimary.vue";

export default {
  components: { FooterPrimary, NavbarPrimary },

  data() {
    return { name: "Gallery", options: ["foo", "bar", "baz"] };
  },
};
</script>

<style lang="scss" scoped>
select {
  border-radius: 0;
  border-bottom: 1px solid #bfc500 !important;
}

.gal-image {
  max-width: 100%;
  margin-bottom: calc(10px * 2);
}
.gal-loader {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>