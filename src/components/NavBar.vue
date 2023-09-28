<template>
    <div>
      <!-- -->
      <header>
        <nav class="navbar bg-primary">
                <div class="container-fluid">
                    <!-- Este botón se encarga de abrir el menú -->
                    <button type="button" class="btn btn-light" aria-label="Mostrar/Ocultar menú" data-bs-toggle="offcanvas" data-bs-target="#menu" aria-controls="menu">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <!-- -->
                    <a class="navbar-brand text-light" href="#">Navbar</a>
                </div>
            </nav>
      </header>
  
      <div class="offcanvas offcanvas-start" tabindex="-1" id="menu" aria-labelledby="menuVertical">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="menuVertical">Menú lateral</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Cerrar"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item" v-for="enlace in listaDeEnlaces" :key="enlace">   
                      <a class="nav-link m-2" aria-current="page" href="#">{{enlace}}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
  
<script>
  export default {
    name: 'NavBar',
    props: ['enlaces'],
    data() {
    return {
      listaDeEnlaces: ['Inicio', 'Servicios', 'Contacto']
    };
  }
  };
</script>

<style>
.nav-link:hover{
    background-color: rgb(0, 81, 255);
    color: white;
}
</style>