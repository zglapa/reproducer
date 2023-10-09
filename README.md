# React Native Element inspector crash repro
This is a repository containing a minimal repro for a crash that happens when the element inspector from the developer menu is turned on when the app contains a wrapper provided by AppRegistry.setComponentWrapperProvider and a component with zIndex: -1 with the new architecture enabled.

The wrapper component is added in `index.js` file and the rest is in the `App.tsx`

# Steps to reproduce
 - choose Element Inspector from the developer menu and the following crash should happen
 - ```
   2023-10-09 16:55:24.701  2158-4323  ReactNativeJNI          com.reproducerapp                    E  StubView: ASSERT FAILURE: REMOVE mutation assertion failure: oldChildShadowView does not match oldStubView: [10] stub hash: ##15806944667130804052 old mutation hash: ##652601411395075939
   2023-10-09 16:55:24.701  2158-4323  ReactNativeJNI          com.reproducerapp                    E  ChildStubView: surfaceId=1 tag=10 traits=  <Node/> componentName=View props=0xb400007647652a98(shared) eventEmitter=0xb40000759762e298(shared) layoutMetrics=  <LayoutMetrics frame={x:-20,y:-20,width:200,height:100} contentInsets={top:0,right:0,bottom:0,left:0} borderWidth={top:0,right:0,bottom:0,left:0} overflowInset={top:0,right:-0,bottom:-0,left:0} displayType=Flex layoutDirection=LeftToRight pointScaleFactor=3.5/> state=null(shared)
   2023-10-09 16:55:24.701  2158-4323  ReactNativeJNI          com.reproducerapp                    E  OldChildShadowView: surfaceId=1 tag=10 traits=  <Node/> componentName=View props=0xb400007647652a98(shared) eventEmitter=0xb40000759762e298(shared) layoutMetrics=  <LayoutMetrics frame={x:-20,y:4,width:200,height:100} contentInsets={top:0,right:0,bottom:0,left:0} borderWidth={top:0,right:0,bottom:0,left:0} overflowInset={top:0,right:-0,bottom:-0,left:0} displayType=Flex layoutDirection=LeftToRight pointScaleFactor=3.5/> state=null(shared)
   2023-10-09 16:55:24.702  2158-4323  ReactNative             com.reproducerapp                    E  /root/react-native/packages/react-native/ReactCommon/react/renderer/mounting/StubViewTree.cpp:174: function mutate: assertion failed ((ShadowView)(*childStubView) == mutation.oldChildShadowView)
   2023-10-09 16:55:24.702  2158-4323  ReactNative             com.reproducerapp                    A  /root/react-native/packages/react-native/ReactCommon/react/renderer/mounting/StubViewTree.cpp:174: function mutate: assertion failed ((ShadowView)(*childStubView) == mutation.oldChildShadowView)
  ```
