This is a excalidraw/miro clone made using [Next.js](https://nextjs.org/).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
<br>
<br>
Visit [https://github.com/REEKRAJROY/sketchbook-backend](sketchbook-backend]) to run the backend service. By default, it runs in [http://localhost:3000](http://localhost:3000). Change this PORT number, go to **src/socket.js**, and copy-paste the PORT number under '' in the url variable. Ensure both the services are running for web sockets to emit events.

## Walkthrough

The project has three sub-folders:-
<br>
<br>
(1) Menu
<br>
<br>
**src/components/Menu/index.js** has context to the pencil, eraser, undo, redo, and download respectively. There is a **handleMenuClick** handler which emits the **activeMenuItem** i.e., pencil/eraser. **handleActionItemClick** has context to **actionItemClick** i.e., undo, redo, and download and emits which is consumed in **Board/index.js**.
<br>
<br>
(2) Toolbox
<br>
<br>
This has context to the colors and the brush stroke sizes respectively. These are changed based on the current active menu item i.e., pencil or eraser, and emit the change in config to **Board/index.js**
<br>
<br>
(3) Board
All the methods leveraged from the canvas api are consumed here. The events are emitted from here.
<br>

## Documentations

To learn more about Next.js, take a look at the following resources:

- JsCafe's implementation: [youtu.be/JsCafe](https://youtu.be/Uh10f2T1d3c?feature=shared)
- Fontawesome for icons: [fontawesome.com](https://fontawesome.com)
- Canvas API: (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)[Canvas_API]
- Socket io: (https://socket.io/docs/v4/)[socket.io]

## Demo


