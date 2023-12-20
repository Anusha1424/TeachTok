import React,{useEffect,useState} from 'react';
import { Dimensions, FlatList, Text, View,ImageBackground } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { getItem } from '../actions/user'
import TopBar from '../components/TopBar';
import Question from '../components/Question';
import Option from '../components/Option';
import Description from '../components/Description';
import Bottom from '../components/Bottom';
import Options from '../components/Options';
import SideIcons from '../components/SideIcons';

const HomeScreen = () => {
  const [data, setData] = React.useState<any>([]);

  console.log(data.length);

  const dispatch = useDispatch()
  const item = useSelector((state:any) => state.users.users)

  


//   console.log(item);
  useEffect(() => {
    
      dispatch(getItem([]));
    }, [dispatch])
useEffect(()=>{
   if(item?.id){
        setData([...data,{...item}])
   }
},[item])

  const fetchMoreData = () => {
    dispatch(getItem([]));
   
  };
  if(data.length > 0) {

  
  return (
    <>
   
    <FlatList
      data={data}
      renderItem={({ item, index }) => (
        <RenderItem
          item={item}
          index={index}
         
        />
      )}
      keyExtractor={(item) => item.id}
      pagingEnabled
      snapToInterval={Dimensions.get('window').height}
      decelerationRate="normal"
      showsVerticalScrollIndicator={false}
      onEndReached={fetchMoreData}
      onEndReachedThreshold={0.1}
    />
    </>
  );
}
return <></>
};

const RenderItem = ({ item, index,time } : any) => {
  return (
    <View
      style={{
        height: Dimensions.get('window').height,
      }}
    >
        
        <ImageBackground
        source={{uri:item.image}} style={{flex:1}}>
            <View style={{flex:1,padding:8}}>
            
             <View style={{flex:1,flexDirection:"row"}}>
                <View style={{flex:1,flexDirection:"column"}}>
                <Question question={item.question}/>
                    <View style={{flex:1}}>
                        <Options options={item?.options} id={item.id} />
                    
                    </View>
                    <Description name={item.user.name} description={item.description}/>
                </View>
                <View style={{justifyContent:"flex-end"}}>
                    <SideIcons/>
                </View>
             </View>
             
             </View>
             <View style={{height:110}}>
             <Bottom playlist={item.playlist}/>
             </View>
             
            </ImageBackground>
    </View>
  );
};

export default HomeScreen;
