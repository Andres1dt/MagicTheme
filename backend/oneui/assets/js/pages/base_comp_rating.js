/*
 *  Document   : base_comp_rating.js
 *  Author     : pixelcave
 */
var BaseCompRating=function(){var a=function(){jQuery.fn.raty.defaults.starType="i",jQuery.fn.raty.defaults.hints=["Bad","Poor","Regular","Good","Gorgeous"],jQuery(".js-rating").each(function(){var a=jQuery(this);a.raty({score:a.data("score")?a.data("score"):0,number:a.data("number")?a.data("number"):5,cancel:a.data("cancel")?a.data("cancel"):!1,target:a.data("target")?a.data("target"):!1,targetScore:a.data("target-score")?a.data("target-score"):!1,precision:a.data("precision")?a.data("precision"):!1,cancelOff:a.data("cancel-off")?a.data("cancel-off"):"fa fa-fw fa-times text-danger",cancelOn:a.data("cancel-on")?a.data("cancel-on"):"fa fa-fw fa-times",starHalf:a.data("star-half")?a.data("star-half"):"fa fa-fw fa-star-half-o text-warning",starOff:a.data("star-off")?a.data("star-off"):"fa fa-fw fa-star text-gray",starOn:a.data("star-on")?a.data("star-on"):"fa fa-fw fa-star text-warning",click:function(){}})})};return{init:function(){a()}}}();jQuery(function(){BaseCompRating.init()});