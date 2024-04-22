/**
 * @license
 * Material You React Package
 * Copyright (C) 2024  Rutaj Dash
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, only version 3 of the License.
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 * The contact information of the author and copyright owner of this
 * program can be found at <https://github.com/rutajdash>
 */

import React from 'react';
import styles from './scaffold.module.css';

/**
 * Props for the Scaffold component.
 *
 * @property {React.ReactNode} primaryActionPane - The primary action pane to be displayed.
 * @property {React.ReactNode} secondaryActionPane - The optional secondary action pane to be displayed.
 * @property {React.ReactNode} appBar - The app bar to be displayed.
 * @property {React.ReactNode} contentPane - The main content body.
 */
// TODO: Add replace the React.ReactNode type with a more specific type.
type ScaffoldProps = (
  | {
      /**
       * The primary action pane to be displayed.
       */
      primaryActionPane: React.ReactNode;
      /**
       * The optional secondary action pane to be displayed.
       */
      secondaryActionPane?: React.ReactNode | undefined;
    }
  | {
      /**
       * This prop can be undefined.
       */
      primaryActionPane?: undefined;
      /**
       * This prop should never be used when primaryActionPane is undefined.
       */
      secondaryActionPane?: never;
    }
) & {
  /**
   * The app bar to be displayed.
   */
  appBar?: React.ReactNode | undefined;
  /**
   * The main content body.
   */
  contentPane: React.ReactNode;
};

/**
 * A component that provides a scaffold layout for the application.
 *
 * @component
 * @param {ScaffoldProps} props - The component props.
 * @returns {React.JSX.Element} The rendered scaffold component.
 *
 * @example
 * ```tsx
 * <Scaffold
 *  primaryActionPane={}
 *  appBar={}
 *  contentPane={}
 *  secondaryActionPane={}
 * />
 * ```
 */
function Scaffold({ primaryActionPane, secondaryActionPane, appBar, contentPane }: ScaffoldProps): React.JSX.Element {
  // TODO: option to hide navigation rail in medium layouts when in secondary pane, provided there is a back button in the app bar
  // TODO: option to use a drawer or bottom nav instead of navigation rail in medium layout
  // TODO: for compact layout, option to use a scroll collapsible app bar
  return (
    <div
      id='scaffold-root'
      className={styles.scaffoldComponentRoot}
    >
      {primaryActionPane && (
        <div
          id='scaffold-primary-action-pane'
          className={styles.primaryActionPane}
        >
          {primaryActionPane}
        </div>
      )}

      <div
        id='scaffold-body-section'
        className={styles.scaffoldBodySection}
      >
        {appBar && (
          <div
            id='scaffold-app-bar'
            className={styles.appBar}
          >
            {appBar}
          </div>
        )}

        <div
          id='scaffold-body'
          className={styles.scaffoldBody}
        >
          <div
            id='scaffold-content-area'
            className={styles.contentArea}
          >
            {contentPane}
          </div>

          {secondaryActionPane && (
            <div
              id='scaffold-secondary-action-pane'
              className={styles.secondaryActionPane}
            >
              {secondaryActionPane}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Scaffold;
