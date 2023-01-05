<template>
  <header>
    <div class="container">
      <nav class="navbar">
        <div class="branding">
          <select class="link" v-model="lang" @change="handleChage($event)">
            <option value="km">{{ $t("button.khmer") }}</option>
            <option value="en">{{ $t("button.english") }}</option>
          </select>
          <button @click="handleSignOut" v-if="isLoggedIn">{{ $t("button.signOut") }}</button>
        </div>
        <div class="nav-links">
          <ul>
            <router-link class="link" to="/">{{ $t("navbar.home") }}</router-link>
            <router-link class="link" to="/account">{{ $t("navbar.account") }}</router-link>
            <router-link class="link" to="/about">{{ $t("navbar.about") }}</router-link>
            <router-link class="link" to="/todo">{{ $t("navbar.todo") }}</router-link>
            <router-link class="link" to="/login">{{ $t("navbar.login") }}</router-link>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from '@firebase/auth';
import { useRouter } from 'vue-router';

const lang = localStorage.getItem("lang") || "en";
const isLoggedIn = ref(false)
let auth;
const route = useRouter();

function handleChage(event) {
  localStorage.setItem("lang", event.target.value);
  window.location.reload();
};

onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  })
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    route.push('/login')
  })
}
</script>

<style lang="scss" scoped>
header {
  background-color: #ffffff;
  box-shadow: 2px 6px 20px 6px rgba(0, 0, 0, 0.2);
  z-index: 99;
  margin: 0;

  .link {
    font-weight: 500;
    padding: 0 8px;
    transition: 0.3s color ease;

    &:hover {
      color: rgb(125, 0, 241);
    }
  }

  nav {
    display: flex;

    .branding {
      display: flex;
      align-items: center;
    }

    .nav-links {
      position: relative;
      display: flex;
      flex: 1;
      color: #000;
      align-items: center;
      justify-content: flex-end;

      ul {
        margin-right: 8px;

        .link {
          margin-right: 8px;
          color: black;
          text-decoration-line: none;
        }

        .link:last-child {
          margin-right: 0;
        }

      }
    }
  }
}

@media (min-width: 913px) {
  header {
    background-color: #ffffff;
    box-shadow: 2px 6px 20px 6px rgba(0, 0, 0, 0.2);
    z-index: 99;
    margin: 0;

    .link {
      font-weight: 500;
      font-size: 20px;
      padding: 0 8px;
      transition: 0.3s color ease;

      &:hover {
        color: rgb(125, 0, 241);
      }
    }

    nav {
      display: flex;

      .branding {
        display: flex;
        align-items: center;
      }

      .nav-links {
        position: relative;
        display: flex;
        flex: 1;
        color: #000;
        align-items: center;
        justify-content: flex-end;

        ul {
          margin-right: 8px;

          .link {
            margin-right: 8px;
            color: black;
            text-decoration-line: none;
          }

          .link:last-child {
            margin-right: 0;
          }

        }
      }
    }
  }
}

@media (min-width: 821px) {
  header {
    background-color: #ffffff;
    box-shadow: 2px 6px 20px 6px rgba(0, 0, 0, 0.2);
    z-index: 99;
    margin: 0;

    .link {
      font-weight: 500;
      font-size: 20px;
      padding: 0 8px;
      transition: 0.3s color ease;

      &:hover {
        color: rgb(125, 0, 241);
      }
    }

    nav {
      display: flex;

      .branding {
        display: flex;
        align-items: center;
      }

      .nav-links {
        position: relative;
        display: flex;
        flex: 1;
        color: #000;
        align-items: center;
        justify-content: flex-end;

        ul {
          margin-right: 8px;

          .link {
            margin-right: 8px;
            color: black;
            text-decoration-line: none;
          }

          .link:last-child {
            margin-right: 0;
          }

        }
      }
    }
  }
}

@media (min-width: 376px) {
  header {
    background-color: #ffffff;
    box-shadow: 2px 6px 20px 6px rgba(0, 0, 0, 0.2);
    z-index: 99;
    margin: 0;

    .link {
      transition: 0.3s color ease;

      &:hover {
        color: rgb(125, 0, 241);
      }
    }

    nav {
      display: flex;
      margin-left: -20px;
      flex-direction: column;


      .branding {
        display: flex;
        margin-left: 20px;

      }

      .nav-links {
        position: relative;


        color: #000;
        justify-content: center;
        margin: -12px;

        ul {
          margin-right: 8px;

          .link {
            margin-right: 8px;
            color: black;
            text-decoration-line: none;
          }

          .link:last-child {
            margin-right: 0;
          }

        }
      }
    }
  }
}

@media (min-width: 541px) {
  header {
    background-color: #ffffff;
    box-shadow: 2px 6px 20px 6px rgba(0, 0, 0, 0.2);
    z-index: 99;
    margin: 0;


    .link {
      transition: 0.3s color ease;

      &:hover {
        color: rgb(125, 0, 241);
      }
    }

    nav {
      display: flex;
      flex-direction: column;

      .branding {
        display: flex;
        flex: 1;
        justify-content: flex-end;

      }

      .nav-links {
        position: relative;


        color: #000;
        justify-content: center;

        ul {
          margin-right: 8px;

          .link {
            margin-right: 8px;
            color: black;
            text-decoration-line: none;
          }

          .link:last-child {
            margin-right: 0;
          }

        }
      }
    }
  }
}

@media (max-width: 394px) {
  header {
    background-color: #ffffff;
    box-shadow: 2px 6px 20px 6px rgba(0, 0, 0, 0.2);
    z-index: 99;
    margin: 0;

    .link {
      transition: 0.3s color ease;

      &:hover {
        color: rgb(125, 0, 241);
      }
    }

    nav {
      display: flex;
      flex-direction: column;
      flex: 1;

      .branding {
        display: flex;
        margin-left: 20px;

      }

      .nav-links {
        position: relative;


        color: #000;
        justify-content: center;
        margin: -12px;

        ul {
          margin-right: 8px;

          .link {
            margin-right: 8px;
            color: black;
            text-decoration-line: none;
          }

          .link:last-child {
            margin-right: 0;
          }

        }
      }
    }
  }
}

@media (max-width: 360px) {
  header {
    background-color: #ffffff;
    box-shadow: 2px 6px 20px 6px rgba(0, 0, 0, 0.2);
    z-index: 99;
    margin: 0;

    .link {
      transition: 0.3s color ease;

      &:hover {
        color: rgb(125, 0, 241);
      }
    }

    nav {
      display: flex;
      flex-direction: column;
      flex: 1;

      .branding {
        display: flex;
        margin-left: 20px;
        margin-bottom: 12px;

      }

      .nav-links {
        position: relative;


        color: #000;
        justify-content: center;
        margin: -14px;

        ul {
          margin-right: 0px;

          .link {
            margin-right: 8px;
            color: black;
            text-decoration-line: none;
          }

          .link:last-child {
            margin-right: 0;
          }

        }
      }
    }
  }
}

@media (min-width: 275px) {
  header {
    background-color: #ffffff;
    box-shadow: 2px 6px 20px 6px rgba(0, 0, 0, 0.2);
    z-index: 99;
    margin: 0;

    .link {
      transition: 0.3s color ease;

      &:hover {
        color: rgb(125, 0, 241);
      }
    }

    nav {
      display: flex;
      flex-direction: column;
      flex: 1;

      .branding {
        display: flex;
        margin-left: 20px;
        margin-bottom: 12px;

      }

      .nav-links {
        position: relative;


        color: #000;
        justify-content: center;
        margin: -14px;

        ul {
          margin-right: 0px;

          .link {
            font-size: 13px;
            margin-right: 0px;
            color: black;
            text-decoration-line: none;
          }

          .link:last-child {
            margin-right: 0;
          }

        }
      }
    }
  }
}
</style>