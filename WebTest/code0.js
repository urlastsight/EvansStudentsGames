gdjs.StartCode = {};
gdjs.StartCode.GDPlayerHeightCheckObjects1= [];
gdjs.StartCode.GDPlayerHeightCheckObjects2= [];
gdjs.StartCode.GDPlayerHeightCheckObjects3= [];
gdjs.StartCode.GDPlayerObjects1= [];
gdjs.StartCode.GDPlayerObjects2= [];
gdjs.StartCode.GDPlayerObjects3= [];
gdjs.StartCode.GDScoreObjects1= [];
gdjs.StartCode.GDScoreObjects2= [];
gdjs.StartCode.GDScoreObjects3= [];
gdjs.StartCode.GDCoinObjects1= [];
gdjs.StartCode.GDCoinObjects2= [];
gdjs.StartCode.GDCoinObjects3= [];
gdjs.StartCode.GDKillBoxObjects1= [];
gdjs.StartCode.GDKillBoxObjects2= [];
gdjs.StartCode.GDKillBoxObjects3= [];
gdjs.StartCode.GDMovingPlatformObjects1= [];
gdjs.StartCode.GDMovingPlatformObjects2= [];
gdjs.StartCode.GDMovingPlatformObjects3= [];
gdjs.StartCode.GDArrowRightObjects1= [];
gdjs.StartCode.GDArrowRightObjects2= [];
gdjs.StartCode.GDArrowRightObjects3= [];
gdjs.StartCode.GDArrowLeftObjects1= [];
gdjs.StartCode.GDArrowLeftObjects2= [];
gdjs.StartCode.GDArrowLeftObjects3= [];
gdjs.StartCode.GDArrowUpObjects1= [];
gdjs.StartCode.GDArrowUpObjects2= [];
gdjs.StartCode.GDArrowUpObjects3= [];
gdjs.StartCode.GDArrowDownObjects1= [];
gdjs.StartCode.GDArrowDownObjects2= [];
gdjs.StartCode.GDArrowDownObjects3= [];
gdjs.StartCode.GDTitleObjects1= [];
gdjs.StartCode.GDTitleObjects2= [];
gdjs.StartCode.GDTitleObjects3= [];
gdjs.StartCode.GDStartObjects1= [];
gdjs.StartCode.GDStartObjects2= [];
gdjs.StartCode.GDStartObjects3= [];
gdjs.StartCode.GDInstructionsObjects1= [];
gdjs.StartCode.GDInstructionsObjects2= [];
gdjs.StartCode.GDInstructionsObjects3= [];

gdjs.StartCode.conditionTrue_0 = {val:false};
gdjs.StartCode.condition0IsTrue_0 = {val:false};
gdjs.StartCode.condition1IsTrue_0 = {val:false};


gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDStartObjects2Objects = Hashtable.newFrom({"Start": gdjs.StartCode.GDStartObjects2});gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDInstructionsObjects1Objects = Hashtable.newFrom({"Instructions": gdjs.StartCode.GDInstructionsObjects1});gdjs.StartCode.eventsList0x11ba5830 = function(runtimeScene, context) {

{

gdjs.StartCode.GDStartObjects2.createFrom(runtimeScene.getObjects("Start"));

gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDStartObjects2Objects, runtimeScene, false, false);
}if (gdjs.StartCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level_1", false);
}}

}


{

gdjs.StartCode.GDInstructionsObjects1.createFrom(runtimeScene.getObjects("Instructions"));

gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDInstructionsObjects1Objects, runtimeScene, false, false);
}if (gdjs.StartCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Instructions", false);
}}

}


}; //End of gdjs.StartCode.eventsList0x11ba5830
gdjs.StartCode.eventsList0x70e0e8 = function(runtimeScene, context) {

{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.StartCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.StartCode.eventsList0x11ba5830(runtimeScene, context);} //End of subevents
}

}


}; //End of gdjs.StartCode.eventsList0x70e0e8


gdjs.StartCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.StartCode.GDPlayerHeightCheckObjects1.length = 0;
gdjs.StartCode.GDPlayerHeightCheckObjects2.length = 0;
gdjs.StartCode.GDPlayerHeightCheckObjects3.length = 0;
gdjs.StartCode.GDPlayerObjects1.length = 0;
gdjs.StartCode.GDPlayerObjects2.length = 0;
gdjs.StartCode.GDPlayerObjects3.length = 0;
gdjs.StartCode.GDScoreObjects1.length = 0;
gdjs.StartCode.GDScoreObjects2.length = 0;
gdjs.StartCode.GDScoreObjects3.length = 0;
gdjs.StartCode.GDCoinObjects1.length = 0;
gdjs.StartCode.GDCoinObjects2.length = 0;
gdjs.StartCode.GDCoinObjects3.length = 0;
gdjs.StartCode.GDKillBoxObjects1.length = 0;
gdjs.StartCode.GDKillBoxObjects2.length = 0;
gdjs.StartCode.GDKillBoxObjects3.length = 0;
gdjs.StartCode.GDMovingPlatformObjects1.length = 0;
gdjs.StartCode.GDMovingPlatformObjects2.length = 0;
gdjs.StartCode.GDMovingPlatformObjects3.length = 0;
gdjs.StartCode.GDArrowRightObjects1.length = 0;
gdjs.StartCode.GDArrowRightObjects2.length = 0;
gdjs.StartCode.GDArrowRightObjects3.length = 0;
gdjs.StartCode.GDArrowLeftObjects1.length = 0;
gdjs.StartCode.GDArrowLeftObjects2.length = 0;
gdjs.StartCode.GDArrowLeftObjects3.length = 0;
gdjs.StartCode.GDArrowUpObjects1.length = 0;
gdjs.StartCode.GDArrowUpObjects2.length = 0;
gdjs.StartCode.GDArrowUpObjects3.length = 0;
gdjs.StartCode.GDArrowDownObjects1.length = 0;
gdjs.StartCode.GDArrowDownObjects2.length = 0;
gdjs.StartCode.GDArrowDownObjects3.length = 0;
gdjs.StartCode.GDTitleObjects1.length = 0;
gdjs.StartCode.GDTitleObjects2.length = 0;
gdjs.StartCode.GDTitleObjects3.length = 0;
gdjs.StartCode.GDStartObjects1.length = 0;
gdjs.StartCode.GDStartObjects2.length = 0;
gdjs.StartCode.GDStartObjects3.length = 0;
gdjs.StartCode.GDInstructionsObjects1.length = 0;
gdjs.StartCode.GDInstructionsObjects2.length = 0;
gdjs.StartCode.GDInstructionsObjects3.length = 0;

gdjs.StartCode.eventsList0x70e0e8(runtimeScene, context);return;
}
gdjs['StartCode']= gdjs.StartCode;
