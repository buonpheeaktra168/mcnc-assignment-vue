<template>
  <header>
    <div class="wrapper">
      <nav>
        <div>
          <router-link to="/">{{ $t("navbar.home") }}</router-link>
          <router-link to="/account">{{ $t("navbar.account") }}</router-link>
          <router-link to="/about">{{ $t("navbar.about") }}</router-link>
          <router-link to="/todo">{{ $t("navbar.todo") }}</router-link>
        </div>
        <div>
          <select class="selection" v-model="lang" @change="handleChage($event)">
            <option value="km">{{ $t("button.khmer") }}</option>
            <option value="en">{{ $t("button.english") }}</option>
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
  height: 5vh;
  margin: 0;
  padding: 0;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-bottom: 1px solid #0a0a0a;
}

nav a.router-link-exact-active {
  color: var(--color-text);
  color: rgb(0, 0, 0);
  font-size: 18px;
  border-bottom: 2px solid;
  border-bottom-color: blueviolet;
  color: blueviolet;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  text-decoration: none;
  color: rgb(0, 0, 0);
  font-size: 18px;
  margin-right: 5px;
}

nav a:hover {
  display: inline-block;
  padding: 0 1rem;
  text-decoration: none;
  font-size: 18px;
  margin-right: 5px;
  color: blueviolet;
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
  background-color: none;
  color: #ffffff;
  font-weight: bold;
  outline: none;
  background: #ff9500 -webkit-linear-gradient(bottom, #ff9500 0%, #ff9500 100%);
}
</style>