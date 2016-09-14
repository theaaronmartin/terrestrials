// $(document).ready(function(){
// var images=['/images/alien.jpg',
//             '/images/moon.jpg',
//             '/images/space.jpg'];
//
// var randomNumber = Math.floor(Math.random() * images.length);
// var bgImg = 'url(' + images[randomNumber] + ')';
//
// $('body').css({'background':bgImg, 'background-size':'cover', });
//
// });

// if(!!document.createElement('audio').canPlayType) {
//
//   var player = '<p class="player"> ... </p>\
//     <audio>\
//       <source src="/path/to/episode1.ogg" type="audio/ogg"></source>\
//       <source src="/path/to/episode1.mp3" type="audio/mpeg"></source>\
//       <source src="/path/to/episode1.wav" type="audio/x-wav"></source>\
//     </audio>';
//
//   $(player).insertAfter("#listen .photo");
//
// }
//
// audio = $('.player audio').get(0);
// loadingIndicator = $('.player #loading');
// positionIndicator = $('.player #handle');
// timeleft = $('.player #timeleft');
//
// if ((audio.buffered != undefined) && (audio.buffered.length != 0)) {
//   $(audio).bind('progress', function() {
//     var loaded = parseInt(((audio.buffered.end(0) / audio.duration) * 100), 10);
//     loadingIndicator.css({width: loaded + '%'});
//   });
// }
// else {
//   loadingIndicator.remove();
// }
//
// $(audio).bind('timeupdate', function() {
//
//   var rem = parseInt(audio.duration - audio.currentTime, 10),
//   pos = (audio.currentTime / audio.duration) * 100,
//   mins = Math.floor(rem/60,10),
//   secs = rem - mins*60;
//
//   timeleft.text('-' + mins + ':' + (secs > 9 ? secs : '0' + secs));
//   if (!manualSeek) { positionIndicator.css({left: pos + '%'}); }
//   if (!loaded) {
//     loaded = true;
//
//     $('.player #gutter').slider({
//       value: 0,
//       step: 0.01,
//       orientation: "horizontal",
//       range: "min",
//       max: audio.duration,
//       animate: true,
//       slide: function() {
//         manualSeek = true;
//       },
//       stop:function(e,ui) {
//         manualSeek = false;
//         audio.currentTime = ui.value;
//       }
//     });
//   }
//
// });
//
// $(audio).bind('play',function() {
//   $("#playtoggle").addClass('playing');
// }).bind('pause ended', function() {
//   $("#playtoggle").removeClass('playing');
// });
//
// $("#playtoggle").click(function() {
//   if (audio.paused) { audio.play(); }
//   else { audio.pause(); }
// });
