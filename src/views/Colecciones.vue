<template lang="html">
  <div class="contenedor-images">
    <div class="images">
      <div class="iniline-image1">
         <!-- <img src="../assets/Images/FCARN.jpg" /> -->
         <div class="letters-image1">
             Facultad Ciencias Agropecuarias y Recursos Naturales
         </div>
      </div>
      <div class="iniline-image2">
      <!-- <img src="../assets/Images/FCE.jpg" /> -->
      <div class="letters-image2">
             Facultad Ciencias Economicas
         </div>
      </div>
      <div class="iniline-image3">
      <!-- <img src="../assets/Images/FCBI.jpg" /> -->
      <div class="letters-image3">
             Facultad Ciencias Basicas e Ingenieria
         </div>
      </div>
      <div class="iniline-image4">
      <!-- <img src="../assets/Images/FCHYE.jpg" /> -->
      <div class="letters-image4">
             Facultad Ciencias Humanas y de la Educacion
         </div>
      </div>
      <div class="iniline-image5">
      <!-- <img src="../assets/Images/FCS.jpg" /> -->
      <div class="letters-image5">
             Facultad Ciencias de la Salud
         </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus">
.contenedor-images {
  background: #fcfaf8;
  display: flex;
}

.images {
  display: flex;
}

.iniline-image1 {
  display: flex;
  background-image: url('../assets/Images/FCARN.jpg');
  background-color: rgba(10, 10, 10, 0.9);
  background-blend-mode: overlay;
  background-size: cover;
  width: 20%;
  height: 94vh;
  color: white;
}

.iniline-image1 .letters-image1 {
  display: flex;
  align-self: center;
  font-weight: bold;
}

.iniline-image1:hover {
  background-color: rgba(10, 10, 10, 0.4);
  background-size: cover;
  transition: all 0.8s ease-out;
}

.iniline-image2 {
  display: flex;
  background-image: url('../assets/Images/FCE.jpg');
  background-color: rgba(10, 10, 10, 0.9);
  background-blend-mode: overlay;
  background-size: cover;
  width: 20%;
  height: 94vh;
  color: white;
}

.iniline-image2 .letters-image2 {
  display: flex;
  align-self: center;
  font-weight: bold;
}

.iniline-image2:hover {
  background-color: rgba(10, 10, 10, 0.4);
  background-size: cover;
  transition: all 0.8s ease-out;
}

.iniline-image3 {
  display: flex;
  background-image: url('../assets/Images/FCBI.jpg');
  background-color: rgba(10, 10, 10, 0.9);
  background-blend-mode: overlay;
  background-size: cover;
  width: 20%;
  height: 94vh;
  color: white;
}

.iniline-image3 .letters-image3 {
  display: flex;
  align-self: center;
  font-weight: bold;
}

.iniline-image3:hover {
  background-color: rgba(10, 10, 10, 0.4);
  background-size: cover;
  transition: all 0.8s ease-out;
}

.iniline-image4 {
  display: flex;
  background-image: url('../assets/Images/FCHYE.jpg');
  background-color: rgba(10, 10, 10, 0.9);
  background-blend-mode: overlay;
  background-size: cover;
  width: 20%;
  height: 94vh;
  color: white;
}

.iniline-image4 .letters-image4 {
  display: flex;
  align-self: center;
  font-weight: bold;
}

.iniline-image4:hover {
  background-color: rgba(10, 10, 10, 0.4);
  background-size: cover;
  transition: all 0.8s ease-out;
}

.iniline-image5 {
  display: flex;
  background-image: url('../assets/Images/FCS.jpg');
  background-color: rgba(10, 10, 10, 0.9);
  background-blend-mode: overlay;
  background-size: cover;
  width: 20%;
  height: 94vh;
  color: white;
}

.iniline-image5 .letters-image5 {
  display: flex;
  align-self: center;
  font-weight: bold;
}

.iniline-image5:hover {
  background-color: rgba(10, 10, 10, 0.4);
  background-size: cover;
  transition: all 0.8s ease-out;
}

</style>