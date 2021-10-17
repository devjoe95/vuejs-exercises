<template>
  <button :type="type" :class="mode"><slot> </slot></button>
</template>

<script>
export default {
  props: {
    type: { type: String, default: 'button' },
    mode: { type: String, required: false }
  }
};
</script>

<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: darkred;
  border: 1px solid darkred;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: darkred;
  border-color: darkred;
}

.flat {
  background-color: transparent;
  color: darkred;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}

.flat-rounded {
  background-color: transparent;
  color: darkred;
  border-radius: 50px;
  border-color: darkred;
}

.flat-rounded:hover {
  background-color: #edd2ff;
}
.flat-rounded:active {
  background-color: darkred;
  color: #edd2ff;
}
</style>
