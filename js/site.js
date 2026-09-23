(function () {
  'use strict';

  var ACTIVE_HEX = '#00F0FF';
  var brushSize = 16;

  function qs(sel, root) {
    return (root || document).querySelector(sel);
  }

  function qsa(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }

  function setActiveHex(hex) {
    ACTIVE_HEX = hex.toUpperCase();
    qsa('.js-active-hex').forEach(function (el) {
      el.textContent = ACTIVE_HEX;
    });
  }

  function initToolRack() {
    var tools = qsa('aside .grid.grid-cols-2 > button');
    tools.forEach(function (btn) {
      btn.addEventListener('click', function () {
        tools.forEach(function (b) { b.classList.remove('tool-active'); });
        btn.classList.add('tool-active');
      });
    });
    if (tools[0]) tools[0].classList.add('tool-active');
  }

  function initPixelStep() {
    var steps = qsa('aside .w-full.flex.justify-between button');
    steps.forEach(function (btn) {
      btn.addEventListener('click', function () {
        steps.forEach(function (b) {
          b.classList.remove('bg-primary-container', 'text-on-primary-container', 'font-bold');
          b.classList.add('bg-surface-container-highest', 'text-on-surface');
        });
        btn.classList.remove('bg-surface-container-highest', 'text-on-surface');
        btn.classList.add('bg-primary-container', 'text-on-primary-container', 'font-bold');
      });
    });
  }

  function initPalette() {
    var swatches = qsa('footer .grid button, .js-palette button');
    swatches.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var bg = window.getComputedStyle(btn).backgroundColor;
        var hex = rgbToHex(bg) || btn.getAttribute('data-hex') || ACTIVE_HEX;
        setActiveHex(hex);
        swatches.forEach(function (s) { s.classList.remove('swatch-active'); });
        btn.classList.add('swatch-active');
      });
    });
  }

  function rgbToHex(rgb) {
    var m = rgb && rgb.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
    if (!m) return null;
    return '#' + [m[1], m[2], m[3]].map(function (n) {
      return ('0' + parseInt(n, 10).toString(16)).slice(-2);
    }).join('').toUpperCase();
  }

  function initBrushSize() {
    var wrap = qs('footer .flex.items-center.gap-1');
    if (!wrap) return;
    var minus = wrap.querySelector('button:first-of-type');
    var plus = wrap.querySelector('button:last-of-type');
    var label = wrap.querySelector('span.font-code');
    function render() {
      if (label) label.textContent = brushSize + 'px';
    }
    if (minus) {
      minus.addEventListener('click', function () {
        brushSize = Math.max(1, brushSize - 1);
        render();
      });
    }
    if (plus) {
      plus.addEventListener('click', function () {
        brushSize = Math.min(128, brushSize + 1);
        render();
      });
    }
  }

  function initHeaderActions() {
    qsa('header button').forEach(function (btn) {
      var text = (btn.textContent || '').trim().toUpperCase();
      if (text === 'EXPORT') {
        btn.addEventListener('click', function () {
          var blob = new Blob(
            ['CYBERPAINT EXPORT\nACTIVE_HEX=' + ACTIVE_HEX + '\nBRUSH=' + brushSize + 'px\n'],
            { type: 'text/plain' }
          );
          var a = document.createElement('a');
          a.href = URL.createObjectURL(blob);
          a.download = 'cyberpaint-export.txt';
          a.click();
          URL.revokeObjectURL(a.href);
        });
      }
      if (text === 'FLIP 3D') {
        btn.addEventListener('click', function () {
          var main = qs('main');
          if (!main) return;
          main.classList.remove('flip-3d-anim');
          void main.offsetWidth;
          main.classList.add('flip-3d-anim');
          main.addEventListener(
            'animationend',
            function () {
              main.classList.remove('flip-3d-anim');
            },
            { once: true }
          );
        });
      }
    });
  }

  function initScrollReveal() {
    var nodes = qsa('.reveal-on-scroll');
    if (!nodes.length || !('IntersectionObserver' in window)) {
      nodes.forEach(function (n) { n.classList.add('is-visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    nodes.forEach(function (n) { io.observe(n); });
  }

  function markActiveHexLabel() {
    qsa('footer .font-code.text-label-md.text-primary.font-bold').forEach(function (el) {
      el.classList.add('js-active-hex');
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    markActiveHexLabel();
    initToolRack();
    initPixelStep();
    initPalette();
    initBrushSize();
    initHeaderActions();
    initScrollReveal();
  });
})();
