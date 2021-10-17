<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="seletedTab === 'stored-resources' ? null : 'flat'"
      >Stored Resources</base-button
    >
    <base-button
      @click="setSelectedTab('add-resource')"
      :mode="seletedTab === 'add-resource' ? null : 'flat'"
      >Add Resource</base-button
    >
  </base-card>
  <component :is="seletedTab"></component>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';

export default {
  components: { StoredResources, AddResource },
  data() {
    return {
      seletedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The offiaial Vue.js documentation',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google Guide',
          description: 'Learn to google',
          link: 'https://google.org'
        }
      ]
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      removeResource: this.removeResource
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.seletedTab = tab;
    },
    addResource(title, description, link) {
      const newResource = {
        id: new Date().toISOString(),
        title,
        description,
        link
      };
      this.storedResources.unshift(newResource);
      this.seletedTab = 'stored-resources';
    },
    removeResource(id) {
      const findIndex = this.storedResources.findIndex(res => res.id === id);
      this.storedResources.splice(findIndex, 1);
    }
  }
};
</script>
