<template>
  <div class="prlder" :class="{ activate: activate }">
    <div class="prlder-logo">
      <img src="../../assets/img/octopus.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Preloader",
  props: {
    activate: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style scoped>
.prlder {
  height: 100%;
  width: 100%;
  /* background-color: var(--dark); */
  background-image: -webkit-linear-gradient(
    145deg,
    var(--blue) 50%,
    var(--dark) 50%
  );
  position: fixed;
  z-index: -15;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  /* -webkit-backdrop-filter: saturate(180%) blur(5px); */
  /* backdrop-filter: saturate(180%) blur(5px); */
  opacity: 0;
}
.activate {
  z-index: 1000;
  opacity: 1;
}

.prlder-logo {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  height: 280px;
  background-color: var(--bg);
  border-radius: 100%;
  border: 3px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.prlder-logo img {
  animation: logoMotion 2s infinite;
}

@keyframes logoMotion {
  from {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  to {
    transform: translateY(0px);
  }
}
</style>