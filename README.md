# react-native-absolute
React native Global Absolute View.
Inspired react-native-root-sibling.

## Install
`
npm install react-native-absolute --save
`

Add wrapping absoulte App.js at render ( or regestered by AppRegistry Object renderer ).

```
import Absolute from 'react-native-absolute'; // import absolute.

class App extends Component<Props> {
  ...
  render(){
    return (
      <Absolute>
        ...
      </Absolute>
    )
  }
}
```

Rendering Absolute makes Global.Absolute to using globally.
 

## Basic Usage

- Create absolute view.

```
let ref = Absolute.add( 
  <View style={{position:'absolute', top:0, left:0, right:0, bottom:0}}>
    {...}		
  </View>
);
```


- Destroy absolute view.

```
ref.destroy();
```

All it does.
