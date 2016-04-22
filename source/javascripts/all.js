// This is where it all goes :)

function getClickedArea() {

  $('.map svg > g').click(function() {
    var areaClicked = $(this).attr('id');
    var dataTime = $(this).attr('data-time');
    $('.add-friend #area').val(areaClicked);
    $('.add-friend #area').attr('data-time',dataTime);

  });

}

function addFriend() {

  var friendName = $('.add-friend #name').val();
  var friendTime = ' ';
  friendTime = -12 + parseInt($('.add-friend #area').attr('data-time'));

  // friendTime = moment().add(friendTime, 'h').format('D MMMM, h:mm:ss a');

  $('.friends-list .no-friends').fadeOut();


  var theList = $('.friends-list ul');
  var theFriend = '<li><h3>' + friendName + '</h3><p data-time=' + friendTime + ' >' + moment().add(friendTime, 'h').format('D MMMM, h:mm:ss A') + '</p></li>';

  $(theList).append(theFriend);


  $('.add-friend #name').val('');
  $('.add-friend #area').val('');

}

function update2() {

    var liiissst = $('.friends-list li').toArray();

    $(liiissst).each(function(){

      var offset = $(this).find('p').attr('data-time');

      $(this).find('p').html(moment().add(offset, 'h').format('D MMMM, h:mm:ss A'));

    })

};

function upDate() {
    $('.time-now p').html(moment().format('D MMMM, h:mm:ss A'));
};

$(function() {

  upDate(moment(new Date()));

  setInterval('upDate()', 1000);

  setInterval('update2()', 1000);

  getClickedArea();

  $('#add').click(function() {
    addFriend();
  });

  $('.map').mouseenter(function() {
    $(this).removeClass('black')
  });



});
