import React, {Component, Children} from 'react';
import { View } from 'react-native';

class StaticView extends Component {
  shouldComponentUpdate = ({shouldUpdate})=>!!shouldUpdate;
  render = ()=>this.props.children ? Children.only(this.props.children) : null
}

module.exports = class Absolute extends Component {
  constructor( props ) {
    super( props );
    this.state = { views:{} }
    this._uid = 0;
    GLOBAL.Absolute = this;
}

  add( view, z = 0 ) {
    let {views} = this.state, id = '@absolute_' + ( this._uid++ );
    this.setState({views:Object.assign(views, {[id]:{view,z}})});
    return { id, destroy:cb=>delete views[id] && this.setState({views},cb)}; 
  }

  render(){
    return (
      <View style={[{position:'relative', flex:1}, this.props.style]}>
        <StaticView shouldUpdate={false} children={this.props.children}/>
        {Object.keys(this.state.views).sort(( k1, k2 )=>{
          let {views} = this.state, z1 = views[k1].z, z2 = views[k2].z;
          return z1 == z2 ? k1.localeCompare( k2 ) : z1 - z2;
        }).map(k=>
          <StaticView shouldUpdate={false} key={k} children={this.state.views[k].view} />
        )}
      </View>
    )
  }
}