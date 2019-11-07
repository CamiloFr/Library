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
          v-on:keyup.enter="consultarlibro"
        />
      </div>
      <div class="table-busqueda" v-if="seen">
        <vs-table :data="booksi">
          <template slot="header">
            <h3>Resultados</h3>
          </template>
          <template slot="thead">
            <vs-th>Codigo</vs-th>
            <vs-th>Titulo</vs-th>
            <vs-th>Autor</vs-th>
            <vs-th>Coleccion</vs-th>
            <vs-th>Fecha</vs-th>
            <vs-th>Link</vs-th>
          </template>

          <template slot-scope="{data}">
            <vs-tr :key="indextr.key" v-for="(tr, indextr) in data">
              <vs-td :data="data[indextr].key">{{data[indextr].key}}</vs-td>
              <vs-td :data="data[indextr].title">{{data[indextr].title}}</vs-td>
              <vs-td :data="data[indextr].autor">{{data[indextr].autor}}</vs-td>
              <vs-td :data="data[indextr].coleccion">{{data[indextr].coleccion}}</vs-td>
              <vs-td :data="data[indextr].fecha">{{data[indextr].fecha}}</vs-td>
              <vs-td :data="data[indextr].key">
                <a id="nuevaventana" v-on:click="enviodata">{{data[indextr].key}}</a>
              </vs-td>
            </vs-tr>
          </template>
        </vs-table>
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
  storageBucket: ""
};
// Initialize Firebase
const app = firebase.initializeApp(secondconfig, "secondary");
const db = app.database();
const LinksRef = db.ref("Libros");
const ipc = require("electron").ipcRenderer;

export default {
  name: "contentpage",
  data: function() {
    return {
      seen:false,
      books: [],
      coincidencias: [],
      booksi: [],
      firebase: {
        links: LinksRef
      },
      newLink: {
        title: ""
      }
    };
  },
  created() {
    var app = this;
    var Consulta = LinksRef;
    Consulta.on("value", function(data) {
      window.console.log(data.node_.children_.root_.key);
      app.books = [];
      data.forEach(child => {
        var children = child.val();
        window.console.log(child.key, child.val(), children.Author);
        app.books.push({
          autor: children.Author,
          title: children.Titulo,
          fecha: children.Fecha,
          coleccion: children.Coleccion,
          key: child.key
        });
      });
      app.booksi = app.books;
      window.console.log(app.booksi);
    });
  },
  methods: {
    consultarlibro: function() {
      window.console.log("consultando libro", this.books);
      window.console.log("consultando libro", this.newLink.title);
      this.seen= true;
      this.coincidencias=[];
      for (var i in this.books) {
        window.console.log(this.books[i].title);
        var buscando = this.books[i].title.includes(this.newLink.title);
        if (buscando) {
          this.coincidencias.push({
            Autor: this.books[i].autor,
            Titulo: this.books[i].title,
            Fecha: this.books[i].fecha,
            Coleccion: this.books[i].coleccion,
            Key: this.books[i].key
          });
        }
        this.Imprimircoincidencias();
        window.console.log(this.coincidencias);
      }
    },
    Imprimircoincidencias: function() {
      window.console.log(this.coincidencias);
      this.booksi = [];
      if (this.coincidencias.length > 0) {
        this.coincidencias.forEach(child => {
          // var children = child.val();
          // window.console.log(child.key, child.val(), children.Author);
          this.booksi.push({
            autor: child.Autor,
            title: child.Titulo,
            fecha: child.Fecha,
            coleccion: child.Coleccion,
            key: child.Key
          });
        });
        window.console.log(this.booksi);
        return this.booksi;
      } else {
        this.booksi.push({
          autor: "No hay informacion",
          title: "",
          fecha: "",
          coleccion: "",
          key: ""
        });
        window.console.log(this.booksi);
        return this.booksi;
      }
    },
    enviodata: function(event) {
      window.console.log(event);
      window.console.log(event.toElement.innerText);
      ipc.send("another", event.toElement.innerText);
    }
  }
};
</script>

<style scoped>
.contetpage {
  width: 100%;
  height: 100%;
}

.content2 {
  padding-top: 2%;
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
  padding-top: 60px;
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

.table-busqueda {
  width: 80%;
  margin: 0 auto;
  padding-top: 2%;
}
</style>
