<template>
  <div>
    <!--   {{ firebaseData }}
    <form @submit.prevent="updateFirebase">
      <input type="text" name="name" v-model="formData.name" />
      <input type="email" name="name" v-model="formData.email" />
      <input type="tel" name="name" v-model="formData.phone" />
      <button type="submit">submit</button>
    </form> -->
    <form @submit.prevent="updateFirebase">
      <div class="container" id="container">
        <div class="row justify-content-md-center">
          <div class="form-group col-4">
            <label for="exampleInputEmail1">Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              v-model="formData.name"
            />
            <small id="emailHelp" class="form-text text-muted"
              >We'll never share your email with anyone else.</small
            >
          </div>
          <div class="form-group col-6">
            <label for="exampleInputEmail1">Last Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              v-model="formData.lastName"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" class="form-text text-muted"
              >We'll never share your email with anyone else.</small
            >
          </div>
        </div>
        <!-- <input
          type="text"
          aria-label="Last name"
          class="form-control"
          v-model="formData.lastName"
        /> -->
        <div class="row justify-content-md-center">
          <button
            type="submit"
            class="btn btn-light col-12 col-sm-4"
            id="submitButton"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { db } from "../firebase";

const documentPath = "contacts/";

export default {
  data() {
    return {
      firebaseData: null,
      formData: {},
      state: "loading",
    };
  },
  firestore() {
    return {
      firebaseData: db.doc(documentPath),
    };
  },
  metaInfo: {
    title: "Film Workshop - Application Form",
  },

  methods: {
    async updateFirebase() {
      try {
        await db
          .doc(
            documentPath +
              this.formData.name +
              "-" +
              Math.floor(Math.random() * Math.floor(999)).toString()
          )
          .set(this.formData);
        this.state = "synced";
        this.$router.push("/");
      } catch (error) {
        this.errorMessage = JSON.stringify(error);
        this.state = "error";
      }
    },
  },
};
</script>
<style lang="scss">
#container {
  padding-top: 20px;
  padding-bottom: 100px;
  background-color: rgb(17, 27, 37);
  label {
    color: white;
  }
}

#submitButton {
  margin: 20px 0 0 0;
}
</style>