import React from "react";
import { StyleSheet, Text, View, Image,Pressable,TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native'; // 导入 useNavigation 钩子

import img0 from '../../src/img/img_book_fashinopolis.png';
import img1 from '../../src/img/img_book_chanel.png';
import img2 from '../../src/img/img_book_calligraphy.png';
import img3 from '../../src/img/img_book_ysl.png';
import img4 from '../../src/img/img_book_tbos.png';
import img5 from '../../src/img/img_book_stitchedup.png';

const images = [img0, img1, img2, img3, img4, img5];
const AlbumDetail = ({album}) => {
  const navigation = useNavigation(); // 获取导航对象

  const handlePress = () => {
    navigation.navigate("Detail", album); // 导航到详情页面，并传递参数 album//為甚麼不用大括號
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.book1}>
        <View style={styles.imageContainer}>
          <Image
            source={images[album.id]}
            style={{ width: 140, height: 200 ,marginTop:10}}
          />
        </View>
        <View>
          <Text style={styles.bookname}>{album.title}</Text>
          <Text style={styles.author}>{album.artist}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  book1: {
        height:256,
        width:140,
        
        elevation: 1,
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-around",
        marginLeft:16
  },
  bookname:{
    fontSize:16,
    fontWeight:'700',
    fontFamily:'Roboto_500Medium'
  },
  author:{
    fontSize:12,
    fontWeight:'500',
    color:"#666666",
    opacity:50,
    fontFamily:'Roboto_500Medium'
  },
});

export default AlbumDetail;