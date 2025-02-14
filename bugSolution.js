This solution uses a `try...catch` block to handle the potential error during image loading.  A placeholder image is displayed if an error occurs.  This provides visual feedback to the user and makes debugging significantly easier.

```javascript
import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const PlaceholderImage = require('./placeholder.png'); // Placeholder image

export default function App() {
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [error, setError] = React.useState(null);

  const handleError = (e) => {
    console.error('Image load error:', e);
    setError(e);
    setImageLoaded(true);
  };

  const handleLoad = () => {
    setImageLoaded(true);
  };

  const imageUri = 'https://example.com/image.png'; // Replace with your image URI

  return (
    <View style={styles.container}>
      {error ? (
        <Image source={PlaceholderImage} style={styles.image} /> //Fallback Image
      ) : (
        <Image
          source={{ uri: imageUri }}
          style={styles.image}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
      {imageLoaded && !error && <Text>Image Loaded!</Text>}
      {imageLoaded && error && <Text>Image Load Failed!</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});
```