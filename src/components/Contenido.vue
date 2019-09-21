<template>
  <div class="content2">
    <h1>Alternativa al Repositorio Institucional</h1>
    <div class="busqueda">
      <vs-input size="large" color="danger" icon-after="true" label-placeholder="icon-search" icon="search" placeholder="Busque la alternativa a su investagación" />
    </div>
    <div class="content3">
      <div class="boton-colecciones">
        <h1>Colección de las opciones de grado de la Universidad de los Llanos</h1>
        <img src="../assets/Images/Image2.jpg">
        <div class="boton">
          <router-link to="/colecciones"><vs-button color="danger" type="line" icon="book">VER MAS</vs-button></router-link>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>

</script>

<style scoped>
.content2 {
  margin-top: 8%;
  background: #fcfaf8;
  padding-bottom: 2%;
}

.content2 h1{
padding-top: 2%;
color: #DB3031;
}

.content3 {
  background: #fcfaf8;
  margin-left: 25%;
  margin-right: 25%;
}

.boton-colecciones {
  margin-top: 60px;
}

.boton-colecciones img{
width: 100%;
height: 50%;
}

.boton-colecciones h1{
  color: #DB3031;
}
.boton {
  display: flex;
  justify-content: center;
}

.busqueda {
  width: 50%;
  height: auto;
  margin-left: 25%;
}

.vs-con-input-label {
  width: 100%;
}
</style>
