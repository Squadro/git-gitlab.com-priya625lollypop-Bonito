$(function(){$(".simplefilter li").click(function(){$(".simplefilter li").removeClass("active"),$(this).addClass("active")}),$(".multifilter li").click(function(){$(this).toggleClass("active")})}),$(function(){$(".filtr-container").filterizr()});var maxHeight=0;$(".creation-category-card__details").each(function(){$(this).height()>maxHeight&&(maxHeight=$(this).height())}),$(".creation-category-card__details").height(maxHeight),$(document).ready(function(){$(".creation-category-card").addClass("active"),$(".our-creation__filters .button").click(function(){$(this).siblings().removeClass("current"),$(this).addClass("current")})});