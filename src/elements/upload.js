import { bindable, inject } from 'aurelia-framework';
import $ from 'jquery';
import * as firebase from 'firebase';

class Upload {
  @bindable files;
  @bindable filesArr = [];
  @bindable uploadedFiles = {};
  @bindable progress;
  @bindable uploadedFilesArray = [];

  constructor(toArray){
    this.toArray = toArray;
    this.storage = firebase.storage().ref();
    this.db = firebase.database();

    this.db.ref('img').on('value', (snap)=>{
      this.uploadedFiles = snap.val();
      Object.keys(this.uploadedFiles)
        .forEach( key => this.uploadedFilesArray.push(this.uploadedFiles[key]) );
      console.log(this.uploadedFilesArray);
    });
  }

  filesChanged(files){
    let arr = [];
    for(let i = 0; i < files.length; i++){
      let fr = new FileReader();
      fr.readAsDataURL(files[i]);
      fr.onloadend = ()=>{
        arr[i] = fr.result;
      };
    }
    this.filesArr = arr;
    console.log(arr);
  }

  upload(){
    for (var i = 0; i < this.files.length; i++) {
      let file = this.files[i];
      let fileName = file.name;
      let fileRef = this.storage.child(`img/${fileName}`).put(file);
      fileRef.on('state_changed', snapshot => {
        this.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + this.progress + '% done');
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        }
      }, error => {
        // Handle unsuccessful uploads
      }, () => {
        let key = this.db.ref('img/').push().key;
        let update = {};
        update[`/img/${key}`] = {
          url: fileRef.snapshot.downloadURL,
          name: fileName
        };
        this.db.ref().update(update);
      });
    }
  }
}

class ToArrayValueConverter {
  toView(files){
    if (!files) return;
    let arr = [];
    for(let i = 0; i < files.length; i++){
      arr[i] = files[i];
    }
    return arr;
  }
}

class UrlValueConverter {
  toView(file) {
    let fr = new FileReader();
    let url;
    fr.readAsDataURL(file);
    fr.onloadend = ()=>{
      url = fr.result;
    };
    return url;
  }
}

export { ToArrayValueConverter, UrlValueConverter, Upload };
