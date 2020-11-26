<template>
  <div>
    <!--   {{ firebaseData }}
    <form @submit.prevent="updateFirebase">
      <input type="text" name="name" v-model="formData.name" />
      <input type="email" name="name" v-model="formData.email" />
      <input type="tel" name="name" v-model="formData.phone" />
      <button type="submit">submit</button>
    </form> -->
    <div class="container applicationForm">
      <div class="splash-logo-size float-right">
        <router-link to="/">
          <img src="../assets/logo.png" class="splash-logo" />
        </router-link>
        <h1>Cine qua non series vol.1</h1>
        <h3>Worskhop Application Form</h3>
      </div>
      <form @submit.prevent="updateFirebase">
        <div class="row justify-content-start">
          <div class="form-group col-12 col-sm-5">
            <label for="exampleInputEmail1">Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Enter your name"
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
              placeholder="Enter your last name"
              v-model="formData.lastName"
              aria-describedby="emailHelp"
            />
          </div>
        </div>
        <hr color="white" />
        <div class="row justify-content-start">
          <div class="form-group col-12 col-sm-4">
            <label>Birdh date</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your birth date"
              v-model="formData.birthDate"
            />
          </div>
          <div class="form-group col-12 col-sm-4">
            <label>Country</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your country"
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
              placeholder="Enter your city"
              v-model="formData.city"
              aria-describedby="emailHelp"
            />
          </div>
        </div>
        <hr color="white" />
        <div class="row justify-content-start">
          <div class="form-group col-12 col-sm-5">
            <label>Occupation or University Department</label>

            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your occupation or university depratment"
              v-model="formData.occupation"
            />
          </div>
          <div class="form-group col-12 col-sm-5">
            <label>Email</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="Enter your email"
              v-model="formData.email"
              aria-describedby="emailHelp"
            />
          </div>
        </div>
        <hr color="white" />
        <div class="row justify-content-start">
          <div class="form-group col-12 col-sm-12">
            <label>About you?</label>

            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              placeholder="What defines you and connects you to cinema?"
              v-model="formData.about"
            />
          </div>
        </div>
        <hr color="white" />

        <div class="row justify-content-start">
          <div class="form-group col-12 col-sm-5">
            <div class="label">Language Preference</div>
            <div id="english" class="form-text text-muted">
              (only English or with Albanian realtime translation)
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Just English / with Albanian translation"
              id="exampleInputEmail1"
              v-model="formData.language"
            />
          </div>
        </div>

        <small id="" class="form-text text-muted just" style="margin-left: 20px"
          >We'll never share your information with anyone else.</small
        >

        <!-- <input
          type="text"
          aria-label="Last name"
          class="form-control"
          v-model="formData.lastName"
        /> -->
        <div class="row justify-content-end">
          <button
            type="submit"
            class="btn btn-primary col-12 col-sm-6"
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
        this.$router.push("/formsubmitted");
      } catch (error) {
        this.errorMessage = JSON.stringify(error);
        this.state = "error";
      }
    },
  },
};
</script>
<style lang="scss">
.applicationForm {
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
    font-weight: 400;
    margin-left: 0px;
    margin-top: 160px;
    color: white;
  }
  h2 {
    font-weight: 300;
    margin-left: 0px;
    color: white;
    margin-bottom: 20;
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
  margin: 40px 0px 0 0;
}
</style>