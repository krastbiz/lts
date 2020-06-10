const navItemCls = "page-nav__item";
const navContentItem = "page-nav-content__item";

const navActiveCls = "page-nav__item_active";
const navActiveItemCls = "page-nav__item_active-";

$(document).ready(function() {
	var navItem = $("." + navItemCls + "");
	var navContent = $("." + navContentItem + "");

	navItem.on('click', function(event) {
		var target = event.currentTarget;
		var classes = target.classList;

		var index = 0;
		//at the first find out the index to show
		for(var i = 0; i < classes.length; i++) {
			if (classes[i].startsWith(navItemCls)) {

				var lastChar = classes[i].substring(classes[i].length - 1, classes[i].length);

				if (!isNaN(lastChar))
					index = lastChar;
			}
		}

		for(var i = 0; i < 6; i++) {
			navItem.removeClass(navActiveItemCls + (i + 1));
		}

		navItem.removeClass(navActiveCls);
		$(target).toggleClass(navActiveCls);
		$(target).toggleClass(navActiveItemCls + index);

		var itemToOpenCls = navContentItem + "-" + index;
		var itemToShow = $("." + itemToOpenCls + "");
		navContent.hide();
		itemToShow.show();

	});
});