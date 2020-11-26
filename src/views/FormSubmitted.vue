<template>
  <div class="">
    <div id="form-submitted" class="container">
      <h1 class="">Thank you for submitting!</h1>
      <h2 class="">
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
<script>
export default {
  metaInfo: {
    title: "Form Submitted",
  },
};
</script>

<style lang="scss" scoped>
h1,
h2 {
  color: white;
}
#form-submitted {
  margin-top: 100px;
  margin-bottom: 100px;
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
}
#facebook {
  color: rgb(151, 183, 224) !important;
  text-decoration: underline;
}
#instagram {
  color: rgb(224, 151, 151) !important;
  text-decoration: underline;
}
</style>
