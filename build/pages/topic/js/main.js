var tl, topics;
function init() {
  topics = document.querySelectorAll('.topic');
  for (var i = 0; i < topics.length; i++) {
    TweenLite.to(topics[i], 0, {autoAlpha: 0, ease: Quad.easeInOut});
  }

  stepAnim(1);
}

function stepAnim(index) {
  switch (index) {
    case 1:

      tl = new TimelineLite();
      tl.staggerTo(topics, 0.5, {autoAlpha: 1, ease:Quad.easeInOut}, 0.25);
      break;

  }

}

init();
