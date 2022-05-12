<template>
  <div id="app" class="min-vh-100 d-flex flex-column">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "vue-select/src/scss/vue-select.scss";
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap");

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Montserrat", sans-serif;
  background-color: #000;
  color: #fff;
}

#nav {
  padding: 30px;
}

input:focus,
textarea:focus,
select:focus,
button:focus,
.btn:focus {
  outline: 0;
  box-shadow: 0;
}

a {
  font-weight: bold;
  color: #fff;

  &:hover,
  &.router-link-exact-active {
    color: #bfc500;
  }
}

.link {
  color: #bfc500;
  text-decoration: underline;
  word-wrap: break-word;
  font-weight: 400;

  &:hover {
    color: #fff;
  }
}

.scroll-fix {
  margin-top: -180px;
  padding-top: 180px;
}

.welcome-title {
  font-size: 1.8em;
  font-weight: 900;
}

.buy-ape-title {
  font-size: 1.5em;
  font-weight: 800;
  font-style: italic;
}

.fair-title {
  color: #bfc500;
  font-style: italic;
  font-weight: 500;
  font-size: 1.6em;
}

.ponzi {
  font-size: 1.05em;
  font-weight: 500;
  font-style: italic;
}

.common-title {
  font-size: 1.7em;
  font-weight: 800;
  font-style: italic;
}

.common-p {
  text-align: justify;
  font-size: 1.1em;
}

.note {
  font-size: 0.8em;
  font-weight: 200;
  font-style: italic;
}

.bayc-color {
  color: #bfc500;
}

.bayc-bg {
  background-color: #bfc500;
}

.bayc-button {
  background-color: #bfc500;
  border-radius: 8px;
  color: #000;
  border: 0;
  font-weight: 700;
  font-size: 16px;
  padding: 5%;
  margin: auto auto;
  transition: 0.3s;

  &.mint {
    background-color: #000;
    color: #bfc500;
    font-weight: 600;
  }
}

.bayc-button:hover {
  color: #000;
  background-color: #fff;
}

.gal-input,
.gal-input:focus {
  margin-top: 0%;
  width: 100%;
  border: none;
  background-color: #000;
  color: #bfc500;
  padding: 0 8px;
  padding-bottom: calc(10px / 2);
  font-weight: 400;
  font-size: 1em;
  border-bottom: 1px solid #bfc500;
  border-radius: 0%;
}

.gal-input::placeholder {
  color: #bfc500;
}

/* === */

.gray-line {
  border-bottom: 1px solid #696868;
  margin-top: 0px;
}
.black-line {
  border-top: 1px solid #000;
}
.white-line {
  border-top: 1px solid #fff;
}

.toilet {
  height: 300px;
}
.home-container {
  padding-bottom: 0%;
  color: #fff;
  font-size: small;
}
.home-container .gray-line {
  border-bottom: 1px solid #696868;
  display: none;
}
.home-container .address {
  color: #bfc500;
  text-decoration: underline;
}
.home-container .address:hover {
  color: #fff;
}

/* === */

.v-select {
  border-bottom: 1px solid #bfc500;
}

.vs__selected,
.vs__search::placeholder {
  color: #bfc500;
}

.vs__dropdown-menu {
  background: #bfc500;
  border: none;
  color: #000;
  text-transform: uppercase;
  font-size: 0.7em;
  font-weight: 600;
}

.vs__clear {
  fill: #bfc5007e;
}

.vs__open-indicator {
  fill: #bfc500;
}
</style>
