import React from "react";
import { View } from "react-native";
import AlbumList from "../components/AlbumList";
import book from "../json/book1.json";

const AlbumScreen = () => {
  return (
    <View style={{ flex:1 }}>
      <AlbumList list={book}/>
    </View>
  );
};

export default AlbumScreen;
