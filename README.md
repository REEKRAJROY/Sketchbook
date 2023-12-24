📌 This is an excalidraw/miro clone made using [Next.js](https://nextjs.org/).

## 🏁 Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
<br>
<br>
Visit [sketchbook-backend](https://github.com/REEKRAJROY/sketchbook-backend) to run the backend service. By default, it runs on [http://localhost:3000](http://localhost:3000). Change this PORT number, go to **src/socket.js**, and copy-paste the PORT number under '' in the url variable. Ensure both the services are running for web sockets to emit events.

## 🚶 Walkthrough

The project has three sub-folders:-
<br>
<br>
(1) **Menu**
<br>
<br>
**src/components/Menu/index.js** has context to the pencil, eraser, undo, redo, and download respectively. There is a **handleMenuClick** handler which emits the **activeMenuItem** i.e., pencil/eraser. **handleActionItemClick** has context to **actionItemClick** i.e., undo, redo, and download and emits which is consumed in **Board/index.js**.
<br>
<br>
(2) **Toolbox**
<br>
<br>
This has context to the colors and the brush stroke sizes respectively. These are changed based on the current active menu item i.e., pencil or eraser, and emit the change in config to **Board/index.js**.
<br>
<br>
(3) **Board**
<br>
<br>
All the methods leveraged from the canvas api are consumed here. The events are emitted from here.
<br>

## 📝 Documentations

- JsCafe's implementation: [youtu.be/JsCafe](https://youtu.be/Uh10f2T1d3c?feature=shared)
- Fontawesome for icons: [fontawesome.com](https://fontawesome.com)
- Canvas API: [Canvas_API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- Socket io: [socket.io](https://socket.io/docs/v4/)

## 🚀 Features

 - Draw using different sets of colors and brush strokes.
 - Function to erase sketch.
 - Undo and redo functionality.
 - Downloading the sketchbook in .jpg format.
 - Realtime collab with others.
   
## 🎬 Demo

https://github.com/REEKRAJROY/Sketchbook/assets/55712612/697f51c3-f5c5-4fae-aff4-139ecd5dec42

## 📒 Problems faced

- Unknown at rule @applycss(unknownAtRules) while using @apply form tailwindcss. This warning can be fixed by going to code editor settings and to select ignore from dropdown box for Unknown at rule.
-  useEffect hook caused error of same toolbox properties being applied even after updating the color and brush size. This was fixed by using useLayoutEffect.
- Currently the bg of the canvas is not getting downloaded. This has to be rectified by applying a white bg while downloading the picture.




