<template>
  <nav
    id="nav"
    class="navbar navbar-expand-md navbar-light sticky-top container"
  >
    <router-link to="/" id="bayc-brand" class="navbar-brand"
      ><img
        src="https://ik.imagekit.io/bayc/assets/bayc-logo-z.png"
        class="d-inline-block align-top"
        alt="bored ape logo"
        height="75px"
        width="auto" /></router-link
    ><button
      aria-controls="responsive-navbar-nav"
      id="nav-toggle"
      type="button"
      aria-label="Toggle navigation"
      class="navbar-dark navbar-toggler collapsed"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse">
      <div class="navbar-nav" id="nav-bar">
        <a id="nav-link" title="BUY AN APE" href="#buy-an-ape" class="nav-link"
          >BUY AN APE</a
        ><a id="nav-link" title="ROADMAP" href="#roadmap" class="nav-link"
          >ROADMAP</a
        ><a id="nav-link" title="TEAM" href="#team" class="nav-link">TEAM</a
        ><router-link
          id="nav-link"
          title="GALLERY"
          to="/gallery"
          class="nav-link"
        >
          GALLERY
        </router-link>
        <!-- <router-link
          id="nav-link"
          title="PROVENANCE"
          to="/provenance"
          class="nav-link"
        >
          PROVENANCE
        </router-link> -->
        <!-- <div class="nav-item dropdown">
          <a
            aria-haspopup="true"
            aria-expanded="false"
            id="nav-dropdown"
            href="#"
            class="dropdown-toggle nav-link"
            role="button"
            >MEMBERS</a
          >
        </div> -->
      </div>
      <div class="navbar-nav d-flex gap-3" id="nav-social">
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
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      msg: "Navbar Primary",
    };
  },
};
</script>

<style lang="scss" scoped>
.dropdown-toggle {
  color: #fff !important;
  font-size: 8px !important;
  font-style: italic !important;
  font-weight: 500 !important;
  letter-spacing: 1.2px !important;
  caret-color: transparent !important;
  text-align: end !important;
  transition: 0.15s;
}
.dropdown-toggle::before {
  display: block !important;
  content: attr(title) !important;
  font-weight: 700 !important;
  height: 0 !important;
  overflow: hidden !important;
  visibility: hidden !important;
}
.dropdown-toggle:hover {
  color: #bfc500 !important;
}
.dropdown-menu.show {
  padding-top: 0px;
  padding-bottom: 0px;
  padding-right: 20px;
}
.dropdown-menu,
.dropdown-item:hover {
  background-color: #000 !important;
}
.dropdown-item {
  padding: 8px !important;
}
.dropdown-item.active,
.dropdown-item:active {
  background-color: #000 !important;
}
#nav-link-active {
  color: #bfc500;
  font-weight: 700;
}
#nav {
  background-color: #000;
}
#nav-landing {
  display: none;
}
#nav-toggle {
  color: #fff;
}
#nav-link,
#nav-link-active {
  color: #fff;
  font-size: 8px;
  font-style: italic;
  font-weight: 500;
  letter-spacing: 1.2px;
  caret-color: transparent;
  text-align: end;
  transition: 0.15s;
}
#nav-link::before,
#nav-link-active::before {
  display: block;
  content: attr(title);
  font-weight: 700;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}
#nav-link:hover,
#nav-link-active:hover {
  color: #bfc500;
}
#nav-link-active {
  color: #bfc500;
  font-weight: 700;
}
#nav-social {
  display: none;
}
@media only screen and (min-width: 992px) {
  .dropdown-toggle {
    margin: 10px !important;
    width: max-content !important;
  }
  .dropdown-menu.show {
    padding: 0px;
    margin-top: -10px !important;
  }
  .dropdown-item {
    padding-top: 0px !important;
    padding-bottom: 0px !important;
    width: max-content !important;
  }
  #nav {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  #nav-bar {
    width: 100%;
    justify-content: flex-end;
  }
  #nav-link,
  #nav-link-active {
    margin: 10px;
  }
  #nav-social {
    display: flex;
    flex-direction: row;
    margin-left: 10px;
    margin-right: 20px;
    width: max-content;
  }
}
</style>