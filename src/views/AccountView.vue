<template>
  <div>
    <div>
      <p>Find User</p>
      <input type="text" v-model="search">
    </div>
    <div>
      <h4>List User</h4>
      <p v-for="user in matchSearchUser" :key="user">{{ user }}</p>
    </div>
  </div>

  <div v-for="users in listUsers" :key="users.id" class="user-card">
    <div> Name: {{ users.name }}</div>
    <div>username: {{ users.username }}</div>
    <div>Email: {{ users.email }}</div>
    <div>Company Name: {{ users.company.name }}</div>
  </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from 'vue';


export default {
  data() {
    return {
      listUsers: []
    }
  },
  methods: {
    async getData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users", { method: 'GET' });
      const data = await res.json();
      this.listUsers = data;
      console.log(this.listUsers)
    }
  },
  mounted() {
    this.getData()
  },
  setup() {

    const search = ref('')
    const userInfo = reactive(["Mota", "Mato", "Jonh", "Coner", "Ronaldo", "Messi"])

    // watch work when we have ran function
    watch(search, () => {
      console.log('Watch', search.value)
    })

    // watchEffect work when page first load
    watchEffect(() => {
      console.log('watchEffect', search.value)
    })

    const matchSearchUser = computed(() => {
      return userInfo.filter((name) => name.includes(search.value));
    })


    return { userInfo, search, matchSearchUser }
  }
}
</script>

<style>
.user-card {
  display: flex;
  flex-direction: column;
  background-color: aliceblue;
  position: relative;
  max-width: 340px;
  box-shadow: 2px 6px 5px 2px rgba(0, 0, 0, 0.2);
  padding: 12px;
  margin-top: 12px;
  border-radius: 12px;

}
</style>