AFRAME.registerComponent('link', {
  schema: {default: ''},

  init: function () {
    var url = this.data;
    this.el.addEventListener('click', function () {
      window.location.href = url;
    });
  }
});

el.addEventListener('click', function () {
  window.location.href = 'https://google.com';
});