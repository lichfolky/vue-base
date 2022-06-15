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

Cosa vedere:

- [ ] Baffi {{msg}}
- [ ] Bind (src immagine)
- [ ] v-model (input)
- [ ] v-class ({done:isDone})
- [ ] v-if e v-else
- [ ] v-for
- [ ] Methods
- [ ] Click events (@)

```
function dataDiOggi () {
    const today = new Date();
    return "oggi è il " + today.toLocaleDateString("it-IT");
}
```
