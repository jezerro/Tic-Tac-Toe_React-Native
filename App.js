import React, { Component } from 'react'

import {
  TouchableOpacity,
  Text,
  View,
} from 'react-native'


class App extends Component {
    
  state = {
    touch: 'auto',
    win: 0,
    lose: 0,
    values: ['', '', '', '', '', '', '', '', '']
  }    
    
  onPress = (index, state) => {	  
  console.log('does not work');
    if(state.values[index] == ''){

      var newArray = [...state.values]
      newArray.splice(index, 1, 'X')

      var slots = []

      for(var i = 0; i < 9; i++){
        
        if(newArray[i] == ''){
          slots.push(i)
        }

      }

      var slot = slots[Math.floor(Math.random() * slots.length)]

      newArray.splice(slot, 1, 'O')
      this.setState({values: newArray})
      
      var result = null

      if(newArray[0] != '' && newArray[0] == newArray[1] && newArray[0] == newArray[2]){
        result = newArray[0]
      }else if(newArray[3] != '' && newArray[3] == newArray[4] && newArray[3] == newArray[5]){
        result = newArray[3]
      }else if(newArray[6] != '' && newArray[6] == newArray[7] && newArray[6] == newArray[8]){
        result = newArray[6]
      }else if(newArray[0] != '' && newArray[0] == newArray[3] && newArray[0] == newArray[6]){
        result = newArray[0]
      }else if(newArray[1] != '' && newArray[1] == newArray[4] && newArray[1] == newArray[7]){
        result = newArray[1]
      }else if(newArray[2] != '' && newArray[2] == newArray[5] && newArray[2] == newArray[8]){
        result = newArray[2]
      }else if(newArray[0] != '' && newArray[0] == newArray[4] && newArray[0] == newArray[8]){
        result = newArray[0]
      }else if(newArray[6] != '' && newArray[6] == newArray[4] && newArray[6] == newArray[2]){
        result = newArray[6]
      }else if(newArray[0] != '' && newArray[1] != '' && newArray[2] != '' && newArray[3] != '' && newArray[4] != '' && newArray[5] != '' && newArray[6] != '' && newArray[7] != '' && newArray[8] != ''){
        result = 'square'
      }
  
      if(result != null){
        
        this.setState({touch: 'none'})

        if(result == 'X'){
          this.setState({win: this.state.win + 1})
        }else{
          this.setState({lose: this.state.lose + 1})
        }
    
      }

    }

  }
    
  reset = () => {        
    this.setState({values: ['', '', '', '', '', '', '', '', ''], touch: 'auto'})  
  }


  render() {
	 
    return (	
	
		  <View style={{flex: 1, flexDirection: 'column'}}>
	
        <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'powderblue'}}>	  
          <Text style={{alignSelf: 'center', paddingTop: 80, fontSize: 25}}>Victories: {this.state.win} {"\n"} Defeats: {this.state.lose}</Text>	  
        </View>
        
        <View style={{flex: 2, flexDirection: 'column', backgroundColor: 'skyblue', borderWidth: 3}}>
        
          <View id='1' style={{flex: 1, flexDirection: 'row', paddingRight: '15%', paddingLeft: '15%', marginTop: '15%'}}>
            <TouchableOpacity pointerEvents={this.state.touch} style={{backgroundColor: '#DDDDDD', width: '30%', marginRight: '5%', borderWidth: 2}}><Text style={{fontSize: 60, textAlign: 'center'}} onPress={() => this.onPress(0, this.state)}>{this.state.values[0]}</Text></TouchableOpacity>
            <TouchableOpacity pointerEvents={this.state.touch} style={{backgroundColor: '#DDDDDD', width: '30%', marginRight: '5%', borderWidth: 2}}><Text style={{fontSize: 60, textAlign: 'center'}} onPress={() => this.onPress(1, this.state)}>{this.state.values[1]}</Text></TouchableOpacity>
            <TouchableOpacity pointerEvents={this.state.touch} style={{backgroundColor: '#DDDDDD', width: '30%', marginRight: '5%', borderWidth: 2}}><Text style={{fontSize: 60, textAlign: 'center'}} onPress={() => this.onPress(2, this.state)}>{this.state.values[2]}</Text></TouchableOpacity>
          </View>
          
          <View id='2' style={{flex: 1, flexDirection: 'row', paddingRight: '15%', paddingLeft: '15%', paddingTop: '5%', paddingBottom: '5%'}}>
            <TouchableOpacity pointerEvents={this.state.touch} style={{backgroundColor: '#DDDDDD', width: '30%', marginRight: '5%', borderWidth: 2}}><Text style={{fontSize: 60, textAlign: 'center'}} onPress={() => this.onPress(3, this.state)}>{this.state.values[3]}</Text></TouchableOpacity>
            <TouchableOpacity pointerEvents={this.state.touch} style={{backgroundColor: '#DDDDDD', width: '30%', marginRight: '5%', borderWidth: 2}}><Text style={{fontSize: 60, textAlign: 'center'}} onPress={() => this.onPress(4, this.state)}>{this.state.values[4]}</Text></TouchableOpacity>
            <TouchableOpacity pointerEvents={this.state.touch} style={{backgroundColor: '#DDDDDD', width: '30%', marginRight: '5%', borderWidth: 2}}><Text style={{fontSize: 60, textAlign: 'center'}} onPress={() => this.onPress(5, this.state)}>{this.state.values[5]}</Text></TouchableOpacity>
          </View>
          
          <View id='2' style={{flex: 1, flexDirection: 'row', paddingRight: '15%', paddingLeft: '15%', marginBottom: '15%'}}>
            <TouchableOpacity pointerEvents={this.state.touch} style={{backgroundColor: '#DDDDDD', width: '30%', marginRight: '5%', borderWidth: 2}}><Text style={{fontSize: 60, textAlign: 'center'}} onPress={() => this.onPress(6, this.state)}>{this.state.values[6]}</Text></TouchableOpacity>
            <TouchableOpacity pointerEvents={this.state.touch} style={{backgroundColor: '#DDDDDD', width: '30%', marginRight: '5%', borderWidth: 2}}><Text style={{fontSize: 60, textAlign: 'center'}} onPress={() => this.onPress(7, this.state)}>{this.state.values[7]}</Text></TouchableOpacity>
            <TouchableOpacity pointerEvents={this.state.touch} style={{backgroundColor: '#DDDDDD', width: '30%', marginRight: '5%', borderWidth: 2}}><Text style={{fontSize: 60, textAlign: 'center'}} onPress={() => this.onPress(8, this.state)}>{this.state.values[8]}</Text></TouchableOpacity>
          </View>
          
        </View>        
        
        <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'steelblue'}}>
          <TouchableOpacity style={{alignSelf: 'center', backgroundColor: '#DDDDDD', width: '50%', height: '20%', marginTop: '20%', borderRadius:30, borderWidth:2}} onPress={this.reset}><Text style={{alignSelf: 'center', marginTop: '5%', fontSize: 15}}>Reset</Text></TouchableOpacity>
        </View>
		
		  </View>
        
    )
	
  }
  
}

export default App;