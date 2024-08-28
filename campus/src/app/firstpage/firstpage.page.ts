import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// @ts-ignore
import * as THREE from 'three';
// @ts-ignore
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.page.html',
  styleUrls: ['./firstpage.page.scss'],
})
export class FirstpagePage implements OnInit {
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private isDragging = false;
  private previousMousePosition: { x: number; y: number } | null = null;

  @ViewChild('threeContainer', { static: true }) container!: ElementRef;

  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ alpha: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  ngOnInit() {
    this.container.nativeElement.appendChild(this.renderer.domElement); // ion-content 안에 추가
    this.camera.position.set(0, 0, 5);
    this.createGradientBackground();
    this.loadModel();
  }

  private model!: THREE.Object3D;

  private createGradientBackground() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const context = canvas.getContext('2d');

    if (context) {
      const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, '#FFE3FC'); // 시작 색상
      gradient.addColorStop(1, '#B0CEFE'); // 끝 색상

      context.fillStyle = gradient;
      context.fillRect(0, 0, canvas.width, canvas.height);
    }

    const texture = new THREE.Texture(canvas);
    texture.needsUpdate = true; // 텍스처 업데이트
    this.scene.background = texture; // 씬의 배경으로 설정
  }

  private loadModel() {
    const gltfLoader = new GLTFLoader();
    gltfLoader.load('assets/gltf/cute_alien_character/scene.gltf', (gltf: { scene: any; }) => {
      this.model = gltf.scene;
      this.scene.add(this.model);
      this.model.scale.set(0.1, 0.1, 0.1); // 크기를 2배로 설정
      this.model.position.set(0, -1, 0); // Y축으로 -1만큼 이동

      const light = new THREE.DirectionalLight(0xffffff, 1);
      light.position.set(0, 1, 1).normalize();
      this.scene.add(light);

      this.render(); // 모델이 로드된 후 렌더링 호출
    });

    this.addMouseEvents();
  }

  private addMouseEvents() {
    this.renderer.domElement.addEventListener('mousedown', this.onMouseDown.bind(this));
    this.renderer.domElement.addEventListener('mouseup', this.onMouseUp.bind(this));
    this.renderer.domElement.addEventListener('mousemove', this.onMouseMove.bind(this));
  }

  private onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.previousMousePosition = { x: event.clientX, y: event.clientY };
  }

  private onMouseUp() {
    this.isDragging = false;
    this.previousMousePosition = null;
  }

  private onMouseMove(event: MouseEvent) {
    if (!this.isDragging || !this.previousMousePosition) return;

    const deltaMove = {
      x: event.clientX - this.previousMousePosition.x,
      y: event.clientY - this.previousMousePosition.y,
    };

    // 객체 회전
    this.model.rotation.y += deltaMove.x * 0.01; // X축 회전
    this.model.rotation.x += deltaMove.y * 0.01; // Y축 회전

    this.previousMousePosition = { x: event.clientX, y: event.clientY };

    this.render(); // 화면 업데이트
  }

  private render() {
    this.renderer.render(this.scene, this.camera); // 한 번만 렌더링
  }
}
