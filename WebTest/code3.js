gdjs.VictoryCode = {};
gdjs.VictoryCode.GDPlayerHeightCheckObjects1= [];
gdjs.VictoryCode.GDPlayerHeightCheckObjects2= [];
gdjs.VictoryCode.GDPlayerObjects1= [];
gdjs.VictoryCode.GDPlayerObjects2= [];
gdjs.VictoryCode.GDScoreObjects1= [];
gdjs.VictoryCode.GDScoreObjects2= [];
gdjs.VictoryCode.GDCoinObjects1= [];
gdjs.VictoryCode.GDCoinObjects2= [];
gdjs.VictoryCode.GDKillBoxObjects1= [];
gdjs.VictoryCode.GDKillBoxObjects2= [];
gdjs.VictoryCode.GDMovingPlatformObjects1= [];
gdjs.VictoryCode.GDMovingPlatformObjects2= [];
gdjs.VictoryCode.GDArrowRightObjects1= [];
gdjs.VictoryCode.GDArrowRightObjects2= [];
gdjs.VictoryCode.GDArrowLeftObjects1= [];
gdjs.VictoryCode.GDArrowLeftObjects2= [];
gdjs.VictoryCode.GDArrowUpObjects1= [];
gdjs.VictoryCode.GDArrowUpObjects2= [];
gdjs.VictoryCode.GDArrowDownObjects1= [];
gdjs.VictoryCode.GDArrowDownObjects2= [];
gdjs.VictoryCode.GDVICTORYObjects1= [];
gdjs.VictoryCode.GDVICTORYObjects2= [];
gdjs.VictoryCode.GDMainObjects1= [];
gdjs.VictoryCode.GDMainObjects2= [];

gdjs.VictoryCode.conditionTrue_0 = {val:false};
gdjs.VictoryCode.condition0IsTrue_0 = {val:false};
gdjs.VictoryCode.condition1IsTrue_0 = {val:false};
gdjs.VictoryCode.condition2IsTrue_0 = {val:false};


gdjs.VictoryCode.mapOfGDgdjs_46VictoryCode_46GDMainObjects1Objects = Hashtable.newFrom({"Main": gdjs.VictoryCode.GDMainObjects1});gdjs.VictoryCode.eventsList0x70e0e8 = function(runtimeScene, context) {

{

gdjs.VictoryCode.GDMainObjects1.createFrom(runtimeScene.getObjects("Main"));

gdjs.VictoryCode.condition0IsTrue_0.val = false;
gdjs.VictoryCode.condition1IsTrue_0.val = false;
{
gdjs.VictoryCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.VictoryCode.condition0IsTrue_0.val ) {
{
gdjs.VictoryCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.VictoryCode.mapOfGDgdjs_46VictoryCode_46GDMainObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.VictoryCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start", false);
}}

}


}; //End of gdjs.VictoryCode.eventsList0x70e0e8


gdjs.VictoryCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.VictoryCode.GDPlayerHeightCheckObjects1.length = 0;
gdjs.VictoryCode.GDPlayerHeightCheckObjects2.length = 0;
gdjs.VictoryCode.GDPlayerObjects1.length = 0;
gdjs.VictoryCode.GDPlayerObjects2.length = 0;
gdjs.VictoryCode.GDScoreObjects1.length = 0;
gdjs.VictoryCode.GDScoreObjects2.length = 0;
gdjs.VictoryCode.GDCoinObjects1.length = 0;
gdjs.VictoryCode.GDCoinObjects2.length = 0;
gdjs.VictoryCode.GDKillBoxObjects1.length = 0;
gdjs.VictoryCode.GDKillBoxObjects2.length = 0;
gdjs.VictoryCode.GDMovingPlatformObjects1.length = 0;
gdjs.VictoryCode.GDMovingPlatformObjects2.length = 0;
gdjs.VictoryCode.GDArrowRightObjects1.length = 0;
gdjs.VictoryCode.GDArrowRightObjects2.length = 0;
gdjs.VictoryCode.GDArrowLeftObjects1.length = 0;
gdjs.VictoryCode.GDArrowLeftObjects2.length = 0;
gdjs.VictoryCode.GDArrowUpObjects1.length = 0;
gdjs.VictoryCode.GDArrowUpObjects2.length = 0;
gdjs.VictoryCode.GDArrowDownObjects1.length = 0;
gdjs.VictoryCode.GDArrowDownObjects2.length = 0;
gdjs.VictoryCode.GDVICTORYObjects1.length = 0;
gdjs.VictoryCode.GDVICTORYObjects2.length = 0;
gdjs.VictoryCode.GDMainObjects1.length = 0;
gdjs.VictoryCode.GDMainObjects2.length = 0;

gdjs.VictoryCode.eventsList0x70e0e8(runtimeScene, context);return;
}
gdjs['VictoryCode']= gdjs.VictoryCode;
