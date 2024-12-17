// 1: laptop webcam, 0: iPhone
s0.initCam(0)
osc(5, -0.1, 0.5).rotate(0.3, 0.1).pixelate().kaleid().repeat().out(o1)
src(s0).color(0, 1).out(o0)
osc(10, 0.1, 1.2).blend(noise(3)).out(o3)
src(o0).blend(o3).modulateRotate(o1, -0.5).out(o2)
render(o2)