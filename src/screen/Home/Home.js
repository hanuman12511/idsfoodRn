import React, { Component } from 'react'
import {View,Text,ImageBackground,Image,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {opretion,selectors} from '../../redux/home';
import Gallery from '../TabScreen/Gallery';
import Menu from '../TabScreen/Menu';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
 class Home extends Component {

  constructor(props){
    super(props)
 this.state={
  profile:''
 }
  }

  componentDidMount(){
    this.Profile();
   
  }

  Profile=async()=>{

    await this.props.UserProfile();
    const  res = await this.props.isProfile
   
    const{payload} =res
    const {vendorProfile} = payload
    this.setState({profile:vendorProfile})
   
}


render() {

  const {profile} =this.state
  console.log('====================================');
  console.log("profile===",profile);
  console.log('====================================');
    return (
      <View style={{flex:1}}>
      <View style={{flex:1}}>
<ImageBackground source={{uri:profile.backgroundImage}} style={{flex:1,justifyContent:'center'}} resizeMode='cover'>
 <View style={{flex:1,position:'absolute',left:0,right:0,bottom:-35,alignItems:'center',elevation:100,zIndex:100}}>
<Image source={{uri:profile.vendorImage}}style={{width:70,height:70,borderRadius:50,borderColor:'#fff',borderWidth:2,}}/>
 </View>
 
</ImageBackground>
<View style={{flex:2,padding:20,backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}>
  <View style={{flex:1,marginTop:20,alignItems:'center',}}>
  <Text style={{fontSize:20}}>
{ profile.name}
  </Text>
  <Text style={{marginBottom:10}}>
{ profile.vendorAddress}
  </Text>
  </View>
  <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',}}>
  <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
  <Text>
Likes
  </Text>
  <Text>
{ profile.totalLikes}
  </Text>
  </View>
  <View style={{width:1,backgroundColor:'black',height:'100%'}}/>
  <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
  <Text>
Followers
  </Text>
  <Text>
{ profile.totalFollowers}
  </Text>
  </View>
  <View style={{width:1,backgroundColor:'black',height:'100%'}}/>
  <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
  <Text>
Rating
  </Text>
  <Text>
{ profile.ratingCount}
  </Text>
  </View>
  </View>
  <View style={{flex:1,width:'100%',justifyContent:'center',marginTop:10}}>
    <TouchableOpacity style={{backgroundColor:'red',marginLeft:0,marginRight:0,width:'100%',alignItems:'center',padding:10,borderRadius:20,}}>
      <Text style={{color:'#fff'}}>Edit Profile</Text>
    </TouchableOpacity>
    </View>
</View>
      </View>
      <Tab.Navigator>
        <Tab.Screen name = "gallery" component={Gallery} />
        <Tab.Screen name = "menu" component={Menu}/>
      </Tab.Navigator>
      </View>
    )
  }
}



const mapStateToPropse=state=>({

  isProfile:selectors.isProfile(state),
 
})


const mapDispatchToProps={

  UserProfile:opretion.UserProfile,


}
export default connect(mapStateToPropse,mapDispatchToProps)(Home);