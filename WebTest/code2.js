gdjs.Level_951Code = {};
gdjs.Level_951Code.forEachIndex2 = 0;

gdjs.Level_951Code.forEachObjects2 = [];

gdjs.Level_951Code.forEachTemporary2 = null;

gdjs.Level_951Code.forEachTotalCount2 = 0;

gdjs.Level_951Code.GDPlayerHeightCheckObjects1= [];
gdjs.Level_951Code.GDPlayerHeightCheckObjects2= [];
gdjs.Level_951Code.GDPlayerHeightCheckObjects3= [];
gdjs.Level_951Code.GDPlayerHeightCheckObjects4= [];
gdjs.Level_951Code.GDPlayerObjects1= [];
gdjs.Level_951Code.GDPlayerObjects2= [];
gdjs.Level_951Code.GDPlayerObjects3= [];
gdjs.Level_951Code.GDPlayerObjects4= [];
gdjs.Level_951Code.GDScoreObjects1= [];
gdjs.Level_951Code.GDScoreObjects2= [];
gdjs.Level_951Code.GDScoreObjects3= [];
gdjs.Level_951Code.GDScoreObjects4= [];
gdjs.Level_951Code.GDCoinObjects1= [];
gdjs.Level_951Code.GDCoinObjects2= [];
gdjs.Level_951Code.GDCoinObjects3= [];
gdjs.Level_951Code.GDCoinObjects4= [];
gdjs.Level_951Code.GDKillBoxObjects1= [];
gdjs.Level_951Code.GDKillBoxObjects2= [];
gdjs.Level_951Code.GDKillBoxObjects3= [];
gdjs.Level_951Code.GDKillBoxObjects4= [];
gdjs.Level_951Code.GDMovingPlatformObjects1= [];
gdjs.Level_951Code.GDMovingPlatformObjects2= [];
gdjs.Level_951Code.GDMovingPlatformObjects3= [];
gdjs.Level_951Code.GDMovingPlatformObjects4= [];
gdjs.Level_951Code.GDArrowRightObjects1= [];
gdjs.Level_951Code.GDArrowRightObjects2= [];
gdjs.Level_951Code.GDArrowRightObjects3= [];
gdjs.Level_951Code.GDArrowRightObjects4= [];
gdjs.Level_951Code.GDArrowLeftObjects1= [];
gdjs.Level_951Code.GDArrowLeftObjects2= [];
gdjs.Level_951Code.GDArrowLeftObjects3= [];
gdjs.Level_951Code.GDArrowLeftObjects4= [];
gdjs.Level_951Code.GDArrowUpObjects1= [];
gdjs.Level_951Code.GDArrowUpObjects2= [];
gdjs.Level_951Code.GDArrowUpObjects3= [];
gdjs.Level_951Code.GDArrowUpObjects4= [];
gdjs.Level_951Code.GDArrowDownObjects1= [];
gdjs.Level_951Code.GDArrowDownObjects2= [];
gdjs.Level_951Code.GDArrowDownObjects3= [];
gdjs.Level_951Code.GDArrowDownObjects4= [];
gdjs.Level_951Code.GDGroundObjects1= [];
gdjs.Level_951Code.GDGroundObjects2= [];
gdjs.Level_951Code.GDGroundObjects3= [];
gdjs.Level_951Code.GDGroundObjects4= [];
gdjs.Level_951Code.GDPlatformObjects1= [];
gdjs.Level_951Code.GDPlatformObjects2= [];
gdjs.Level_951Code.GDPlatformObjects3= [];
gdjs.Level_951Code.GDPlatformObjects4= [];
gdjs.Level_951Code.GDStartObjects1= [];
gdjs.Level_951Code.GDStartObjects2= [];
gdjs.Level_951Code.GDStartObjects3= [];
gdjs.Level_951Code.GDStartObjects4= [];

gdjs.Level_951Code.conditionTrue_0 = {val:false};
gdjs.Level_951Code.condition0IsTrue_0 = {val:false};
gdjs.Level_951Code.condition1IsTrue_0 = {val:false};
gdjs.Level_951Code.condition2IsTrue_0 = {val:false};
gdjs.Level_951Code.conditionTrue_1 = {val:false};
gdjs.Level_951Code.condition0IsTrue_1 = {val:false};
gdjs.Level_951Code.condition1IsTrue_1 = {val:false};
gdjs.Level_951Code.condition2IsTrue_1 = {val:false};


gdjs.Level_951Code.mapOfGDgdjs_46Level_95951Code_46GDPlayerHeightCheckObjects1Objects = Hashtable.newFrom({"PlayerHeightCheck": gdjs.Level_951Code.GDPlayerHeightCheckObjects1});gdjs.Level_951Code.eventsList0x11ba5170 = function(runtimeScene, context) {

{


gdjs.Level_951Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_951Code.conditionTrue_1 = gdjs.Level_951Code.condition0IsTrue_0;
gdjs.Level_951Code.conditionTrue_1.val = context.triggerOnce(297286668);
}
}if (gdjs.Level_951Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_951Code.GDPlayerObjects1 */
gdjs.Level_951Code.GDScoreObjects1.createFrom(runtimeScene.getObjects("Score"));
{for(var i = 0, len = gdjs.Level_951Code.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Level_951Code.GDScoreObjects1[i].setString("Ded");
}
}{for(var i = 0, len = gdjs.Level_951Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_951Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.Level_951Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_951Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.Level_951Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_951Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.Level_951Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_951Code.GDPlayerObjects1[i].setOpacity(254);
}
}}

}


}; //End of gdjs.Level_951Code.eventsList0x11ba5170
gdjs.Level_951Code.eventsList0x11ba58f0 = function(runtimeScene, context) {

{

gdjs.Level_951Code.GDGroundObjects2.createFrom(runtimeScene.getObjects("Ground"));
gdjs.Level_951Code.GDPlayerHeightCheckObjects2.createFrom(runtimeScene.getObjects("PlayerHeightCheck"));

gdjs.Level_951Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_951Code.GDGroundObjects2.length;i<l;++i) {
    if ( !(gdjs.Level_951Code.GDGroundObjects2[i].isCollidingWithPoint((( gdjs.Level_951Code.GDPlayerHeightCheckObjects2.length === 0 ) ? 0 :gdjs.Level_951Code.GDPlayerHeightCheckObjects2[0].getPointX("Head")), (( gdjs.Level_951Code.GDPlayerHeightCheckObjects2.length === 0 ) ? 0 :gdjs.Level_951Code.GDPlayerHeightCheckObjects2[0].getPointY("Head")))) ) {
        gdjs.Level_951Code.condition0IsTrue_0.val = true;
        gdjs.Level_951Code.GDGroundObjects2[k] = gdjs.Level_951Code.GDGroundObjects2[i];
        ++k;
    }
}
gdjs.Level_951Code.GDGroundObjects2.length = k;}if (gdjs.Level_951Code.condition0IsTrue_0.val) {
gdjs.Level_951Code.GDPlayerObjects2.createFrom(gdjs.Level_951Code.GDPlayerObjects1);

{for(var i = 0, len = gdjs.Level_951Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_951Code.GDPlayerObjects2[i].returnVariable(gdjs.Level_951Code.GDPlayerObjects2[i].getVariables().getFromIndex(0)).setNumber(0);
}
}}

}


{

gdjs.Level_951Code.GDGroundObjects1.createFrom(runtimeScene.getObjects("Ground"));
gdjs.Level_951Code.GDPlayerHeightCheckObjects1.createFrom(runtimeScene.getObjects("PlayerHeightCheck"));

gdjs.Level_951Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_951Code.GDGroundObjects1.length;i<l;++i) {
    if ( gdjs.Level_951Code.GDGroundObjects1[i].isCollidingWithPoint((( gdjs.Level_951Code.GDPlayerHeightCheckObjects1.length === 0 ) ? 0 :gdjs.Level_951Code.GDPlayerHeightCheckObjects1[0].getPointX("Head")), (( gdjs.Level_951Code.GDPlayerHeightCheckObjects1.length === 0 ) ? 0 :gdjs.Level_951Code.GDPlayerHeightCheckObjects1[0].getPointY("Head"))) ) {
        gdjs.Level_951Code.condition0IsTrue_0.val = true;
        gdjs.Level_951Code.GDGroundObjects1[k] = gdjs.Level_951Code.GDGroundObjects1[i];
        ++k;
    }
}
gdjs.Level_951Code.GDGroundObjects1.length = k;}if (gdjs.Level_951Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_951Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_951Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_951Code.GDPlayerObjects1[i].returnVariable(gdjs.Level_951Code.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}}

}


}; //End of gdjs.Level_951Code.eventsList0x11ba58f0
gdjs.Level_951Code.eventsList0x11ba5770 = function(runtimeScene, context) {

{

gdjs.Level_951Code.GDPlayerObjects3.createFrom(gdjs.Level_951Code.GDPlayerObjects2);


gdjs.Level_951Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_951Code.GDPlayerObjects3.length;i<l;++i) {
    if ( gdjs.Level_951Code.GDPlayerObjects3[i].getVariableNumber(gdjs.Level_951Code.GDPlayerObjects3[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.Level_951Code.condition0IsTrue_0.val = true;
        gdjs.Level_951Code.GDPlayerObjects3[k] = gdjs.Level_951Code.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.Level_951Code.GDPlayerObjects3.length = k;}if (gdjs.Level_951Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_951Code.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.Level_951Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Level_951Code.GDPlayerObjects3[i].setAnimation(0);
}
}}

}


{

/* Reuse gdjs.Level_951Code.GDPlayerObjects2 */

gdjs.Level_951Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_951Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level_951Code.GDPlayerObjects2[i].getVariableNumber(gdjs.Level_951Code.GDPlayerObjects2[i].getVariables().getFromIndex(0)) != 0 ) {
        gdjs.Level_951Code.condition0IsTrue_0.val = true;
        gdjs.Level_951Code.GDPlayerObjects2[k] = gdjs.Level_951Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_951Code.GDPlayerObjects2.length = k;}if (gdjs.Level_951Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_951Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level_951Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_951Code.GDPlayerObjects2[i].setAnimation(3);
}
}}

}


}; //End of gdjs.Level_951Code.eventsList0x11ba5770
gdjs.Level_951Code.eventsList0x11ba5830 = function(runtimeScene, context) {

{

gdjs.Level_951Code.GDPlayerObjects2.createFrom(gdjs.Level_951Code.GDPlayerObjects1);


gdjs.Level_951Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_951Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level_951Code.GDPlayerObjects2[i].getVariableNumber(gdjs.Level_951Code.GDPlayerObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        gdjs.Level_951Code.condition0IsTrue_0.val = true;
        gdjs.Level_951Code.GDPlayerObjects2[k] = gdjs.Level_951Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_951Code.GDPlayerObjects2.length = k;}if (gdjs.Level_951Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_951Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level_951Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_951Code.GDPlayerObjects2[i].setAnimation(1);
}
}}

}


{

/* Reuse gdjs.Level_951Code.GDPlayerObjects1 */

gdjs.Level_951Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_951Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_951Code.GDPlayerObjects1[i].getVariableNumber(gdjs.Level_951Code.GDPlayerObjects1[i].getVariables().getFromIndex(0)) != 0 ) {
        gdjs.Level_951Code.condition0IsTrue_0.val = true;
        gdjs.Level_951Code.GDPlayerObjects1[k] = gdjs.Level_951Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_951Code.GDPlayerObjects1.length = k;}if (gdjs.Level_951Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_951Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_951Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_951Code.GDPlayerObjects1[i].setAnimation(4);
}
}}

}


}; //End of gdjs.Level_951Code.eventsList0x11ba5830
gdjs.Level_951Code.eventsList0x11ba51d0 = function(runtimeScene, context) {

{

gdjs.Level_951Code.GDPlayerObjects2.createFrom(gdjs.Level_951Code.GDPlayerObjects1);


gdjs.Level_951Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_951Code.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.Level_951Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Level_951Code.condition0IsTrue_0.val = true;
        gdjs.Level_951Code.GDPlayerObjects2[k] = gdjs.Level_951Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_951Code.GDPlayerObjects2.length = k;}if (gdjs.Level_951Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level_951Code.eventsList0x11ba5770(runtimeScene, context);} //End of subevents
}

}


{

/* Reuse gdjs.Level_951Code.GDPlayerObjects1 */

gdjs.Level_951Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_951Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_951Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Level_951Code.condition0IsTrue_0.val = true;
        gdjs.Level_951Code.GDPlayerObjects1[k] = gdjs.Level_951Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_951Code.GDPlayerObjects1.length = k;}if (gdjs.Level_951Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level_951Code.eventsList0x11ba5830(runtimeScene, context);} //End of subevents
}

}


}; //End of gdjs.Level_951Code.eventsList0x11ba51d0
gdjs.Level_951Code.mapOfGDgdjs_46Level_95951Code_46GDCoinObjects2Objects = Hashtable.newFrom({"Coin": gdjs.Level_951Code.GDCoinObjects2});gdjs.Level_951Code.mapOfGDgdjs_46Level_95951Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Level_951Code.GDPlayerObjects2});gdjs.Level_951Code.eventsList0x118df158 = function(runtimeScene, context) {

}; //End of gdjs.Level_951Code.eventsList0x118df158
gdjs.Level_951Code.mapOfGDgdjs_46Level_95951Code_46GDMovingPlatformObjects1Objects = Hashtable.newFrom({"MovingPlatform": gdjs.Level_951Code.GDMovingPlatformObjects1});gdjs.Level_951Code.mapOfGDgdjs_46Level_95951Code_46GDArrowLeftObjects1Objects = Hashtable.newFrom({"ArrowLeft": gdjs.Level_951Code.GDArrowLeftObjects1});gdjs.Level_951Code.mapOfGDgdjs_46Level_95951Code_46GDMovingPlatformObjects1Objects = Hashtable.newFrom({"MovingPlatform": gdjs.Level_951Code.GDMovingPlatformObjects1});gdjs.Level_951Code.mapOfGDgdjs_46Level_95951Code_46GDArrowRightObjects1Objects = Hashtable.newFrom({"ArrowRight": gdjs.Level_951Code.GDArrowRightObjects1});gdjs.Level_951Code.mapOfGDgdjs_46Level_95951Code_46GDMovingPlatformObjects1Objects = Hashtable.newFrom({"MovingPlatform": gdjs.Level_951Code.GDMovingPlatformObjects1});gdjs.Level_951Code.mapOfGDgdjs_46Level_95951Code_46GDArrowUpObjects1Objects = Hashtable.newFrom({"ArrowUp": gdjs.Level_951Code.GDArrowUpObjects1});gdjs.Level_951Code.mapOfGDgdjs_46Level_95951Code_46GDMovingPlatformObjects1Objects = Hashtable.newFrom({"MovingPlatform": gdjs.Level_951Code.GDMovingPlatformObjects1});gdjs.Level_951Code.mapOfGDgdjs_46Level_95951Code_46GDArrowDownObjects1Objects = Hashtable.newFrom({"ArrowDown": gdjs.Level_951Code.GDArrowDownObjects1});gdjs.Level_951Code.userFunc0x1190eb38 = function(runtimeScene) {
runtimeScene.setBackgroundColor(100,100,240);

};
gdjs.Level_951Code.mapOfGDgdjs_46Level_95951Code_46GDKillBoxObjects1Objects = Hashtable.newFrom({"KillBox": gdjs.Level_951Code.GDKillBoxObjects1});gdjs.Level_951Code.mapOfGDgdjs_46Level_95951Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_951Code.GDPlayerObjects1});gdjs.Level_951Code.eventsList0x11ba5890 = function(runtimeScene, context) {

{


gdjs.Level_951Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_951Code.conditionTrue_1 = gdjs.Level_951Code.condition0IsTrue_0;
gdjs.Level_951Code.conditionTrue_1.val = context.triggerOnce(297287316);
}
}if (gdjs.Level_951Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_951Code.GDPlayerObjects1 */
gdjs.Level_951Code.GDScoreObjects1.createFrom(runtimeScene.getObjects("Score"));
{for(var i = 0, len = gdjs.Level_951Code.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Level_951Code.GDScoreObjects1[i].setString("Ded");
}
}{for(var i = 0, len = gdjs.Level_951Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_951Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").ignoreDefaultControls(true);
}
}{for(var i = 0, len = gdjs.Level_951Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_951Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.Level_951Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_951Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.Level_951Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_951Code.GDPlayerObjects1[i].setOpacity(254);
}
}}

}


}; //End of gdjs.Level_951Code.eventsList0x11ba5890
gdjs.Level_951Code.eventsList0x11ba59b0 = function(runtimeScene, context) {

{

gdjs.Level_951Code.GDPlayerObjects2.createFrom(gdjs.Level_951Code.GDPlayerObjects1);


gdjs.Level_951Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_951Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level_951Code.GDPlayerObjects2[i].getOpacity() < 255 ) {
        gdjs.Level_951Code.condition0IsTrue_0.val = true;
        gdjs.Level_951Code.GDPlayerObjects2[k] = gdjs.Level_951Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level_951Code.GDPlayerObjects2.length = k;}if (gdjs.Level_951Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_951Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level_951Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_951Code.GDPlayerObjects2[i].setOpacity(gdjs.Level_951Code.GDPlayerObjects2[i].getOpacity() - (255*gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

/* Reuse gdjs.Level_951Code.GDPlayerObjects1 */

gdjs.Level_951Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_951Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_951Code.GDPlayerObjects1[i].getOpacity() <= 0 ) {
        gdjs.Level_951Code.condition0IsTrue_0.val = true;
        gdjs.Level_951Code.GDPlayerObjects1[k] = gdjs.Level_951Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_951Code.GDPlayerObjects1.length = k;}if (gdjs.Level_951Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GameOver", false);
}}

}


}; //End of gdjs.Level_951Code.eventsList0x11ba59b0
gdjs.Level_951Code.eventsList0x70e0e8 = function(runtimeScene, context) {

{


gdjs.Level_951Code.condition0IsTrue_0.val = false;
{
gdjs.Level_951Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level_951Code.condition0IsTrue_0.val) {
gdjs.Level_951Code.GDKillBoxObjects1.createFrom(runtimeScene.getObjects("KillBox"));
gdjs.Level_951Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.Level_951Code.GDPlayerHeightCheckObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Level_951Code.mapOfGDgdjs_46Level_95951Code_46GDPlayerHeightCheckObjects1Objects, (( gdjs.Level_951Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_951Code.GDPlayerObjects1[0].getPointX("")), (( gdjs.Level_951Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_951Code.GDPlayerObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.Level_951Code.GDPlayerHeightCheckObjects1.length ;i < len;++i) {
    gdjs.Level_951Code.GDPlayerHeightCheckObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level_951Code.GDKillBoxObjects1.length ;i < len;++i) {
    gdjs.Level_951Code.GDKillBoxObjects1[i].hide();
}
}}

}


{



}


{


{
gdjs.Level_951Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.Level_951Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_951Code.GDPlayerObjects1[0].getPointX("")), "", 0);
}}

}


{

gdjs.Level_951Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level_951Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_951Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_951Code.GDPlayerObjects1[i].getY() > 360 ) {
        gdjs.Level_951Code.condition0IsTrue_0.val = true;
        gdjs.Level_951Code.GDPlayerObjects1[k] = gdjs.Level_951Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_951Code.GDPlayerObjects1.length = k;}if (gdjs.Level_951Code.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, 360, "", 0);
}}

}


{

gdjs.Level_951Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level_951Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_951Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_951Code.GDPlayerObjects1[i].getY() <= 360 ) {
        gdjs.Level_951Code.condition0IsTrue_0.val = true;
        gdjs.Level_951Code.GDPlayerObjects1[k] = gdjs.Level_951Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_951Code.GDPlayerObjects1.length = k;}if (gdjs.Level_951Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_951Code.GDPlayerObjects1 */
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.Level_951Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_951Code.GDPlayerObjects1[0].getPointY("")), "", 0);
}}

}


{



}


{


{
gdjs.Level_951Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.Level_951Code.GDPlayerHeightCheckObjects1.createFrom(runtimeScene.getObjects("PlayerHeightCheck"));
{for(var i = 0, len = gdjs.Level_951Code.GDPlayerHeightCheckObjects1.length ;i < len;++i) {
    gdjs.Level_951Code.GDPlayerHeightCheckObjects1[i].setPosition((( gdjs.Level_951Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_951Code.GDPlayerObjects1[0].getPointX("")),(( gdjs.Level_951Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_951Code.GDPlayerObjects1[0].getPointY("")) -2);
}
}}

}


{



}


{



}


{



}


{

gdjs.Level_951Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level_951Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_951Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_951Code.GDPlayerObjects1[i].getVariableNumber(gdjs.Level_951Code.GDPlayerObjects1[i].getVariables().getFromIndex(2)) == 1 ) {
        gdjs.Level_951Code.condition0IsTrue_0.val = true;
        gdjs.Level_951Code.GDPlayerObjects1[k] = gdjs.Level_951Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_951Code.GDPlayerObjects1.length = k;}if (gdjs.Level_951Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level_951Code.eventsList0x11ba5170(runtimeScene, context);} //End of subevents
}

}


{

gdjs.Level_951Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level_951Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_951Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_951Code.GDPlayerObjects1[i].getOpacity() < 255 ) {
        gdjs.Level_951Code.condition0IsTrue_0.val = true;
        gdjs.Level_951Code.GDPlayerObjects1[k] = gdjs.Level_951Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_951Code.GDPlayerObjects1.length = k;}if (gdjs.Level_951Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_951Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_951Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_951Code.GDPlayerObjects1[i].setOpacity(gdjs.Level_951Code.GDPlayerObjects1[i].getOpacity() - (255*gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

gdjs.Level_951Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level_951Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_951Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_951Code.GDPlayerObjects1[i].getOpacity() <= 0 ) {
        gdjs.Level_951Code.condition0IsTrue_0.val = true;
        gdjs.Level_951Code.GDPlayerObjects1[k] = gdjs.Level_951Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_951Code.GDPlayerObjects1.length = k;}if (gdjs.Level_951Code.condition0IsTrue_0.val) {
}

}


{



}


{


gdjs.Level_951Code.condition0IsTrue_0.val = false;
{
gdjs.Level_951Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Level_951Code.condition0IsTrue_0.val) {
gdjs.Level_951Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.Level_951Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_951Code.GDPlayerObjects1[i].flipX(false);
}
}}

}


{


gdjs.Level_951Code.condition0IsTrue_0.val = false;
{
gdjs.Level_951Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Level_951Code.condition0IsTrue_0.val) {
gdjs.Level_951Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.Level_951Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_951Code.GDPlayerObjects1[i].flipX(true);
}
}}

}


{


gdjs.Level_951Code.condition0IsTrue_0.val = false;
{
gdjs.Level_951Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.Level_951Code.condition0IsTrue_0.val) {
gdjs.Level_951Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.Level_951Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_951Code.GDPlayerObjects1[i].setAnimation(2);
}
}}

}


{



}


{


gdjs.Level_951Code.condition0IsTrue_0.val = false;
{
gdjs.Level_951Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.Level_951Code.condition0IsTrue_0.val) {
gdjs.Level_951Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.Level_951Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_951Code.GDPlayerObjects1[i].returnVariable(gdjs.Level_951Code.GDPlayerObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}}

}


{

gdjs.Level_951Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level_951Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_951Code.conditionTrue_1 = gdjs.Level_951Code.condition0IsTrue_0;
gdjs.Level_951Code.condition0IsTrue_1.val = false;
gdjs.Level_951Code.condition1IsTrue_1.val = false;
{
gdjs.Level_951Code.condition0IsTrue_1.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down"));
}if ( gdjs.Level_951Code.condition0IsTrue_1.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level_951Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_951Code.GDPlayerObjects1[i].getVariableNumber(gdjs.Level_951Code.GDPlayerObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        gdjs.Level_951Code.condition1IsTrue_1.val = true;
        gdjs.Level_951Code.GDPlayerObjects1[k] = gdjs.Level_951Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_951Code.GDPlayerObjects1.length = k;}}
gdjs.Level_951Code.conditionTrue_1.val = true && gdjs.Level_951Code.condition0IsTrue_1.val && gdjs.Level_951Code.condition1IsTrue_1.val;
}
}if (gdjs.Level_951Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level_951Code.eventsList0x11ba58f0(runtimeScene, context);} //End of subevents
}

}


{



}


{

gdjs.Level_951Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level_951Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_951Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_951Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level_951Code.condition0IsTrue_0.val = true;
        gdjs.Level_951Code.GDPlayerObjects1[k] = gdjs.Level_951Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_951Code.GDPlayerObjects1.length = k;}if (gdjs.Level_951Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level_951Code.eventsList0x11ba51d0(runtimeScene, context);} //End of subevents
}

}


{

gdjs.Level_951Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level_951Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_951Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_951Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Level_951Code.condition0IsTrue_0.val = true;
        gdjs.Level_951Code.GDPlayerObjects1[k] = gdjs.Level_951Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_951Code.GDPlayerObjects1.length = k;}if (gdjs.Level_951Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_951Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_951Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_951Code.GDPlayerObjects1[i].setAnimation(2);
}
}}

}


{



}


{

gdjs.Level_951Code.GDCoinObjects1.createFrom(runtimeScene.getObjects("Coin"));

for(gdjs.Level_951Code.forEachIndex2 = 0;gdjs.Level_951Code.forEachIndex2 < gdjs.Level_951Code.GDCoinObjects1.length;++gdjs.Level_951Code.forEachIndex2) {
gdjs.Level_951Code.GDCoinObjects2.createFrom(gdjs.Level_951Code.GDCoinObjects1);

gdjs.Level_951Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
gdjs.Level_951Code.GDScoreObjects2.createFrom(runtimeScene.getObjects("Score"));

gdjs.Level_951Code.forEachTemporary2 = gdjs.Level_951Code.GDCoinObjects1[gdjs.Level_951Code.forEachIndex2];
gdjs.Level_951Code.GDCoinObjects2.length = 0;
gdjs.Level_951Code.GDCoinObjects2.push(gdjs.Level_951Code.forEachTemporary2);
gdjs.Level_951Code.condition0IsTrue_0.val = false;
{
gdjs.Level_951Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_951Code.mapOfGDgdjs_46Level_95951Code_46GDCoinObjects2Objects, gdjs.Level_951Code.mapOfGDgdjs_46Level_95951Code_46GDPlayerObjects2Objects, false, runtimeScene);
}if (gdjs.Level_951Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Level_951Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level_951Code.GDPlayerObjects2[i].returnVariable(gdjs.Level_951Code.GDPlayerObjects2[i].getVariables().getFromIndex(1)).add(50);
}
}{for(var i = 0, len = gdjs.Level_951Code.GDScoreObjects2.length ;i < len;++i) {
    gdjs.Level_951Code.GDScoreObjects2[i].setString("Score: " + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(((gdjs.Level_951Code.GDPlayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Level_951Code.GDPlayerObjects2[0].getVariables()).getFromIndex(1)))));
}
}{for(var i = 0, len = gdjs.Level_951Code.GDCoinObjects2.length ;i < len;++i) {
    gdjs.Level_951Code.GDCoinObjects2[i].deleteFromScene(runtimeScene);
}
}}
}

}


{



}


{



}


{


gdjs.Level_951Code.condition0IsTrue_0.val = false;
{
{gdjs.Level_951Code.conditionTrue_1 = gdjs.Level_951Code.condition0IsTrue_0;
gdjs.Level_951Code.conditionTrue_1.val = context.triggerOnce(297492364);
}
}if (gdjs.Level_951Code.condition0IsTrue_0.val) {
gdjs.Level_951Code.GDArrowDownObjects1.createFrom(runtimeScene.getObjects("ArrowDown"));
gdjs.Level_951Code.GDArrowLeftObjects1.createFrom(runtimeScene.getObjects("ArrowLeft"));
gdjs.Level_951Code.GDArrowRightObjects1.createFrom(runtimeScene.getObjects("ArrowRight"));
gdjs.Level_951Code.GDArrowUpObjects1.createFrom(runtimeScene.getObjects("ArrowUp"));
{for(var i = 0, len = gdjs.Level_951Code.GDArrowDownObjects1.length ;i < len;++i) {
    gdjs.Level_951Code.GDArrowDownObjects1[i].hide();
}
for(var i = 0, len = gdjs.Level_951Code.GDArrowUpObjects1.length ;i < len;++i) {
    gdjs.Level_951Code.GDArrowUpObjects1[i].hide();
}
for(var i = 0, len = gdjs.Level_951Code.GDArrowLeftObjects1.length ;i < len;++i) {
    gdjs.Level_951Code.GDArrowLeftObjects1[i].hide();
}
for(var i = 0, len = gdjs.Level_951Code.GDArrowRightObjects1.length ;i < len;++i) {
    gdjs.Level_951Code.GDArrowRightObjects1[i].hide();
}
}}

}


{

gdjs.Level_951Code.GDArrowLeftObjects1.createFrom(runtimeScene.getObjects("ArrowLeft"));
gdjs.Level_951Code.GDMovingPlatformObjects1.createFrom(runtimeScene.getObjects("MovingPlatform"));

gdjs.Level_951Code.condition0IsTrue_0.val = false;
{
gdjs.Level_951Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_951Code.mapOfGDgdjs_46Level_95951Code_46GDMovingPlatformObjects1Objects, gdjs.Level_951Code.mapOfGDgdjs_46Level_95951Code_46GDArrowLeftObjects1Objects, false, runtimeScene);
}if (gdjs.Level_951Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_951Code.GDMovingPlatformObjects1 */
{for(var i = 0, len = gdjs.Level_951Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.Level_951Code.GDMovingPlatformObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Level_951Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.Level_951Code.GDMovingPlatformObjects1[i].returnVariable(gdjs.Level_951Code.GDMovingPlatformObjects1[i].getVariables().getFromIndex(0)).setNumber(-150);
}
}{for(var i = 0, len = gdjs.Level_951Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.Level_951Code.GDMovingPlatformObjects1[i].returnVariable(gdjs.Level_951Code.GDMovingPlatformObjects1[i].getVariables().getFromIndex(1)).setNumber(0);
}
}}

}


{

gdjs.Level_951Code.GDArrowRightObjects1.createFrom(runtimeScene.getObjects("ArrowRight"));
gdjs.Level_951Code.GDMovingPlatformObjects1.createFrom(runtimeScene.getObjects("MovingPlatform"));

gdjs.Level_951Code.condition0IsTrue_0.val = false;
{
gdjs.Level_951Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_951Code.mapOfGDgdjs_46Level_95951Code_46GDMovingPlatformObjects1Objects, gdjs.Level_951Code.mapOfGDgdjs_46Level_95951Code_46GDArrowRightObjects1Objects, false, runtimeScene);
}if (gdjs.Level_951Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_951Code.GDMovingPlatformObjects1 */
{for(var i = 0, len = gdjs.Level_951Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.Level_951Code.GDMovingPlatformObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Level_951Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.Level_951Code.GDMovingPlatformObjects1[i].returnVariable(gdjs.Level_951Code.GDMovingPlatformObjects1[i].getVariables().getFromIndex(0)).setNumber(150);
}
}{for(var i = 0, len = gdjs.Level_951Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.Level_951Code.GDMovingPlatformObjects1[i].returnVariable(gdjs.Level_951Code.GDMovingPlatformObjects1[i].getVariables().getFromIndex(1)).setNumber(0);
}
}}

}


{

gdjs.Level_951Code.GDArrowUpObjects1.createFrom(runtimeScene.getObjects("ArrowUp"));
gdjs.Level_951Code.GDMovingPlatformObjects1.createFrom(runtimeScene.getObjects("MovingPlatform"));

gdjs.Level_951Code.condition0IsTrue_0.val = false;
{
gdjs.Level_951Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_951Code.mapOfGDgdjs_46Level_95951Code_46GDMovingPlatformObjects1Objects, gdjs.Level_951Code.mapOfGDgdjs_46Level_95951Code_46GDArrowUpObjects1Objects, false, runtimeScene);
}if (gdjs.Level_951Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_951Code.GDMovingPlatformObjects1 */
{for(var i = 0, len = gdjs.Level_951Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.Level_951Code.GDMovingPlatformObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Level_951Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.Level_951Code.GDMovingPlatformObjects1[i].returnVariable(gdjs.Level_951Code.GDMovingPlatformObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{for(var i = 0, len = gdjs.Level_951Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.Level_951Code.GDMovingPlatformObjects1[i].returnVariable(gdjs.Level_951Code.GDMovingPlatformObjects1[i].getVariables().getFromIndex(1)).setNumber(-150);
}
}}

}


{

gdjs.Level_951Code.GDArrowDownObjects1.createFrom(runtimeScene.getObjects("ArrowDown"));
gdjs.Level_951Code.GDMovingPlatformObjects1.createFrom(runtimeScene.getObjects("MovingPlatform"));

gdjs.Level_951Code.condition0IsTrue_0.val = false;
{
gdjs.Level_951Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_951Code.mapOfGDgdjs_46Level_95951Code_46GDMovingPlatformObjects1Objects, gdjs.Level_951Code.mapOfGDgdjs_46Level_95951Code_46GDArrowDownObjects1Objects, false, runtimeScene);
}if (gdjs.Level_951Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_951Code.GDMovingPlatformObjects1 */
{for(var i = 0, len = gdjs.Level_951Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.Level_951Code.GDMovingPlatformObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Level_951Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.Level_951Code.GDMovingPlatformObjects1[i].returnVariable(gdjs.Level_951Code.GDMovingPlatformObjects1[i].getVariables().getFromIndex(0)).setNumber(0);
}
}{for(var i = 0, len = gdjs.Level_951Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.Level_951Code.GDMovingPlatformObjects1[i].returnVariable(gdjs.Level_951Code.GDMovingPlatformObjects1[i].getVariables().getFromIndex(1)).setNumber(150);
}
}}

}


{


{
gdjs.Level_951Code.GDMovingPlatformObjects1.createFrom(runtimeScene.getObjects("MovingPlatform"));
{for(var i = 0, len = gdjs.Level_951Code.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.Level_951Code.GDMovingPlatformObjects1[i].addForce((gdjs.RuntimeObject.getVariableNumber(gdjs.Level_951Code.GDMovingPlatformObjects1[i].getVariables().getFromIndex(0))), (gdjs.RuntimeObject.getVariableNumber(gdjs.Level_951Code.GDMovingPlatformObjects1[i].getVariables().getFromIndex(1))), 0);
}
}}

}


{


gdjs.Level_951Code.userFunc0x1190eb38(runtimeScene);

}


{



}


{



}


{



}


{



}


{

gdjs.Level_951Code.GDKillBoxObjects1.createFrom(runtimeScene.getObjects("KillBox"));
gdjs.Level_951Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level_951Code.condition0IsTrue_0.val = false;
{
gdjs.Level_951Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_951Code.mapOfGDgdjs_46Level_95951Code_46GDKillBoxObjects1Objects, gdjs.Level_951Code.mapOfGDgdjs_46Level_95951Code_46GDPlayerObjects1Objects, false, runtimeScene);
}if (gdjs.Level_951Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_951Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_951Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_951Code.GDPlayerObjects1[i].returnVariable(gdjs.Level_951Code.GDPlayerObjects1[i].getVariables().getFromIndex(2)).setNumber(1);
}
}
{ //Subevents
gdjs.Level_951Code.eventsList0x11ba5890(runtimeScene, context);} //End of subevents
}

}


{

gdjs.Level_951Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Level_951Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level_951Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level_951Code.GDPlayerObjects1[i].getVariableNumber(gdjs.Level_951Code.GDPlayerObjects1[i].getVariables().getFromIndex(2)) == 1 ) {
        gdjs.Level_951Code.condition0IsTrue_0.val = true;
        gdjs.Level_951Code.GDPlayerObjects1[k] = gdjs.Level_951Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level_951Code.GDPlayerObjects1.length = k;}if (gdjs.Level_951Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level_951Code.eventsList0x11ba59b0(runtimeScene, context);} //End of subevents
}

}


}; //End of gdjs.Level_951Code.eventsList0x70e0e8


gdjs.Level_951Code.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.Level_951Code.GDPlayerHeightCheckObjects1.length = 0;
gdjs.Level_951Code.GDPlayerHeightCheckObjects2.length = 0;
gdjs.Level_951Code.GDPlayerHeightCheckObjects3.length = 0;
gdjs.Level_951Code.GDPlayerHeightCheckObjects4.length = 0;
gdjs.Level_951Code.GDPlayerObjects1.length = 0;
gdjs.Level_951Code.GDPlayerObjects2.length = 0;
gdjs.Level_951Code.GDPlayerObjects3.length = 0;
gdjs.Level_951Code.GDPlayerObjects4.length = 0;
gdjs.Level_951Code.GDScoreObjects1.length = 0;
gdjs.Level_951Code.GDScoreObjects2.length = 0;
gdjs.Level_951Code.GDScoreObjects3.length = 0;
gdjs.Level_951Code.GDScoreObjects4.length = 0;
gdjs.Level_951Code.GDCoinObjects1.length = 0;
gdjs.Level_951Code.GDCoinObjects2.length = 0;
gdjs.Level_951Code.GDCoinObjects3.length = 0;
gdjs.Level_951Code.GDCoinObjects4.length = 0;
gdjs.Level_951Code.GDKillBoxObjects1.length = 0;
gdjs.Level_951Code.GDKillBoxObjects2.length = 0;
gdjs.Level_951Code.GDKillBoxObjects3.length = 0;
gdjs.Level_951Code.GDKillBoxObjects4.length = 0;
gdjs.Level_951Code.GDMovingPlatformObjects1.length = 0;
gdjs.Level_951Code.GDMovingPlatformObjects2.length = 0;
gdjs.Level_951Code.GDMovingPlatformObjects3.length = 0;
gdjs.Level_951Code.GDMovingPlatformObjects4.length = 0;
gdjs.Level_951Code.GDArrowRightObjects1.length = 0;
gdjs.Level_951Code.GDArrowRightObjects2.length = 0;
gdjs.Level_951Code.GDArrowRightObjects3.length = 0;
gdjs.Level_951Code.GDArrowRightObjects4.length = 0;
gdjs.Level_951Code.GDArrowLeftObjects1.length = 0;
gdjs.Level_951Code.GDArrowLeftObjects2.length = 0;
gdjs.Level_951Code.GDArrowLeftObjects3.length = 0;
gdjs.Level_951Code.GDArrowLeftObjects4.length = 0;
gdjs.Level_951Code.GDArrowUpObjects1.length = 0;
gdjs.Level_951Code.GDArrowUpObjects2.length = 0;
gdjs.Level_951Code.GDArrowUpObjects3.length = 0;
gdjs.Level_951Code.GDArrowUpObjects4.length = 0;
gdjs.Level_951Code.GDArrowDownObjects1.length = 0;
gdjs.Level_951Code.GDArrowDownObjects2.length = 0;
gdjs.Level_951Code.GDArrowDownObjects3.length = 0;
gdjs.Level_951Code.GDArrowDownObjects4.length = 0;
gdjs.Level_951Code.GDGroundObjects1.length = 0;
gdjs.Level_951Code.GDGroundObjects2.length = 0;
gdjs.Level_951Code.GDGroundObjects3.length = 0;
gdjs.Level_951Code.GDGroundObjects4.length = 0;
gdjs.Level_951Code.GDPlatformObjects1.length = 0;
gdjs.Level_951Code.GDPlatformObjects2.length = 0;
gdjs.Level_951Code.GDPlatformObjects3.length = 0;
gdjs.Level_951Code.GDPlatformObjects4.length = 0;
gdjs.Level_951Code.GDStartObjects1.length = 0;
gdjs.Level_951Code.GDStartObjects2.length = 0;
gdjs.Level_951Code.GDStartObjects3.length = 0;
gdjs.Level_951Code.GDStartObjects4.length = 0;

gdjs.Level_951Code.eventsList0x70e0e8(runtimeScene, context);return;
}
gdjs['Level_951Code']= gdjs.Level_951Code;
