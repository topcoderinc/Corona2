import DAT from './globe';

export default function initGlobe(data, sizeOfPoint, type) {
  const container = document.getElementById('container');
  let globe;

  if (type == 'magnitude') {
    globe = new DAT.Globe(container, 'magnitude', sizeOfPoint);
  } else {
    globe = new DAT.Globe(container, 'flat', sizeOfPoint);
  }
  if (data && data.length) {
    globe.addData(data);

    globe.createPoints();
    globe.animate();
  }
}
