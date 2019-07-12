import { Meteor } from "meteor/meteor";

import { SVGCollection } from '/db';

if (SVGCollection.find().count() == 0) {
  [
    {
      name: "Asset 1",
      code: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -6 378 233">
  <style>
    @keyframes move { from { stroke-dashoffset: -1200; } to { stroke-dashoffset: 1200; } }
  </style>
  <defs>
    <linearGradient id="grad" x2="366.42" y1="110.5" y2="110.5" gradientUnits="userSpaceOnUse">
      <stop offset=".21" stop-color="#0bffd0"/>
      <stop offset=".35" stop-color="#07d8e2"/>
      <stop offset=".57" stop-color="#0098ff"/>
      <stop offset=".69" stop-color="#577ef3"/>
      <stop offset=".8" stop-color="#9f69ea"/>
      <stop offset=".89" stop-color="#d35ae3"/>
      <stop offset=".96" stop-color="#f351df"/>
      <stop offset="1" stop-color="#ff4ddd"/>
    </linearGradient>
  </defs>
  <path style="stroke-dasharray: 1200; animation: move 5s linear infinite;" fill="none" stroke="url(#grad)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.1" d="M183.2 27.58C113.29-33.91.13 14.13 0 110.47c.13 93.79 110.71 146 183.21 82.89 45.16 39.68 113.77 35.91 154.32-8.46 19.55-21.73 28.85-47.74 28.89-74.43-.13-93.89-110.92-145.78-183.22-82.89zm-167 121C-9.1 84 33.51 17.54 97.91 9.62c29.36-3.63 59.16 5.1 83.41 28.1l63.15 63.15 6.25 6.24a5.83 5.83 0 0 1 .86-1.08 6.27 6.27 0 1 1 .16 9l-74-74c-51.23-48.59-131.06-29.4-157 33.09-10.9 27.93-8.22 56.67 2.12 77.48 27.13 57.6 102 74 150.55 32.24l3.46 3.47C125.4 231.67 43.72 215 16.15 148.62l.05-.04zm230.53-26.41a14.78 14.78 0 0 0 6.25 3 15 15 0 0 0 13.02-3.53c.06 0 1.77-1.77 1.79-1.83.02-.06-.06 0-.07 0a15.09 15.09 0 0 0 2.84-13 14.66 14.66 0 0 0-3.4-6.4c-.1-.1-1.71-1.69-1.81-1.75a.13.13 0 0 0 0 .07 3.15 3.15 0 0 1-.29-.22A15.12 15.12 0 0 0 252 96l-3.76-3.76c7.69-3.3 15.42-.88 18.9 1.72l1.44 1.04a.25.25 0 0 0 .18.13c-.48-.79 14.43 11.82 2.74 27.85a.32.32 0 0 0-.12.18l-1.37 1.45a19.88 19.88 0 0 1-26.6 1.2h-.07l-1.92-1.81-73.3-73.3c-37-35.06-93.4-29.59-123.63 9.12A83.16 83.16 0 0 0 31 135.24c18.43 57.87 88.78 76.26 132.66 39l3.47 3.47c-63.6 54-161.23-3.45-142.41-87.62a92.66 92.66 0 0 1 6-17 88.02 88.02 0 0 1 141.23-25.43l74.23 74.24.49.46a.11.11 0 0 0 .01-.19h.05zM52.61 157.35c-37.84-48.52-6.85-113.86 48.63-120.69 21.57-2.66 43.38 3.81 61.31 20.8l74 74c10.1 9.57 26.93 11 39.62-.64 11-11.59 11.5-27.83 1.59-38.9-9.9-11.07-25.33-12.37-36.08-6.2l-3.56-3.56c14.54-9.25 33.15-5.65 43.99 7.24 25.64 33.5-18.88 73.99-50.06 44.46l-73.57-73.54C113.41 17.62 41 50.29 40.87 110.47c.11 59.21 68.67 90.2 113.14 54.06l3.48 3.48a74.4 74.4 0 0 1-104.88-10.66zm14.72-4C45.64 130.7 42.44 96 65.43 69.57c24-25.25 61.62-27 87.73-2.23l73.75 73.75c17.29 16.39 44.92 15.86 61.93-4C302 120 301.75 97.48 286 80.71v-.06a45.71 45.71 0 0 0-6-4.97 42.26 42.26 0 0 0-48.16.18l-3.5-3.51a47.3 47.3 0 0 1 55.91.35c23.13 17.94 25.42 49.77 5.12 71.12-9.52 9-21.38 13.79-33.41 13.79-11.6 0-23.36-4.46-33.31-13.89L148.85 70a55.3 55.3 0 0 0-35.72-15.3C66.47 52.55 36 105.79 67 145.67a55.89 55.89 0 0 0 77.33 9.16l3.48 3.49a60.73 60.73 0 0 1-80.48-4.96v-.01zM73 139.17c-24.67-32-.22-77.57 39.69-75.78a47.13 47.13 0 0 1 27.24 10.37c2.39 1.84-.22-.61 77.36 77 24.18 22.94 59.57 18.93 78.49-1 25.22-26.51 19.65-65.9-8.06-85.24a55.92 55.92 0 0 0-65.65 1.65l-3.49-3.49a60.74 60.74 0 0 1 80.49 4.94c24.86 26 22.27 62.36.5 85.27-21.37 22.47-59.47 26.22-86.33.75l-72.85-72.88-1.17-1.17a41.49 41.49 0 0 0-14.3-8.81C83.46 56 48.59 106.33 80.36 140.2v-.06.06c.14.12.11.1 0 0a47 47 0 0 0 6.85 5.59c15.56 9.68 33.75 8.75 47.27-.78l3.51 3.51A47.16 47.16 0 0 1 73 139.17zm27.22 3.23c-21.95-6.94-30.58-34-16.43-52.32 12.09-15.79 34.76-16.91 47.79-5.56 3 2.66-8.72-9 76.07 75.84 29 27.46 74.62 26.75 102.27-6 23.8-30.09 19.3-70.17-6.11-94.33-24.25-23.03-63.68-26.16-91.41-3.61l-3.48-3.48c26.86-22.12 69-24.32 99.26 4.47 26.61 25.3 30.4 70.56 5.46 100.15-28 33.19-76.67 37.3-109.78 5.91L131 90.65l-1.43-1.42a28.67 28.67 0 0 0-17.78-7.36A28.64 28.64 0 0 0 91.49 132l.15.15a28.72 28.72 0 0 0 33.08 3.1l3.56 3.57a33.67 33.67 0 0 1-28.07 3.58h.01zM120 98.85l-.2-.19a.14.14 0 0 0 0 .07c-12.2-8.72-27.22.91-23.73 16a14.17 14.17 0 0 0 3.62 6.27l1.32 1.26a.19.19 0 0 0 0-.08 14.33 14.33 0 0 0 4.8 2.57 15.27 15.27 0 0 0 8.59.17l3.82 3.82c-6.34 2.71-13.32 2.24-20.37-2.81a.29.29 0 0 0-.18-.12l-.89-.84c-5.28-5-7.5-11.89-5.47-20.2a19.26 19.26 0 0 1 3.6-6.77.34.34 0 0 0 .13-.19 30.91 30.91 0 0 1 2.46-2.43 19.92 19.92 0 0 1 24.85-.71c.23.19.47.36.72.52 2.37 2.24-5.19-5.27 74.94 74.86 43.08 40.84 109.59 26.07 133.25-24.13C355 98.49 324.6 35.18 266.24 28a83.06 83.06 0 0 0-63.52 18.75l-3.48-3.47C231.4 16 281.93 13.66 317.62 47.59c23.06 22.52 33.05 57.07 21.69 91.4-18.89 56.78-94.33 82.24-144.83 34.36l-72.84-72.84a25.71 25.71 0 0 1-1.64-1.66zm65.1 84.38l-63.68-63.63-5.81-5.81a6.94 6.94 0 0 1-.86 1.1 6.28 6.28 0 1 1-.17-9l15.6 15.61 58.47 58.54c41.82 39.66 102.63 33.8 136.8-2.12 41.28-43.4 33.64-109.17-8.52-142.61-39.16-31-90.36-26.94-123.86 1.81l-3.47-3.47c65.54-56.51 168-10.45 168.11 76.87-.16 87.75-105.6 136.24-172.62 72.71h.01z" class="a"/>
</svg>
`,
    },
    {
      name: "Asset 2",
      code: `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -6 378 233">
  <style>
    @keyframes move { from { stroke-dashoffset: -1200; } to { stroke-dashoffset: 1200; } }
  </style>
  <defs>
    <linearGradient id="grad" x2="366.42" y1="110.5" y2="110.5" gradientUnits="userSpaceOnUse">
      <stop offset=".21" stop-color="#0bffd0"/>
      <stop offset=".35" stop-color="#07d8e2"/>
      <stop offset=".57" stop-color="#0098ff"/>
      <stop offset=".69" stop-color="#577ef3"/>
      <stop offset=".8" stop-color="#9f69ea"/>
      <stop offset=".89" stop-color="#d35ae3"/>
      <stop offset=".96" stop-color="#f351df"/>
      <stop offset="1" stop-color="#ff4ddd"/>
    </linearGradient>
  </defs>
  <path style="stroke-dasharray: 40 10 50 20 30; animation: move 20s linear infinite;" fill="none" stroke="url(#grad)" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.1" d="M183.2 27.58C113.29-33.91.13 14.13 0 110.47c.13 93.79 110.71 146 183.21 82.89 45.16 39.68 113.77 35.91 154.32-8.46 19.55-21.73 28.85-47.74 28.89-74.43-.13-93.89-110.92-145.78-183.22-82.89zm-167 121C-9.1 84 33.51 17.54 97.91 9.62c29.36-3.63 59.16 5.1 83.41 28.1l63.15 63.15 6.25 6.24a5.83 5.83 0 0 1 .86-1.08 6.27 6.27 0 1 1 .16 9l-74-74c-51.23-48.59-131.06-29.4-157 33.09-10.9 27.93-8.22 56.67 2.12 77.48 27.13 57.6 102 74 150.55 32.24l3.46 3.47C125.4 231.67 43.72 215 16.15 148.62l.05-.04zm230.53-26.41a14.78 14.78 0 0 0 6.25 3 15 15 0 0 0 13.02-3.53c.06 0 1.77-1.77 1.79-1.83.02-.06-.06 0-.07 0a15.09 15.09 0 0 0 2.84-13 14.66 14.66 0 0 0-3.4-6.4c-.1-.1-1.71-1.69-1.81-1.75a.13.13 0 0 0 0 .07 3.15 3.15 0 0 1-.29-.22A15.12 15.12 0 0 0 252 96l-3.76-3.76c7.69-3.3 15.42-.88 18.9 1.72l1.44 1.04a.25.25 0 0 0 .18.13c-.48-.79 14.43 11.82 2.74 27.85a.32.32 0 0 0-.12.18l-1.37 1.45a19.88 19.88 0 0 1-26.6 1.2h-.07l-1.92-1.81-73.3-73.3c-37-35.06-93.4-29.59-123.63 9.12A83.16 83.16 0 0 0 31 135.24c18.43 57.87 88.78 76.26 132.66 39l3.47 3.47c-63.6 54-161.23-3.45-142.41-87.62a92.66 92.66 0 0 1 6-17 88.02 88.02 0 0 1 141.23-25.43l74.23 74.24.49.46a.11.11 0 0 0 .01-.19h.05zM52.61 157.35c-37.84-48.52-6.85-113.86 48.63-120.69 21.57-2.66 43.38 3.81 61.31 20.8l74 74c10.1 9.57 26.93 11 39.62-.64 11-11.59 11.5-27.83 1.59-38.9-9.9-11.07-25.33-12.37-36.08-6.2l-3.56-3.56c14.54-9.25 33.15-5.65 43.99 7.24 25.64 33.5-18.88 73.99-50.06 44.46l-73.57-73.54C113.41 17.62 41 50.29 40.87 110.47c.11 59.21 68.67 90.2 113.14 54.06l3.48 3.48a74.4 74.4 0 0 1-104.88-10.66zm14.72-4C45.64 130.7 42.44 96 65.43 69.57c24-25.25 61.62-27 87.73-2.23l73.75 73.75c17.29 16.39 44.92 15.86 61.93-4C302 120 301.75 97.48 286 80.71v-.06a45.71 45.71 0 0 0-6-4.97 42.26 42.26 0 0 0-48.16.18l-3.5-3.51a47.3 47.3 0 0 1 55.91.35c23.13 17.94 25.42 49.77 5.12 71.12-9.52 9-21.38 13.79-33.41 13.79-11.6 0-23.36-4.46-33.31-13.89L148.85 70a55.3 55.3 0 0 0-35.72-15.3C66.47 52.55 36 105.79 67 145.67a55.89 55.89 0 0 0 77.33 9.16l3.48 3.49a60.73 60.73 0 0 1-80.48-4.96v-.01zM73 139.17c-24.67-32-.22-77.57 39.69-75.78a47.13 47.13 0 0 1 27.24 10.37c2.39 1.84-.22-.61 77.36 77 24.18 22.94 59.57 18.93 78.49-1 25.22-26.51 19.65-65.9-8.06-85.24a55.92 55.92 0 0 0-65.65 1.65l-3.49-3.49a60.74 60.74 0 0 1 80.49 4.94c24.86 26 22.27 62.36.5 85.27-21.37 22.47-59.47 26.22-86.33.75l-72.85-72.88-1.17-1.17a41.49 41.49 0 0 0-14.3-8.81C83.46 56 48.59 106.33 80.36 140.2v-.06.06c.14.12.11.1 0 0a47 47 0 0 0 6.85 5.59c15.56 9.68 33.75 8.75 47.27-.78l3.51 3.51A47.16 47.16 0 0 1 73 139.17zm27.22 3.23c-21.95-6.94-30.58-34-16.43-52.32 12.09-15.79 34.76-16.91 47.79-5.56 3 2.66-8.72-9 76.07 75.84 29 27.46 74.62 26.75 102.27-6 23.8-30.09 19.3-70.17-6.11-94.33-24.25-23.03-63.68-26.16-91.41-3.61l-3.48-3.48c26.86-22.12 69-24.32 99.26 4.47 26.61 25.3 30.4 70.56 5.46 100.15-28 33.19-76.67 37.3-109.78 5.91L131 90.65l-1.43-1.42a28.67 28.67 0 0 0-17.78-7.36A28.64 28.64 0 0 0 91.49 132l.15.15a28.72 28.72 0 0 0 33.08 3.1l3.56 3.57a33.67 33.67 0 0 1-28.07 3.58h.01zM120 98.85l-.2-.19a.14.14 0 0 0 0 .07c-12.2-8.72-27.22.91-23.73 16a14.17 14.17 0 0 0 3.62 6.27l1.32 1.26a.19.19 0 0 0 0-.08 14.33 14.33 0 0 0 4.8 2.57 15.27 15.27 0 0 0 8.59.17l3.82 3.82c-6.34 2.71-13.32 2.24-20.37-2.81a.29.29 0 0 0-.18-.12l-.89-.84c-5.28-5-7.5-11.89-5.47-20.2a19.26 19.26 0 0 1 3.6-6.77.34.34 0 0 0 .13-.19 30.91 30.91 0 0 1 2.46-2.43 19.92 19.92 0 0 1 24.85-.71c.23.19.47.36.72.52 2.37 2.24-5.19-5.27 74.94 74.86 43.08 40.84 109.59 26.07 133.25-24.13C355 98.49 324.6 35.18 266.24 28a83.06 83.06 0 0 0-63.52 18.75l-3.48-3.47C231.4 16 281.93 13.66 317.62 47.59c23.06 22.52 33.05 57.07 21.69 91.4-18.89 56.78-94.33 82.24-144.83 34.36l-72.84-72.84a25.71 25.71 0 0 1-1.64-1.66zm65.1 84.38l-63.68-63.63-5.81-5.81a6.94 6.94 0 0 1-.86 1.1 6.28 6.28 0 1 1-.17-9l15.6 15.61 58.47 58.54c41.82 39.66 102.63 33.8 136.8-2.12 41.28-43.4 33.64-109.17-8.52-142.61-39.16-31-90.36-26.94-123.86 1.81l-3.47-3.47c65.54-56.51 168-10.45 168.11 76.87-.16 87.75-105.6 136.24-172.62 72.71h.01z" class="a"/>
</svg>
    `,
    },
  ].forEach(item => {
    SVGCollection.insert(item);
  });
}
