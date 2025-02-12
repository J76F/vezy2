<template>
  <div class="counter">
    <h1 class="count" v-text="$store.counter" />
    <div class="button__wrapper">
      <button @click="decrement">
        -
      </button>
      <button @dblclick="add(-10)">
        --
      </button>
      <button @click="increment" @dblclick="add(10)">
        +/++
      </button>
    </div>
    <q-toggle
      v-model="$store.aan"
      color="green"
      keep-color
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { debounce } from 'quasar'


export default defineComponent({
  name: 'CounTer',
  props: {
  },
  data () {
    return {
      lastKnop: ''
    }
  },

  created (){
    this.resetLastKnop = debounce(this.resetLastKnop, 500)
    /*
        console.log(this.$store.$state)

        this.$store.$onAction(
          ({
            name, // name of the action
            store, // store instance, same as `someStore`
            args, // array of parameters passed to the action
            after, // hook after the action returns or resolves
            onError, // hook if the action throws or rejects
          }) => {
            // a shared variable for this specific action call
            const startTime = Date.now()
            // this will trigger before an action on `store` is executed
            console.log(`${startTime} | Start "${name}" with params [${args.join(', ')}]. Store: "${store}" `)

            // this will trigger if the action succeeds and after it has fully run.
            // it waits for any returned promised
            after((result) => {
              const endTime = Date.now()
              console.log(
                `${endTime} | Finished "${name}" after ${
                  endTime - startTime
                }ms.\nResult: ${result}.`
              )
            })

            // this will trigger if the action throws or returns a promise that rejects
            onError((error) => {
              console.warn(
                `Failed "${name}" after ${Date.now() - startTime}ms.\nError: ${error}.`
              )
            })
          }
        )

        this.$store.$subscribe((mutation, state) => {
          const subTime = Date.now()
          console.log(`${subTime} | MutationType: "${mutation.type}" | Store: ${mutation.storeId}`)
          console.log(mutation)
          console.log(state)
        })
    */
  },

  methods: {
    increment() {
      /*
      console.log(`knop geklikt waarde was: ${this.lastKnop}`)
      if (this.lastKnop === 'increment') { 
        console.log('increment 2e')
        return
      } else {
        console.log('increment 1e')
      }
      console.log('increment')
      this.lastKnop = 'increment'
      this.resetLastKnop()
      */
      this.$store.increment()
    },
    decrement() {
      /*
      console.log(`knop geklikt waarde was: ${this.lastKnop}`)
      if (this.lastKnop === 'decrement') { 
        console.log('decrement 2e')
        return
      } else {
        console.log('decrement 1e')
      }
      console.log('decrement')
      this.lastKnop = 'decrement'
      this.resetLastKnop()
      */
      this.$store.decrement()
    },
    add (nr) {
      /*
      console.log(`knop dubbel geklikt waarde was: ${this.lastKnop}`)
      console.log('add')
      */
      this.$store.add(nr)
    },
    resetLastKnop () {
      console.log('reset')
      this.lastKnop = ''
    }
  }
})

</script>

<style>
*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.counter {
    font-family: Montserrat, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    height: 100vh;
    background-color: #f0f7f8;
    color: #425a65;
}

h1 {
    font-size: 6rem;
}

.button__wrapper {
    display: flex;
    gap: 1rem;
}
.button__wrapper > * {
    border: none;
    background-color: white;
    box-shadow: 0px 0px 10px #cfd8dc;
    font-weight: bold;
    font-size: 2rem;
    color: inherit;
    border-radius: 50%;
    outline: none;
    height: 4rem;
    width: 4rem;
    cursor: pointer;
    transition: background-color 250ms ease-in-out, transform 50ms ease-in-out;
}
.button__wrapper > *:hover {
    background-color: #cfd8dc;
}
.button__wrapper > *:active {
    transform: scale(0.9);
}
.button__wrapper > *:focus {
    box-shadow: 0 0 0 3px #425a65;
}

.count {
    color: #2abf77;
    animation: pulse 500ms ease-in-out;
}

@keyframes pulse {
    0%,
    100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.2);
    }
}
</style>
