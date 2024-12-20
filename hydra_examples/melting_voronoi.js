osc(1, 1, 0.5)
  .blend(noise(3))
  .diff(shape([1, 3, 4, 5].smooth(), 0.5)
  .rotate(() => a.fft[0] * 10, 0.1)
  .repeat(4, 4)
  .kaleid()
  .modulate(voronoi(5,0.3,0.3))
  .diff(voronoi().modulateRotate(noise(10)))
  .scrollX(Math.sin(time * 0.001), 0.001)
  .scrollY(0.01, Math.cos(time * 0.001))
  .modulateKaleid(osc(1, 1, 1))
  .blend(osc(1, 1, 1))
  .diff(shape([1, 3, 4, 5].smooth(), 0.5))
)
.repeat(4, 4)
.scrollX(0.1, 0.001)
.scrollY(0.01, 0.1)
.modulate(voronoi().blend(noise()))
.out()