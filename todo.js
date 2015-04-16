$( document ).ready(function() {
	$( ".add-item" ).bind( "click", function() {
  		addItem();
	});

	$( ".remove-selected-item" ).bind( "click", function() {
  		removeItem();
	});

	newItem = '';
	$("#new-item").keyup(function(){
    	newItem = $(this).val();
    });
});

function addItem(){
	// Validate that there is in fact a new/valid item.
	if(newItem === ''){
		alert("Why do you need a todo list if you're doing nothing.");
		return;
	}

	// Create/add list element to .todo-list.
	var itemHtml = 	'<li>' +
					'<input type="checkbox" class="done-checkbox" value=false>' +
					'<input type="checkbox" class="remove-checkbox" value=false>' + newItem + '</li>';
	$('.todo-list').append(itemHtml);
}

function removeItem(){
	// Get all checked items.
	$('input:checkbox.remove-checkbox').each(function () {
    	if(this.checked) {
			// remove the checkbox's parent from the list
			$(this).parent().remove();
		}
  	});
}
