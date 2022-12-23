import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import Logo from '../../../assets/logo.png';
import { loadTop } from '../../../services/carregaDados';

class Top extends React.Component {
  state = {
    top: {
      welcome: '',
      legend: '',
    },
  };

  updateTop() {
    const topValues = loadTop();
    this.setState({top: topValues})
  }

  componentDidMount() {
    this.updateTop();
  }

  render() {
    return <View style={styles.top}>
      <Image source={Logo} style={styles.img} />
      <Text style={styles.welcome}>{this.state.top.welcome}</Text>
      <Text style={styles.legend}>{this.state.top.legend}</Text>
    </View >;
  }
}

const styles = StyleSheet.create({
  top: {
    backgroundColor: '#f6f6f6',
    padding: 16
  },
  img: {
    width: 70,
    height: 28,
  },
  welcome: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646',
  },
  legend: {
    fontSize: 16,
    lineHeight: 26,
    color: '#a3a3a3'
  }
});

export default Top;