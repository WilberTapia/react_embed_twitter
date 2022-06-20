import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      {/* <WebView
        scalesPageToFit={false}
      
        source={{
          html: '<blockquote class="twitter-tweet"><a href="https://twitter.com/MDEdgeTweets/status/1538939493549363200"></a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
        }}
      /> */}
     
      <WebView
        // style={{width:300}}
        // injectedJavaScript={`const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=0.5, maximum-scale=0.5, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta); `}
        scalesPageToFit={false}
        source={{
          html: '<a class="twitter-timeline" href="https://twitter.com/In4Gaming/lists/1538943812600487936"></a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
        }}
      /> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    // backgroundColor: theme.white.colors.accent_5,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
