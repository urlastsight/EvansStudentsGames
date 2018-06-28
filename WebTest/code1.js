gdjs.InstructionsCode = {};
gdjs.InstructionsCode.GDPlayerHeightCheckObjects1= [];
gdjs.InstructionsCode.GDPlayerHeightCheckObjects2= [];
gdjs.InstructionsCode.GDPlayerObjects1= [];
gdjs.InstructionsCode.GDPlayerObjects2= [];
gdjs.InstructionsCode.GDScoreObjects1= [];
gdjs.InstructionsCode.GDScoreObjects2= [];
gdjs.InstructionsCode.GDCoinObjects1= [];
gdjs.InstructionsCode.GDCoinObjects2= [];
gdjs.InstructionsCode.GDKillBoxObjects1= [];
gdjs.InstructionsCode.GDKillBoxObjects2= [];
gdjs.InstructionsCode.GDMovingPlatformObjects1= [];
gdjs.InstructionsCode.GDMovingPlatformObjects2= [];
gdjs.InstructionsCode.GDArrowRightObjects1= [];
gdjs.InstructionsCode.GDArrowRightObjects2= [];
gdjs.InstructionsCode.GDArrowLeftObjects1= [];
gdjs.InstructionsCode.GDArrowLeftObjects2= [];
gdjs.InstructionsCode.GDArrowUpObjects1= [];
gdjs.InstructionsCode.GDArrowUpObjects2= [];
gdjs.InstructionsCode.GDArrowDownObjects1= [];
gdjs.InstructionsCode.GDArrowDownObjects2= [];
gdjs.InstructionsCode.GDInstructionsObjects1= [];
gdjs.InstructionsCode.GDInstructionsObjects2= [];
gdjs.InstructionsCode.GDTitleObjects1= [];
gdjs.InstructionsCode.GDTitleObjects2= [];
gdjs.InstructionsCode.GDMain_95MenuObjects1= [];
gdjs.InstructionsCode.GDMain_95MenuObjects2= [];

gdjs.InstructionsCode.conditionTrue_0 = {val:false};
gdjs.InstructionsCode.condition0IsTrue_0 = {val:false};
gdjs.InstructionsCode.condition1IsTrue_0 = {val:false};


gdjs.InstructionsCode.mapOfGDgdjs_46InstructionsCode_46GDMain_9595MenuObjects1Objects = Hashtable.newFrom({"Main_Menu": gdjs.InstructionsCode.GDMain_95MenuObjects1});gdjs.InstructionsCode.eventsList0x11ba5590 = function(runtimeScene, context) {

{

gdjs.InstructionsCode.GDMain_95MenuObjects1.createFrom(runtimeScene.getObjects("Main_Menu"));

gdjs.InstructionsCode.condition0IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.InstructionsCode.mapOfGDgdjs_46InstructionsCode_46GDMain_9595MenuObjects1Objects, runtimeScene, false, false);
}if (gdjs.InstructionsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start", false);
}}

}


}; //End of gdjs.InstructionsCode.eventsList0x11ba5590
gdjs.InstructionsCode.eventsList0x70e0e8 = function(runtimeScene, context) {

{


gdjs.InstructionsCode.condition0IsTrue_0.val = false;
{
gdjs.InstructionsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.InstructionsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.InstructionsCode.eventsList0x11ba5590(runtimeScene, context);} //End of subevents
}

}


}; //End of gdjs.InstructionsCode.eventsList0x70e0e8


gdjs.InstructionsCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.InstructionsCode.GDPlayerHeightCheckObjects1.length = 0;
gdjs.InstructionsCode.GDPlayerHeightCheckObjects2.length = 0;
gdjs.InstructionsCode.GDPlayerObjects1.length = 0;
gdjs.InstructionsCode.GDPlayerObjects2.length = 0;
gdjs.InstructionsCode.GDScoreObjects1.length = 0;
gdjs.InstructionsCode.GDScoreObjects2.length = 0;
gdjs.InstructionsCode.GDCoinObjects1.length = 0;
gdjs.InstructionsCode.GDCoinObjects2.length = 0;
gdjs.InstructionsCode.GDKillBoxObjects1.length = 0;
gdjs.InstructionsCode.GDKillBoxObjects2.length = 0;
gdjs.InstructionsCode.GDMovingPlatformObjects1.length = 0;
gdjs.InstructionsCode.GDMovingPlatformObjects2.length = 0;
gdjs.InstructionsCode.GDArrowRightObjects1.length = 0;
gdjs.InstructionsCode.GDArrowRightObjects2.length = 0;
gdjs.InstructionsCode.GDArrowLeftObjects1.length = 0;
gdjs.InstructionsCode.GDArrowLeftObjects2.length = 0;
gdjs.InstructionsCode.GDArrowUpObjects1.length = 0;
gdjs.InstructionsCode.GDArrowUpObjects2.length = 0;
gdjs.InstructionsCode.GDArrowDownObjects1.length = 0;
gdjs.InstructionsCode.GDArrowDownObjects2.length = 0;
gdjs.InstructionsCode.GDInstructionsObjects1.length = 0;
gdjs.InstructionsCode.GDInstructionsObjects2.length = 0;
gdjs.InstructionsCode.GDTitleObjects1.length = 0;
gdjs.InstructionsCode.GDTitleObjects2.length = 0;
gdjs.InstructionsCode.GDMain_95MenuObjects1.length = 0;
gdjs.InstructionsCode.GDMain_95MenuObjects2.length = 0;

gdjs.InstructionsCode.eventsList0x70e0e8(runtimeScene, context);return;
}
gdjs['InstructionsCode']= gdjs.InstructionsCode;
