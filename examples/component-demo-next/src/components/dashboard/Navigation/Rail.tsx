'use client';

import {
  NavigationDividerItem,
  NavigationHeaderItem,
  NavigationLinkItem,
  NavigationRail,
} from 'material-you-react';
import React from 'react';

export default function Rail(): React.ReactNode {
  return (
    <NavigationRail
      isExpandable
      actionButtonIcon="edit"
      actionButtonOnTap={() => {
        // alert('Edit');
      }}
    >
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
        showInBar
        showInDrawer
        onTap={() => {
          // alert('Content Library');
        }}
      />
      <NavigationLinkItem
        index={3}
        text="Create Content"
        icon="add_to_queue"
        showInBar
        showInDrawer
        onTap={() => {
          // alert('Content Library');
        }}
      />
    </NavigationRail>
  );
}
