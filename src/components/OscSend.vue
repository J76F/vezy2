<template>
  <q-btn color="white" text-color="black" label="OSC Send" @click="OscSendMsg"/>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'OscSend',
  props: {
  },

  methods: {
    OscSendMsg () {
      console.log('OscSendMsg')
    }
  }
})
</script>
