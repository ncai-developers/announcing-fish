export function getSchedule(url){
  return fetch(url)
    .then( res => res.json() )
    .then( json => json.schedule.Value[0] )
    .catch( err => {
      console.warn(err);
      return null;
    });
}

export function checkTime(time){
  if( time < 0 ){
    time += 86400000;
    return checkTime(time);
  }
  return time;
}

export function scheduler({ startDate, duration, startHandler, durationHandler }){
  let time = new Date( startDate ).getTime() - Date.now();
  time = checkTime(time);
  setTimeout( () => {
    startHandler();
    setTimeout(durationHandler, duration);
  }, time );
}
