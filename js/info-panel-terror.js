/* global AFRAME */
AFRAME.registerComponent('info-panel', {
  init: function () {
    var buttonEls = document.querySelectorAll('.menu-button');
    var fadeBackgroundEl = this.fadeBackgroundEl = document.querySelector('#fadeBackground');

    this.movieImageEl;
    this.movieTitleEl = document.querySelector('#movieTitle');
    this.movieDescriptionEl = document.querySelector('#movieDescription');

    this.movieInfo = {
      mortoNaoFalaButton: {
        title: 'morto nao Fala (2018)',
        imgEl: document.querySelector('#mortoNaoFalaMovieImage'),
        description: 'Stenio e plantonista noturno no necroterio de uma grande e violenta cidade. Em suas madrugadas de trabalho, ele nunca esta so, ja que possui um dom paranormal de comunicacao com os mortos. Quando as confidencias que ouve do alem revelam segredos de sua propria vida, Stenio desencadeia uma maldicao que traz perigo e morte para perto de si e de sua familia.'
      },
      cemiterioButton: {
        title: 'O cemiterio das almas perdidas (2021)',
        imgEl: document.querySelector('#cemiterioMovieImage'),
        description: 'Corrompido pelo poder do livro negro de Cipriano, um jesuita e seus seguidores iniciam um reinado de terror no Brasil colonial, ate serem amaldicoados a viver eternamente presos sob os tumulos de um cemiterio.'
      },
    };

    this.onMenuButtonClick = this.onMenuButtonClick.bind(this);
    this.onBackgroundClick = this.onBackgroundClick.bind(this);
    this.backgroundEl = document.querySelector('#background');
    for (var i = 0; i < buttonEls.length; ++i) {
      buttonEls[i].addEventListener('click', this.onMenuButtonClick);
    }
    this.backgroundEl.addEventListener('click', this.onBackgroundClick);
    this.el.object3D.renderOrder = 9999999;
    this.el.object3D.depthTest = false;
    fadeBackgroundEl.object3D.renderOrder = 9;
    fadeBackgroundEl.getObject3D('mesh').material.depthTest = false;
  },

  onMenuButtonClick: function (evt) {
    var movieInfo = this.movieInfo[evt.currentTarget.id];

    this.backgroundEl.object3D.scale.set(1, 1, 1);

    this.el.object3D.scale.set(1, 1, 1);
    if (AFRAME.utils.device.isMobile()) { this.el.object3D.scale.set(1.4, 1.4, 1.4); }
    this.el.object3D.visible = true;
    this.fadeBackgroundEl.object3D.visible = true;

    if (this.movieImageEl) { this.movieImageEl.object3D.visible = false; }
    this.movieImageEl = movieInfo.imgEl;
    this.movieImageEl.object3D.visible = true;

    this.movieTitleEl.setAttribute('text', 'value', movieInfo.title);
    this.movieDescriptionEl.setAttribute('text', 'value', movieInfo.description);
  },

  onBackgroundClick: function (evt) {
    this.backgroundEl.object3D.scale.set(0.001, 0.001, 0.001);
    this.el.object3D.scale.set(0.001, 0.001, 0.001);
    this.el.object3D.visible = false;
    this.fadeBackgroundEl.object3D.visible = false;
  }
});