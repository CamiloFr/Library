<template>
  <div class="informacion">
    <vs-row vs-justify="center">
      <vs-col type="flex" vs-justify="center" vs-align="center" vs-w="20">
        <vs-card actionable class="cardx">
          <div slot="header">
            <h3>La nueva alternativa al Repositorio institucional !</h3>
          </div>
          <div slot="media">
            <img src="@/assets/Images/Image3.png" />
          </div>
          <div>
            <span>Esta aplicación esta directamente desarrollada a la comunidad universitaria de la universidad de los llanos que desee leer las opciones de grado que se encuentran en las instalaciones de la biblioteca y no disponen de la carta de los derechos de autor para ser subidas a la red</span>
          </div>
          <div slot="footer">
            <vs-row vs-justify="flex-end">
              <vs-button color="danger" type="gradient">
                <a href="https://repositorio.unillanos.edu.co/">Repositorio</a>
              </vs-button>
              <vs-button color="danger" type="gradient">
                <a href="https://catalogo.unillanos.edu.co/">Catalogo</a>
              </vs-button>
            </vs-row>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>
<style>
.informacion {
  margin-top: 4%;
  margin-left: 20%;
  margin-right: 20%;
}
</style>
