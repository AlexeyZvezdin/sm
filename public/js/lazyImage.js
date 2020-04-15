console.log('hello');
if (typeof window !== 'undefined') {
  document.addEventListener(
    'DOMContentLoaded',
    function () {
      var imgs = document.querySelectorAll('img');
      var iframes = document.querySelectorAll('iframe');
      var sources = document.querySelectorAll('source');
      var elements = Array.from(imgs)
        .concat(Array.from(iframes))
        .concat(Array.from(sources));
      elements.forEach(function (el) {
        if ('src' in el.dataset || 'srcset' in el.dataset) {
          imageObserver.observe(el);
        }
      });
    },
    false
  );
  var imageObserver = new IntersectionObserver(function (entries, imgObserver) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var lazyImage = entry.target;
        if ('src' in lazyImage.dataset) {
          lazyImage.src = lazyImage.dataset.src;
          delete lazyImage.dataset.src;
        }
        if ('srcset' in lazyImage.dataset) {
          lazyImage.srcset = lazyImage.dataset.srcset;
          lazyImage.type = lazyImage.dataset.type;
          delete lazyImage.dataset.srcset;
          delete lazyImage.dataset.type;
        }
      }
    });
  });
}
