<template>
  <div class="informacion">
    <div class="inputs">
      <vs-input icon="book" placeholder="Tittle" v-model="newLink.title" color="danger" />
      <vs-input icon="face" placeholder="Autor" v-model="newLink.autor" color="danger" />
      <vs-input
        icon="assignment"
        placeholder="Colección"
        v-model="newLink.coleccion"
        color="danger"
      />
      <vs-input icon="calendar_today" placeholder="Fecha" v-model="newLink.fecha" color="danger" />
    </div>
    <vs-button color="success" type="filled" v-on:click="addLink">Subir</vs-button>
    <div class="panel-body">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(link, idx) in books" :key="idx">
            <td>{{link.title}}</td>
            <td>{{link.autor}}</td>
            <td>{{link.coleccion}}</td>
            <td>{{link.fecha}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import Firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyD8V1blF66w1_OqNuaWbX0bz7qz0TmjLo0",
  authDomain: "library-a03ee.firebaseapp.com",
  databaseURL: "https://library-a03ee.firebaseio.com",
  projectId: "library-a03ee",
  storageBucket: "",
  messagingSenderId: "879335316982",
  appId: "1:879335316982:web:7baaeb3608bcaebb41fbd7",
  measurementId: "G-X7SZPM8DE9"
};
// Initialize Firebase
const app = Firebase.initializeApp(firebaseConfig);
const db = app.database();
const LinksRef = db.ref("links");
export default {
  name: 'informacion',
  firebase: {
    links: LinksRef
  },
  data: function() {
    return {
      books: [],
      value2: "",
      value3: "",
      value4: "",
      newLink: {
        title: "",
        autor: "",
        coleccion: "",
        fecha: ""
      },
    };
  },
  methods: {
    addLink: function() {
      window.console.log("addLink");
      window.console.log(this.newLink);
      LinksRef.push(this.newLink);
    },
  },
  created() {
    var app = this;
    var Consulta = LinksRef;
      Consulta.on("value", function(data) {
        window.console.log(data.node_.children_.root_.key);
        data.forEach((child)=>{
          var children = child.val();
          window.console.log(child.key, child.val(), children.autor);
          app.books.push({
            autor:children.autor,
            title: children.title,
            fecha: children.fecha,
            coleccion: children.coleccion,
            key: child.key
          });
        });
        window.console.log(app.books);
      });

  },
};
</script>
<style>
.informacion {
  margin-top: 4%;
  margin-left: 20%;
  margin-right: 20%;
}
.inputs {
  margin-top: 60px;
  display: flex;
  align-self: auto;
}
</style>