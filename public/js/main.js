var token = $('[name="csrf-token"]').attr('content');
$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': token
    }
});
$('body').on('click', 'a[data-method="delete"], .confirm-delete', function () {
    var action = $(this).attr('data-url');
    if (!action) {
        action = $(this).attr('href');
    }
    var form =
        $('<form>', {
            'method': 'POST',
            'action': action
        });

    var tokenInput =
        $('<input>', {
            'type': 'hidden',
            'name': '_token',
            'value': token
        });

    var hiddenInput =
        $('<input>', {
            'name': '_method',
            'type': 'hidden',
            'value': 'delete'

        });
    form.append(tokenInput, hiddenInput).hide().appendTo('body').submit();
    return false;
});

$('#whitelist_login_on').on('change',function () {
    var thisControl = $(this);
    var url = thisControl.attr('data-url');
    var btnAddAccountWhitelist = $('#addAccountWhitelist');
    var tableArea = $('#table-area');
    // var message = $('#whitelist_login_message');
    $.ajax({
        url: url,
        type: 'post',
        // data: {message: message.val()},
        success: function (response) {
            if(response.whitelist_login_on === 1) {
                // message.val(response.whitelist_login_message);
                btnAddAccountWhitelist.attr('disabled',false);
                tableArea.attr('hidden', false);
            } else {
                // message.val('');
                btnAddAccountWhitelist.attr('disabled',true);
                tableArea.attr('hidden', true);
            }
        }
    });
});
$('#addWhitelistBtn').on('click', function () {
    var newRow = $('#selectWhitelist').val();
    var appId = $('#appWL').val();
    url = $(this).attr('data-url');
    $.ajax({
        url: url,
        type: 'post',
        data: {user_id: newRow, app_id: appId},
        success: function () {
            location.reload(true);
        }
    });
});
