import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Button,
} from 'react-native';
import {Device, State} from 'react-native-ble-plx';
import {Header, ListItem, ThemeProvider} from 'react-native-elements';
import {BleManager} from 'react-native-ble-plx';
import RNFetchBlob from 'react-native-fetch-blob';

const App = () => {
  const [bleState, setBleState] = useState(State.Unknown);
  const [error, setError] = useState<any>('-');
  const [devices, setDevices] = useState<Device[]>([]);
  const bleManager = new BleManager();

  const StopScanHandler = () => {
    console.log('StopScanHandler');
    bleManager.stopDeviceScan();

    setTimeout(() => {
      const headerString = 'timestamp,id,name,rssi\n';
      const rowString = devices
        .map((d) => `${d.timestamp},${d.id},${d.name},${d.rssi}\n`)
        .join('');
      console.log('rowString\n', rowString);
      const csvString = `${headerString}${rowString}`;

      // write the current list of answers to a local csv file
      const pathToWrite = `${RNFetchBlob.fs.dirs.DownloadDir}/ime_liste.csv`;
      console.log('pathToWrite', pathToWrite);
      // pathToWrite /storage/emulated/0/Download/data.csv
      RNFetchBlob.fs
        .writeFile(pathToWrite, csvString, 'utf8')
        .then(() => {
          console.log(`wrote file ${pathToWrite}`);
          // wrote file /storage/emulated/0/Download/data.csv
        })
        .catch((error) => console.error(error));
    }, 100);
  };

  const StartScanHandler = () => {
    console.log('StartScanHandler');
    bleManager.startDeviceScan(
      null,
      null,
      (error, device) => {
        if (error) {
          console.log(error);
          return;
        }
        if (device.name == 'BlueUp-02-033734') {
          console.log('device:', device.id, device.name, device.rssi);

          let device_temp = {
            timestamp: new Date().getTime(),
            id: device.id,
            name: device.name,
            rssi: device.rssi,
          };

          devices.push(device_temp);
          setDevices(devices);
        } else if (device.name == 'BlueUp-02-033735') {
          let device_temp = {
            timestamp: new Date().getTime(),
            id: device.id,
            name: device.name,
            rssi: device.rssi,
          };

          devices.push(device_temp);
          setDevices(devices);
        } else if (device.name == 'BlueUp-02-033736') {
          let device_temp = {
            timestamp: new Date().getTime(),
            id: device.id,
            name: device.name,
            rssi: device.rssi,
          };

          devices.push(device_temp);
          setDevices(devices);
        } else if (device.name == 'BlueUp-02-033737') {
          let device_temp = {
            timestamp: new Date().getTime(),
            id: device.id,
            name: device.name,
            rssi: device.rssi,
          };

          devices.push(device_temp);
          setDevices(devices);
        } else if (device.name == 'BlueUp-02-033738') {
          let device_temp = {
            timestamp: new Date().getTime(),
            id: device.id,
            name: device.name,
            rssi: device.rssi,
          };

          devices.push(device_temp);
          setDevices(devices);
        } else if (device.name == 'BlueUp-02-033739') {
          let device_temp = {
            timestamp: new Date().getTime(),
            id: device.id,
            name: device.name,
            rssi: device.rssi,
          };

          devices.push(device_temp);
          setDevices(devices);
        } else if (device.name == 'BlueUp-02-033740') {
          let device_temp = {
            timestamp: new Date().getTime(),
            id: device.id,
            name: device.name,
            rssi: device.rssi,
          };

          devices.push(device_temp);
          setDevices(devices);
        } 
         else if (device.name == 'BlueUp-02-033741') {
          let device_temp = {
            timestamp: new Date().getTime(),
            id: device.id,
            name: device.name,
            rssi: device.rssi,
          };

          devices.push(device_temp);
          setDevices(devices);
        } else if (device.name == 'BlueUp-02-033742') {
          let device_temp = {
            timestamp: new Date().getTime(),
            id: device.id,
            name: device.name,
            rssi: device.rssi,
          };

          devices.push(device_temp);
          setDevices(devices);
        } else if (device.name == 'BlueUp-02-033743') {
          let device_temp = {
            timestamp: new Date().getTime(),
            id: device.id,
            name: device.name,
            rssi: device.rssi,
          };

          devices.push(device_temp);
          setDevices(devices);
        }
      },
    );
  };

  return (
    <ThemeProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Header
          centerComponent={{text: 'BLE Scanner', style: {color: '#fff'}}}
          leftComponent={<Button title="Start" onPress={StartScanHandler} />}
          rightComponent={<Button title="Stop" onPress={StopScanHandler} />}
        />
        <View style={styles.statusPanel}>
          {/* <ListItem title={'BLE Status'} subtitle={bleState} bottomDivider /> */}
          {/* <ListItem title={'Last Error'} subtitle={error} bottomDivider /> */}
        </View>
        <View style={styles.list}>
          <FlatList
            style={styles.list}
            data={devices}
            renderItem={({item, index}) => (
              <ListItem
                key={index}
                title={item.id || ''}
                subtitle={`RSSI: ${item.rssi}`}
                bottomDivider
              />
            )}
            keyExtractor={(_, index) => index.toString()}
          />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusPanel: {
    flex: 0,
    marginBottom: 15,
  },
  list: {
    flex: 1,
  },
});

export default App;
