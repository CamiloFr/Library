<template>
  <div class="informacion">
    <div class="inputs">
      <vs-input icon="book" placeholder="Tittle" v-model="newLink.title" />
      <vs-input icon="face" placeholder="Autor" v-model="newLink.autor" />
      <vs-input icon="assignment" placeholder="Colección" v-model="newLink.coleccion" />
      <vs-input icon="calendar_today" placeholder="Fecha" v-model="newLink.fecha" />
    </div>
    <vs-button color="success" type="filled" v-on:click="addLink">Success</vs-button>
    <div class="panel-body">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books">
          <td><a v-bind:href="book.url">{{book.title}}</a></td>
          <td>{{book.author}}</td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>
<script>
// import Firebase from "firebase";
import firebase from "firebase";
// import db from '@/firebase'
import LinksRef from "@/firebase";
export default {
  data() {
    return {
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
  firebase:{
      links: LinksRef
  },
  methods: {
    addLink: function() {
      window.console.log("addLink");
      window.console.log(this.newLink);
      LinksRef.push(this.newLink);
    }
  }
};
</script>
<style>
.informacion {
  margin-top: 4%;
  margin-left: 20%;
  margin-right: 20%;
  width: 100%;
  height: 100%;
}
.inputs {
  margin-top: 60px;
  display: flex;
  align-self: auto;
}
</style>