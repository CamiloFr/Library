<template>
    <div id="app">
      <!-- <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
          </div>
          <router-view/> -->
      <div class="content1">
        <vs-navbar :type="type" v-model="activeItem" class="nabarx" active-text-color="danger">
          <div slot="title">
            <vs-navbar-title>
              <img src="@/assets/Images/LogoEmpresa.png">
            </vs-navbar-title>
          </div>
          <vs-navbar-item index="0">
            <router-link to="/">
              <a href="#">Inicio</a>
            </router-link>
          </vs-navbar-item>
          <vs-navbar-item index="1">
            <router-link to="/about">
              <a href="#">Noticias</a>
            </router-link>
          </vs-navbar-item>
          <vs-navbar-item index="2">
            <div class="user">
              <a href="#">Usuario</a>
              <vs-avatar :badge="badge" size="30px" :src="image" />
              <vs-dropdown vs-custom-content vs-trigger-click>
                <a class="a-icon" href.prevent>
                  <vs-icon class="" icon="expand_more"></vs-icon>
                </a>
                <vs-dropdown-menu class="loginx">
                  <h3>Cerrar sesión</h3>
                </vs-dropdown-menu>
              </vs-dropdown>
            </div>
          </vs-navbar-item>
        </vs-navbar>
      </div>
      <router-view/>
    </div>
</template>
<script>
export default {
  data: () => ({
    activeItem: 0,
    type: 'gradient',
    image: 'https://avatars2.githubusercontent.com/u/31676496?s=460&v=4',
    badge: 1
  })
}
</script>

<style lang="stylus">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  width: 80%;
  height: auto;
  margin-left: 10%;
}

body {
  background-image: url('assets/Images/Image3.png');
  background-repeat: no-repeat;
  position: relative;
}
.user{
  display: flex;
  align-items: center;
}
.a-icon
    outline: none;
    text-decoration: none !important;
    display: flex;
    align-items: center;
    justify-content: center;
    i
      font-size: 18px;
.vs-dropdown-menu
  .con-input
    margin-bottom: 20px;
.loginx
  h3
    color: rgba(0, 0, 0, 0.5);
    text-align: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding-bottom: 5px;
  p
    max-width: 200px;
    font-size: 11px;
    padding: 5px;
.content1{
  background: #fcfaf8;
}
li .vs-navbar--item .is-active-item .vs-navbar-item-danger{
  color:white;
}
</style>