<template>
  <section>
    <hr class="gray-line mb-5" />
    <div class="mb-5 row">
      <div class="col">
        <div id="roadmap" class="common-container scroll-fix">
          <div class="row">
            <div class="mb-3 col-lg-9 col-12">
              <h2 class="common-title mb-3">ROADMAP ACTIVATIONS</h2>
              <p class="common-p">We’re in this for the long haul.</p>
              <p class="common-p">
                We’ve set up some goalposts for ourselves. Once we hit a target
                sell through percentage, we will begin to work on realizing the
                stated goal.
              </p>
            </div>
            <div class="mb-3 mb-md-0 col-lg-8 col-12">
              <div class="mb-3 mb-lg-1 row">
                <div class="m-auto col-lg-1 col-2 offset-lg-1 offset-1">
                  <p class="goal">10%</p>
                </div>
                <div class="m-auto col-lg-10 col-9">
                  <p class="text-decoration-line-through common-sub-p">
                    We pay back our moms.
                  </p>
                </div>
              </div>
              <div class="mb-3 mb-lg-1 row">
                <div class="m-auto col-lg-1 col-2 offset-lg-1 offset-1">
                  <p class="goal">20%</p>
                </div>
                <div class="m-auto col-lg-10 col-9">
                  <p class="text-decoration-line-through common-sub-p">
                    We release the Caged Apes. 5 Caged Apes (tokens held back
                    from the sale) are airdropped to random Apeholders.
                  </p>
                </div>
              </div>
              <div class="mb-3 mb-lg-1 row">
                <div class="m-auto col-lg-1 col-2 offset-lg-1 offset-1">
                  <p class="goal">40%</p>
                </div>
                <div class="m-auto col-lg-10 col-9">
                  <p class="text-decoration-line-through common-sub-p">
                    BAYC gets its own YouTube channel, BAYC LoFi Radio - Beats
                    to Ape into Shitcoins To.
                  </p>
                </div>
              </div>
              <div class="mb-3 mb-lg-1 row">
                <div class="m-auto col-lg-1 col-2 offset-lg-1 offset-1">
                  <p class="goal">60%</p>
                </div>
                <div class="m-auto col-lg-10 col-9">
                  <p class="text-decoration-line-through common-sub-p">
                    Member-Exclusive BAYC Merch Store gets unlocked, featuring
                    Limited Edition tees, hoodies, and other goodies.
                  </p>
                </div>
              </div>
              <div class="mb-3 mb-lg-1 row">
                <div class="m-auto col-lg-1 col-2 offset-lg-1 offset-1">
                  <p class="goal">80%</p>
                </div>
                <div class="m-auto col-lg-10 col-9">
                  <p class="common-sub-p">
                    The clubhouse image becomes interactive and the Mysterious
                    Note becomes legible, beginning a treasure hunt. The first
                    to solve the mystery will be rewarded 5 ETH and a Bored Ape.
                  </p>
                </div>
              </div>
              <div class="mb-3 mb-lg-1 row">
                <div class="m-auto col-lg-1 col-2 offset-lg-1 offset-1">
                  <p class="goal">90%</p>
                </div>
                <div class="m-auto col-lg-10 col-9">
                  <p class="text-decoration-line-through common-sub-p">
                    The Bored Ape liquidity pool is initiated.
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="m-auto col-lg-1 col-2 offset-lg-1 offset-1">
                  <p class="goal">100%</p>
                </div>
                <div class="m-auto col-lg-10 col-9">
                  <p class="text-decoration-line-through common-sub-p">
                    The Mutant Ape (NFT Breeding) Arcade Machine gets ﬁxed. And
                    we cook up new ways to ape with our friends.
                  </p>
                </div>
              </div>
            </div>
            <div
              class="
                shirt-container
                mx-auto
                mb-5
                my-lg-auto
                col-lg-3 col-12
                offset-lg-1
              "
            >
              <img
                class="shirt-mask"
                src="https://ik.imagekit.io/bayc/assets/shirt.png"
                alt="shirt"
              /><img
                class="shirt"
                src="https://ik.imagekit.io/bayc/assets/shirt.png"
                alt="shirt"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.goal {
  color: #bfc500;
  font-weight: 500;
  font-style: italic;
  font-size: 1em;
}
.shirt-container {
  position: relative;
  max-width: 80% !important;
  background-color: #bfc500;
}
.shirt-mask {
  max-width: 100%;
  opacity: 0%;
}
.shirt {
  position: absolute;
  top: -8%;
  left: -5%;
  max-width: 114%;
}
</style>