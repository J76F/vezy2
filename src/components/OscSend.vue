<template>
  <q-btn color="white" text-color="black" label="OSC Send" @click="OscSendMsg"/>
</template>

<script>
import { defineComponent } from 'vue'
import * as osc from "osc-min"

export default defineComponent({
  name: 'OscSend',
  props: {
  },
  data () {
    return {
    }
  },

  methods: {
    async OscSendMsg () {
      console.log('OscSendMsg')

      const buf = osc.toBuffer({
        timetag: new Date(new Date().getTime() + 50),
        elements: [
          {
            address: "/p1",
            args: new TextEncoder().encode("beat"),
          },
          {
            address: "/composition/layers/3/clips/1/video/source/blocktextgenerator/text/params/lines",
            args: "OSC Tekst Send",
          },
          {
            address: "/composition/layers/1/video/opacity",
            args: 0.25,
          }
        ],
      })

      if (this.$q.platform.is.electron) {
        console.log(await this.$electron.oscSend(buf))
      }
    }
  }
})
</script>
