if (window.VarCurrentView) VarCurrentView.set('TabletPortrait');
function init_TabletPortrait() {
	if ( rcdObj.view != 'TabletPortrait' ) return;
	if (!isOPAPub() || isLOPopup()) window.init_page();
	preload(rcdObj['preload_'+rcdObj.view]);
}
function defineFuncs_TabletPortrait() {
	if ( rcdObj.view != 'TabletPortrait' ) return;
	try{
		if (window.initGEV)
		{
		 initGEV(0,swipeLeft,swipeRight);

		}
		} catch(e) { if (window.console) window.console.log(e); }	pageClick = n;
	pageRClick = n;
	pageKey = n;
}
textbutton327.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div id=\"tobj327inner\"><svg viewBox=\"0 0 54 54\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><g transform=\"translate(27 27)\" style=\"\">\n	<path d=\"M 13.5 0 L 40.5 0 A 13.5 13.5 0 0 1 54 13.5 L 54 40.5 A 13.5 13.5 0 0 1 40.5 54 L 13.5 54 A 13.5 13.5 0 0 1 0 40.5 L 0 13.5 A 13.5 13.5 0 0 1 13.5 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity:0;filter:alpha(opacity=0); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n	<pattern id=\"SVGID_6_4_873\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"54\" height=\"54\" xlink:href=\"images/arrow2_next.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 13.5 0 L 40.5 0 A 13.5 13.5 0 0 1 54 13.5 L 54 40.5 A 13.5 13.5 0 0 1 40.5 54 L 13.5 54 A 13.5 13.5 0 0 1 0 40.5 L 0 13.5 A 13.5 13.5 0 0 1 13.5 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_6_4_873&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(27 27)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 694px; top: 536px; width: 54px; height: 54px; z-index: 0; cursor: pointer; overflow: visible; pointer-events: none;",
	cssClasses:	"",
	id:		"327",
	htmlId:		"tobj327",
	bInsAnc:	false,
	cwObj:		{
		"name":	"arrow2_next",
		"arChld":
	[
		{type:6,on:2,delay:0,name:'OnMClkGoTo',actItem:function(){ false }}
	]
	},
	objData:	{"a":[4,32864,0,[694,536,54,54]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":892,"y":536,"width":70,"height":70},"bTriggerScreenRdrOnShow":false,"imgDataNormal":"images/desktop_shape327.png","imgDataOver":"images/desktop_shape327.png","imgDataDown":"images/desktop_shape327.png","imgDataDisabled":"images/desktop_shape327_disabled.png","svgDataNormal":"<g transform=\"translate(27 27)\" style=\"\">\n\t<path d=\"M 13.5 0 L 40.5 0 A 13.5 13.5 0 0 1 54 13.5 L 54 40.5 A 13.5 13.5 0 0 1 40.5 54 L 13.5 54 A 13.5 13.5 0 0 1 0 40.5 L 0 13.5 A 13.5 13.5 0 0 1 13.5 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_6_4_873\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"54\" height=\"54\" xlink:href=\"images/arrow2_next.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 13.5 0 L 40.5 0 A 13.5 13.5 0 0 1 54 13.5 L 54 40.5 A 13.5 13.5 0 0 1 40.5 54 L 13.5 54 A 13.5 13.5 0 0 1 0 40.5 L 0 13.5 A 13.5 13.5 0 0 1 13.5 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_6_4_873&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(27 27)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<g transform=\"translate(27 27)\" style=\"\">\n\t<path d=\"M 13.5 0 L 40.5 0 A 13.5 13.5 0 0 1 54 13.5 L 54 40.5 A 13.5 13.5 0 0 1 40.5 54 L 13.5 54 A 13.5 13.5 0 0 1 0 40.5 L 0 13.5 A 13.5 13.5 0 0 1 13.5 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_6_4_875\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"54\" height=\"54\" xlink:href=\"images/arrow2_next.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 13.5 0 L 40.5 0 A 13.5 13.5 0 0 1 54 13.5 L 54 40.5 A 13.5 13.5 0 0 1 40.5 54 L 13.5 54 A 13.5 13.5 0 0 1 0 40.5 L 0 13.5 A 13.5 13.5 0 0 1 13.5 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_6_4_875&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(27 27)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<g transform=\"translate(27 27)\" style=\"\">\n\t<path d=\"M 13.5 0 L 40.5 0 A 13.5 13.5 0 0 1 54 13.5 L 54 40.5 A 13.5 13.5 0 0 1 40.5 54 L 13.5 54 A 13.5 13.5 0 0 1 0 40.5 L 0 13.5 A 13.5 13.5 0 0 1 13.5 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_6_4_877\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"54\" height=\"54\" xlink:href=\"images/arrow2_next.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 13.5 0 L 40.5 0 A 13.5 13.5 0 0 1 54 13.5 L 54 40.5 A 13.5 13.5 0 0 1 40.5 54 L 13.5 54 A 13.5 13.5 0 0 1 0 40.5 L 0 13.5 A 13.5 13.5 0 0 1 13.5 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_6_4_877&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(27 27)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<g transform=\"translate(27 27)\" style=\"\">\n\t<path d=\"M 13.5 0 L 40.5 0 A 13.5 13.5 0 0 1 54 13.5 L 54 40.5 A 13.5 13.5 0 0 1 40.5 54 L 13.5 54 A 13.5 13.5 0 0 1 0 40.5 L 0 13.5 A 13.5 13.5 0 0 1 13.5 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-opacity: 0; fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n\t<pattern id=\"SVGID_6_4_879\" x=\"0\" y=\"0\" width=\"1\" height=\"1\">\n<image x=\"0\" y=\"0\" width=\"54\" height=\"54\" xlink:href=\"images/arrow2_next.png\" preserveAspectRatio=\"none\"></image>\n</pattern>\n<path d=\"M 13.5 0 L 40.5 0 A 13.5 13.5 0 0 1 54 13.5 L 54 40.5 A 13.5 13.5 0 0 1 40.5 54 L 13.5 54 A 13.5 13.5 0 0 1 0 40.5 L 0 13.5 A 13.5 13.5 0 0 1 13.5 0\" style=\"stroke: rgb(9, 99, 177); stroke-width: 0; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_6_4_879&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-27, -27) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(27 27)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"12.79999968\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"0\" y=\"4.03\" fill=\"#FFFFFF\"></tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"arrow2_next","titleValue":"arrow2_next","fallbackImg":"<img alt=\"arrow2_next\" title=\"arrow2_next\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
textbutton333.rcdData.att_TabletPortrait = 
{
	innerHtml:	"<div id=\"tobj333inner\"><svg viewBox=\"0 0 48 45\" preserveAspectRatio=\"none\" focusable=\"false\" style=\"pointer-events: none; left: 0px; top: 0px; width: 100%; height: 100%; position: absolute;\" aria-hidden=\"true\"><linearGradient id=\"SVGID_6_4_880\" gradientUnits=\"userSpaceOnUse\" x1=\"24\" y1=\"45\" x2=\"24\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n</linearGradient>\n<g transform=\"translate(24 22.5)\" style=\"\">\n	<linearGradient id=\"SVGID_6_4_880\" gradientUnits=\"userSpaceOnUse\" x1=\"24.5\" y1=\"45.5\" x2=\"24.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity:1;filter:alpha(opacity=100)\"></stop>\n</linearGradient>\n<path d=\"M 11 0 L 36 0 A 11 11 0 0 1 47 11 L 47 33 A 11 11 0 0 1 36 44 L 11 44 A 11 11 0 0 1 0 33 L 0 11 A 11 11 0 0 1 11 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_6_4_880&quot;); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100); pointer-events: auto;\" transform=\"translate(0 0) translate(-23.5, -22) \" stroke-linecap=\"round\"></path>\n</g>\n	<g transform=\"translate(24 22.5)\">\n		<text font-family=\"Arial,sans-serif\" font-size=\"13.072340098723403\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity:1;filter:alpha(opacity=100);\">\n			<tspan x=\"-14.16\" y=\"-4.45\" fill=\"#FFFFFF\">Click</tspan>\n			<tspan x=\"-14.16\" y=\"12.69\" fill=\"#FFFFFF\">Here</tspan>\n		</text>\n	</g>\n</svg></div>",
	cssText:	"visibility: inherit; position: absolute; left: 648.5px; top: 541.5px; width: 48px; height: 45px; z-index: 1; cursor: pointer; overflow: visible; pointer-events: none;",
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
	objData:	{"a":[4,32864,0,[648.5,541.5,48,45]],"rcdOvr":{"res":0},"borderEffect":{"outline":0,"outlineColor":"#000000","borderWeight":0,"lineStyle":0,"borderColor":"#000000","borderRadius":"square"},"rotateEffect":{"angle":0,"anchorX":50,"anchorY":50},"desktopRect":{"x":834,"y":542,"width":61,"height":58},"bTriggerScreenRdrOnShow":false,"imgDataNormal":"images/desktop_shape333.png","imgDataOver":"images/desktop_shape333_over.png","imgDataDown":"images/desktop_shape333_down.png","imgDataDisabled":"images/desktop_shape333_disabled.png","svgDataNormal":"<linearGradient id=\"SVGID_6_4_880\" gradientUnits=\"userSpaceOnUse\" x1=\"24\" y1=\"45\" x2=\"24\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(24 22.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_6_4_880\" gradientUnits=\"userSpaceOnUse\" x1=\"24.5\" y1=\"45.5\" x2=\"24.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 11 0 L 36 0 A 11 11 0 0 1 47 11 L 47 33 A 11 11 0 0 1 36 44 L 11 44 A 11 11 0 0 1 0 33 L 0 11 A 11 11 0 0 1 11 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_6_4_880&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-23.5, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(24 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"13.072340098723403\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-14.16\" y=\"-4.45\" fill=\"#FFFFFF\">Click</tspan>\n\t\t\t<tspan x=\"-14.16\" y=\"12.69\" fill=\"#FFFFFF\">Here</tspan>\n\t\t</text>\n\t</g>\n","svgDataOver":"<linearGradient id=\"SVGID_6_4_881\" gradientUnits=\"userSpaceOnUse\" x1=\"24\" y1=\"45\" x2=\"24\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(24 22.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_6_4_881\" gradientUnits=\"userSpaceOnUse\" x1=\"24.5\" y1=\"45.5\" x2=\"24.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 11 0 L 36 0 A 11 11 0 0 1 47 11 L 47 33 A 11 11 0 0 1 36 44 L 11 44 A 11 11 0 0 1 0 33 L 0 11 A 11 11 0 0 1 11 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_6_4_881&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-23.5, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(24 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"13.072340098723403\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-14.16\" y=\"-4.45\" fill=\"#FFFFFF\">Click</tspan>\n\t\t\t<tspan x=\"-14.16\" y=\"12.69\" fill=\"#FFFFFF\">Here</tspan>\n\t\t</text>\n\t</g>\n","svgDataDown":"<linearGradient id=\"SVGID_6_4_882\" gradientUnits=\"userSpaceOnUse\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"45\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(24 22.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_6_4_882\" gradientUnits=\"userSpaceOnUse\" x1=\"0.5\" y1=\"0.5\" x2=\"0.5\" y2=\"45.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(9,78,139);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,98,184);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(0,117,221);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 11 0 L 36 0 A 11 11 0 0 1 47 11 L 47 33 A 11 11 0 0 1 36 44 L 11 44 A 11 11 0 0 1 0 33 L 0 11 A 11 11 0 0 1 11 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_6_4_882&quot;); fill-rule: nonzero; opacity: 1; pointer-events: auto;\" transform=\"translate(0 0) translate(-23.5, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(24 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"13.072340098723403\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\">\n\t\t\t<tspan x=\"-14.16\" y=\"-4.45\" fill=\"#FFFFFF\">Click</tspan>\n\t\t\t<tspan x=\"-14.16\" y=\"12.69\" fill=\"#FFFFFF\">Here</tspan>\n\t\t</text>\n\t</g>\n","svgDataDisabled":"<linearGradient id=\"SVGID_6_4_883\" gradientUnits=\"userSpaceOnUse\" x1=\"24\" y1=\"45\" x2=\"24\" y2=\"0\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<g transform=\"translate(24 22.5)\" style=\"\">\n\t<linearGradient id=\"SVGID_6_4_883\" gradientUnits=\"userSpaceOnUse\" x1=\"24.5\" y1=\"45.5\" x2=\"24.5\" y2=\"0.5\">\n<stop offset=\"0%\" style=\"stop-color:rgb(0,100,187);stop-opacity: 1\"></stop>\n<stop offset=\"50%\" style=\"stop-color:rgb(0,124,233);stop-opacity: 1\"></stop>\n<stop offset=\"100%\" style=\"stop-color:rgb(25,148,254);stop-opacity: 1\"></stop>\n</linearGradient>\n<path d=\"M 11 0 L 36 0 A 11 11 0 0 1 47 11 L 47 33 A 11 11 0 0 1 36 44 L 11 44 A 11 11 0 0 1 0 33 L 0 11 A 11 11 0 0 1 11 0 Z\" style=\"stroke: rgb(9, 99, 177); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; fill: url(&quot;#SVGID_6_4_883&quot;); fill-rule: nonzero; opacity: 0.6; pointer-events: auto;\" transform=\"translate(0 0) translate(-23.5, -22) \" stroke-linecap=\"round\"></path>\n</g>\n\t<g transform=\"translate(24 22.5)\">\n\t\t<text font-family=\"Arial,sans-serif\" font-size=\"13.072340098723403\" font-weight=\"normal\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 0.6;\">\n\t\t\t<tspan x=\"-14.16\" y=\"-4.45\" fill=\"#FFFFFF\">Click</tspan>\n\t\t\t<tspan x=\"-14.16\" y=\"12.69\" fill=\"#FFFFFF\">Here</tspan>\n\t\t</text>\n\t</g>\n","btnState":"enabled","altValue":"Click Here","titleValue":"Click Here","fallbackImg":"<img alt=\"Button 2\" title=\"Button 2\" style=\"position: absolute; width: 100%; height: 100%; top: 0px; left: 0px;\">"}
};
rcdObj.rcdData.att_TabletPortrait = 
{
	font:	{"bold":0,"italic":0,"underline":0,"size":"12","color":null,"bgColor":null,"name":"'Arial',sans-serif","lineHeight":"1.25","marginTop":"0px","marginBottom":"0px"},
	pageIdx:	3
};
rcdObj.pgWidth_TabletPortrait = pgWidth_tabletPort;
rcdObj.preload_TabletPortrait = ["images/arrow2_next.png"];
rcdObj.pgStyle_TabletPortrait = 'position: absolute; left: 0px; top: 0px; width: 785px; height: 1000px; overflow: hidden; visibility: hidden; background-size: auto;'
rcdObj.backgrd_TabletPortrait = ["#FFFFFF","",0,0,1];
