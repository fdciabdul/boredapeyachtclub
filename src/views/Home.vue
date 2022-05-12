<template>
  <div class="home">
    <!-- <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <NavbarPrimary />
    <div class="container">
      <HeroSection />
      <WelcomeBored />
      <TheSpecs />
      <WelcomeClub />
      <TheBathroom />
      <Roadmap />
      <CommunityTools />
      <TheTeam />
    </div>
    <FooterPrimary />
  </div>
</template>

<script>
import FooterPrimary from "../components/FooterPrimary.vue";
import CommunityTools from "../components/home/CommunityTools.vue";
import HeroSection from "../components/home/HeroSection.vue";
import Roadmap from "../components/home/Roadmap.vue";
import TheBathroom from "../components/home/TheBathroom.vue";
import TheSpecs from "../components/home/TheSpecs.vue";
import TheTeam from "../components/home/TheTeam.vue";
import WelcomeBored from "../components/home/WelcomeBored.vue";
import WelcomeClub from "../components/home/WelcomeClub.vue";
// @ is an alias to /src

import NavbarPrimary from "../components/NavbarPrimary.vue";

export default {
  name: "Home",
  components: {
    NavbarPrimary,
    HeroSection,
    WelcomeBored,
    TheSpecs,
    WelcomeClub,
    TheBathroom,
    Roadmap,
    CommunityTools,
    TheTeam,
    FooterPrimary,
  },
};
</script>
