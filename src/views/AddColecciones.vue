<template>
  <div class="informacion">
    <div class="inputs">
      <vs-input icon="line_weight" placeholder="Codigo" v-model="newLink.codigo" color="danger" />
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
    <div class="buttons">
      <vs-button color="success" type="filled" v-on:click="addLink">Subir</vs-button>
      <vs-button color="danger" type="filled" v-on:click="addLink">Eliminar</vs-button>
      <vs-button color="warning" type="filled" v-on:click="addLink">Modificar</vs-button>
    </div>
    <div class="panel-body">
      <vs-table
        max-items="6"
        pagination
        :data="books"
        description
        :description-items="descriptionItems"
        description-title="Registries"
        description-connector="of"
        description-body="Pages"
      >
        <template slot="header">
          <h3>Libros</h3>
        </template>
        <template slot="thead">
          <vs-th>Codigo</vs-th>
          <vs-th>Titulo</vs-th>
          <vs-th>Autor</vs-th>
          <vs-th>Coleccion</vs-th>
          <vs-th>Fecha</vs-th>
        </template>

        <template slot-scope="{data}">
          <vs-tr :key="indextr" v-for="(tr, indextr) in data">
            <vs-td :data="data[indextr].title">{{data[indextr].title}}</vs-td>
            <vs-td :data="data[indextr].title">{{data[indextr].title}}</vs-td>
            <vs-td :data="data[indextr].autor">{{data[indextr].autor}}</vs-td>
            <vs-td :data="data[indextr].coleccion">{{data[indextr].coleccion}}</vs-td>
            <vs-td :data="data[indextr].fecha">{{data[indextr].fecha}}</vs-td>
          </vs-tr>
        </template>
      </vs-table>
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
  name: "informacion",
  firebase: {
    links: LinksRef
  },
  data: function() {
    return {
      descriptionItems: [3, 5, 15],
      books: [],
      value2: "",
      value3: "",
      value4: "",
      newLink: {
        title: "",
        autor: "",
        coleccion: "",
        fecha: ""
      }
    };
  },
  methods: {
    addLink: function() {
      window.console.log("addLink");
      window.console.log(this.newLink);
      // LinksRef.push(this.newLink);
      db.ref('Libros/' + this.newLink.codigo).set({
        Author: this.newLink.autor,
        Coleccion: this.newLink.coleccion,
        Fecha: this.newLink.fecha,
        Titulo: this.newLink.title
      })
    }
  },
  created() {
    var app = this;
    var Consulta = LinksRef;
    Consulta.on("value", function(data) {
      window.console.log(data.node_.children_.root_.key);
      app.books = [];
      data.forEach(child => {
        var children = child.val();
        window.console.log(child.key, child.val(), children.autor);
        app.books.push({
          autor: children.autor,
          title: children.title,
          fecha: children.fecha,
          coleccion: children.coleccion,
          key: child.key
        });
      });
      window.console.log(app.books);
    });
  }
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
  justify-content: space-between;
  padding: 0 0 2% 0;
}
.buttons {
  padding: 0 0 2% 0;
  display: flex;
  justify-content: space-around;
}
.effect {
  background-color: #db3031;
}
</style>