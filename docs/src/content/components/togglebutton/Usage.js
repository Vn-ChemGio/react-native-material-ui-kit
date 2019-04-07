import React from 'react';
import { ComponentUsage } from '@components';

export const code = `import React, { Component } from 'react';
import { View } from 'react-native';
import { ToggleButton } from 'material-bread';

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <View>
        <ToggleButton icon="alarm" size={32} />
        <ToggleButton icon="face" size={32} color={'purple'} />
        <ToggleButton icon="arrow-back" size={32} color={'orange'} />
      </View>
    );
  }
}`;

const Usage = pageHref => <ComponentUsage pageHref={pageHref} code={code} />;
export default Usage;
