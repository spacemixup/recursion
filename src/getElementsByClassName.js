// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  var result = [];
  var recurseDamnyou = function (node) {
    if ((node.classList) && (node.classList.length > 0)) {
      if (_.contains(node.classList, className)) {
        result.push(node);
      }
    }
    if (node.childNodes.length > 0) {
      for (var j = 0; j < node.childNodes.length; j++) {
        recurseDamnyou(node.childNodes[j]);
      }
    }
  }
  recurseDamnyou(document.body);
  return result;
}