<template>
  <div>
    <!--   {{ firebaseData }}
    <form @submit.prevent="updateFirebase">
      <input type="text" name="name" v-model="formData.name" />
      <input type="email" name="name" v-model="formData.email" />
      <input type="tel" name="name" v-model="formData.phone" />
      <button type="submit">submit</button>
    </form> -->
    <div class="container" id="container">
      <div class="splash-logo-size float-right">
        <img src="../assets/logo.png" class="splash-logo" />
      </div>
      <h1>Worskhop Application Form</h1>
      <form @submit.prevent="updateFirebase">
        <div class="row justify-content-start">
          <div class="form-group col-12 col-sm-5">
            <label for="exampleInputEmail1">Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              v-model="formData.name"
            />
          </div>
          <div class="form-group col-12 col-sm-5">
            <label for="exampleInputEmail1">Last Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              v-model="formData.lastName"
              aria-describedby="emailHelp"
            />
          </div>
        </div>
        <hr />
        <div class="row justify-content-start">
          <div class="form-group col-12 col-sm-4">
            <label>Birdhdate</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              v-model="formData.birthDate"
            />
          </div>
          <div class="form-group col-12 col-sm-4">
            <label>Country</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              v-model="formData.country"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group col-12 col-sm-4">
            <label>City</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              v-model="formData.city"
              aria-describedby="emailHelp"
            />
          </div>
        </div>
        <hr />
        <div class="row justify-content-start">
          <div class="form-group col-12 col-sm-5">
            <div class="label">Language Preference</div>
            <div id="english" class="form-text text-muted">
              (only English or with Albanian realtime translation)
            </div>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              v-model="formData.language"
            />
          </div>
          <div class="form-group col-12 col-sm-5">
            <label>Email</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              v-model="formData.email"
              aria-describedby="emailHelp"
            />
          </div>
          <small
            id=""
            class="form-text text-muted just"
            style="margin-left: 20px"
            >We'll never share your information with anyone else.</small
          >
        </div>

        <!-- <input
          type="text"
          aria-label="Last name"
          class="form-control"
          v-model="formData.lastName"
        /> -->
        <div class="row justify-content-end">
          <button
            type="submit"
            class="btn btn-primary col-10 col-sm-6"
            id="submitButton"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { db } from "../firebase";

const documentPath = "workshopApplications/";

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
              this.formData.lastName +
              "-" +
              Math.floor(Math.random() * Math.floor(999)).toString()
          )
          .set(this.formData);
        this.state = "synced";
        this.$router.push("/about");
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
  .label {
    color: white;
  }
  h1 {
    margin-left: 0px;
    margin-top: 160px;
    color: white;
  }
  .splash-logo {
    width: 200px;
    overflow: hidden;
    object-fit: cover;
  }
  #english {
    margin-bottom: 2px;
  }
}

#submitButton {
  margin: 40px 18px 0 0;
}
</style>