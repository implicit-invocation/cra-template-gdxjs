import {
  createStage,
  createViewport,
  createViewportAwareInputHandler,
  createBatch,
  createWhiteTexture,
  createGameLoop
} from 'gdxjs';

const WORLD_WIDTH = 500;
const WORLD_HEIGHT = 1000;

const init = async () => {
  const stage = createStage();
  const canvas = stage.getCanvas();
  const viewport = createViewport(canvas, WORLD_WIDTH, WORLD_HEIGHT);

  const gl = viewport.getContext();
  const camera = viewport.getCamera();
  const batch = createBatch(gl);
  const white = createWhiteTexture(gl);

  const inputHandler = createViewportAwareInputHandler(canvas, viewport);

  gl.clearColor(0, 0, 0, 1);
  createGameLoop(delta => {
    gl.clear(gl.COLOR_BUFFER_BIT);
    batch.setProjection(camera.combined);
    batch.begin();

    batch.draw(white, 0, 0, 500, 1000);

    batch.end();
  });
};

init();
