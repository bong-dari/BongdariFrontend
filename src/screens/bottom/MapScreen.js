import React, { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import NaverMapView, {
  Circle,
  Marker,
  Path,
  Polyline,
  Polygon,
} from 'react-native-nmap';
import Geolocation from 'react-native-geolocation-service';

const MapScreen = () => {
  // 최초 위치는 async storage에 현재위치가 담겨 있으면 해당 위치를, 없다면 강남구를 할당
  const [location, setLocation] = useState({
    // 강남구 위도, 경도
    latitude: 37.4959854,
    longitude: 127.0664091,
  });

  const [text, onChangeText] = useState('장소를 입력하세요');

  // 현재 위치를 받아오는 함수
  // const getcurrentLocation = () => {
  //   Geolocation.getCurrentPosition(
  //     position => {
  //       const { latitude, longitude } = position.coords;
  //       setLocation({
  //         latitude,
  //         longitude,
  //       });
  //     },
  //     error => {
  //       console.log(error.code, error.message);
  //     },
  //     { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
  //   );
  // };

  // useEffect(() => {
  //   getcurrentLocation();
  // }, []);

  console.log(location);

  return (
    <View style={styles.container}>
      <NaverMapView
        style={styles.container}
        center={{ ...location, zoom: 16 }}
        onTouch={e => console.warn('onTouch', JSON.stringify(e.nativeEvent))}
        onCameraChange={e => console.warn('onCameraChange', JSON.stringify(e))}
        onMapClick={e => console.warn('onMapClick', JSON.stringify(e))}>
        <Marker
          coordinate={location}
          onClick={() => console.warn('onClick! p0')}
        />
      </NaverMapView>
      <TextInput
        style={styles.searchBar}
        onChangeText={onChangeText}
        value={text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },

  searchBar: {
    position: 'absolute',
    top: 20,
    left: '10%',
    width: '80%',
    height: 40,
    paddingLeft: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#cccccc',
  },
});

export default MapScreen;
