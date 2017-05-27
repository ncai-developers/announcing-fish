<template>
  <q-layout>
    <div slot="header" class="toolbar">
      <q-toolbar-title :padding="0">
        {{ schedule.name }}
      </q-toolbar-title>
    </div>
    <div class="layout-view">
      <iframe
        :src="signSrc || schedule.defaultUrl"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe>
    </div>
  </q-layout>
</template>

<script>
// let IScheduleItem = {
//   duration: 'ms',
//   autoReload: 'ms',
//   content: 'url',
//   repetition: ['m','w','d','forever'],
//   start: 'Date'
// };

import { getSchedule, scheduler } from '../util';

export default {
  mounted(){

  },
  created(){
    getSchedule('statics/sign.json').then( schedule => {
      this.schedule = schedule;
      schedule.items.forEach( el => {
        scheduler({
          startDate: el.start,
          startHandler: () => {
            this.updateSign(el);
          },
          duration: el.duration,
          durationHandler: () => {
            this.clearSign(el);
          }
        });
      });
      console.log(this.schedule);
    });
  },
  data: () => ({
    signSrc: '',
    schedule: {}
  }),
  methods: {
    updateSign( calItem ){
      this.signSrc = calItem.content;
      console.info('update: ', calItem );
    },
    clearSign( el ){
      this.signSrc = null;
      console.info('clear: ', el );
    }
  }
};
</script>

<style>
iframe {
  width: 100%;
  height: 100%;
  position: absolute;
}
</style>
