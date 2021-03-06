//
// Framework TrialVersion 1.0.60
//
// Copyright 2011, Licensed under the MIT license.
// http://innovator.samsungmobile.com/
//
//

$( function (){

	// Global setting1
	$.globalSetting ({
		"softkeyData"	: softKeyData,
	});
	$(".idle").option({
		"background" : ["gradient","red"],
	})
	// Scene Navigation
	$("#goComponent").tap(		function(){ $.go("#sComponent"); });
	$("#goDataProcessing").tap(	function(){ $.go("#sFeedTab"); });

	$("#goTransition").tap( function(){ $.go("sTransition"); });
	$("#goSlideVer").tap( function(){ $.go("effectArea", {"transitionEffect" : "slideVer"}); });
	$("#goSlideHor").tap( function(){ $.go("effectArea", {"transitionEffect" : "slideHor"}); });
	$("#goFade").tap( function(){ $.go("effectArea", {"transitionEffect" : "fade"}); });
	$("#goPop").tap( function(){ $.go("effectArea", {"transitionEffect" : "popup"}); });
	$("#btnEffBack").tap( function(){ $.back(); });

	$("#goTouchEvent").tap( function(){ $.go("#sTouchEvent"); });
	$("#goTextList").tap( function(){ $.go("#sTextList"); });
	$("#goImageList").tap( function(){ $.go("#sImageList"); });
	$("#goTab").tap( function(){ $.go("#sTab"); });
	$("#goTextPage").tap( function(){ $.go("#sTextPage"); });
	$("#goTap").tap(	function(){ $.go("#sTap"); });
	$("#goFlick").tap( function(){ $.go("#sFlick"); });
	$("#goSwipe").tap( function(){ $.go("#sSwipe"); });
	$('.factory-idle').tap(function(){ $.go("#index") })

	$("#goUserSetting").tap( function () { $.go("#sUserSettingData"); } );

	// Touch event
	$(".swipeExBox").swipe(true,50,function(){})
	$(".touchExBox").touchStart(function(){ $(this).addClass("on"); });
	$(".touchExBox").touchEnd(function(){ $(this).removeClass("on"); });
	$(".exTap").tap(function(){ $.alert("tap"); });
	$(".exLongTap").longTap(function(){ $.alert("Long Tap"); });
	$(".exDoubleTap").doubleTap(function(){ $.alert("Double Tap"); });
	$(".flickExBox").flickLeft(function(){ $.alert("Flick Left"); });
	$(".flickExBox").flickRight(function(){ $.alert("Flick Right"); });
	$(".flickExBox").flickUp(function(){ $.alert("Flick Top"); });
	$(".flickExBox").flickDown(function(){ $.alert("Flick Bottom"); });

	$("#goPopup").tap(function(){
		$.alert("This is Popup Window!");
	});

	$.settingList( "sUserSettingData", settingListData );
	$.settingList( "setTrans", setTransListData );
	$.settingList( "setTheme", setThemeListData );

	// Ajax processing at Tabmenu Component (#feedtab)
	$("#feedTab").feed( feedTestDataTabMenu );

	// Insert text string on the Datareceivetime Component
	$.dataReceiveInfo( "Samsung Mobile Innovator" );

});
