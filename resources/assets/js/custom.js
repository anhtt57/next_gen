function initVersionModal(){
	$('#version-form').validate({
		rules: {
		    game_version: {
		      required: true
		    },
		    bundle_id: {
		      required: true
		    }
	  	},
		messages: {
            game_version: {
                required: "Game version is required"
            },
            bundle_id: {
                required: "Bundle ID is required"
            }
        },
        submitHandler: function(form){
        	var data = $(form).serialize();
        	var url  = $(form).attr('action');
        	$.ajax({
        		url: url,
        		type: 'POST',        		
        		data: data,
        	})
        	.done(function(data) {
        		if(data.status == 'ok'){
        			window.location.reload();
        		}else{
        			return $.toaster({ priority : 'danger', title : 'Error!', message : data.message});
        		}
        	})
        	.fail(function() {
        		console.log("error");
        	});
        	return false;
        }
	});
}

function initModal(){
	initVersionModal();
}

function ajaxChangeVersionCheckbox(){
	$('#gridview .ajax-change-version').on('change', function(e){
		var val 	= this.checked;
		var field 	= $(this).attr('name');
		var row_id 	= $(this).attr('row-id');
		var data 	= {
			val, field, row_id
		};
		$.ajax({
			url: base_url + '/version/ajax-change-version-data',
			data: data,
		})
		.done(function(data) {
			if(data.status == 'ok'){
				return $.toaster({ priority : 'success', title : 'Success!', message : data.message});
			}else{
				return $.toaster({ priority : 'danger', title : 'Error!', message : data.message});
			}
		})
		.fail(function() {
			alert("error");
		});
		
	});
}

function ajaxLoadGridviewActionModal(){
	$('.form-content-action-btn').on('click', function(){
		var link = $(this).attr('link');
		$('#form-content #body').load(link, function(){
			$('#form-content').modal('show');
	    	initModal();
	    });
		
	});
}

function dataTableDrawCallBack(){
	ajaxChangeVersionCheckbox();
	ajaxLoadGridviewActionModal();
}

$(document).ready(function() {
	// ajaxChangeVersionCheckbox();
	// ajaxLoadGridviewActionModal();
});
