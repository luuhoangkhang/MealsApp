React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Danh mục món ăn',
    });
  }, [navigation]);
  
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => alert('Yêu thích!')} title="Yêu thích" />
      ),
    });
  }, [navigation]);
  