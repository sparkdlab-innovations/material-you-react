'use client';

import {
  NavigationBar,
  NavigationDividerItem,
  NavigationHeaderItem,
  NavigationLinkItem,
} from 'material-you-react';
import React from 'react';

export default function Bar(): React.ReactNode {
  return (
    <NavigationBar>
      <NavigationLinkItem
        index={0}
        routePath="/"
        text="Home"
        badge="3"
        icon="home"
        showInBar
        showInRail
        showInDrawer
        onTap={() => {
          // alert('Home');
        }}
      />
      <NavigationLinkItem
        index={1}
        routePath="/about"
        text="About"
        icon="info"
        showInBar
        showInRail
        showInDrawer
        onTap={() => {
          // alert('About');
        }}
      />
      <NavigationDividerItem />
      <NavigationHeaderItem text="Content" />
      <NavigationLinkItem
        key={'random'}
        index={2}
        routePath="/library"
        text="Content Library"
        icon="subscriptions"
        isDisabled
        showInDrawer
        onTap={() => {
          // alert('Content Library');
        }}
      />
      <NavigationLinkItem
        index={3}
        text="Create Content"
        icon="add_to_queue"
        showInDrawer
        onTap={() => {
          // alert('Content Library');
        }}
      />
    </NavigationBar>
  );
}
