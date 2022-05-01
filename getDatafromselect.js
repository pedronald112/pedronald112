var items2 = jQuery("#sel_provincia > option").map(function() {
    var opt = {
    	value:jQuery(this).val(),
    	name:jQuery(this).text(),
    };
    return opt;
}).get();
