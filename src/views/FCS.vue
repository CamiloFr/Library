<template lang="html">
<div class="fcarn">
    <div class="facultad">
        <span>
            Facultad Ciencias de la Salud
        </span>
    </div>
    <div class="contenido">
        <div class="panel-body">
            <vs-table max-items="6" pagination :data="books" description :description-items="descriptionItems" description-title="Registries" description-connector="of" description-body="Pages">
                <template slot="header">
                    <h3>Libros</h3>
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
                    <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                        <vs-td :data="data[indextr].key">{{data[indextr].key}}</vs-td>
                        <vs-td :data="data[indextr].title">{{data[indextr].title}}</vs-td>
                        <vs-td :data="data[indextr].autor">{{data[indextr].autor}}</vs-td>
                        <vs-td :data="data[indextr].coleccion">{{data[indextr].coleccion}}</vs-td>
                        <vs-td :data="data[indextr].fecha">{{data[indextr].fecha}}</vs-td>
                        <vs-td :data="data[indextr].key"><a id="nuevaventana" v-on:click="enviodata">{{data[indextr].key}}</a></vs-td>
                    </vs-tr>
                </template>
            </vs-table>
        </div>
    </div>
</div>
</template>

<script>
import firebase from "firebase";
const ipc = require('electron').ipcRenderer;

var secondconfig = {
    apiKey: "AIzaSyD8V1blF66w1_OqNuaWbX0bz7qz0TmjLo0",
    authDomain: "library-a03ee.firebaseapp.com",
    databaseURL: "https://library-a03ee.firebaseio.com",
    storageBucket: ""
};
const app2 = firebase.initializeApp(secondconfig, "five");
const db2 = app2.database();
const LinksRef2 = db2.ref("Libros");
export default {
    firebase: {
        links: LinksRef2
    },
    data: function () {
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
    created() {
        var app = this;
        var Consulta = LinksRef2;
        Consulta.on("value", function (data) {
            window.console.log(data.node_.children_.root_.key);
            app.books = [];
            data.forEach(child => {
                var children = child.val();
                window.console.log(child.key, child.val(), children.Author);
                if (children.Coleccion == "Facultad Ciencias de la Salud") {
                    app.books.push({
                        autor: children.Author,
                        title: children.Titulo,
                        fecha: children.Fecha,
                        coleccion: children.Coleccion,
                        key: child.key
                    });
                }
            });
            window.console.log(app.books);
        });
    },
    methods: {
        enviodata: function (event) {
            window.console.log(event)
            window.console.log(event.toElement.innerText);
            ipc.send('another', event.toElement.innerText);
        }
    }
};
</script>

<style lang="stylus">
.panel-body {
    margin: 0 auto;
    width: 90%;
}

.facultad {
    background: #393d42;
}

.facultad span {
    font: 700 4em/1 "Oswald", sans-serif;
    letter-spacing: 0;
    padding: .25em 0 .325em;
    display: block;
    margin: 0 auto;
    text-shadow: 0 0 80px rgba(255, 255, 255, .5);
    background: url('../assets/Images/FCARNfacultad2.png') repeat-y;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-animation: aitf 50s linear infinite;
    -webkit-transform: translate3d(0, 0, 0);
    -webkit-backface-visibility: hidden;
}

@-webkit-keyframes aitf {
    0% {
        background-position: 0% 50%;
    }

    100% {
        background-position: 100% 50%;
    }
}

.vs-table--header {
    justify-content: center !important;
}
</style>
