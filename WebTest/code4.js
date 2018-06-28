gdjs.GameOverCode = {};
gdjs.GameOverCode.GDPlayerHeightCheckObjects1= [];
gdjs.GameOverCode.GDPlayerHeightCheckObjects2= [];
gdjs.GameOverCode.GDPlayerObjects1= [];
gdjs.GameOverCode.GDPlayerObjects2= [];
gdjs.GameOverCode.GDScoreObjects1= [];
gdjs.GameOverCode.GDScoreObjects2= [];
gdjs.GameOverCode.GDCoinObjects1= [];
gdjs.GameOverCode.GDCoinObjects2= [];
gdjs.GameOverCode.GDKillBoxObjects1= [];
gdjs.GameOverCode.GDKillBoxObjects2= [];
gdjs.GameOverCode.GDMovingPlatformObjects1= [];
gdjs.GameOverCode.GDMovingPlatformObjects2= [];
gdjs.GameOverCode.GDArrowRightObjects1= [];
gdjs.GameOverCode.GDArrowRightObjects2= [];
gdjs.GameOverCode.GDArrowLeftObjects1= [];
gdjs.GameOverCode.GDArrowLeftObjects2= [];
gdjs.GameOverCode.GDArrowUpObjects1= [];
gdjs.GameOverCode.GDArrowUpObjects2= [];
gdjs.GameOverCode.GDArrowDownObjects1= [];
gdjs.GameOverCode.GDArrowDownObjects2= [];
gdjs.GameOverCode.GDGameOverObjects1= [];
gdjs.GameOverCode.GDGameOverObjects2= [];
gdjs.GameOverCode.GDMainObjects1= [];
gdjs.GameOverCode.GDMainObjects2= [];

gdjs.GameOverCode.conditionTrue_0 = {val:false};
gdjs.GameOverCode.condition0IsTrue_0 = {val:false};
gdjs.GameOverCode.condition1IsTrue_0 = {val:false};
gdjs.GameOverCode.condition2IsTrue_0 = {val:false};


gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDMainObjects1Objects = Hashtable.newFrom({"Main": gdjs.GameOverCode.GDMainObjects1});gdjs.GameOverCode.eventsList0x70e0e8 = function(runtimeScene, context) {

{

gdjs.GameOverCode.GDMainObjects1.createFrom(runtimeScene.getObjects("Main"));

gdjs.GameOverCode.condition0IsTrue_0.val = false;
gdjs.GameOverCode.condition1IsTrue_0.val = false;
{
gdjs.GameOverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.GameOverCode.condition0IsTrue_0.val ) {
{
gdjs.GameOverCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameOverCode.mapOfGDgdjs_46GameOverCode_46GDMainObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.GameOverCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start", false);
}}

}


}; //End of gdjs.GameOverCode.eventsList0x70e0e8


gdjs.GameOverCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.GameOverCode.GDPlayerHeightCheckObjects1.length = 0;
gdjs.GameOverCode.GDPlayerHeightCheckObjects2.length = 0;
gdjs.GameOverCode.GDPlayerObjects1.length = 0;
gdjs.GameOverCode.GDPlayerObjects2.length = 0;
gdjs.GameOverCode.GDScoreObjects1.length = 0;
gdjs.GameOverCode.GDScoreObjects2.length = 0;
gdjs.GameOverCode.GDCoinObjects1.length = 0;
gdjs.GameOverCode.GDCoinObjects2.length = 0;
gdjs.GameOverCode.GDKillBoxObjects1.length = 0;
gdjs.GameOverCode.GDKillBoxObjects2.length = 0;
gdjs.GameOverCode.GDMovingPlatformObjects1.length = 0;
gdjs.GameOverCode.GDMovingPlatformObjects2.length = 0;
gdjs.GameOverCode.GDArrowRightObjects1.length = 0;
gdjs.GameOverCode.GDArrowRightObjects2.length = 0;
gdjs.GameOverCode.GDArrowLeftObjects1.length = 0;
gdjs.GameOverCode.GDArrowLeftObjects2.length = 0;
gdjs.GameOverCode.GDArrowUpObjects1.length = 0;
gdjs.GameOverCode.GDArrowUpObjects2.length = 0;
gdjs.GameOverCode.GDArrowDownObjects1.length = 0;
gdjs.GameOverCode.GDArrowDownObjects2.length = 0;
gdjs.GameOverCode.GDGameOverObjects1.length = 0;
gdjs.GameOverCode.GDGameOverObjects2.length = 0;
gdjs.GameOverCode.GDMainObjects1.length = 0;
gdjs.GameOverCode.GDMainObjects2.length = 0;

gdjs.GameOverCode.eventsList0x70e0e8(runtimeScene, context);return;
}
gdjs['GameOverCode']= gdjs.GameOverCode;
