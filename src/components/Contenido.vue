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
          @keypress.13.prevent="addLink"
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
import firebase from 'firebase'
// import db from '@/firebase'
import LinksRef from '@/firebase'
// import Firebase from "firebase";
// var firebaseConfig = {
//   apiKey: "AIzaSyD8V1blF66w1_OqNuaWbX0bz7qz0TmjLo0",
//   authDomain: "library-a03ee.firebaseapp.com",
//   databaseURL: "https://library-a03ee.firebaseio.com",
//   projectId: "library-a03ee",
//   storageBucket: "",
//   messagingSenderId: "879335316982",
//   appId: "1:879335316982:web:7baaeb3608bcaebb41fbd7",
//   measurementId: "G-X7SZPM8DE9"
// };
// // Initialize Firebase
// let app = Firebase.initializeApp(firebaseConfig);
// let db = app.database();
// // Firebase.analytics();
// let LinksRef = db.ref("links");
export default{
  name: 'contentpage',
  firebase: {
    links: LinksRef
  }, 
  data(){
    return{
      newLink:{
        title: '',
      }
    }
  },
  methods: {
    addLink: function () {
      window.console.log("addLink");
      window.console.log(this.newLink.title);
    }
  }
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
  margin-left: 25%;
  margin-right: 25%;
}

.boton-colecciones {
  margin-top: 60px;
}

.boton-colecciones img {
  width: 100%;
  height: 50%;
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
  height: auto;
  margin-left: 25%;
}

.vs-con-input-label {
  width: 100%;
}
</style>
