import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() color!: string;
  // typescript 2.7.2 included a strict class checking where all properties should be declared in constructor. So to work around that, just add a bang sign (!) like: name!:string;

  @Output() btnClick = new EventEmitter();
  // we are emitting the event so it will be reuseable.
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.btnClick.emit();
  }
}
