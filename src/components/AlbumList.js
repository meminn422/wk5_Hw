import React from "react";
import { FlatList, Text , StyleSheet ,SectionList } from "react-native";
import AlbumDetail from "./AlbumDetail";

const AlbumList = ({list}) => {
  const renderSection=({section})=>{
    return(
      <>
      <Text style={styles.title}>{section.title}</Text>
      <FlatList
        horizontal={true}
        data={section.data} // 将 data 属性设置为包含书籍数据的数组
        renderItem={({item}) => <AlbumDetail album={item} />}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
      />
    </>
    );
  };

  const render = () => null;

  return(
    <SectionList
      sections={list}
      contentContainerStyle={{ paddingHorizontal: 10 }}
      stickySectionHeadersEnabled={false}
      showsHorizontalScrollIndicator={false}
      renderSectionHeader={renderSection}
      renderItem={render}
      keyExtractor={item => item.title}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "Roboto",
    fontSize: 24,
    fontWeight: "bold",
    paddingLeft: 10,
    marginTop:10,
  }
})

export default AlbumList;