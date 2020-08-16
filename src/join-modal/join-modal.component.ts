import { Component, OnInit, Input } from '@angular/core';

enum SelectedForm {
  NONE, DISCOVER, SHARE, CONNECT
}

@Component({
  selector: 'app-join-modal',
  templateUrl: './join-modal.component.html',
  styleUrls: ['./join-modal.component.css']
})
export class JoinModalComponent implements OnInit {
  selectedForm : SelectedForm = SelectedForm.NONE;
  forms = SelectedForm;

  constructor() { }

  ngOnInit() {
  }

  onDiscoverClicked() {
    this.selectedForm = SelectedForm.DISCOVER;
  }

  onShareClicked() {
    this.selectedForm = SelectedForm.SHARE;
  }

  onConnectClicked() {
    this.selectedForm = SelectedForm.CONNECT;
  }
}