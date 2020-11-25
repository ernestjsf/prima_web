<template>
  <div class="about">
    <div class="container">
      <h1>Thank you for submitting!</h1>
      <h2>
        Follow us on
        <a id="instagram" href="https://www.instagram.com/primafuture/"
          >Instagram</a
        >
        and
        <a id="facebook" href="https://www.facebook.com/primafuture">
          Facebook
        </a>
      </h2>
    </div>
  </div>
</template>
<style lang="scss">
h1,
h2 {
  color: white;
}
.container {
  margin-top: 100px;
  margin-bottom: 100px;
}
#facebook {
  color: rgb(151, 183, 224) !important;
  text-decoration: underline;
}
#instagram {
  color: rgb(224, 151, 151) !important;
  text-decoration: underline;
}
a,
#instagram,
#facebook {
  -moz-transition: color 0.7s ease-in-out, color 0.7s ease-in-out;
  -o-transition: color 0.7s ease-in-out, color 0.7s ease-in-out;
  -webkit-transition: color 0.7s ease-in-out, color 0.7s ease-in-out;
  transition: color 0.7s ease-in-out, color 0.7s ease-in-out;
  color: white;
}
a:hover,
#instagram:hover,
#facebook:hover {
  color: #4aafdd !important;
}
</style>
