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
  var find = function(array, criteriaFN) {
    let current = array;
    let next = [];
    
    while (current) {
      if (criteriaFN(current)) {
        return current;
      }
      
      if (Array.isArray(current)) {
        for (let i = 0; i < current.length; i++) {
          next.push(current[i]);
        }
      }
    current = next.shift();
    }
  };
  
  return find (
    document.getElementById('grand-node').querySelectorAll('div'),
    function(){n => n > 5})
};