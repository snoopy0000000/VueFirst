<template>
  <div class="contact-me">
    <h2>{{ 'Contact Me'.toUpperCase() }}</h2>
    <div class="divider"></div>
    <div class="form">
      <v-text-field
        placeholder="Name*"
        color="white"
        solo
        class="contact-text-field"
        v-model="name"
      ></v-text-field>
      <v-text-field
        placeholder="Email*"
        color="white"
        solo
        class="contact-text-field"
        v-model="email"
      ></v-text-field>
      <v-text-field
        placeholder="Subject*"
        color="white"
        solo
        class="contact-text-field"
        v-model="subject"
      ></v-text-field>
      <v-textarea solo placeholder="Message*" v-model="message"></v-textarea>
      <v-row justify="center"
        ><v-btn color="#82b1ff" dark @click="requestSendEmail"
          >submit</v-btn
        ></v-row
      >
    </div>
    <!-- <div>
      <div v-for="(employee, i) in body.data" :key="i" style="color: white">
        <div>
          {{
            'name :' +
              employee.employee_name +
              ' age : ' +
              employee.employee_age
          }}
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { mapState } from 'vuex';
import sendGrid from '@/config/sendGrid.json';
export default {
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  },
  computed: {
    ...mapState(['body']),
  },
  beforeMount() {},
  methods: {
    httpGetExample() {
      // this.$http
      //   .get('http://dummy.restapiexample.com/api/v1/employees')
      //   .then(function(response) {
      //     // handle success
      //     console.log(response.data);
      //   })
      //   .catch(function(error) {
      //     // handle error
      //     console.log(error);
      //   });
      console.log(this.body);
      for (let i = 0; i < this.body.data.length; i++) {
        let employee = this.body.data[i];
        console.log(
          'name :' +
            employee.employee_name +
            '   age : ' +
            employee.employee_age
        );
      }
      console.log('for of 문');
      for (let employee of this.body.data) {
        console.log(
          'name :' +
            employee.employee_name +
            '   age : ' +
            employee.employee_age
        );
      }
      console.log('forEach 사용법');
      this.body.data.forEach((employee) => {
        console.log(
          'name :' +
            employee.employee_name +
            '   age : ' +
            employee.employee_age
        );
      });
    },
    requestSendEmail() {
      let body = {
        personalizations: [
          {
            to: [
              {
                email: 'snoopy8610@naver.com',
              },
            ],
            subject: this.subject,
          },
        ],
        from: {
          email: this.email,
        },
        content: [
          {
            type: 'text/plain',
            value:
              '안녕하세요 내 이름은' + this.name + '입니다.' + this.message,
          },
        ],
      };
      this.$http
        .post('https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send', body, {
          headers: {
            'content-type': 'application/json',
            'x-rapidapi-host': 'rapidprod-sendgrid-v1.p.rapidapi.com',
            'x-rapidapi-key': sendGrid.key,
            accept: 'application/json',
            useQueryString: true,
          },
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.contact-me {
  padding: 50px;
  background-color: #333333;
}
h2 {
  color: white;
}
.contact-text-field {
  margin-bottom: 10px;
}
</style>

<!--<template>
  <div class="contact-me">
    <h2>{{ "CONTACT ME" }}</h2>
    <div class="divider"></div>

    <div class="container">
      <div>
        <v-text-field
          placeholder="Name*"
          label="First Name"
          solo
        ></v-text-field>
      </div>
      <div>
        <v-text-field
          placeholder="Email*"
          label="First Name"
          solo
        ></v-text-field>
      </div>
      <div>
        <v-text-field
          placeholder="Subject*"
          label="First Name"
          solo
        ></v-text-field>
      </div>
      <div>
        <v-text-field
          placeholder="Message*"
          label="First Name"
          solo
        ></v-text-field>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contact-me {
  background-color: rgb(51, 51, 51);
}
h2 {
  color: white;
}
</style>-->
