var getFirstSelector = function (selector) {
  return document.querySelector(selector);
};

var nestedTarget = function () {
  return document.querySelector('#nested .target');
};

var increaseRankBy = function(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
};

var deepestChild = function() {
  let lis = document.getElementById('grand-node').querySelectorAll('div');
  let next = [];
  
  for (let i = 0; i < lis.length; i++) {
    next.push(lis[i]);
  }
  
  return next[next.length - 1];
};