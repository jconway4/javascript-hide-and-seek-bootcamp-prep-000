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
  
  return lis[3];
};
  
  
  // var find = function(array) {
  //   let current = array;
  //   let next = [];
    
  //   while (current) {
  //     if (Array.isArray(current)) {
  //       return current;
  //     }
      
  //     if (Array.isArray(current)) {
  //       for (let i = 0; i < current.length; i++) {
  //         next.push(current[i]);
  //       }
  //     }
  //   current = next.shift();
  //   }
  // };
