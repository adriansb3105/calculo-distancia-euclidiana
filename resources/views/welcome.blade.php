@extends('partials.layout')

@section('content')
<h2 class="display-4 text-white">Cálculo de distancia Euclidiana</h2>
<h5 class="display-4 text-white">Realizado por Adrián Serrano Brenes</h5>
<h5 class="display-4 text-white">Carnet B36630</h5>

<div class="separator"></div>

<div class="jumbotron">
  <h3 class="text-justified">
    El objetivo general de este sitio es conocer y practicar el algoritmo de cálculo de distancia euclidiana para medir diferencias y similitudes entre ejemplos de personas o cosas.
  </h3>

  <div class="mt-2 d-flex justify-content-center">
    <img id="euclidiana" src="{{ asset('/img/Distance_Formula.png') }}" alt="euclidiana" class="img-responsive img-rounded">
  </div>

</div>

@endsection