/* https://github.com/nickbooties */

MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

//delete anything that changes with cookie/privacy in the html
var observer = new MutationObserver(function(mutations, observer) {
    mutations.forEach(function(mutation){

      t = mutation.target;

      if(t.className.search(/idcayp/) == -1) {

        if(t.innerHTML.toString().search(/privacy|cookie/ig) >= 0) {

          console.log(mutation);
          if(mutation.attributeName == "class") {
            //reset element
            t.className = mutation.oldValue;

          } else if (mutation.attributeName == "style") {
            t.style = mutation.oldValue;
          }

          //tag anything we may have touched.
          t.className = t.className+" idcayp";

        }
      }
    });
});

observer.observe(document, {
  subtree: true,
  childlist:true,
  attributes: true,
  attributeOldValue: true
});
console.log('loaded');
