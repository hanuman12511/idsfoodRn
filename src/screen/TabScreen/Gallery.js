import React, { Component } from 'react'
import {View,Text,FlatList,Image,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {opretion,selectors} from '../../redux/home';

import add from '../../assets/icon/add.png';
 class Gallery extends Component {

  
  constructor(props){
    super(props)
    this.state={
      post:''
    }

  }

  componentDidMount(){
   
    this.Gallery();
   
  }

  Gallery=async ()=>{
   await this.props.UserGallery();
      const  res = await this.props.isGallery
      const {payload} = res
      const {posts} =payload
      this.setState({post:posts})
  }
  renderitem=({item})=>(
    <View style={{flex:1,flexDirection:'row',backgroundColor:'#fff',margin:10,borderRadius:10}}>
      <Image source={{uri:item.singleMediaImage}} style={{width:170,height:120,borderTopLeftRadius:10,borderBottomLeftRadius:10}}/>
      <Text>{item.description}</Text>
    </View>
  )
  render() {
    const{post} =this.state
    console.log('====================================');
    console.log("post",post);
    console.log('====================================');
    return (
      <View style={{flex:1}}>
       
        <FlatList
        data={post}
        renderItem={this.renderitem}
        keyExtractor={(index)=>index.id}/>
         <View style={{borderRadius:40,flex:1,marginBottom:20,position:'absolute',right:0,bottom:0,marginRight:20}}>
         <TouchableOpacity onPress={()=>this.props.navigation.navigate('AddGallery')}>
                  <Image source={add} style={{width:70,height:70}}/>
                  </TouchableOpacity>
        </View>   
      </View>
    )
  }
}

const mapStateToPropse=state=>({
 isGallery:selectors.isGallery(state),
})


const mapDispatchToProps={

  UserGallery:opretion.UserGallery,

}
export default connect(mapStateToPropse,mapDispatchToProps)(Gallery);