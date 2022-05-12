<template>
  <section>
    <div class="mb-5 row">
      <div class="col">
        <div class="mb-4 row">
          <div class="mb-4 col-lg-7 col-12">
            <h1 class="d-flex font-italic welcome-title mb-3">
              WELCOME TO THE<br />BORED APE YACHT CLUB
            </h1>
            <p class="common-p mb-0">
              BAYC is a collection of 10,000 Bored Ape NFTs—unique digital
              collectibles living on the Ethereum blockchain. Your Bored Ape
              doubles as your Yacht Club membership card, and grants access to
              members-only benefits, the first of which is access to THE
              BATHROOM, a collaborative graffiti board. Future areas and perks
              can be unlocked by the community through roadmap activation.
            </p>
          </div>
          <div class="my-lg-auto col-lg-4 col-12 offset-lg-1">
            <div class="common-container">
              <div class="row">
                <div class="pb-2 pr-2 col-6">
                  <img
                    class="img-fluid"
                    src="https://ik.imagekit.io/bayc/assets/ape1.png"
                    alt="ape1"
                    aria-label="ape1"
                  />
                </div>
                <div class="pb-2 pl-2 col-6">
                  <img
                    class="img-fluid"
                    src="https://ik.imagekit.io/bayc/assets/ape2.png"
                    alt="ape2"
                    aria-label="ape2"
                  />
                </div>
              </div>
              <div class="row">
                <div class="pt-2 pr-2 col-6">
                  <img
                    class="img-fluid"
                    src="https://ik.imagekit.io/bayc/assets/ape3.png"
                    alt="ape3"
                    aria-label="ape3"
                  />
                </div>
                <div class="pt-2 pl-2 col-6">
                  <img
                    class="img-fluid"
                    src="https://ik.imagekit.io/bayc/assets/ape4.png"
                    aria-label="ape4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="mb-3 col-12">
            <h3 class="fair-title">FAIR DISTRIBUTION</h3>
            <h4 class="ponzi">(BONDING CURVES ARE A PONZI)</h4>
          </div>
          <div class="mb-2 mb-lg-0 col-lg-7 col-12">
            <p class="common-p mb-lg-0">
              There are no bonding curves here. Buying a Bored Ape costs 0.08
              ETH. There are no price tiers; BAYC membership costs the same for
              everyone.
            </p>
          </div>
          <div class="col-lg-4 col-12 offset-lg-1">
            <p class="note text-justify mb-0">
              Note: Thirty apes are being withheld from the sale. These will be
              used for giveaways, puzzle rewards—and for the creators' BAYC
              memberships.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-5 row">
      <div class="col">
        <div id="buy-an-ape" class="buy-token-container scroll-fix">
          <div class="bayc-bg p-4 m-auto row">
            <div class="m-auto col-lg-3 col-12">
              <h3 class="buy-ape-title text-black">BUY AN APE</h3>
            </div>
            <div class="m-auto col-lg-4 col-12 offset-lg-1">
              <p class="common-p text-black mb-lg-0">
                The initial sale has sold out. To get your Bored Ape, check out
                the collection on OpenSea.
              </p>
            </div>
            <div class="m-auto col-lg-3 col-12 offset-lg-1">
              <a href="https://opensea.io/collection/boredapeyachtclub"
                ><button class="bayc-button mint" type="button">
                  BUY AN APE ON OPENSEA
                </button></a
              >
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
    return {
      msg: "WELCOME BORED",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>