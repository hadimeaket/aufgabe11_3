<template>
  <div class="html">
    <div class="links">
      <h1>Headings</h1>
      <p>{{ headings }}</p>
      <h1>Paragraph</h1>
      <p>{{ paragraph }}</p>
    </div>
    <div class="rechts">
      <h1>Reference</h1>
      <p>
        https://developer.mozilla.org/de/docs/Web/HTML/Element/h1-h6<br />https://developer.mozilla.org/de/docs/Web/HTML/Element/p
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headings:
        "Die Überschriftenelemente bestehen aus sechs verschiedenen Leveln. <h1> ist die Überschrift mit der höchsten Gewichtung und <h6> mit der kleinsten. Ein Überschriften-Element beschreibt das Thema des Bereiches, welcher der Überschrift folgt. Überschriften können auch verwendet werden, um ein Inhaltsverzeichnis für ein Dokument automatisch zu erstellen.",
      paragraph:
        "Das <p>-Element erzeugt einen Absatz, den zusammenhängenden Abschnitt eines längeren Textes. In HTML kann <p> jedoch für jedwede Art von zu gruppierendem, zusammenhängendem Inhalt genutzt werden, zum Beispiel Bilder oder Formularfelder.",
    };
  },
};
</script>

<style>
.html {
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
}
.links{
    width: 30%;
}
</style>