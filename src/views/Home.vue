<template>
  <body class="splash">
    <div class="container">
      <div class="row" style="height: 500px">
        <img src="../assets/logo.png" class="splash-logo" />
      </div>
      <!--       <h2
        style="
          color: white;
          text-align: center;
          font-weight: 200;
          font-size: 126;
        "
      >
        <span
          style="
            color: white;
            text-align: center;
            font-weight: 200;
            font-size: 126;
          "
        >
          the</span
        >

        <span
          style="
            font-family: 'High Summit';
            font-weight: normal;
            font-style: normal;
            padding: 0 10px 0 10px;
          "
          >FUTURE</span
        >
        <span
          style="
            color: white;
            text-align: center;
            font-weight: 200;
            font-size: 126;
          "
        >
          is under constuction!</span
        > 
      </h2> -->
      <br />
      <div class="row menu">
        <div class="col-lg-4 col-xs-12 menuItem" id="video">
          <router-link to="/videoproduction">Video Production</router-link>
        </div>
        <div class="col-lg-4 col-xs-12 menuItem" id="academy">
          <router-link to="/academy">Academy</router-link>
        </div>
        <div class="col-lg-4 col-xs-12 menuItem" id="sound">
          <router-link to="/soundproduction">Sound Production</router-link>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "Home",
  metaInfo: {
    title: "PRIMA Future",
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a {
  color: inherit !important;
}

.splash {
  padding-bottom: 60px;
  background: black;
  background: linear-gradient(90deg, black 0%, #122022 56%, #0a171b 100%);
  .splash-logo {
    margin: auto;
    margin-top: 80px;
    object-fit: contain;
    width: 95%;
    max-width: 35em;
  }
}
.splash .splash-logo:hover {
  -webkit-filter: drop-shadow(5px 5px 4px rgba(0, 0, 0, 0.5));
  filter: drop-shadow(5px 5px 4px rgba(0, 0, 0, 0.5));
}

a {
  color: inherit;
}
a:hover {
  text-decoration: none;
  color: inherit;
}

.menu {
  margin: auto;
  border-bottom: solid;
  border-color: #fff;
  margin-bottom: 0px;
}
.menu .menuItem {
  text-transform: uppercase;
  padding: 10px;
  color: #fff;
  font-size: 32px;
  font-family: "Baloo 2", "Arial";
  text-align: center;
  -moz-transition: background-color 0.7s ease-in-out, color 0.7s ease-in-out;
  -o-transition: background-color 0.7s ease-in-out, color 0.7s ease-in-out;
  -webkit-transition: background-color 0.7s ease-in-out, color 0.7s ease-in-out;
  transition: background-color 0.7s ease-in-out, color 0.7s ease-in-out;
  transition-delay: 0s;
}
.menu #academy:hover {
  background-color: white;
  color: #0f6186;
}
.menu #video:hover {
  background-color: white;
  color: #025f02;
}
.menu #sound:hover {
  background-color: white;
  color: #830909;
}
</style>
