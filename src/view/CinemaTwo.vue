<template>
  <div >
    <MySelect/>
  </div>
</template>

<script>
import {getmoreCinemas} from '../api/cinema.js'
import MySelect from '@/components/MySelect.vue';
export default {
  name: 'CinemaTwo',
  components: {MySelect},
  methods: {
    getmoreCinemasFun(){
      getmoreCinemas().then(()=>{
        
      })
    }
  }
}
</script>

<style>

</style>