import React, { Component } from 'react'
import {View,Text,FlatList,Image,TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {opretion,selectors} from '../../redux/home';
import add from '../../assets/icon/add.png';
 class Menu extends Component {

  
  constructor(props){
    super(props)
this.state={
  product:[]
}
  }

  componentDidMount(){
   
    this.Menu();
  }


Menu=async()=>{
  await this.props.UserMenu();
    const  res = await this.props.isMenu
   
    const {payload} = res;
    const {menu,success} =payload
    if(success){
this.setState({product:menu})
    }
}
renderitem=({item})=>(
  <View style={{flex:1,flexDirection:'row',backgroundColor:'#fff',margin:10,borderRadius:10}}>
    <Image source={{uri:item.productImage}} style={{width:170,height:120,borderTopLeftRadius:10,borderBottomLeftRadius:10}}/>
    <View style={{flex:1}}>
    <Text>{item.productId}</Text>
    <Text>{item.productName}</Text>
    </View>
  </View>
)
  render() {

    const {product} =this.state
   
    return (
      <View style={{flex:1}}>
        <FlatList
        data={product}
        renderItem={this.renderitem}
        keyExtractor={(index)=>index.id}
      />  
      <View style={{borderRadius:40,flex:1,marginBottom:20,position:'absolute',right:0,bottom:0,marginRight:20}}>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('AddMenu')}>
                  <Image source={add} style={{width:70,height:70}}/>
                  </TouchableOpacity>

        </View>    
      </View>
    )
  }
}

const mapStateToPropse=state=>({

 
  isMenu:selectors.isMenu(state),
})


const mapDispatchToProps={

  UserMenu:opretion.UserMenu

}
export default connect(mapStateToPropse,mapDispatchToProps)(Menu);