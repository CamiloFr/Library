<template>
  <div class="contentpage">
    <div class="content2">
      <h1>Alternativa al Repositorio Institucional</h1>
      <div class="busqueda">
        <vs-input
          size="large"
          color="danger"
          icon-after="true"
          label-placeholder="icon-search"
          icon="search"
          placeholder="Busque la alternativa a su investagación"
          v-model="newLink.title"
        />
      </div>
      <div class="content3">
        <div class="boton-colecciones">
          <h1>Colección de las opciones de grado de la Universidad de los Llanos</h1>
          <img src="../assets/Images/Image2.jpg" />
          <div class="boton">
            <router-link to="/colecciones">
              <vs-button color="danger" type="line" icon="book">VER MAS</vs-button>
            </router-link>
          </div>
        </div>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
var secondconfig = {
  apiKey: "AIzaSyD8V1blF66w1_OqNuaWbX0bz7qz0TmjLo0",
  authDomain: "library-a03ee.firebaseapp.com",
  databaseURL: "https://library-a03ee.firebaseio.com",
  storageBucket: "",
};
// Initialize Firebase
const app2 = firebase.initializeApp(secondconfig, 'secondary');
const db2 = app2.database();
const LinksRef2 = db2.ref("links");

export default{
  name: 'contentpage',
  data(){
    return{
      newLink:{
        title: '',
      }
    }
  },
}
</script>

<style scoped>
.contetpage{
  width: 100%;
  height: 100%;
}

.content2 {
  margin-top: 8%;
  background: #fcfaf8;
  padding-bottom: 2%;
  width: 100%;
}

.content2 h1 {
  padding-top: 2%;
  color: #db3031;
}

.content3 {
  background: #fcfaf8;
}

.boton-colecciones {
  margin-top: 60px;
}

.boton-colecciones img {
  width: 60%;
  height: 50%;
  margin: 0 auto;
}

.boton-colecciones h1 {
  color: #db3031;
}
.boton {
  display: flex;
  justify-content: center;
}

.busqueda {
  width: 50%;
  margin: 0 auto;
}

.vs-con-input-label {
  width: 100%;
}
</style>
