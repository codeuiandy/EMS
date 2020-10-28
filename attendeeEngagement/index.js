
$(document).ready(function(){

  $(".check2-suv").click(function(){
    $(".check1-suv-checked").removeClass("surveey-card-header-checkbox-ck");
    $(".check2-suv-checked").addClass("surveey-card-header-checkbox-ck")
  });

  $(".check1-suv").click(function(){
    $(".check2-suv-checked").removeClass("surveey-card-header-checkbox-ck");
    $(".check1-suv-checked").addClass("surveey-card-header-checkbox-ck")
  });

  $(".ft-en-feedback").click(function(){
    $(".engagementElementSwitch1").addClass("hide-engagement")
    $(".engagementElementSwitch3").addClass("hide-engagement")
    $(".engagementElementSwitch2").removeClass("hide-engagement")
    $(".active-link-survey").removeClass("hide-engagement")
    $(".active-link-feedback").addClass("active-engagement-ems")
    $(".active-link-survey").removeClass("active-engagement-ems")
    $(".active-link-poll").removeClass("active-engagement-ems")
    
    
  });

  
  $(".ft-en-poll").click(function(){
    $(".engagementElementSwitch1").addClass("hide-engagement")
    $(".engagementElementSwitch2").addClass("hide-engagement")
    $(".engagementElementSwitch3").removeClass("hide-engagement")
    $(".active-link-feedback").removeClass("active-engagement-ems")
    $(".active-link-survey").removeClass("active-engagement-ems")
    $(".active-link-poll").addClass("active-engagement-ems")
  });

  $(".ft-en-survey").click(function(){
    $(".engagementElementSwitch2").addClass("hide-engagement")
    $(".engagementElementSwitch3").addClass("hide-engagement")
    $(".engagementElementSwitch1").removeClass("hide-engagement")
    $(".active-link-feedback").removeClass("active-engagement-ems")
    $(".active-link-survey").addClass("active-engagement-ems")
    $(".active-link-poll").removeClass("active-engagement-ems")
    
  });

// SURVEY NEXT BTN CONTROL
  $(".survey-next").click(function(){
  window.location.href="/j"
  });

  







});