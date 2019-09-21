<template>
  <div class="content1">
    <vs-navbar :type="type" v-model="activeItem" class="nabarx" active-text-color="danger">

      <div slot="title">
        <vs-navbar-title>
          <img src="../assets/Images/LogoEmpresa.png">
        </vs-navbar-title>
      </div>

      <vs-navbar-item index="0">
        <a href="#">Inicio</a>
      </vs-navbar-item>
      <vs-navbar-item index="1">
        <a href="#">Noticias</a>
      </vs-navbar-item>
      <vs-navbar-item index="2">
        <div class="user">
          <a href="#">Usuario</a>
          <vs-avatar :badge="badge" size="20px" :src="image" />
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
