<template>
  <div>
    <b-form>
      <b-form-group id="input-group-name" label="Name" label-for="input-name" required-input>
        <b-form-input
          id="input-name"
          v-model="form.name"
          name="your-name"
          type="text"
          v-validate="'required'"
          placeholder="Enter your name">
        </b-form-input>
        <span v-show="errors.has('your-name')" v-html="requiredInput"></span>
      </b-form-group>

      <b-form-group id="input-group-email" label="Email" label-for="input-email" required>
        <b-form-input
          id="input-email"
          v-model="form.email"
          name="your-email"
          type="email"
          v-validate="'required'"
          placeholder="Enter your email">
        </b-form-input>
        <span v-show="errors.has('your-email')" v-html="requiredInput"></span>
      </b-form-group>

      <b-form-group id="input-group-subject" label="Subject" label-for="input-subject" required>
        <b-form-input
          id="input-subject"
          v-model="form.subject"
          name="your-subject"
          type="text"
          v-validate="'required'"
          placeholder="Enter your subject">
        </b-form-input>
        <span v-show="errors.has('your-subject')" v-html="requiredInput"></span>
      </b-form-group>

      <b-form-group id="input-group-message" label="Message" label-for="input-message" required>
        <b-form-input
          id="input-message"
          v-model="form.message"
          name="your-message"
          type="text"
          v-validate="'required'"
          placeholder="Enter your message">
        </b-form-input>
        <span v-show="errors.has('your-message')" v-html="requiredInput"></span>
      </b-form-group>

      <section id="form-control">
        <b-button id="submit" variant="success" @click="onSubmit" :disabled="isButtonDisabled">Send</b-button>
        <b-button id="reset" variant="link" @click="onReset" style="margin-left: 5px" :disabled="isButtonDisabled">Reset form</b-button>
      </section>
    </b-form>
  </div>
</template>

<script>
  import Vue from 'vue';
  import VeeValidate from 'vee-validate';
  import axios from 'axios';

  Vue.use(VeeValidate);

  const baseUrl = 'https://jsonplaceholder.typicode.com/posts'; // REST API test

  export default {
    name: "ContactForm",
    data: () => {
      return {
        form: {
          name: '',
          email: '',
          subject: '',
          message: ''
        },
        isButtonDisabled: false,
        requiredInput: 'This field is required'
      }
    },
    methods: {
      onSubmit(event) {
        this.$validator.validateAll()
          .then(valid => {
            if (valid) {
              this.isButtonDisabled = true;
              this.postData();
              event.preventDefault();
            }
          })
      },
      onReset(event) {
        event.preventDefault();
        for (let prop in this.form) {
          this.form[prop] = '';
        }
      },
      toast(variant, title, body) {
        this.counter++;
        this.$bvToast.toast(body, {
          title: title,
          variant: variant,
          toaster: 'b-toaster-bottom-right',
          solid: true,
          autoHideDelay: 10000,
          appendToast: false
        })
      },
      postData() {
        axios
          .post(baseUrl, {
            body: this.form
          })
          .then(response => {
            this.isButtonDisabled = false;
            this.toast('success', 'Process complete!', 'Message sent successfully');
            // eslint-disable-next-line no-console
            console.log(response)
          })
          .catch(err => {
            this.toast('danger', 'Something has gone wrong!', 'The process could not be completed, please try again');
            // eslint-disable-next-line no-console
            console.log(err)
          })
      }
    }
  }
</script>

<style scoped>
  #form-control {
    margin-top: 20px;
    float: right;
  }

  #reset {
    color: var(--danger);
  }

  span {
    color: var(--danger);
  }
</style>
