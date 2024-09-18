import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CATEGORIES = [
  { id: '1', title: 'Món Ý', imageUrl: 'https://example.com/pasta.jpg' },
  { id: '2', title: 'Món Nhật', imageUrl: 'https://example.com/sushi.jpg' },
  // Thêm danh mục khác
];

const CategoriesScreen = () => {
  const navigation = useNavigation();

  const renderCategoryItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          navigation.navigate('Meals', { categoryId: itemData.item.id });
        }}
      >
        <View>
          <Image source={{ uri: itemData.item.imageUrl }} style={styles.image} />
          <Text style={styles.title}>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  image: {
    width: '100%',
    height: '80%',
  },
  title: {
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default CategoriesScreen;
