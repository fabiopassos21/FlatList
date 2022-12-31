import React,{Component} from 'react';
import {Text,View,StyleSheet} from 'react-native';


class Pessoas extends Component{
  
    render (){
        return (
          <View style = {styles.areaPessoas}>
          <Text>Ola po </Text>
<Text style = {styles.textoPessoa}>Nome: {this.props.data.nome}</Text>
<Text style = {styles.textoPessoa}>Idade: {this.props.data.idade}</Text>
<Text style = {styles.textoPessoa}>Email: {this.props.data.email}</Text>

          </View>
        );
    }
}
const styles = StyleSheet.create({
    areaPessoa:{
        backgroundColor: '#222',
        height: 200,
        marginBottom: 15
      },
      textoPessoa:{
        color: 'blue',
        fontSize: 20,
      },
  
}
);
export default Pessoas;