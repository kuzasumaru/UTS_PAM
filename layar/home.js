import React from "react";
import { StyleSheet, Text, View ,Alert, Button, SafeAreaView, Picker} from "react-native";
import Icon from 'react-native-vector-icons/ionicons';
import { TextInput, TouchableOpacity } from "react-native-web";
//import DatePicker from 'react-native-date-picker';

const home =(props)=> {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  const [pelabuhan_awal,setpelabuhan_awal] = React.useState()
  const [pelabuhan_tujuan,setpelabuhan_tujuan] = React.useState()
  const [kelas_layanan,setkelas_layanan] = React.useState()
  const [jumlah_penumpang,setjumlah_penumpang] = React.useState()
  const [jam_masuk,setjam_masuk] = React.useState()


    return(
      <SafeAreaView style={styles.background}>
        <View style={styles.box}>
          <Text style={styles.Text}>
            KapalReza
          </Text>

          <Text style={styles.Text2}>
            Pelabuhan Awal
          </Text>

          <View style={styles.input}>
            <Icon name={'boat-outline'}  size={28}/>

          <Picker style={styles.TextInput}
            selectedValue={pelabuhan_awal}
            onValueChange={(itemValue, itemIndex) =>
            setpelabuhan_awal(itemValue)}>
            <Picker.Item label="Pilih Pelabuhan Awal" value=""/>
            <Picker.Item label="Pelabuhan Bakauheni" value="Pelabuhan Bakauheni"/>
            <Picker.Item label="Pelabuhan Merak" value="Pelabuhan Merak"/>
          </Picker>
          </View>

          <Text style={styles.Text2}>
            Pelabuhan Tujuan
          </Text>

          <View style={styles.input}>
            <Icon name={'boat-outline'}  size={28}/>
            
          <Picker style={styles.TextInput}
            selectedValue={pelabuhan_tujuan}
            onValueChange={(itemValue, itemIndex) =>
            setpelabuhan_tujuan(itemValue)}>
            <Picker.Item label="Pilih Pelabuhan Tujuan" value=""/>
            <Picker.Item label="Pelabuhan Bakauheni" value="Pelabuhan Bakauheni"/>
            <Picker.Item label="Pelabuhan Merak" value="Pelabuhan Merak"/>
          </Picker> 
          </View>

          <Text style={styles.Text2}>
            Kelas Pelayanan
          </Text>
          <View style={styles.input}>
            <Icon name={'man-outline'}  size={28}/>
            
          <Picker style={styles.TextInput}
            selectedValue={kelas_layanan}
            onValueChange={(itemValue, itemIndex) =>
            setkelas_layanan(itemValue)}>
            <Picker.Item label="Pilih Kelas Layanan" value=""/>
            <Picker.Item label="Layanan Normal" value="Layanan Normal"/>
            <Picker.Item label="Layanan Express" value="Layanan Express"/>
          </Picker>
          </View>

          <Text style={styles.Text2}>
            Tanggal masuk Pelabuhan
          </Text>
          <View style={styles.input}>
            <Icon name={'calendar-outline'}  size={28}/>
            <TextInput style={styles.TextInput} placeholder="Pilih Tanggal masuk Pelabuhan" />

          </View>

          <Text style={styles.Text2}>
            Jam masuk Pelabuhan 
          </Text>
          <View style={styles.input}>
            <Icon name={'time-outline'}  size={28}/>
            
          <Picker 
            style={styles.TextInput}
            selectedValue={jam_masuk}
            onValueChange={(itemValue, itemIndex) =>
            setjam_masuk(itemValue)}>
            <Picker.Item label="Input Jam Masuk" value=""/>
            <Picker.Item label="07.00" value="07.00"/>
            <Picker.Item label="09.00" value="09.00"/>
            <Picker.Item label="11.00" value="11.00"/>
            <Picker.Item label="13.00" value="13.00"/>
            <Picker.Item label="15.00" value="15.00"/>
            <Picker.Item label="17.00" value="17.00"/>
          </Picker>
          </View>

          <Text style={styles.Text2}>
            Masukkan Jumlah Penumpang 
          </Text>
          <View style={styles.input}>
            <Icon name={'add'}  size={28}/>
            
          <Picker 
            style={styles.TextInput}
            selectedValue={jumlah_penumpang}
            onValueChange={(itemValue, itemIndex) =>
            setjumlah_penumpang(itemValue)}>
            <Picker.Item label="Input Jumlah Penumpang" value=""/>
            <Picker.Item label="1" value="1"/>
            <Picker.Item label="2" value="2"/>
            <Picker.Item label="3" value="3"/>
            <Picker.Item label="4" value="4"/>
            <Picker.Item label="5" value="5"/>
          </Picker>
          </View>

         

          <TouchableOpacity style={styles.tombol} onPress={() => props.navigation.push('Buat')} >
            <Icon name={'search'}  size={28} color={'white'} />
            <Text style={styles.BuatTiket}>
              Buat Tiket
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );

};

const styles = StyleSheet.create({
  background : {
    backgroundColor: "#66ff99",
    flex : 1,
    alignItems:"center",
  },
  box:{
    marginTop : 70,
    width :300,
    alignItems : "center",
    backgroundColor :"white",
    paddingVertical : 20,
    paddingHorizontal : 18,
    borderRadius : 5,
    shadowOpacity : 1,
    shadowRadius : 5
  },
  Text : {
    color: "#00579c",
    marginTop:"70",
    fontWeight :"bold",
    fontSize : 40,
    marginBottom : 50,
  },
  input :{
    flexDirection : "row",
    height : 30,
    width : 270,
    marginTop : 10
  },
  Text2 :{
    alignSelf :'flex-start',
  },
  TextInput :{
    borderWidth :1,
    height : 30,
    marginLeft : 10,
    width : 250,
    borderRadius : 5,
    backgroundColor :"#eff4f4",
    paddingLeft: 15,
    
  },
  usia:{
    fontSize : 15,
    fontWeight :"bold",
    
  },
  TextUsia :{
    height : 30,
    width : 280,
    borderRadius : 5,
    backgroundColor :"#eff4f4",
    marginTop :20,
    alignItems : "center",
    fontWeight : 'bold'
  },
  tombol :{
    backgroundColor :"#66ccff",
    height : 45,
    width : 200,
    borderRadius :5,
    marginTop :20,
    flexDirection: 'row',
    alignItems : 'center',
    paddingHorizontal : 10
  },
  BuatTiket :{
    color : 'white',
    fontSize : 20,
    marginLeft : 20,
    fontWeight : 'bold',
  }
})

export default home;