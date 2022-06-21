import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  const INJECTEDJAVASCRIPT = 'const meta = document.createElement(\'meta\'); meta.setAttribute(\'content\', \'width=device-width, initial-scale=1, maximum-scale=0.99, user-scalable=0\'); meta.setAttribute(\'name\', \'viewport\'); document.getElementsByTagName(\'head\')[0].appendChild(meta); '

  return (
    <SafeAreaView style={styles.AndroidSafeArea}>
      <WebView
      injectedJavaScript={INJECTEDJAVASCRIPT}
      scalesPageToFit={false}
      hasZoom={false}
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
