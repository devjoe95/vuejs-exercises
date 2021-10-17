<template>
  <base-dialog
    @close="isInputInvalid = false"
    v-if="isInputInvalid"
    title="Invalid Input"
  >
    <template #default>
      <p>Unfortunately, at least one input value is invalid</p>
      <p>Please check all input</p>
    </template>
    <template #actions>
      <base-button @click="isInputInvalid = false">Ok</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" v-model="title" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          name="description"
          id="description"
          rows="3"
          v-model="desc"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Url</label>
        <input type="url" name="link" id="link" v-model="link" />
      </div>
      <div>
        <base-button type="submit">Add resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  inject: ['addResource'],
  data() {
    return { title: '', desc: '', link: '', isInputInvalid: false };
  },
  methods: {
    submitData() {
      if (!this.title.trim() || !this.desc.trim() || !this.link.trim()) {
        this.isInputInvalid = true;
      } else {
        this.addResource(this.title, this.desc, this.link);
      }
    }
  }
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
