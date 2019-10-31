<template>
  <div id="app">
    <div class="content1" v-if="seen" v-show="esElegido">
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
    <div class="content2" v-show="esElegido">
      <div class="menu-toggle">
        <i class="material-icons" v-on:click="seen = !seen">menu</i>
        <div class="center-title">Universidad de los Llanos</div>
      </div>
      <router-view />
    </div>
    <div class="content3" v-show="!esElegido">
      <div class="contenttitle">
        <h1>Bienvenido a la alternativa del Respositorio Institucional de la Universidad de los Llanos</h1>
      </div>
      <div class="contentcards">
        <div class="carta" v-on:click="esElegido = !esElegido">
          <img src="@/assets/Images/Docente.jpg" />
          <h3>Docente</h3>
        </div>
        <div class="carta" v-on:click="esElegido = !esElegido">
          <img src="@/assets/Images/Estudiante.jpg" />
          <h3>Estudiante</h3>
        </div>
        <div class="carta" v-on:click="esElegido = !esElegido">
          <img src="@/assets/Images/Funcionario.jpg" />
          <h3>Funcionario</h3>
        </div>
        <div class="carta" v-on:click="esElegido = !esElegido">
          <img src="@/assets/Images/Egresado.jpg" />
          <h3>Egresado</h3>
        </div>
      </div>
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
    seen: true,
    esElegido: false
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
body {
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

.content3 {
  width: 100%;
  height: 100%;
  background-image: url('assets/Images/background.jpg');
  background-color: gray;
  background-blend-mode: screen;
}

.contenttitle{
  color: white;
}

.contentcards {
  width: 100%;
  height: 95%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.contentcards .carta {
  width: 15%;
  height: 30%;
  box-shadow: 0 0 3rem -1rem rgba(0, 0, 0, 0.5);
  transition: transform 0.1s ease-in-out, box-shadow 0.1s;
  background-color: gainsboro;
}

.contentcards .carta img {
  width: 100%;
  height: 85%;
}

.contentcards .carta:hover {
  transform: translateY(-0.5rem) scale(1.0125);
  box-shadow: 0 0.5em 3rem -1rem rgba(0, 0, 0, 0.5);
  cursor: pointer;
}

.carta h3 {
  color: #DB3031;
}
</style>