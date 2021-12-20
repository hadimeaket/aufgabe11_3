<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/html">HTML</router-link>
      <router-link to="/css">CSS</router-link>
      <router-link to="/javascript">JavaScript</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  text-align: center;
  color: grey;
}

#nav {
  display: flex;
  justify-content: space-evenly;
  padding: 30px;
  background: white;
  width: 100%;
  border-bottom: 1px solid black;
}

#nav a{
  font-weight: bold;
  color: grey;
}

#nav a.router-link-exact-active{
  color: #42b983;
}
</style>
