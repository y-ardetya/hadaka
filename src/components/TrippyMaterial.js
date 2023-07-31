import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import * as THREE from "three";

const TrippyMaterial = shaderMaterial(
  {
    uTime: 0,
    uResolution: new THREE.Vector2(window.innerWidth, window.innerHeight),
    uMouse: new THREE.Vector2(0, 0),
  },
  /* glsl */
  `
  uniform vec2 uResolution;
  varying vec2 vUv;
  void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
    vUv = uv;
  }
    `,
  /* glsl */
  `
  uniform float uTime;
  uniform vec2 uResolution;

  varying vec2 vUv;

  void main() {
    float aspect = uResolution.x / uResolution.y;
    vec2 newPos = 0.5 - vUv;

    vec2 uva = vec2(newPos.x, newPos.y / aspect);
    float r = 10.0 * sqrt(dot(uva, uva));
    vec2 uvd = uva;

    uvd.x += 0.1 * cos(10.0 * uvd.y + 0.2 * uTime);
    uvd.y += 0.1 * sin(10.0 * uvd.x + 0.2 * uTime);

    float r1 = 10.0 * sqrt(dot(uvd, uvd));
    float value = (1.0 * sin(20.0 * r1));

     // Generate RGB values based on the uv coordinates
     float red = 1.0 + 0.0 * sin(vUv.x * 5.0 + uTime);
    float green = 0.0 + 1.0 * cos(vUv.y * 5.0 + uTime); // Set green to 1 for cyan color
    float blue = 1.0 + 1.0 * sin(vUv.x * vUv.y * 10.0 + uTime); // Set blue to 1 for cyan color

    vec3 color = vec3(red, green, blue) * vec3(value);

    gl_FragColor = vec4(color, 1.);
    }
    `
);

extend({ TrippyMaterial });

export { TrippyMaterial };
