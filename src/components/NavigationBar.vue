<template>
  <header>
    <div class="wrapper">
      <nav>
        <div>
          <router-link to="/">{{ $t("navbar.home") }}</router-link>
          <router-link to="/account">{{ $t("navbar.account") }}</router-link>
          <router-link to="/about">{{ $t("navbar.about") }}</router-link>
        </div>
        <div>
          <select class="selection" v-model="lang" @click="handleChage($event)">
            <option value="km">{{ $t("navbar.button.khmer") }}</option>
            <option value="en">{{ $t("navbar.button.english") }}</option>
          </select>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    const lang = localStorage.getItem("lang") || "en";
    return {
      lang: lang,
    };
  },
  methods: {
    handleChage(event) {
      localStorage.setItem("lang", event.target.value);
      window.location.reload();
    },
  },
};
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
display: flex;
width: 100%;
margin: 0rem;
justify-content: space-between;
align-items: center;
background-color: #B0C4DE;
}

nav a.router-link-exact-active {
  color: var(--color-text);
  color: rgb(0, 0, 0);
  background-color: #77889950;
  padding: 8px;
  font-size: 18px;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  text-decoration: none;
  color: aliceblue;
  font-size: 18px;
  padding: 8px;
  margin-right: 5px;
}

nav a:hover {
  background-color: #77889950;
  display: inline-block;
  padding: 0 1rem;
  text-decoration: none;
  color: aliceblue;
  font-size: 18px;
  padding: 8px;
  margin-right: 5px;
}

nav a:first-of-type {
  border: 0;
}

.selection {
  width: 80px;
  height: 30px;
  border-radius: 8px;
  border: 0px;
  margin-right: 12px;
}
</style>