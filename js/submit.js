function submit() {
  $('#field-error').hide()
  $('#field-name').hide()
  $('#yui_3_17_2_1_1444829626444_252030-field').hide()
  $('#yui_3_17_2_1_1444829626444_251602-field').hide()
  //  if(!$('[name=lname]').val().length){
  //   $('#field-error').show()
  //    $('#field-name').text('Name is missing required subfields: Last').show()
  //    return false;
  //   }
  if (!$('[name=fname]').val().length) {
    $('#field-error').show()
    $('#field-name').text('Name is required.').show()
    $('#submit').val('Submit')
    return false;
  }
  if (!$('#text-yui_3_17_2_1_1444829626444_252030-field').val().length) {
    $('#field-error').show()
    $('#yui_3_17_2_1_1444829626444_252030-field').text('Product Serial Number is required.').show()
    $('#submit').val('Submit')
    return false;
  }
  if (!$('#email-yui_3_17_2_1_1444829626444_251602-field').val().length) {
    $('#field-error').show()
    $('#yui_3_17_2_1_1444829626444_251602-field').text('Email Address is not valid. Email addresses should follow the format user@domain.com.').show()
    $('#submit').val('Submit')
    return false;
  }
  $('#submit').val('Submitting')
  $.post('https://artemis.yucent.com/org/cms/api/temp/send/mail',
    {
      title: 'SIGN UP',
      body: '<b>Name:</b>' + $('[name=fname]').val() + ($('[name=lname]').val() ? ' ' + $('[name=lname]').val() : '') + '<br><br><b>Product Serial Number:</b>' + $('#text-yui_3_17_2_1_1444829626444_252030-field').val()
        + '<br><br><b>Email Address:</b>' + $('#email-yui_3_17_2_1_1444829626444_251602-field').val(),
      to: 'info@accuzonemc.com'
    }, function (res) {
      if (res.code == 1) {
        $('.field-list').hide()
        $('#submit').hide()
        $('#submit').val('Submit')
        $('.form-submission-text').show()
      }
    })
}
function warrantySubmit() {
  $('#field-error').hide()
  $('#field-name').hide()
  $('#yui_3_17_2_1_1444829626444_252030-field').hide()
  $('#yui_3_17_2_1_1594227740331_16859-field').hide()
  $('#yui_3_17_2_1_1444829626444_251602-field').hide()

  if (!$('[name=fname]').val().length) {
    $('#field-error').show()
    $('#field-name').text('Name is required.').show()
    return false;
  }
  if (!$('#text-yui_3_17_2_1_1444829626444_252030-field').val().length) {
    $('#field-error').show()
    $('#yui_3_17_2_1_1444829626444_252030-field').text('Product Serial Number is required.').show()
    return false;
  }
  if (!$('#text-yui_3_17_2_1_1594227740331_16859-field').val().length) {
    $('#field-error').show()
    $('#yui_3_17_2_1_1594227740331_16859-field').text('Amazon Order ID is required.').show()
    return false;
  }
  if (!$('#email-yui_3_17_2_1_1444829626444_251602-field').val().length) {
    $('#field-error').show()
    $('#yui_3_17_2_1_1444829626444_251602-field').text('Email Address is not valid. Email addresses should follow the format user@domain.com.').show()
    return false;
  }
  $('#submit').val('Submitting')
  $.post('https://artemis.yucent.com/org/cms/api/temp/send/mail',
    {
      title: 'warranty',
      body: '<b>Name:</b>' + $('[name=fname]').val() + ($('[name=lname]').val() ? ' ' + $('[name=lname]').val() : '') + '<br><br><b>Product Serial Number:</b>' + $('#text-yui_3_17_2_1_1444829626444_252030-field').val() + '<br><br><b>Amazon Order ID:</b>' + $('#text-yui_3_17_2_1_1594227740331_16859-field').val()
        + '<br><br><b>Email Address:</b>' + $('#email-yui_3_17_2_1_1444829626444_251602-field').val(),
      to: 'Support@accuzonemc.com'
    }, function (res) {
      if (res.code == 1) {
        $('.field-list').hide()
        $('#submit').hide()
        $('#submit').val('Submit')
        $('.form-submission-text').show()
      }
    })
  return false;
};
function contactSubmit() {
  $('#field-error').hide()
  $('#field-name').hide()
  $('#yui_3_17_2_1_1444829626444_251602-field').hide()

  $('#yui_3_17_2_1_1444829626444_252030-field').hide()
  $('#yui_3_17_2_1_1594227740331_16859-field').hide()

  if (!$('[name=fname]').val().length) {
    $('#field-error').show()
    $('#field-name').text('Name is required.').show()
    return false;
  }

  if (!$('#email-yui_3_17_2_1_1444829626444_251602-field').val().length) {
    $('#field-error').show()
    $('#yui_3_17_2_1_1444829626444_251602-field').text('Email Address is not valid. Email addresses should follow the format user@domain.com.').show()
    return false;
  }

  if (!$('#text-yui_3_17_2_1_1444829626444_252030-field').val().length) {
    $('#field-error').show()
    $('#yui_3_17_2_1_1444829626444_252030-field').show()
    return false;
  }
  if (!$('#textarea-yui_3_17_2_1_1444829626444_252458-field').val().length) {
    $('#field-error').show()
    $('#yui_3_17_2_1_1444829626444_252458-field').show()
    return false;
  }
  $('#submit').val('Submitting')
  $.post('https://artemis.yucent.com/org/cms/api/temp/send/mail',
    {
      title: 'contact',
      body: '<b>Name:</b>' + $('[name=fname]').val() + ($('[name=lname]').val() ? ' ' + $('[name=lname]').val() : '') + '<br><br><b>Subject:</b>' + $('#text-yui_3_17_2_1_1444829626444_252030-field').val() + '<br><br><b>Message:</b>' + $('#textarea-yui_3_17_2_1_1444829626444_252458-field').val()
        + '<br><br><b>Email Address:</b>' + $('#email-yui_3_17_2_1_1444829626444_251602-field').val(),
      to: 'info@accuzonemc.com'
    }, function (res) {
      if (res.code == 1) {
        $('.field-list').hide()
        $('#submit').hide()
        $('#submit').val('Submit')
        $('.form-submission-text').show()
      }
    })
  return false;
};