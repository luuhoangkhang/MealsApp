import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const MealsScreen = () => {
  const route = useRoute();
  const { categoryId } = route.params;

  return (
    <View style={styles.screen}>
      <Text>Món ăn trong danh mục: {categoryId}</Text>
      {/* Hiển thị danh sách món ăn dựa trên categoryId */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealsScreen;
