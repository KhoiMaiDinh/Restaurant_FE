import {useEffect, useState} from 'react';
import {StyleSheet, View, SafeAreaView, FlatList} from 'react-native';
import {CUSTOM_COLOR} from '../../../constants/color';
import scale from '../../../utils/responsive';
import ImageTab from './components/imageTab';
import SkeletonMenu from './components/skeletonMenu';
import categoryApi from '../../../services/categoryApi';

const MenuScreen = props => {
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const getCategory = async () => {
    try {
      const {categories} = await categoryApi.getAll();
      setCategoryData(categories);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerBar} />
      {loading ? (
        <SkeletonMenu />
      ) : (
        <FlatList
          style={styles.scrollView}
          contentContainerStyle={{alignContent: 'space-around'}}
          horizontal={false}
          data={categoryData}
          keyExtractor={data => data._id}
          numColumns={2}
          columnWrapperStyle={styles.wrapper}
          renderItem={({item}) => (
            <View style={styles.view1}>
              <ImageTab
                source={{uri: `${item.image}`}}
                text={item.name}
                {...props}
                categoryData={item}
              />
              <View style={{height: 20}} />
            </View>
          )}></FlatList>
      )}
    </SafeAreaView>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.White,
  },
  scrollView: {
    flex: 1,
  },
  view1: {
    left: scale(20),
    flex: 0.5,
  },
  wrapper: {
    marginBottom: scale(5),
  },
});
