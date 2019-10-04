<template>
  <div id="app">
    <div class="content1" v-if="seen">
      <div class="navbar">
        <div class="tittle">
          <a href="https://www.unillanos.edu.co/">
            <img src="@/assets/Images/LogoEmpresa.png" />
          </a>
        </div>
      </div>
      <div class="items">
        <div class="item">
          <router-link to="/">
            <i class="material-icons">home</i>
            <a href="#">Inicio</a>
          </router-link>
        </div>
        <div class="item">
          <router-link to="/colecciones">
            <i class="material-icons">book</i>
            <a href="#">Colecciones</a>
          </router-link>
        </div>
        <div class="item">
          <router-link to="/about">
            <i class="material-icons">help</i>
            <a href="#">Información</a>
          </router-link>
        </div>
        <div class="item">
          <router-link to="/addcolecciones">
            <i class="material-icons">unarchive</i>
            <a href="#">Subir Colecciones</a>
          </router-link>
        </div>
      </div>
    </div>
    <div class="content2">
      <div class="menu-toggle">
        <i class="material-icons" v-on:click="seen = !seen">menu</i>
        <div class="center-title">Universidad de los Llanos</div>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
// import Firebase from "firebase";
// import LinksRef from "@/firebase";

export default {
  data: () => ({
    activeItem: 1,
    type: "gradient",
    image: "https://avatars2.githubusercontent.com/u/31676496?s=460&v=4",
    badge: 1,
    seen: true
  }),
  methods: {
    addLink: function() {
      window.console.log("addLink");
      window.console.log(this.newLink.title);
    }
  }
};
</script>

<style lang="stylus">
body{
  height: 100vh;
  width: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  width: 100%;
  height: 100%;
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

.menu-toggle {
  width: 100%;
  height: 6%;
  display: flex;
  padding-left: 2%;
  background: #DB3031;
  color: white;
}

.menu-toggle i {
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
}

.center-title {
  display: flex;
  align-items: center;
  justify-content: center;
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
  width: 20%;
}

.content1 .nabarx .vs-con-items {
  display: flex;
  flex-wrap: wrap;
}

.items {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 80%;
}

.items .item {
  padding: 0 0 5% 0;
}

.items .item:hover {
  transform: scale(1.5) translateX(10px) rotate(10deg) translateY(5px);
}

.items .item a {
  color: #DB3031;
}
</style>