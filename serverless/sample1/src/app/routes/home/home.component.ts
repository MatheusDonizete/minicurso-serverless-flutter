import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imageName = '';
  images = [];
  file: File;

  constructor() { }

  ngOnInit() {
    fetch('/api/list-images')
      .then(data => data.json())
      .then(data => {
        this.images = data.map(e => ({
          url: e.url._,
          date: e.dueDate._,
          description: e.description._
        }));
      })
      .catch(err => console.error(err));
  }

  onFileInput(file: File) {
    this.imageName = file.name;
    this.file = file;
  }

  sendImage() {
    // const formData = new FormData();
    // formData.append('image', this.file, this.file.name);
    const fr = new FileReader();
    fr.readAsDataURL(this.file);
    fr.onload = () => {
      fetch('/api/UploadImage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          image: fr.result,
          name: this.imageName
        })
      }).then(
        response => response.json()
      ).then(
        success => console.log(success)
      );
    };
  }
}
