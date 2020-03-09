import {css} from 'lit-element';

export const styles = css`

.main-app {
    grid-area: main;
}

.container-app {
    padding: 15px;
    box-sizing: border-box;
}

canvas {
  display: block;
  margin: 0 auto;
  background: $canvas-bg;
  border-radius: 3px;
  box-shadow: 0px 0px 15px 3px #ccc;
  cursor:pointer;
}

.actions {
    margin: 0 auto;
    margin-top: 20px;
    width: 300px;
    display: flex;
    justify-content: space-around;
}
`;
