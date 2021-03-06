import {
  View,
  Text,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback
} from "react-native";
import React, { Component } from "react";
import { SHADOW } from "../utilities/style-constants";

class Opacity extends Component {
  state = { animation: new Animated.Value(1) };

  fadeOut = () => {
    Animated.timing(this.state.animation, {
      toValue: 0.1,
      duration: 300
    }).start();
  };

  fadeIn = () => {
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 200
    }).start();
  };

  render() {
    const opactiyAnimation = { opacity: this.state.animation };
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPressIn={this.fadeOut}
          onPressOut={this.fadeIn}
        >
          <Animated.View style={[styles.box, opactiyAnimation]} />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  box: {
    ...SHADOW,
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: "red"
  }
});

export { Opacity };
