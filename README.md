# Vue Base

![dog](https://picsum.photos/id/237/400/400)

[Guida iniziale Vue (Ver 2)](https://v2.vuejs.org/v2/guide/)

In head:

```
<!-- development version, includes helpful console warnings -->
<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>

```

Alla fine del body:

```
    <script src="script.js"></script>
```

Dentro script.js:

```
var app = new Vue({
  el: '#app',
  data: {
    msg: 'Ciao'
  }
})
```

Visto:

- [x] Baffi {{msg}}
- [x] Bind (src immagine)
- [x] v-model (input)
- [x] v-class ({done:isDone})
- [x] v-if e v-else
- [x] v-for
- [x] Methods
- [x] Click events (@)
