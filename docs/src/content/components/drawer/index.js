import React, { Component } from 'react';
import ComponentPageLayout from '../../../components/ComponentPage/ComponentPageLayout';
import MainDemo from './MainDemo';
import Usage from './Usage';
import Props from './Props';

const sections = [{ name: 'Component' }, { name: 'Usage' }, { name: 'Props' }];

export default class DrawerPage extends Component {
  render() {
    return (
      <div>
        <ComponentPageLayout
          componentName={'drawer'}
          title={'Drawer'}
          description={`Navigation drawers provide access to destinations in your app.`}
          importCode={`import { Drawer } from 'material-bread';`}
          docsLink={
            'https://material.io/design/components/navigation-drawer.html'
          }
          sideScrollMenuItems={sections}>
          <MainDemo pageHref={'/components/drawer'} />
          <Usage pageHref={'/components/drawer'} />
          <Props pageHref={'/components/drawer'} />
        </ComponentPageLayout>
      </div>
    );
  }
}
