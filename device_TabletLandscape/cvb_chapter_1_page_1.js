if (window.VarCurrentView) VarCurrentView.set('TabletLandscape');
function init_TabletLandscape() {
	if ( rcdObj.view != 'TabletLandscape' ) return;
	if (!isOPAPub() || isLOPopup()) window.init_page();
	preload(rcdObj['preload_'+rcdObj.view]);
}
function defineFuncs_TabletLandscape() {
	if ( rcdObj.view != 'TabletLandscape' ) return;
	try{
		if (window.initGEV)
		{
		 initGEV(0,swipeLeft,swipeRight);

		}
		} catch(e) { if (window.console) window.console.log(e); }	pageClick = n;
	pageRClick = n;
	pageKey = n;
}
textbutton327.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj327inner\"><svg viewBox=\"0 0 70 70\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(35 35)\" style=\"\">\n	<path d=\"M 17.5 0 L 52.5 0 A 17.5 17.5 0 0 1 70 17.5 L 70 52.5 A 17.5 17.5 0 0 1 52.5 70 L 17.5 70 A 17.5 17.5 0 0 1 0 52.5 L 0 17.5 A 17.5 17.5 0 0 1 17.5 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-35, -35) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_4_1014\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"70\" height=\"70\" xlink:href=\"images/arrow2_next.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 17.5 0 L 52.5 0 A 17.5 17.5 0 0 1 70 17.5 L 70 52.5 A 17.5 17.5 0 0 1 52.5 70 L 17.5 70 A 17.5 17.5 0 0 1 0 52.5 L 0 17.5 A 17.5 17.5 0 0 1 17.5 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4_1014&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-35, -35) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(35 35)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 892px; top: 536px; width: 70px; height: 70px; z-index: 1; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"327",
	htmlId:		"tobj327",
	bInsAnc:	false,
	cwObj:		{
		"name":	"arrow2_next",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ trivExitPage('cvb_chapter_1_section_1_page_1.html',true,false);
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32864,0,[892,536,70,70]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":892,"y":536,"width":70,"height":70},"bTriggerScreenRdrOnShow":false,"imgDataNormal":"images/desktop_shape327.png","imgDataOver":"images/desktop_shape327.png","imgDataDown":"images/desktop_shape327.png","imgDataDisabled":"images/desktop_shape327_disabled.png","svgDataNormal":"<g transform=\"translate(35 35)\" style=\"\">\n\t<path d=\"M 17.5 0 L 52.5 0 A 17.5 17.5 0 0 1 70 17.5 L 70 52.5 A 17.5 17.5 0 0 1 52.5 70 L 17.5 70 A 17.5 17.5 0 0 1 0 52.5 L 0 17.5 A 17.5 17.5 0 0 1 17.5 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-35, -35) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_4_1014\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"70\" height=\"70\" xlink:href=\"images/arrow2_next.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 17.5 0 L 52.5 0 A 17.5 17.5 0 0 1 70 17.5 L 70 52.5 A 17.5 17.5 0 0 1 52.5 70 L 17.5 70 A 17.5 17.5 0 0 1 0 52.5 L 0 17.5 A 17.5 17.5 0 0 1 17.5 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4_1014&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-35, -35) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(35 35)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(35 35)\" style=\"\">\n\t<path d=\"M 17.5 0 L 52.5 0 A 17.5 17.5 0 0 1 70 17.5 L 70 52.5 A 17.5 17.5 0 0 1 52.5 70 L 17.5 70 A 17.5 17.5 0 0 1 0 52.5 L 0 17.5 A 17.5 17.5 0 0 1 17.5 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-35, -35) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_4_1016\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"70\" height=\"70\" xlink:href=\"images/arrow2_next.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 17.5 0 L 52.5 0 A 17.5 17.5 0 0 1 70 17.5 L 70 52.5 A 17.5 17.5 0 0 1 52.5 70 L 17.5 70 A 17.5 17.5 0 0 1 0 52.5 L 0 17.5 A 17.5 17.5 0 0 1 17.5 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4_1016&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-35, -35) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(35 35)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(35 35)\" style=\"\">\n\t<path d=\"M 17.5 0 L 52.5 0 A 17.5 17.5 0 0 1 70 17.5 L 70 52.5 A 17.5 17.5 0 0 1 52.5 70 L 17.5 70 A 17.5 17.5 0 0 1 0 52.5 L 0 17.5 A 17.5 17.5 0 0 1 17.5 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-35, -35) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_4_1018\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"70\" height=\"70\" xlink:href=\"images/arrow2_next.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 17.5 0 L 52.5 0 A 17.5 17.5 0 0 1 70 17.5 L 70 52.5 A 17.5 17.5 0 0 1 52.5 70 L 17.5 70 A 17.5 17.5 0 0 1 0 52.5 L 0 17.5 A 17.5 17.5 0 0 1 17.5 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4_1018&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-35, -35) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(35 35)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(35 35)\" style=\"\">\n\t<path d=\"M 17.5 0 L 52.5 0 A 17.5 17.5 0 0 1 70 17.5 L 70 52.5 A 17.5 17.5 0 0 1 52.5 70 L 17.5 70 A 17.5 17.5 0 0 1 0 52.5 L 0 17.5 A 17.5 17.5 0 0 1 17.5 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-35, -35) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_4_1020\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"70\" height=\"70\" xlink:href=\"images/arrow2_next.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 17.5 0 L 52.5 0 A 17.5 17.5 0 0 1 70 17.5 L 70 52.5 A 17.5 17.5 0 0 1 52.5 70 L 17.5 70 A 17.5 17.5 0 0 1 0 52.5 L 0 17.5 A 17.5 17.5 0 0 1 17.5 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4_1020&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-35, -35) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(35 35)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"15.9999996\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"5.04\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"arrow2_next","titleValue":"arrow2_next","fallbackImg":"<img alt=\"arrow2_next\" title=\"arrow2_next\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton333.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"tobj333inner\"><svg viewBox=\"0 0 61 58\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><linearGradient id=\"SVGID_4_1021\" gradientUnits=\"userSpaceOnUse\" x1=\"30.5\" y1=\"58\" x2=\"30.5\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n</linearGradient>\n<g transform=\"translate(30.5 29)\" style=\"\">\n	<linearGradient id=\"SVGID_4_1021\" gradientUnits=\"userSpaceOnUse\" x1=\"31\" y1=\"58.5\" x2=\"31\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n</linearGradient>\n<path d=\"M 14.25 0 L 45.75 0 A 14.25 14.25 0 0 1 60 14.25 L 60 42.75 A 14.25 14.25 0 0 1 45.75 57 L 14.25 57 A 14.25 14.25 0 0 1 0 42.75 L 0 14.25 A 14.25 14.25 0 0 1 14.25 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4_1021&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -28.5) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(30.5 29)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"16.26666626\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-17.61\" y=\"-5.54\" fill=\"#FFFFFF\">Click</tspan>\n			<tspan x=\"-17.62\" y=\"15.79\" fill=\"#FFFFFF\">Here</tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 833.5px; top: 541.5px; width: 61px; height: 58px; z-index: 2; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"333",
	htmlId:		"tobj333",
	bInsAnc:	false,
	cwObj:		{
		"name":	"Button 2",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkModVar',actItem:function(){ AICC_Lesson_Status.set('completed'); 
    if(typeof pF == 'function') pF(); }},
		{type:6,on:2,delay:0,name:'OnMClkExitClose',actItem:function(){ {cleanupTitle('cvb.html'); trivExitPage('ObjLayerActionExit()',false);} 
    if(typeof pF == 'function') pF(); }}
	]
	},
	objData:	{"a":[4,32864,0,[833.5,541.5,61,58]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":834,"y":542,"width":61,"height":58},"bTriggerScreenRdrOnShow":false,"imgDataNormal":"images/desktop_shape333.png","imgDataOver":"images/desktop_shape333_over.png","imgDataDown":"images/desktop_shape333_down.png","imgDataDisabled":"images/desktop_shape333_disabled.png","svgDataNormal":"<linearGradient id=\"SVGID_4_1021\" gradientUnits=\"userSpaceOnUse\" x1=\"30.5\" y1=\"58\" x2=\"30.5\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(30.5 29)\" style=\"\">\n\t<linearGradient id=\"SVGID_4_1021\" gradientUnits=\"userSpaceOnUse\" x1=\"31\" y1=\"58.5\" x2=\"31\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 14.25 0 L 45.75 0 A 14.25 14.25 0 0 1 60 14.25 L 60 42.75 A 14.25 14.25 0 0 1 45.75 57 L 14.25 57 A 14.25 14.25 0 0 1 0 42.75 L 0 14.25 A 14.25 14.25 0 0 1 14.25 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4_1021&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -28.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30.5 29)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"16.26666626\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-17.61\" y=\"-5.54\" fill=\"#FFFFFF\">Click</tspan>\n\t\t\t<tspan x=\"-17.62\" y=\"15.79\" fill=\"#FFFFFF\">Here</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<linearGradient id=\"SVGID_4_1022\" gradientUnits=\"userSpaceOnUse\" x1=\"30.5\" y1=\"58\" x2=\"30.5\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(30.5 29)\" style=\"\">\n\t<linearGradient id=\"SVGID_4_1022\" gradientUnits=\"userSpaceOnUse\" x1=\"31\" y1=\"58.5\" x2=\"31\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 14.25 0 L 45.75 0 A 14.25 14.25 0 0 1 60 14.25 L 60 42.75 A 14.25 14.25 0 0 1 45.75 57 L 14.25 57 A 14.25 14.25 0 0 1 0 42.75 L 0 14.25 A 14.25 14.25 0 0 1 14.25 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4_1022&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -28.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30.5 29)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"16.26666626\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-17.61\" y=\"-5.54\" fill=\"#FFFFFF\">Click</tspan>\n\t\t\t<tspan x=\"-17.62\" y=\"15.79\" fill=\"#FFFFFF\">Here</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<linearGradient id=\"SVGID_4_1023\" gradientUnits=\"userSpaceOnUse\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"58\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(30.5 29)\" style=\"\">\n\t<linearGradient id=\"SVGID_4_1023\" gradientUnits=\"userSpaceOnUse\" x1=\"0.5\" y1=\"0.5\" x2=\"0.5\" y2=\"58.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 14.25 0 L 45.75 0 A 14.25 14.25 0 0 1 60 14.25 L 60 42.75 A 14.25 14.25 0 0 1 45.75 57 L 14.25 57 A 14.25 14.25 0 0 1 0 42.75 L 0 14.25 A 14.25 14.25 0 0 1 14.25 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4_1023&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -28.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30.5 29)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"16.26666626\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-17.61\" y=\"-5.54\" fill=\"#FFFFFF\">Click</tspan>\n\t\t\t<tspan x=\"-17.62\" y=\"15.79\" fill=\"#FFFFFF\">Here</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<linearGradient id=\"SVGID_4_1024\" gradientUnits=\"userSpaceOnUse\" x1=\"30.5\" y1=\"58\" x2=\"30.5\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(30.5 29)\" style=\"\">\n\t<linearGradient id=\"SVGID_4_1024\" gradientUnits=\"userSpaceOnUse\" x1=\"31\" y1=\"58.5\" x2=\"31\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 14.25 0 L 45.75 0 A 14.25 14.25 0 0 1 60 14.25 L 60 42.75 A 14.25 14.25 0 0 1 45.75 57 L 14.25 57 A 14.25 14.25 0 0 1 0 42.75 L 0 14.25 A 14.25 14.25 0 0 1 14.25 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_4_1024&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-30, -28.5) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(30.5 29)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"16.26666626\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-17.61\" y=\"-5.54\" fill=\"#FFFFFF\">Click</tspan>\n\t\t\t<tspan x=\"-17.62\" y=\"15.79\" fill=\"#FFFFFF\">Here</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Click Here","titleValue":"Click Here","fallbackImg":"<img alt=\"Button 2\" title=\"Button 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
webwnd341.rcdData.att_TabletLandscape = 
{
	innerHtml:	"<div id=\"other\" style=\"position: absolute; background-color: rgb(234, 243, 249); border: 0px; overflow: hidden; box-shadow: none; left: 0px; top: 0px; width: 987px; height: 503px;\">\n<iframe name=\"Trivantis_WebWindow\" width=\"987\" height=\"503\" id=\"WebWin_content_341\" src=\"webwnd_cvr341_RegressionQuestions_html5/index.html\" scrolling=\"no\" allowtransparency=\"false\" style=\"border:0px; overflow:hidden; background-color:white;\">\n</iframe></div>",
	cssText:	"visibility: inherit; position: absolute; left: 6px; top: 7px; width: 987px; height: 503px; z-index: 1;",
	cssClasses:	"",
	id:		"341",
	htmlId:		"tobj341",
	bInsAnc:	0,
	cwObj:		{
		"name":	"Web Window_341",
				"widgetType":	11
	},
	objData:	{"a":[0,32,0,[6,7,987,503]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"desktopRect":{"x":6,"y":7,"width":987,"height":503},"widgetExtra":null}
};
rcdObj.rcdData.att_TabletLandscape = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"'Arial',sans-serif","lineHeight":"1.25","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	3
};
rcdObj.pgWidth_TabletLandscape = pgWidth_tabletLand;
rcdObj.preload_TabletLandscape = ["images/arrow2_next.png"];
rcdObj.pgStyle_TabletLandscape = 'position: absolute; left: 0px; top: 0px; width: 1009px; height: 662px; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_TabletLandscape = ["#FFFFFF","",0,0,1];
