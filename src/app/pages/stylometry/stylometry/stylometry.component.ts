import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylometry',
  templateUrl: './stylometry.component.html',
  styleUrls: ['./stylometry.component.scss']
})
export class StylometryComponent implements OnInit {


  ngOnInit(): void {}

  performStylometryAnalysis(leftText, rightText) {}

  copyFirstTextToClipboard(leftText) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = leftText;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}
