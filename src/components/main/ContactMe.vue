<template>
  <div class="contact-me">
    <h2>{{ "CONTACT ME" }}</h2>
    <div class="divider"></div>

    <div class="container">
      <div>
        <v-text-field v-model="Name*" label="First Name" solo></v-text-field>
      </div>
      <div>
        <v-text-field v-model="Email*" label="First Name" solo></v-text-field>
      </div>
      <div>
        <v-text-field v-model="Subject*" label="First Name" solo></v-text-field>
      </div>
      <div>
        <v-text-field v-model="Message*" label="First Name" solo></v-text-field>
      </div>
    </div>
    <!--container-->
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
</style>