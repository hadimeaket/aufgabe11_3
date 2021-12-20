<template>
  <div class="javascript">
    <div class="links">
      <h1>Function</h1>
      <p>{{ functions }}</p>
      <h1>Object</h1>
      <p>{{ object }}</p>
    </div>
    <div class="rechts">
      <h1>Reference</h1>
      <p>
       https://developer.mozilla.org/de/docs/Web/JavaScript/Guide/Funktionen<br />https://developer.mozilla.org/de/docs/Learn/JavaScript/Objects/Basics/p
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      functions:
        "Funktionen sind ein Grundbaustein in JavaScript. Eine Funktion ist eine Prozedur - eine Reihe von Anweisungen, um eine Aufgabe auszuführen oder eine Wert auszurechnen. Um Funktionen zu verwenden, müssen diese im Scope (Gültigkeitsbereich) deklariert werden, in dem sie ausgeführt werden soll.",
      object:
        "Ein Objekt ist eine Sammlung von zusammenhängenden Daten und/oder Funktionalitäten. Diese bestehen üblicherweise aus verschiedenen Variablen und Funktionen, die Eigenschaften und Methoden genannt werden, wenn sie sich innerhalb von Objekten befinden.",
    };
  },
};
</script>

<style>
.javascript {
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
}
.links {
  width: 30%;
}
</style>