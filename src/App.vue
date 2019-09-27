<template>
  <div id="app">
    <!-- <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
          </div>
    <router-view/>-->
    <div class="content1">
      <vs-navbar :type="type" v-model="activeItem" class="nabarx" active-text-color="danger">
        <vs-navbar-item index="0">
          <a href="https://www.unillanos.edu.co/">
            <img src="@/assets/Images/LogoEmpresa.png" />
          </a>
        </vs-navbar-item>
        <vs-navbar-item index="1">
          <router-link to="/">
            <i class="material-icons">home</i>
            <a href="#">Inicio</a>
          </router-link>
        </vs-navbar-item>
        <vs-navbar-item index="2">
          <router-link to="/colecciones">
            <i class="material-icons">book</i>
            <a href="#">Colecciones</a>
          </router-link>
        </vs-navbar-item>
        <vs-navbar-item index="3">
          <router-link to="/about">
            <i class="material-icons">help</i>
            <a href="#">Información</a>
          </router-link>
        </vs-navbar-item>
        <vs-navbar-item index="4">
          <router-link to="/addcolecciones">
            <i class="material-icons">unarchive</i>
            <a href="#">Subir Colecciones</a>
          </router-link>
        </vs-navbar-item>
      </vs-navbar>
    </div>
    <div class="content2">
      <vs-navbar :type="type" v-model="activeItem" class="nabarx" active-text-color="danger">
        <vs-navbar-item>
          <div class="user">
            <a href="#">Usuario</a>
            <vs-avatar :badge="badge" size="30px" :src="image" />
            <vs-dropdown vs-custom-content vs-trigger-click>
              <a class="a-icon" href.prevent>
                <vs-icon class icon="expand_more"></vs-icon>
              </a>
              <vs-dropdown-menu class="loginx">
                <h3>Cerrar sesión</h3>
              </vs-dropdown-menu>
            </vs-dropdown>
          </div>
        </vs-navbar-item>
      </vs-navbar>
      <router-view />
    </div>
  </div>
</template>

<script>
import Firebase from "firebase";
// import db from '@/firebase'
import LinksRef from '@/firebase'

export default {
  data: () => ({
    activeItem: 1,
    type: "gradient",
    image: "https://avatars2.githubusercontent.com/u/31676496?s=460&v=4",
    badge: 1
  }),
  methods: {
    addLink: function () {
      window.console.log("addLink");
      window.console.log(this.newLink.title);
    }
  },
};
</script>

<style lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  width: 100vw;
  height: 100vh;
}

.user {
  display: flex;
  align-items: center;
}

.a-icon {
  outline: none;
  text-decoration: none !important;
  display: flex;
  align-items: center;
  justify-content: center;

  i {
    font-size: 18px;
  }
}

.vs-dropdown-menu {
  .con-input {
    margin-bottom: 20px;
  }
}

.loginx {
  h3 {
    color: rgba(0, 0, 0, 0.5);
    text-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 5px;
  }

  p {
    max-width: 200px;
    font-size: 11px;
    padding: 5px;
  }
}

.content2 {
  background: #fcfaf8;
  height: 100%;
  width: 100%;
}

li .vs-navbar--item .is-active-item .vs-navbar-item-danger {
  color: white;
}

.content1 {
  background: #393d42;
  max-width: 200px;
  min-width: 100px;
  height: 100%;
}

.content1 .nabarx .vs-con-items {
  display: flex;
  flex-wrap: wrap;
}
</style>