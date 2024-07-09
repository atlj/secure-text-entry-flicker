# React Native Secure Text Entry Flicker

This is a simple example of a React Native app that demonstrates a flicker when the secureTextEntry prop is toggled on.

The issue is reproducible on both new arch and the old arch. See the `new-arch` branch.

## Instructions:

1. Run the app on an iOS simulator or an iPhone.
2. Click on the text input
3. Enter some text and delete characters.
4. You will notice the text flickers when you delete a character then enter a new one.

Note: If you are using simulator, hit `Cmd + K` to bring up the keyboard. Otherwise, it won't show up.
