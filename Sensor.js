class Sensor {
  constructor(car) {
    this.car = car;
    this.rayCOunt = 3;
    this.rayLength = 100;
    this.raySpread = Math.PI / 4;

    this.rays = [];
  }

  update() {
    this.rays = [];
    for (let i = 0; i < this.rayCOunt; i++) {
      const rayAngle = lerp(
        this.raySpread / 2,
        -this.raySprea / 2,
        i(this.rayCOunt - 1)
      );
    }
  }
}
