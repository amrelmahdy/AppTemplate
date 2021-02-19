import React, { Component } from 'react';
import {
  View, Image, TouchableHighlight, Text, TouchableOpacity
} from 'react-native';
import styles from './Home.Styles'
import { ImageSlider } from './../../Components'

const images = [
  'https://placeimg.com/640/640/nature',
  'https://placeimg.com/640/640/people',
  'https://placeimg.com/640/640/animals',
  'https://placeimg.com/640/640/beer',
];


class HomeScreen extends Component {

  constructor(props) {
    super(props)
  }


  render() {


    return (
      <View style={{ height: 150, position: 'relative', justifyContent: "center" }}>
        <ImageSlider
          autoPlayFlag={true}
          autoPlayWithInterval={3000}
          loopBothSides={true}
          images={images}
          customSlide={({ index, item, style, width }) => (
            // It's important to put style here because it's got offset inside
            <TouchableOpacity
              style={[
                style,
                styles.customSlide,
              ]}
              key={index} onPress={() => { }}
            >
              <Image source={{ uri: item }} style={{ width: width, height: 150 }} />
            </TouchableOpacity>
          )}
          customButtons={(position, move) => (
            <View style={styles.buttons}>
              {images && images.length > 1 ? images.map((image, index) => {
                return (
                  <TouchableHighlight
                    key={index}
                    underlayColor="#ccc"
                    onPress={() => move(index)}
                    style={styles.button}
                  >
                    <Text style={position === index && styles.buttonSelected}>
                      {/*{index + 1}*/}
                    </Text>
                  </TouchableHighlight>
                );
              }) : null}
            </View>
          )}
        />
      </View>

    );
  }

};



export default HomeScreen
