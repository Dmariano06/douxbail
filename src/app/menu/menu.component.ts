import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer';
import { NgIf } from '@angular/common';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
	imports: [NgbCarouselModule, NgIf],
})
export class MenuComponent implements OnInit,AfterViewInit {

  constructor() { }

  ngOnInit(): void {

  }



  ngAfterViewInit() {
 
  }
  
 
}

