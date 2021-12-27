const GLOBAL_CFG = {
  loop: true
}

const DOLL = anime({
  ...GLOBAL_CFG,
  targets: '#gear1 path',
  rotate: 360,
  easing: 'linear'
})